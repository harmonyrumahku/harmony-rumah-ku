const BASE_URL = process.env.NEXT_PUBLIC_URL as string;

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: "#f5f5f5",
};

export const metadata = {
    title: "Harmony Rumah KU - Solusi Arsitektur Terdepan",
    description:
        "Harmony Rumah KU adalah platform arsitektur terdepan yang menghadirkan desain rumah modern, konsultasi arsitektur, dan solusi pembangunan berkualitas tinggi untuk mewujudkan rumah impian Anda.",

    authors: [{ name: "Harmony Rumah KU Team" }],

    keywords: [
        "Arsitektur",
        "Desain Rumah",
        "Harmony Rumah KU",
        "Konsultasi Arsitektur",
        "Desain Interior",
        "Pembangunan Rumah",
        "Arsitek Profesional",
        "Solusi Arsitektur",
        "Rumah Modern",
        "Desain Eksterior",
    ],

    icons: {
        icon: [
            {
                url: "/favicon.ico",
                sizes: "64x64 32x32 24x24 16x16",
                type: "image/x-icon",
            },
        ],
        apple: "/favicon.ico",
        shortcut: "/favicon.ico",
        appleTouchIcon: "/favicon.ico",
    },

    tags: [
        {
            name: "Harmony Rumah KU",
            content: "Solusi Arsitektur",
        },
    ],

    manifest: "/manifest.json",

    metadataBase: new URL(BASE_URL),
    canonical: BASE_URL,

    other: {
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "format-detection": "telephone=no",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "msapplication-TileColor": "#f5f5f5",
    },

    openGraph: {
        type: "website",
        title: "Harmony Rumah KU - Solusi Arsitektur Terdepan",
        description:
            "Harmony Rumah KU adalah platform arsitektur terdepan yang menghadirkan desain rumah modern, konsultasi arsitektur, dan solusi pembangunan berkualitas tinggi untuk mewujudkan rumah impian Anda.",
        url: BASE_URL,
        siteName: "Harmony Rumah KU",
        locale: "id_ID",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Harmony Rumah KU - Solusi Arsitektur Terdepan",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Harmony Rumah KU - Solusi Arsitektur Terdepan",
        description:
            "Harmony Rumah KU adalah platform arsitektur terdepan yang menghadirkan desain rumah modern, konsultasi arsitektur, dan solusi pembangunan berkualitas tinggi untuk mewujudkan rumah impian Anda.",
        creator: "@harmonyrumahku",
        site: "@harmonyrumahku",
        images: ["/og-image.jpg"],
    },

    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_ID,
        googleTagManager: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    },

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: BASE_URL,
        languages: {
            "id-ID": BASE_URL,
        },
    },
};

export default metadata;