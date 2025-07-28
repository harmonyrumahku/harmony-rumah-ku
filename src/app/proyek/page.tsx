import React, { Fragment } from 'react'

import { Metadata } from 'next'

import ProyekLayout from '@/components/pages/proyek/proyek/ProyekLayout'

import { fetchProyekData } from '@/utils/FetchProyek'

import ProyekSkelaton from '@/components/pages/proyek/proyek/ProyekSkelaton'

export const metadata: Metadata = {
    title: 'Proyek - HarmonyrumahKU',
    description: 'Proyek - HarmonyrumahKU',
}

export default async function Page() {
    try {
        const projectData = await fetchProyekData();
        return <Fragment>
            <ProyekLayout projectData={projectData} />
        </Fragment>;
    } catch {
        return (
            <ProyekSkelaton />
        );
    }
}