import React from 'react'

import { Metadata } from 'next'

import AwardsLayout from '@/components/pages/awards/AwardsLayout'

import { fetchAwardsData } from '@/utils/FetchAwards'

import AwardsSkelaton from '@/components/pages/awards/AwardsSkelaton'

import { awardsMetadata } from '@/components/pages/awards/meta/Metadata'

export const metadata: Metadata = awardsMetadata

export default async function Page() {
    try {
        const awardsData = await fetchAwardsData();
        return (
            <AwardsLayout awardsData={awardsData} />
        );
    } catch {
        return (
            <AwardsSkelaton />
        );
    }
}