import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

export const konsultasiMetadata: Metadata = {
  title: "Konsultasi - HarmonyrumahKU",
  description:
    "Dapatkan konsultasi arsitektur profesional dari HarmonyrumahKU. Konsultasi gratis untuk desain rumah, renovasi, dan pembangunan. Tim arsitek berpengalaman siap membantu mewujudkan rumah impian Anda dengan solusi terbaik.",

  keywords: [
    "Konsultasi Arsitektur",
    "Konsultasi Desain Rumah",
    "Konsultasi Renovasi",
    "HarmonyrumahKU Konsultasi",
    "Konsultasi Gratis",
    "Arsitek Konsultan",
    "Konsultasi Pembangunan",
    "Konsultasi Interior",
    "Konsultasi Desain",
    "Arsitek Profesional",
    "Konsultasi Rumah",
    "Jasa Konsultasi Arsitektur",
  ],

  authors: [{ name: "HarmonyrumahKU Team" }],

  openGraph: {
    type: "website",
    title: "Konsultasi Arsitektur - HarmonyrumahKU",
    description:
      "Dapatkan konsultasi arsitektur profesional dari HarmonyrumahKU. Konsultasi gratis untuk desain rumah, renovasi, dan pembangunan. Tim arsitek berpengalaman siap membantu mewujudkan rumah impian Anda dengan solusi terbaik.",
    url: `${BASE_URL}/konsultasi`,
    siteName: "HarmonyrumahKU",
    locale: "id_ID",
    images: [
      {
        url: "/og-konsultasi.jpg",
        width: 1200,
        height: 630,
        alt: "Konsultasi Arsitektur HarmonyrumahKU - Konsultasi Gratis dengan Arsitek Profesional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Konsultasi Arsitektur - HarmonyrumahKU",
    description:
      "Dapatkan konsultasi arsitektur profesional dari HarmonyrumahKU. Konsultasi gratis untuk desain rumah, renovasi, dan pembangunan dengan tim arsitek berpengalaman.",
    creator: "@harmonyrumahku",
    site: "@harmonyrumahku",
    images: ["/og-konsultasi.jpg"],
  },

  alternates: {
    canonical: `${BASE_URL}/konsultasi`,
    languages: {
      "id-ID": `${BASE_URL}/konsultasi`,
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default konsultasiMetadata;
