import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

export const jasaMetadata: Metadata = {
  title: "Jasa - HarmonyrumahKU",
  description:
    "Temukan layanan arsitektur profesional dari HarmonyrumahKU. Kami menyediakan jasa desain rumah, konsultasi arsitektur, renovasi, dan pembangunan berkualitas tinggi untuk mewujudkan rumah impian Anda.",

  keywords: [
    "Jasa Arsitektur",
    "Desain Rumah",
    "Konsultasi Arsitektur",
    "HarmonyrumahKU Jasa",
    "Layanan Arsitektur",
    "Desain Interior",
    "Pembangunan Rumah",
    "Renovasi Rumah",
    "Jasa Desain",
    "Arsitek Profesional",
    "Konsultasi Desain",
    "Jasa Pembangunan",
  ],

  authors: [{ name: "HarmonyrumahKU Team" }],

  openGraph: {
    type: "website",
    title: "Jasa - HarmonyrumahKU",
    description:
      "Temukan layanan arsitektur profesional dari HarmonyrumahKU. Kami menyediakan jasa desain rumah, konsultasi arsitektur, renovasi, dan pembangunan berkualitas tinggi untuk mewujudkan rumah impian Anda.",
    url: `${BASE_URL}/jasa`,
    siteName: "HarmonyrumahKU",
    locale: "id_ID",
    images: [
      {
        url: "/og-jasa.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Arsitektur HarmonyrumahKU - Layanan Desain dan Pembangunan Profesional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa - HarmonyrumahKU",
    description:
      "Temukan layanan arsitektur profesional dari HarmonyrumahKU. Kami menyediakan jasa desain rumah, konsultasi arsitektur, renovasi, dan pembangunan berkualitas tinggi.",
    creator: "@harmonyrumahku",
    site: "@harmonyrumahku",
    images: ["/og-jasa.jpg"],
  },

  alternates: {
    canonical: `${BASE_URL}/jasa`,
    languages: {
      "id-ID": `${BASE_URL}/jasa`,
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default jasaMetadata;
