import React, { Fragment } from 'react'

import { Metadata } from 'next'

import AboutLayout from '@/components/pages/tentang-kami/AboutLayout'

// import { fetchProyekData } from '@/utils/FetchProyek'

import ProyekSkelaton from '@/components/pages/proyek/proyek/ProyekSkelaton'

export const metadata: Metadata = {
    title: 'Tentang Kami - HarmonyrumahKU',
    description: 'Tentang Kami - HarmonyrumahKU',
}

export default async function Page() {
    try {
        // const projectData = await fetchProyekData();
        return <Fragment>
            <AboutLayout />
        </Fragment>;
    } catch {
        return (
            <ProyekSkelaton />
        );
    }
}