import React from 'react'

import { Metadata } from 'next'

import JasaLayout from '@/components/pages/jasa/JasaLayout'

import { fetchJasaData } from '@/utils/FetchJasa'

import JasaSkelaton from '@/components/pages/jasa/JasaSkelaton'

import { jasaMetadata } from '@/components/pages/jasa/meta/Metadata'

export const metadata: Metadata = jasaMetadata

export default async function Page() {
    try {
        const jasaData = await fetchJasaData();
        return (
            <JasaLayout jasaData={jasaData} />
        );
    } catch {
        return (
            <JasaSkelaton />
        );
    }
}