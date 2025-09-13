import { useState, useEffect } from "react";

import { submitContactForm, ContactFormData } from "./SubmitContact";

import { toast } from "sonner";

const checkDailySubmissionLimit = (): {
  canSubmit: boolean;
  remainingTime?: string;
} => {
  if (typeof window === "undefined") return { canSubmit: true };

  const today = new Date().toDateString();
  const lastSubmission = localStorage.getItem("lastSubmissionDate");
  const submissionCount = localStorage.getItem("submissionCount");

  // If it's a new day, reset the counter
  if (lastSubmission !== today) {
    localStorage.setItem("lastSubmissionDate", today);
    localStorage.setItem("submissionCount", "0");
    return { canSubmit: true };
  }

  // Check if user has already submitted today
  const count = parseInt(submissionCount || "0");
  if (count >= 1) {
    // Calculate time until next day
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeRemaining = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );

    return {
      canSubmit: false,
      remainingTime: `${hours} jam ${minutes} menit`,
    };
  }

  return { canSubmit: true };
};

// Utility function to record submission
const recordSubmission = () => {
  if (typeof window === "undefined") return;

  const today = new Date().toDateString();
  const currentCount = parseInt(localStorage.getItem("submissionCount") || "0");

  localStorage.setItem("lastSubmissionDate", today);
  localStorage.setItem("submissionCount", (currentCount + 1).toString());
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nama_lengkap: "",
    email: "",
    kebutuhan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);
  const [remainingTime, setRemainingTime] = useState<string>("");
  const [showLimitNotice, setShowLimitNotice] = useState(false);

  // Check submission limit on component mount and every minute
  useEffect(() => {
    const checkLimit = () => {
      const { canSubmit: limitCheck, remainingTime: timeLeft } =
        checkDailySubmissionLimit();
      setCanSubmit(limitCheck);
      setRemainingTime(timeLeft || "");

      // Show notice only when limit is first reached
      if (!limitCheck && canSubmit) {
        setShowLimitNotice(true);
        // Hide notice after 5 seconds
        setTimeout(() => {
          setShowLimitNotice(false);
        }, 5000);
      }
    };

    // Check immediately
    checkLimit();

    // Check every minute to update remaining time
    const interval = setInterval(checkLimit, 60000);

    return () => clearInterval(interval);
  }, [canSubmit]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldName = id.replace(/^(footer-|modal-)/, "");

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check limit before submitting
    const { canSubmit: limitCheck, remainingTime: timeLeft } =
      checkDailySubmissionLimit();
    if (!limitCheck) {
      toast.error(
        `Anda sudah mengirim pesan hari ini. Silakan coba lagi dalam ${timeLeft}`
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      recordSubmission(); // Record the successful submission
      toast.success(
        "Pesan berhasil dikirim! Kami akan segera menghubungi Anda."
      );
      setFormData({
        nama_lengkap: "",
        email: "",
        kebutuhan: "",
      });

      // Update the limit check after successful submission
      setCanSubmit(false);
      setRemainingTime("24 jam 0 menit");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat mengirim pesan";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    canSubmit,
    remainingTime,
    showLimitNotice,
    handleInputChange,
    handleSubmit,
  };
};
