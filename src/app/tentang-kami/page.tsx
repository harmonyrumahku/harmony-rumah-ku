import React, { Fragment } from 'react'

import { Metadata } from 'next'

import AboutLayout from '@/components/pages/tentang-kami/AboutLayout'

import AboutFilosofi from '@/components/pages/tentang-kami/AboutFilosofi'

import AboutSolusi from '@/components/pages/tentang-kami/AboutSolusi'

import AboutBudaya from '@/components/pages/tentang-kami/AboutBudaya'

import { fetchAboutPages, fetchAboutFilosofi, fetchAboutSolusi, fetchAboutBudaya } from '@/utils/FetchAboutPage'

import AboutSkelaton from '@/components/pages/tentang-kami/AboutSkelaton'

export const metadata: Metadata = {
    title: 'Tentang Kami - HarmonyrumahKU',
    description: 'Tentang Kami - HarmonyrumahKU',
}

export default async function Page() {
    try {
        const aboutPagesData = await fetchAboutPages();
        const aboutFilosofiData = await fetchAboutFilosofi();
        const aboutSolusiData = await fetchAboutSolusi();
        const aboutBudayaData = await fetchAboutBudaya();

        return <Fragment>
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