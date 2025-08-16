
import React from 'react'

import { Metadata } from 'next';

import ArticleDetails from '@/components/pages/blog/details/ArticleDetails';

import { fetchArticleBySlug } from '@/utils/FetchArticle';

import { notFound } from 'next/navigation';

import { generateMetadata as getArticleMetadata } from '@/components/pages/blog/details/meta/Metadata';

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    return getArticleMetadata({ params: { slug: resolvedParams.slug } });
}

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const articleData = await fetchArticleBySlug(resolvedParams.slug);

    if (!articleData) {
        return notFound();
    }

    return (
        <ArticleDetails articleData={articleData} />
    );
}
