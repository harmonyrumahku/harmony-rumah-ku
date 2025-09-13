import { lato, playfair } from "@/base/fonts/Fonts";

import { metadata } from "@/base/meta/Metadata";

import "@/base/style/globals.css";

export { metadata };

metadata.manifest = "/manifest.json";

import LenisProvider from '@/base/helper/SmoothScroll'

import Pathname from "@/base/routing/Pathname";

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
            <Pathname>
              {children}
            </Pathname>
          </LenisProvider>
        </main>
      </body>
    </html>
  );
}
