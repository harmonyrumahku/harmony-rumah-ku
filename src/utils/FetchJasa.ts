export const fetchJasaData = async (): Promise<Jasa[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_JASA) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_JASA as string}`,
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

    const apiResponse: JasaResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};
