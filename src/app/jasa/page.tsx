import React from 'react'

import { Metadata } from 'next'

import JasaLayout from '@/components/pages/jasa/JasaLayout'

import { fetchJasaData } from '@/utils/FetchJasa'

import JasaSkelaton from '@/components/pages/jasa/JasaSkelaton'

import { jasaMetadata } from '@/components/pages/jasa/meta/Metadata'

export const metadata: Metadata = jasaMetadata

import Script from 'next/script'

export default async function Page() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "http://localhost:3000" },
            { "@type": "ListItem", "position": 2, "name": "Jasa", "item": "http://localhost:3000/jasa" }
        ]
    }
    try {
        const jasaData = await fetchJasaData();
        return (
            <>
                <Script type="application/ld+json" id="breadcrumbJsonLd" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
                <JasaLayout jasaData={jasaData} />
            </>
        );
    } catch {
        return (
            <JasaSkelaton />
        );
    }
}