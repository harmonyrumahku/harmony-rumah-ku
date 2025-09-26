import React from 'react'

import { Metadata } from 'next'

import ProyekLayout from '@/components/pages/proyek/proyek/ProyekLayout'

import { fetchProyekData } from '@/utils/FetchProyek'

import ProyekSkelaton from '@/components/pages/proyek/proyek/ProyekSkelaton'

import { proyekMetadata } from '@/components/pages/proyek/proyek/meta/Metadata'

export const metadata: Metadata = proyekMetadata

import Script from 'next/script'

export default async function Page() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "http://localhost:3000" },
            { "@type": "ListItem", "position": 2, "name": "Proyek", "item": "http://localhost:3000/proyek" }
        ]
    }
    try {
        const projectData = await fetchProyekData();
        return (
            <>
                <Script type="application/ld+json" id="breadcrumbJsonLd" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
                <ProyekLayout projectData={projectData} />
            </>
        );
    } catch {
        return (
            <ProyekSkelaton />
        );
    }
}