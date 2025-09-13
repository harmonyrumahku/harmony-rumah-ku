const BASE_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export async function GET() {
  const manifest = {
    name: "HarmonyrumahKU - Solusi Arsitektur Terdepan",
    short_name: "HarmonyrumahKU",
    description:
      "HarmonyrumahKU adalah platform arsitektur terdepan yang menghadirkan desain rumah modern, konsultasi arsitektur, dan solusi pembangunan berkualitas tinggi untuk mewujudkan rumah impian Anda.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f5",
    theme_color: "#f5f5f5",
    orientation: "portrait-primary",
    scope: "/",
    lang: "id",
    dir: "ltr",
    categories: ["architecture", "design", "construction", "consultation"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/og-image.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide",
        label: "HarmonyrumahKU Desktop App",
      },
      {
        src: "/og-image.jpg",
        sizes: "390x844",
        type: "image/jpeg",
        form_factor: "narrow",
        label: "HarmonyrumahKU Mobile App",
      },
    ],
    shortcuts: [
      {
        name: "Konsultasi",
        short_name: "Konsultasi",
        description: "Konsultasi arsitektur dengan tim profesional",
        url: "/konsultasi",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "96x96",
          },
        ],
      },
      {
        name: "Proyek",
        short_name: "Proyek",
        description: "Lihat portfolio proyek arsitektur kami",
        url: "/proyek",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "96x96",
          },
        ],
      },
      {
        name: "Jasa",
        short_name: "Jasa",
        description: "Jasa arsitektur dan desain rumah",
        url: "/jasa",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "96x96",
          },
        ],
      },
    ],
    related_applications: [
      {
        platform: "web",
        url: BASE_URL,
      },
    ],
    prefer_related_applications: false,
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
