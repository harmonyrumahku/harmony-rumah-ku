import React from 'react'

import { Metadata } from 'next'

import KonsultasiLayout from '@/components/pages/konsultasi/KonsultasiLayout'

import { konsultasiMetadata } from '@/components/pages/konsultasi/meta/Metadata'

import Script from 'next/script'

export const metadata: Metadata = konsultasiMetadata

export default function page() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "http://localhost:3000" },
            { "@type": "ListItem", "position": 2, "name": "Konsultasi", "item": "http://localhost:3000/konsultasi" }
        ]
    }
    return (
        <>
            <Script type="application/ld+json" id="breadcrumbJsonLd" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <KonsultasiLayout />
        </>
    )
}
