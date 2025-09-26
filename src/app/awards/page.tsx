import React, { Fragment } from 'react'

import { Metadata } from 'next'

import AwardsLayout from '@/components/pages/awards/AwardsLayout'

import { fetchAwardsData } from '@/utils/FetchAwards'

import AwardsSkelaton from '@/components/pages/awards/AwardsSkelaton'

import { awardsMetadata } from '@/components/pages/awards/meta/Metadata'

import Script from 'next/script'

export const metadata: Metadata = awardsMetadata

export default async function Page() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "http://localhost:3000" },
            { "@type": "ListItem", "position": 2, "name": "Awards", "item": "http://localhost:3000/awards" }
        ]
    }
    try {
        const awardsData = await fetchAwardsData();
        return (
            <Fragment>
                <Script type="application/ld+json" id="breadcrumbJsonLd" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
                <AwardsLayout awardsData={awardsData} />
            </Fragment>
        );
    } catch {
        return (
            <AwardsSkelaton />
        );
    }
}