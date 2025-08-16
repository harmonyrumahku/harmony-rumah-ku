import React from 'react'

import { Metadata } from 'next'

import BlogLayout from '@/components/pages/blog/BlogLayout'

import { fetchArticleData } from '@/utils/FetchArticle'

import BlogSkelaton from '@/components/pages/blog/BlogSkelaton'

import { blogMetadata } from '@/components/pages/blog/meta/Metadata'

export const metadata: Metadata = blogMetadata

export default async function Page() {
    try {
        const articleData = await fetchArticleData();
        return (
            <BlogLayout articleData={articleData} />
        );
    } catch {
        return (
            <BlogSkelaton />
        );
    }
}