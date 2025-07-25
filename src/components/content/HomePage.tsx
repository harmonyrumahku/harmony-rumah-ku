import React from 'react'

import Image from 'next/image'

import { HomeResponse } from '@/types/Home'

export default function HomePage({ homeData }: { homeData: HomeResponse }) {
    return (
        <section className="w-full min-h-screen flex font-sans">
            {/* Kiri */}
            <div className="w-[28%] min-w-[320px] bg-[var(--background)] flex flex-col justify-between">
                <div className='flex flex-col justify-between h-full'>
                    {/* Logo Placeholder */}
                    <div className='w-full h-full bg-[#f5ecdc] flex items-center justify-center py-10'>
                        <div className="aspect-square w-1/3">
                            <Image src={homeData.data[0].logo} quality={100} width={500} height={500} loading='lazy' alt="logo" className='w-full mt-10 h-full object-contain' />
                        </div>
                    </div>

                    <div className='w-full h-full flex flex-col justify-center pl-20 bg-[#344D3D]'>
                        <h3 className="text-gray-200 text-2xl font-semibold leading-relaxed mb-2" style={{
                            maxWidth: '200px'
                        }}>
                            {homeData.data[0].text}
                        </h3>
                    </div>
                </div>
            </div>
            {/* Kanan */}
            <div className="w-[72%] relative flex items-center justify-center bg-[#e5e5e5] overflow-hidden">
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
                <div className="absolute left-32 bottom-20 max-w-xl">
                    <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-3 drop-shadow-lg" style={{
                        maxWidth: '350px'
                    }}>
                        {homeData.data[0].title}
                    </h1>
                    <p className="text-white text-base md:text-lg drop-shadow-lg font-normal" style={{
                        maxWidth: '350px'
                    }}>
                        {homeData.data[0].description}
                    </p>
                </div>
            </div>
        </section>
    )
}
