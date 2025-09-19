import { createClient } from "@/lib/supabase";

export async function submitContactForm(data: ContactFormData) {
  try {
    const supabase = createClient();

    const { data: result, error } = await supabase
      .from(process.env.NEXT_PUBLIC_MESSAGES!)
      .insert([
        {
          nama_lengkap: data.nama_lengkap,
          email: data.email,
          kebutuhan: data.kebutuhan,
          status: "unread",
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
