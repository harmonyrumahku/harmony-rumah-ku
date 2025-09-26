import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

export const aboutMetadata: Metadata = {
    title: "Tentang Kami - HarmonyrumahKU",
    description: "Kenali HarmonyrumahKU: visi, misi, filosofi, budaya kerja, dan komitmen kami dalam mewujudkan hunian fungsional, estetik, dan berkelanjutan.",

    keywords: [
        "Tentang HarmonyrumahKU",
        "Profil Perusahaan Arsitektur",
        "Visi Misi HarmonyrumahKU",
        "Filosofi Desain",
        "Budaya Kerja",
        "Layanan Arsitek",
        "Jasa Desain Rumah",
        "Arsitektur Berkelanjutan",
        "Tim HarmonyrumahKU",
    ],

    authors: [{ name: "HarmonyrumahKU Team" }],

    openGraph: {
        type: "website",
        title: "Tentang Kami - HarmonyrumahKU",
        description: "Kenali HarmonyrumahKU: visi, misi, filosofi, budaya kerja, dan komitmen kami.",
        url: `${BASE_URL}/tentang-kami`,
        siteName: "HarmonyrumahKU",
        locale: "id_ID",
        images: [
            {
                url: "/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "Tentang HarmonyrumahKU - Visi, Misi, dan Filosofi",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Tentang Kami - HarmonyrumahKU",
        description: "Kenali visi, misi, filosofi, dan budaya kerja HarmonyrumahKU.",
        creator: "@harmonyrumahku",
        site: "@harmonyrumahku",
        images: ["/og-about.jpg"],
    },

    alternates: {
        canonical: `${BASE_URL}/tentang-kami`,
        languages: {
            "id-ID": `${BASE_URL}/tentang-kami`,
        },
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default aboutMetadata;
