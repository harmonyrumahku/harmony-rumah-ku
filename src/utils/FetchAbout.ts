import { About, AboutResponse } from "@/types/About";

export const fetchAboutData = async (): Promise<About[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_ABOUT) {
      console.warn("NEXT_PUBLIC_API_ABOUT not available during build time");
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ABOUT as string}`,
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

    const apiResponse: AboutResponse = await response.json();
    return apiResponse.data;
  } catch (error) {
    console.error("Error fetching About data:", error);
    return [];
  }
};
