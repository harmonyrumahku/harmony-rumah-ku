import {
  Award,
  AwardsResponse,
  AwardDetails,
  AwardDetailsResponse,
} from "@/types/Awards";

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
