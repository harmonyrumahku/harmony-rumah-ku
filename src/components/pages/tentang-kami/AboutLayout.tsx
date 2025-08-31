"use client"

import React from 'react';

import Image from 'next/image';

import type { AboutPages } from '@/types/AboutPages';

export default function AboutPages({ aboutPagesData }: { aboutPagesData: AboutPages[] }) {

    return (
        <section className="min-h-screen bg-background container pt-32">
            <div className="px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Statistics */}
                    <div className="space-y-10">
                        <div className="text-center lg:text-left">
                            <div className="text-6xl text-black mb-4">{aboutPagesData[0].number}</div>
                            <p className="text-black text-lg leading-relaxed">
                                {aboutPagesData[0].description}
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start space-x-4">
                            <Image src={aboutPagesData[0].image_urls} alt='tentang-harmony-rumahku' quality={100} width={300} height={300} />
                        </div>
                    </div>

                    {/* Middle Column - Services */}
                    <div className="space-y-4">
                        <h2 className="text-gray-500 text-xl font-normal">ARCHITECTURE</h2>
                        <div className="space-y-2">
                            {
                                aboutPagesData.map((item, idx) => {
                                    return (
                                        <div key={idx} className='flex flex-col gap-2'>
                                            {
                                                item.category.map((item, idx) => {
                                                    return (
                                                        <span key={idx} className='text-xl'>{item.title}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Right Column - Cities Progress & Achievement */}
                    <div className="space-y-6">
                        {/* Cities Progress */}
                        <div className="space-y-3">
                            {
                                aboutPagesData.map((item, idx) => {
                                    return (
                                        <div key={idx} className='flex flex-col gap-2'>
                                            {
                                                item.city.map((item, idx) => {
                                                    return (
                                                        <div key={idx} className='flex items-center space-x-3'>
                                                            <span className="text-black text-xl min-w-[150px]">{item.title}</span>
                                                            <span className="text-black text-xl font-medium">{item.number}</span>

                                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                                <div
                                                                    className="bg-[#66FF66] h-2 rounded-full"
                                                                    style={{ width: `${item.number}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Achievement Box */}
                        <div className="bg-[#f7fff5] border border-[#f7fff5] rounded-lg p-4 max-w-[300px]">
                            <div className="flex items-center space-x-2 mb-3">
                                <div className="w-5 h-5 text-[#4CAF50]">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <span className="text-[#4CAF50] text-xl font-medium">PENCAPAIAN</span>
                            </div>

                            <p className="text-black text-xl leading-relaxed">
                                {aboutPagesData[0].award}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 