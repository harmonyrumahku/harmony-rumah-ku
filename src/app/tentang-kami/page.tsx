import React, { Fragment } from 'react'

import { Metadata } from 'next'

import AboutLayout from '@/components/pages/tentang-kami/AboutLayout'

import AboutFilosofi from '@/components/pages/tentang-kami/AboutFilosofi'

import { fetchAboutPages, fetchAboutFilosofi } from '@/utils/FetchAboutPage'

import ProyekSkelaton from '@/components/pages/proyek/proyek/ProyekSkelaton'

export const metadata: Metadata = {
    title: 'Tentang Kami - HarmonyrumahKU',
    description: 'Tentang Kami - HarmonyrumahKU',
}

export default async function Page() {
    try {
        const aboutPagesData = await fetchAboutPages();
        const aboutFilosofiData = await fetchAboutFilosofi();
        return <Fragment>
            <AboutLayout aboutPagesData={aboutPagesData} />
            <AboutFilosofi aboutFilosofiData={aboutFilosofiData} />
        </Fragment>;
    } catch {
        return (
            <ProyekSkelaton />
        );
    }
}