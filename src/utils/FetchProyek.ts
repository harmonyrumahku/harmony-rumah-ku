import { Proyek, ProyekResponse } from "@/types/Proyek";

export const fetchProyekData = async (): Promise<Proyek[]> => {
    try {
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

        const apiResponse: ProyekResponse = await response.json();
        // Filter hanya artikel dengan status "published"
        return apiResponse.data.filter((proyek) => proyek.status === "published");
    } catch (error) {
        console.error("Error fetching Proyek data:", error);
        return [];
    }
};