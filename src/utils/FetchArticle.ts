import {
  Article,
  ArticlesResponse,
  ArticleDetails,
  ArticleDetailsResponse,
} from "@/types/Article";

export const fetchArticleData = async (): Promise<Article[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_ARTICLE) {
      return [];
    }

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
    return apiResponse.data;
  } catch {
    return [];
  }
};

export const fetchArticleBySlug = async (
  slug: string
): Promise<ArticleDetails | null> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_ARTICLE) {
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ARTICLE}/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse: ArticleDetailsResponse = await response.json();
    return apiResponse.data || null;
  } catch {
    return null;
  }
};
