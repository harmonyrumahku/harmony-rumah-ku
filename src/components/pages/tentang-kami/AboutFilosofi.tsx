import React from 'react'

import Image from 'next/image'

import type { AboutFilosofi } from '@/types/AboutFilosofi';

import bg from "@/base/assets/about.png"

export default function AboutFilosofi({ aboutFilosofiData }: { aboutFilosofiData: AboutFilosofi[] }) {
    return (
        <section className='bg-background container'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {/* Top-Left: Image Section */}
                <div className='relative h-80 md:h-96 overflow-hidden'>
                    <Image
                        src={aboutFilosofiData[0].image_urls}
                        alt="Painting outdoors in nature"
                        fill
                        className='object-cover'
                        priority
                    />
                </div>

                {/* Top-Middle: Text Block */}
                <div className='bg-[#def5dc] p-6 md:p-8 flex flex-col justify-center'>
                    <p className='text-gray-800 text-sm md:text-xl leading-relaxed max-w-[350px]'>
                        {aboutFilosofiData[0].description}
                    </p>
                </div>

                {/* Top-Right: Title with Golden Background */}
                <div className='relative p-6 md:p-8 flex items-center justify-center overflow-hidden'>
                    <Image
                        src={bg}
                        alt="Background"
                        fill
                        className='object-cover'
                    />
                    <div className='relative z-10'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 text-center leading-tight'>
                            {aboutFilosofiData[0].title}
                        </h2>
                    </div>
                </div>

                {/* Bottom Row */}

                {/* Bottom-Left: Philosophy Section */}
                <div className='bg-[#def5dc] p-6 md:p-8'>
                    <h3 className='text-xl md:text-2xl font-serif text-gray-900 mb-4'>
                        {aboutFilosofiData[0].title_filosofi}
                    </h3>
                    <div className='space-y-4'>
                        <p className='text-gray-800 text-sm md:text-xl leading-relaxed'>
                            {aboutFilosofiData[0].filosofi[0].description}
                        </p>
                    </div>
                </div>

                {/* Bottom-Middle: Principles Section */}
                <div className='bg-[#798a25] p-6 md:p-8'>
                    <p className='text-white text-sm md:text-xl leading-relaxed' style={{ lineHeight: 2 }}>
                        {aboutFilosofiData[0].filosofi[1].description}
                    </p>
                </div>

                {/* Bottom-Right: Statistics Section */}
                <div className='bg-[#def5dc] p-6 md:p-8 rounded-lg flex flex-col items-start justify-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-2'>
                            {aboutFilosofiData[0].number}
                        </div>

                        <p className='text-gray-800 text-sm md:text-xl max-w-[250px]'>
                            {aboutFilosofiData[0].filosofi[2].description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
