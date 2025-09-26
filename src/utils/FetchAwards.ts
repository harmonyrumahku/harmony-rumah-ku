export const fetchAwardsData = async (): Promise<Award[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_AWARDS) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_AWARDS as string}`,
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

    const apiResponse: AwardsResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};

export const fetchAwardsBySlug = async (
  slug: string
): Promise<AwardDetails | null> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_AWARDS) {
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_AWARDS}/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse: AwardDetailsResponse = await response.json();
    return apiResponse.data || null;
  } catch {
    return null;
  }
};

export const fetchSliceAwardsData = async (): Promise<Award[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_AWARDS) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_AWARDS as string}`,
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

    const apiResponse: AwardsResponse = await response.json();
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