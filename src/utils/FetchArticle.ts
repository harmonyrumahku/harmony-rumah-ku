import { Article, ArticlesResponse } from "@/types/Article";

export const fetchArticleData = async (): Promise<Article[]> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_ARTICLE as string}`,
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

        const apiResponse: ArticlesResponse = await response.json();
        // Filter hanya artikel dengan status "published"
        return apiResponse.data.filter((article) => article.status === "published");
    } catch (error) {
        console.error("Error fetching Article data:", error);
        return [];
    }
};