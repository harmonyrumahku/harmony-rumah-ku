import { Metadata } from "next";

import { Proyek } from "@/types/Proyek";

export async function getProyek(slug: string): Promise<Proyek | null> {
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
  const proyek = await getProyek(params.slug);

  if (!proyek) {
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

  const description = proyek.information[0].intro || `Proyek ${proyek.title}`;

  const imageUrl = proyek.image_urls
    ? Array.isArray(proyek.image_urls)
      ? proyek.image_urls[0]
      : proyek.image_urls
    : undefined;

  return {
    title: `Proyek - ${proyek.title}`,
    description: description,
    openGraph: {
      title: `Proyek - ${proyek.title}`,
      description: description,
      type: "website",
      images: imageUrl ? [{ url: imageUrl }] : [],
      url: `${process.env.NEXT_PUBLIC_API_PROYEK}/${proyek.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Proyek - ${proyek.title}`,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_API_PROYEK}/${proyek.slug}`,
    },
  };
}
