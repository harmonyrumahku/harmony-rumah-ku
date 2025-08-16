import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

export const proyekMetadata: Metadata = {
    title: "Proyek - HarmonyrumahKU",
    description: "Jelajahi portofolio proyek arsitektur terbaik dari HarmonyrumahKU. Temukan desain rumah modern, renovasi, dan pembangunan berkualitas tinggi yang telah kami selesaikan untuk klien kami.",

    keywords: [
        "Portofolio Proyek",
        "Desain Rumah",
        "Arsitektur",
        "HarmonyrumahKU",
        "Proyek Arsitektur",
        "Desain Interior",
        "Pembangunan Rumah",
        "Renovasi Rumah",
        "Konsultasi Arsitektur",
        "Rumah Modern",
        "Desain Eksterior",
    ],

    authors: [{ name: "HarmonyrumahKU Team" }],

    openGraph: {
        type: "website",
        title: "Proyek - HarmonyrumahKU",
        description: "Jelajahi portofolio proyek arsitektur terbaik dari HarmonyrumahKU. Temukan desain rumah modern, renovasi, dan pembangunan berkualitas tinggi yang telah kami selesaikan untuk klien kami.",
        url: `${BASE_URL}/proyek`,
        siteName: "HarmonyrumahKU",
        locale: "id_ID",
        images: [
            {
                url: "/og-proyek.jpg",
                width: 1200,
                height: 630,
                alt: "Portofolio Proyek HarmonyrumahKU - Desain Arsitektur Terbaik",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Proyek - HarmonyrumahKU",
        description: "Jelajahi portofolio proyek arsitektur terbaik dari HarmonyrumahKU. Temukan desain rumah modern, renovasi, dan pembangunan berkualitas tinggi.",
        creator: "@harmonyrumahku",
        site: "@harmonyrumahku",
        images: ["/og-proyek.jpg"],
    },

    alternates: {
        canonical: `${BASE_URL}/proyek`,
        languages: {
            "id-ID": `${BASE_URL}/proyek`,
        },
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default proyekMetadata;
