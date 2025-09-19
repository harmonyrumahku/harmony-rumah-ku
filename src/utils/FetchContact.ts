export const fetchContactData = async (): Promise<Contact[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_CONTACT) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_CONTACT as string}`,
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

    const apiResponse: ContactResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};
