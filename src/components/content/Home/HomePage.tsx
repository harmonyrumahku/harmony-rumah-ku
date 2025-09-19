"use client"

import React from 'react'

import LeftComponents from '@/components/content/Home/ui/LeftComponents'

import RightComponents from '@/components/content/Home/ui/RightComponents'

export default function HomePage({ homeData }: { homeData: HomeResponse }) {

    return (
        <section className="w-full min-h-full lg:min-h-screen flex flex-col lg:flex-row font-sans container" id='home'>
            <LeftComponents homeData={homeData} />

            <RightComponents homeData={homeData} />
        </section>
    )
}
