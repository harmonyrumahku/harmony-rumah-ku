import { Metadata } from "next";

import type { AwardDetails } from "@/types/Awards";

export async function getAwards(slug: string): Promise<AwardDetails | null> {
  try {
    if (!process.env.NEXT_PUBLIC_API_AWARDS) {
      console.warn("NEXT_PUBLIC_API_AWARDS not available during build time");
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_AWARDS as string}/${slug}`,
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
    console.error("Error fetching awards:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const awards = await getAwards(params.slug);

  if (!awards) {
    return {
      title: "Awards Tidak Ditemukan | HarmonyrumahKU",
      description: "Awards yang Anda cari tidak dapat ditemukan.",
      openGraph: {
        title: "Awards Tidak Ditemukan | HarmonyrumahKU",
        description: "Awards yang Anda cari tidak dapat ditemukan.",
        type: "website",
        siteName: "HarmonyrumahKU",
        locale: "id_ID",
      },
      twitter: {
        card: "summary",
        title: "Awards Tidak Ditemukan | HarmonyrumahKU",
        description: "Awards yang Anda cari tidak dapat ditemukan.",
        creator: "@harmonyrumahku",
        site: "@harmonyrumahku",
      },
    };
  }

  const description = awards.description || `Awards ${awards.title}`;

  const imageUrl = awards.after[0]
    ? Array.isArray(awards.after)
      ? awards.after[0]
      : awards.after
    : undefined;

  const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

  return {
    title: `Awards - ${awards.title} | HarmonyrumahKU`,
    description: description,
    keywords: [
      "Awards Arsitektur",
      awards.title,
      "HarmonyrumahKU",
      "Desain Rumah",
      "Arsitektur",
      awards.name,
    ].filter(Boolean),
    authors: [{ name: "HarmonyrumahKU Team" }],
    openGraph: {
      title: `Awards - ${awards.title} | HarmonyrumahKU`,
      description: description,
      type: "article",
      url: `${BASE_URL}/awards/${awards.slug}`,
      siteName: "HarmonyrumahKU",
      locale: "id_ID",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: awards.title,
            },
          ]
        : [],
      publishedTime: awards.created_at,
      modifiedTime: awards.updated_at,
    },
    twitter: {
      card: "summary_large_image",
      title: `Awards - ${awards.title} | HarmonyrumahKU`,
      description: description,
      creator: "@harmonyrumahku",
      site: "@harmonyrumahku",
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${BASE_URL}/awards/${awards.slug}`,
      languages: {
        "id-ID": `${BASE_URL}/awards/${awards.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
