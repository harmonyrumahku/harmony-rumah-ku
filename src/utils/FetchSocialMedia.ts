import { SocialMedia, SocialMediaResponse } from "@/types/SocialMedia";

export const fetchSocialMediaData = async (): Promise<SocialMedia[]> => {
    try {
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
    } catch (error) {
        console.error("Error fetching Social Media data:", error);
        return [];
    }
};