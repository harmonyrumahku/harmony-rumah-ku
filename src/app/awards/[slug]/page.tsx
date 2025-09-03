
import React from 'react'

import { Metadata } from 'next';

import AwardsDetails from '@/components/pages/awards/details/AwardsDetails';

import { fetchAwardsBySlug } from '@/utils/FetchAwards';

import { notFound } from 'next/navigation';

import { generateMetadata as getAwardsMetadata } from '@/components/pages/awards/details/meta/Metadata';

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolved = await params;
    return getAwardsMetadata({ params: { slug: resolved.slug } });
}

export default async function Page({ params }: Props) {
    const resolved = await params;
    const awardsData = await fetchAwardsBySlug(resolved.slug);

    if (!awardsData) {
        return notFound();
    }

    return (
        <AwardsDetails awardsData={awardsData} />
    );
}
