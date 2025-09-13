"use client";

import { useEffect, useState, useRef } from "react";

export function useStateAward() {
  const [isInSection, setIsInSection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Memuat halaman proyek..."
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleLinkClick = (projectTitle?: string) => {
    if (projectTitle) {
      setLoadingMessage(`Memuat detail untuk "${projectTitle}"`);
    } else {
      setLoadingMessage("Memuat halaman proyek...");
    }
    setIsLoading(true);
  };

  // Deteksi mobile device
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      setIsInSection(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isMobile) return; // Nonaktifkan scroll ref pada mobile

    // Pastikan tidak ada event listener yang aktif di mobile
    if (isMobile) {
      return;
    }

    const onWheel = (e: WheelEvent) => {
      // Deteksi scroll dari touchpad (biasanya deltaY lebih kecil dan lebih halus)
      const isTouchpadScroll = Math.abs(e.deltaY) < 100;

      if (e.deltaY !== 0) {
        if (!isInSection) {
          return;
        }

        // Cek apakah sudah mencapai ujung kanan atau kiri
        const isAtRightEnd =
          el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        const isAtLeftEnd = el.scrollLeft <= 1;

        // Jika scroll ke kanan dan sudah di ujung kanan, biarkan scroll vertikal normal
        if (e.deltaY > 0 && isAtRightEnd) {
          return;
        }

        // Jika scroll ke kiri dan sudah di ujung kiri, biarkan scroll vertikal normal
        if (e.deltaY < 0 && isAtLeftEnd) {
          return;
        }

        // Jika belum di ujung, lakukan scroll horizontal
        e.preventDefault();
        e.stopPropagation();

        // Kurangi kecepatan scroll sedikit lagi untuk kontrol yang lebih halus
        const scrollSpeed = isTouchpadScroll ? 0.4 : 0.7;
        el.scrollLeft += e.deltaY * scrollSpeed;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [isInSection, isMobile]);

  return {
    isInSection,
    isMobile,
    isLoading,
    loadingMessage,
    scrollRef,
    sectionRef,
    handleLinkClick,
  };
}
