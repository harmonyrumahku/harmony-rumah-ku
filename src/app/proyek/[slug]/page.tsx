
import React from 'react'

import { Metadata } from 'next';

import ProyekDetails from '@/components/pages/proyek/details/ProyekDetails';

import { fetchProyekBySlug } from '@/utils/FetchProyek';

import { notFound } from 'next/navigation';

import { generateMetadata as getProyekMetadata } from '@/components/pages/proyek/details/meta/Metadata';

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    return getProyekMetadata({ params: { slug: resolvedParams.slug } });
}

export default async function Page({ params }: Props) {
    const resolvedParams = await params;
    const projectData = await fetchProyekBySlug(resolvedParams.slug);

    if (!projectData) {
        return notFound();
    }

    return (
        <ProyekDetails projectData={projectData} />
    );
}
