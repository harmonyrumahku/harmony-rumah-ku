import { SocialMedia, SocialMediaResponse } from "@/types/SocialMedia";

export const fetchSocialMediaData = async (): Promise<SocialMedia[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_SOCIAL_MEDIA) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SOCIAL_MEDIA as string}`,
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

    const apiResponse: SocialMediaResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};
