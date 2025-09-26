import React, { Fragment } from 'react'

import { Metadata } from 'next'

import AboutLayout from '@/components/pages/tentang-kami/AboutLayout'

import AboutFilosofi from '@/components/pages/tentang-kami/AboutFilosofi'

import AboutSolusi from '@/components/pages/tentang-kami/AboutSolusi'

import AboutBudaya from '@/components/pages/tentang-kami/AboutBudaya'

import { aboutMetadata } from '@/components/pages/tentang-kami/meta/Metadata'

import { fetchAboutPages, fetchAboutFilosofi, fetchAboutSolusi, fetchAboutBudaya } from '@/utils/FetchAbout'

import AboutSkelaton from '@/components/pages/tentang-kami/AboutSkelaton'

import Script from 'next/script'

export const metadata: Metadata = aboutMetadata

export default async function Page() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "http://localhost:3000" },
            { "@type": "ListItem", "position": 2, "name": "Tentang Kami", "item": "http://localhost:3000/tentang-kami" }
        ]
    }
    try {
        const aboutPagesData = await fetchAboutPages();
        const aboutFilosofiData = await fetchAboutFilosofi();
        const aboutSolusiData = await fetchAboutSolusi();
        const aboutBudayaData = await fetchAboutBudaya();

        return <Fragment>
            <Script type="application/ld+json" id="breadcrumbJsonLd" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <AboutLayout aboutPagesData={aboutPagesData} />
            <AboutFilosofi aboutFilosofiData={aboutFilosofiData} />
            <AboutSolusi aboutSolusiData={aboutSolusiData} />
            <AboutBudaya aboutBudayaData={aboutBudayaData} />
        </Fragment>;
    } catch {
        return (
            <AboutSkelaton />
        );
    }
}