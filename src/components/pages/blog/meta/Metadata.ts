import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

export const blogMetadata: Metadata = {
    title: "Blog - HarmonyrumahKU",
    description: "Temukan inspirasi dan tips terbaru seputar arsitektur, desain rumah, dan pembangunan dari tim ahli HarmonyrumahKU. Blog informatif untuk mewujudkan rumah impian Anda.",

    keywords: [
        "Blog Arsitektur",
        "Tips Desain Rumah",
        "Inspirasi Arsitektur",
        "HarmonyrumahKU Blog",
        "Desain Interior",
        "Pembangunan Rumah",
        "Konsultasi Arsitektur",
        "Rumah Modern",
        "Desain Eksterior",
    ],

    authors: [{ name: "HarmonyrumahKU Team" }],

    openGraph: {
        type: "website",
        title: "Blog - HarmonyrumahKU",
        description: "Temukan inspirasi dan tips terbaru seputar arsitektur, desain rumah, dan pembangunan dari tim ahli HarmonyrumahKU. Blog informatif untuk mewujudkan rumah impian Anda.",
        url: `${BASE_URL}/blog`,
        siteName: "HarmonyrumahKU",
        locale: "id_ID",
        images: [
            {
                url: "/og-blog.jpg",
                width: 1200,
                height: 630,
                alt: "Blog HarmonyrumahKU - Inspirasi Arsitektur dan Desain Rumah",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Blog - HarmonyrumahKU",
        description: "Temukan inspirasi dan tips terbaru seputar arsitektur, desain rumah, dan pembangunan dari tim ahli HarmonyrumahKU.",
        creator: "@harmonyrumahku",
        site: "@harmonyrumahku",
        images: ["/og-blog.jpg"],
    },

    alternates: {
        canonical: `${BASE_URL}/blog`,
        languages: {
            "id-ID": `${BASE_URL}/blog`,
        },
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default blogMetadata;
