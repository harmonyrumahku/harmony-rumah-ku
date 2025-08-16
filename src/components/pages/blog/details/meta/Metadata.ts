import { Metadata } from "next";

import type { Article } from "@/types/Article";

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    if (!process.env.NEXT_PUBLIC_API_ARTICLE) {
      console.warn("NEXT_PUBLIC_API_ARTICLE not available during build time");
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ARTICLE as string}/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse = await response.json();
    return apiResponse.data || null;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticle(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested Article item could not be found.",
      openGraph: {
        title: "Article Not Found",
        description: "The requested Article item could not be found.",
        type: "website",
      },
      twitter: {
        card: "summary",
        title: "Article Not Found",
        description: "The requested Article item could not be found.",
      },
    };
  }

  const description =
    article.description || `Article ${article.title}`;

  const imageUrl = article.thumbnail
    ? Array.isArray(article.thumbnail)
      ? article.thumbnail[0]
      : article.thumbnail
    : undefined;

  return {
    title: `Article - ${article.title}`,
    description: description,
    openGraph: {
      title: `Article - ${article.title}`,
      description: description,
      type: "website",
      images: imageUrl ? [{ url: imageUrl }] : [],
      url: `${process.env.NEXT_PUBLIC_API_ARTICLE}/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Article - ${article.title}`,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_ARTICLE}/${article.slug}`,
    },
  };
}
