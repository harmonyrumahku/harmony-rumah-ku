import React from 'react'

import { Metadata } from 'next'

import BlogLayout from '@/components/pages/blog/BlogLayout'

import { fetchArticleData } from '@/utils/FetchArticle'

import BlogSkelaton from '@/components/pages/blog/BlogSkelaton'

import { blogMetadata } from '@/components/pages/blog/meta/Metadata'

import Script from 'next/script'

export const metadata: Metadata = blogMetadata

export default async function Page() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "http://localhost:3000" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "http://localhost:3000/blog" }
        ]
    }
    try {
        const articleData = await fetchArticleData();
        return (
            <>
                <Script type="application/ld+json" id="breadcrumbJsonLd" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
                <BlogLayout articleData={articleData} />
            </>
        );
    } catch {
        return (
            <BlogSkelaton />
        );
    }
}