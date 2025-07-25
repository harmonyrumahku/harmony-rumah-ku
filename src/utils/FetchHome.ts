import { HomeResponse } from "@/types/Home";

export const fetchHomeData = async (): Promise<HomeResponse> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_HOME) {
      console.warn("home not available during build time");
      return {
        statusCode: 0,
        statusMessage: "",
        message: "",
        ok: false,
        data: [],
      };
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOME as string}`,
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

    const apiResponse: HomeResponse = await response.json();
    return apiResponse;
  } catch (error) {
    console.error("Error fetching Home data:", error);
    return {
      statusCode: 0,
      statusMessage: "",
      message: "",
      ok: false,
      data: [],
    };
  }
};
