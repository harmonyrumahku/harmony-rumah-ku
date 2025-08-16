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
      title: "Proyek Tidak Ditemukan | HarmonyrumahKU",
      description: "Proyek yang Anda cari tidak dapat ditemukan.",
      openGraph: {
        title: "Proyek Tidak Ditemukan | HarmonyrumahKU",
        description: "Proyek yang Anda cari tidak dapat ditemukan.",
        type: "website",
        siteName: "HarmonyrumahKU",
        locale: "id_ID",
      },
      twitter: {
        card: "summary",
        title: "Proyek Tidak Ditemukan | HarmonyrumahKU",
        description: "Proyek yang Anda cari tidak dapat ditemukan.",
        creator: "@harmonyrumahku",
        site: "@harmonyrumahku",
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

  const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

  return {
    title: `Proyek - ${proyekDetails.title} | HarmonyrumahKU`,
    description: description,
    keywords: [
      "Portofolio Proyek",
      proyekDetails.title,
      "HarmonyrumahKU",
      "Desain Rumah",
      "Arsitektur",
      proyekDetails.proyek_type_name,
      proyekDetails.proyek_city_name,
      proyekDetails.layanan,
    ].filter(Boolean),
    authors: [{ name: "HarmonyrumahKU Team" }],
    openGraph: {
      title: `Proyek - ${proyekDetails.title} | HarmonyrumahKU`,
      description: description,
      type: "website",
      url: `${BASE_URL}/proyek/${proyekDetails.slug}`,
      siteName: "HarmonyrumahKU",
      locale: "id_ID",
      images: imageUrl ? [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: proyekDetails.title,
      }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `Proyek - ${proyekDetails.title} | HarmonyrumahKU`,
      description: description,
      creator: "@harmonyrumahku",
      site: "@harmonyrumahku",
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${BASE_URL}/proyek/${proyekDetails.slug}`,
      languages: {
        "id-ID": `${BASE_URL}/proyek/${proyekDetails.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
