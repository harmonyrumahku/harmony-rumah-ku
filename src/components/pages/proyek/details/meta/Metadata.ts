import { Metadata } from "next";

import type { ProyekDetails } from "@/types/Proyek";

export async function getProyek(slug: string): Promise<ProyekDetails | null> {
  try {
    if (!process.env.NEXT_PUBLIC_API_PROYEK) {
      console.warn("NEXT_PUBLIC_API_PROYEK not available during build time");
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PROYEK}/${slug}`,
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
    console.error("Error fetching proyek:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const proyekDetails = await getProyek(params.slug);

  if (!proyekDetails) {
    return {
      title: "Proyek Not Found",
      description: "The requested Proyek item could not be found.",
      openGraph: {
        title: "Proyek Not Found",
        description: "The requested Proyek item could not be found.",
        type: "website",
      },
      twitter: {
        card: "summary",
        title: "Proyek Not Found",
        description: "The requested Proyek item could not be found.",
      },
    };
  }

  const description =
    proyekDetails.information[0].intro || `Proyek ${proyekDetails.title}`;

  const imageUrl = proyekDetails.image_urls
    ? Array.isArray(proyekDetails.image_urls)
      ? proyekDetails.image_urls[0]
      : proyekDetails.image_urls
    : undefined;

  return {
    title: `Proyek - ${proyekDetails.title}`,
    description: description,
    openGraph: {
      title: `Proyek - ${proyekDetails.title}`,
      description: description,
      type: "website",
      images: imageUrl ? [{ url: imageUrl }] : [],
      url: `${process.env.NEXT_PUBLIC_API_PROYEK}/${proyekDetails.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Proyek - ${proyekDetails.title}`,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_PROYEK}/${proyekDetails.slug}`,
    },
  };
}
