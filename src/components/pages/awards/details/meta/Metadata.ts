import { Metadata } from "next";

import type { ArticleDetails } from "@/types/Article";

export async function getArticle(slug: string): Promise<ArticleDetails | null> {
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
      title: "Blog Tidak Ditemukan | HarmonyrumahKU",
      description: "Blog yang Anda cari tidak dapat ditemukan.",
      openGraph: {
        title: "Blog Tidak Ditemukan | HarmonyrumahKU",
        description: "Blog yang Anda cari tidak dapat ditemukan.",
        type: "website",
        siteName: "HarmonyrumahKU",
        locale: "id_ID",
      },
      twitter: {
        card: "summary",
        title: "Blog Tidak Ditemukan | HarmonyrumahKU",
        description: "Blog yang Anda cari tidak dapat ditemukan.",
        creator: "@harmonyrumahku",
        site: "@harmonyrumahku",
      },
    };
  }

  const description =
    article.description || `Blog ${article.title}`;

  const imageUrl = article.thumbnail
    ? Array.isArray(article.thumbnail)
      ? article.thumbnail[0]
      : article.thumbnail
    : undefined;

  const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

  return {
    title: `Blog - ${article.title} | HarmonyrumahKU`,
    description: description,
    keywords: [
      "Blog Arsitektur",
      article.title,
      "HarmonyrumahKU",
      "Desain Rumah",
      "Arsitektur",
      article.article_categories,
      article.article_sub_categories,
    ].filter(Boolean),
    authors: [{ name: "HarmonyrumahKU Team" }],
    openGraph: {
      title: `Blog - ${article.title} | HarmonyrumahKU`,
      description: description,
      type: "article",
      url: `${BASE_URL}/blog/${article.slug}`,
      siteName: "HarmonyrumahKU",
      locale: "id_ID",
      images: imageUrl ? [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: article.title,
      }] : [],
      publishedTime: article.created_at,
      modifiedTime: article.updated_at,
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog - ${article.title} | HarmonyrumahKU`,
      description: description,
      creator: "@harmonyrumahku",
      site: "@harmonyrumahku",
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${article.slug}`,
      languages: {
        "id-ID": `${BASE_URL}/blog/${article.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
