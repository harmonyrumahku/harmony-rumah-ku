import {
  ProyekDetails,
  ProyekHome,
  ProyekHomeResponse,
  ProyekDetailResponse,
} from "@/types/Proyek";

export const fetchProyekData = async (): Promise<ProyekHome[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_PROYEK) {
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

    const apiResponse: ProyekHomeResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};

export const fetchProyekBySlug = async (
  slug: string
): Promise<ProyekDetails | null> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_PROYEK) {
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

    const apiResponse: ProyekDetailResponse = await response.json();
    return apiResponse.data || null;
  } catch {
    return null;
  }
};
