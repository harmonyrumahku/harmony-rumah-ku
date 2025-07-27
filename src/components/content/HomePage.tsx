import React from 'react'

import Image from 'next/image'

import { HomeResponse } from '@/types/Home'

export default function HomePage({ homeData }: { homeData: HomeResponse }) {
    return (
        <section className="w-full min-h-screen flex flex-col lg:flex-row font-sans">
            {/* Kiri */}
            <div className="w-full lg:w-[28%] lg:min-w-[320px] bg-[var(--background)] flex flex-col justify-between order-2 lg:order-1">
                <div className='flex flex-col justify-between h-full'>
                    {/* Logo Placeholder */}
                    <div className='w-full h-80 lg:h-full bg-[#f5ecdc] flex items-center justify-center py-8 lg:py-10'>
                        <div className="aspect-square w-1/3 lg:w-1/3">
                            <Image
                                src={homeData.data[0].logo}
                                quality={100}
                                width={500}
                                height={500}
                                loading='lazy'
                                alt="logo"
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </div>

                    <div className='w-full h-48 lg:h-full flex flex-col justify-center px-6 lg:pl-10 bg-[#344D3D]'>
                        <h3 className="text-gray-200 text-lg lg:text-2xl font-semibold leading-relaxed mb-2 max-w-[350px] md:max-w-[250px]">
                            {homeData.data[0].text}
                        </h3>
                    </div>
                </div>
            </div>
            {/* Kanan */}
            <div className="w-full lg:w-[72%] relative flex items-center justify-center bg-[#e5e5e5] overflow-hidden h-96 lg:h-auto order-1 lg:order-2">
                {/* Gambar Rumah Placeholder */}
                <Image
                    src={homeData.data[0].image_urls}
                    alt="Rumah Nyaman"
                    className="w-full h-full object-cover brightness-75"
                    quality={100}
                    loading='lazy'
                    fill
                />
                {/* Overlay Teks */}
                <div className="absolute left-4 lg:left-32 bottom-4 lg:bottom-20 max-w-xl px-4 lg:px-0">
                    <h1 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-2 lg:mb-3 drop-shadow-lg" style={{
                        maxWidth: '100%'
                    }}>
                        {homeData.data[0].title}
                    </h1>
                    <p className="text-white text-sm sm:text-base lg:text-lg drop-shadow-lg font-normal" style={{
                        maxWidth: '100%'
                    }}>
                        {homeData.data[0].description}
                    </p>
                </div>
            </div>
        </section>
    )
}
