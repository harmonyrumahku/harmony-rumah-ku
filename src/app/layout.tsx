import { lato, playfair } from "@/base/fonts/Fonts";

import { metadata } from "@/base/meta/Metadata";

import "@/base/style/globals.css";

export { metadata };

metadata.manifest = "/manifest.json";

import Header from "@/components/layout/Header/Header";

import Footer from "@/components/layout/Footer/Footer";

import LenisProvider from '@/base/helper/SmoothScroll'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${playfair.variable} antialiased`}
      >
        <main className="overflow-hidden">
          <LenisProvider>
            <Header />
            {children}
            <Footer />
          </LenisProvider>
        </main>
      </body>
    </html>
  );
}
