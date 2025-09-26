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

export const fetchSliceProyekData = async (): Promise<ProyekHome[]> => {
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
    const sortedLatestFive = (apiResponse.data || [])
      .sort((a, b) => {
        const aTime = a.created_at ? new Date(a.created_at).getTime() : 0;
        const bTime = b.created_at ? new Date(b.created_at).getTime() : 0;
        return bTime - aTime;
      })
      .slice(0, 60);
    return sortedLatestFive;
  } catch {
    return [];
  }
};