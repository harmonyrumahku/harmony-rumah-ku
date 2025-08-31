import { createClient } from "@/lib/supabase";

export interface ContactFormData {
  nama_lengkap: string;
  email: string;
  kebutuhan: string;
}

export interface ContactRecord {
  id: string;
  nama_lengkap: string;
  email: string;
  kebutuhan: string;
  status: "read" | "unread";
  created_at: string;
  updated_at: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const supabase = createClient();

    const { data: result, error } = await supabase
      .from(process.env.NEXT_PUBLIC_CONTACT!)
      .insert([
        {
          nama_lengkap: data.nama_lengkap,
          email: data.email,
          kebutuhan: data.kebutuhan,
          status: "unread", // Default status for new submissions
        },
      ])
      .select();

    if (error) {
      console.error("Error submitting contact form:", error);
      throw new Error(error.message);
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    throw error;
  }
}
