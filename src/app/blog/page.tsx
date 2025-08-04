import React, { Fragment } from 'react'

import { Metadata } from 'next'

import BlogLayout from '@/components/pages/blog/BlogLayout'

// import { fetchProyekData } from '@/utils/FetchProyek'

import ProyekSkelaton from '@/components/pages/proyek/proyek/ProyekSkelaton'

export const metadata: Metadata = {
    title: 'Blog - HarmonyrumahKU',
    description: 'Blog - HarmonyrumahKU',
}

export default async function Page() {
    try {
        // const projectData = await fetchProyekData();
        return <Fragment>
            <BlogLayout />
        </Fragment>;
    } catch {
        return (
            <ProyekSkelaton />
        );
    }
}