import React from 'react'

import type { AboutFilosofi } from '@/types/AboutFilosofi';

export default function AboutFilosofi({ aboutFilosofiData }: { aboutFilosofiData: AboutFilosofi[] }) {
    console.log(aboutFilosofiData)
    return (
        <section className='min-h-screen bg-background container pt-28'>
            <div className='px-4 md:px-10'></div>
        </section>
    )
}
