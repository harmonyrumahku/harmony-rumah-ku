import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

export const awardsMetadata: Metadata = {
  title: "Awards & Testimonials - HarmonyrumahKU",
  description:
    "Lihat penghargaan dan testimoni dari klien kami yang telah mempercayai HarmonyrumahKU untuk mewujudkan rumah impian mereka. Bukti nyata kualitas dan kepuasan pelanggan.",

  keywords: [
    "Awards HarmonyrumahKU",
    "Testimoni Klien",
    "Penghargaan Arsitektur",
    "HarmonyrumahKU Awards",
    "Kepuasan Pelanggan",
    "Portfolio Proyek",
    "Testimonial Rumah",
    "Penghargaan Desain",
    "Klien Puas",
  ],

  authors: [{ name: "HarmonyrumahKU Team" }],

  openGraph: {
    type: "website",
    title: "Awards & Testimonials - HarmonyrumahKU",
    description:
      "Lihat penghargaan dan testimoni dari klien kami yang telah mempercayai HarmonyrumahKU untuk mewujudkan rumah impian mereka. Bukti nyata kualitas dan kepuasan pelanggan.",
    url: `${BASE_URL}/awards`,
    siteName: "HarmonyrumahKU",
    locale: "id_ID",
    images: [
      {
        url: "/og-awards.jpg",
        width: 1200,
        height: 630,
        alt: "Awards & Testimonials HarmonyrumahKU - Bukti Kualitas dan Kepuasan Pelanggan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Awards & Testimonials - HarmonyrumahKU",
    description:
      "Lihat penghargaan dan testimoni dari klien kami yang telah mempercayai HarmonyrumahKU untuk mewujudkan rumah impian mereka.",
    creator: "@harmonyrumahku",
    site: "@harmonyrumahku",
    images: ["/og-awards.jpg"],
  },

  alternates: {
    canonical: `${BASE_URL}/awards`,
    languages: {
      "id-ID": `${BASE_URL}/awards`,
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default awardsMetadata;
