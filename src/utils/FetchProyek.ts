import { Proyek, ProyekResponse } from "@/types/Proyek";

export const fetchProyekData = async (): Promise<Proyek[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_PROYEK) {
      console.warn("NEXT_PUBLIC_API_PROYEK not available during build time");
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PROYEK as string}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse: ProyekResponse = await response.json();
    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching Proyek data:", error);
    return [];
  }
};

export const fetchProyekBySlug = async (
  slug: string
): Promise<Proyek | null> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_PROYEK) {
      console.warn("NEXT_PUBLIC_API_PROYEK not available during build time");
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PROYEK}/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse = await response.json();
    return apiResponse.data || null;
  } catch (error) {
    console.error("Error fetching proyek by slug:", error);
    return null;
  }
};
