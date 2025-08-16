import React from 'react'

import { Metadata } from 'next'

import ProyekLayout from '@/components/pages/proyek/proyek/ProyekLayout'

import { fetchProyekData } from '@/utils/FetchProyek'

import ProyekSkelaton from '@/components/pages/proyek/proyek/ProyekSkelaton'

import { proyekMetadata } from '@/components/pages/proyek/proyek/meta/Metadata'

export const metadata: Metadata = proyekMetadata

export default async function Page() {
    try {
        const projectData = await fetchProyekData();
        return (
            <ProyekLayout projectData={projectData} />
        );
    } catch {
        return (
            <ProyekSkelaton />
        );
    }
}