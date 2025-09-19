import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

export default function AboutPage({ aboutData }: { aboutData: About[] }) {
    return (
        <section className='bg-[#ebffe6] py-0 md:py-3 container'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 px-4 sm:px-6 lg:px-10 gap-4">
                <h2 className="font-bold text-[#333333] text-xl sm:text-2xl">About</h2>

                <Link href="/tentang-kami" className="text-[#708B75] font-medium hover:underline text-sm sm:text-base" rel='about'>VIEW MORE</Link>
            </div>

            {/* Responsive Layout */}
            <div className="flex flex-col lg:flex-row min-h-[70dvh]">
                {/* Left Column - Orange Panel with Service Categories */}
                <div className="w-full lg:w-1/3 bg-[#173d2a] px-4 sm:px-6 lg:pl-10 py-8 lg:py-0 flex flex-col justify-center">
                    {aboutData.map((about, idx) => (
                        <div key={idx} className="flex flex-col gap-3 sm:gap-5">
                            {
                                about.type.map((type, idx) => (
                                    <h3 key={idx} className='text-white font-normal text-lg sm:text-xl lg:text-2xl uppercase font-metro'>
                                        {type.title}
                                    </h3>
                                ))
                            }
                        </div>
                    ))}
                </div>

                {/* Right Column - Light Beige Panel with Graphics and Text */}
                <div className="w-full lg:w-2/3 px-4 sm:px-6 lg:px-20 py-8 lg:py-10 flex flex-col">
                    {/* Top Section - Graphics */}
                    <div className="flex-1 flex items-center mb-6 lg:mb-8">
                        <div className="w-full h-48 sm:h-64 lg:h-auto">
                            <Image
                                src={aboutData[0].image_urls}
                                alt="About"
                                width={800}
                                height={800}
                                quality={100}
                                className='object-cover w-full h-full rounded-lg lg:rounded-none'
                            />
                        </div>
                    </div>

                    {/* Bottom Section - Descriptive Text */}
                    <div className="flex-1 flex items-end">
                        <p className="text-[#2d2d2d] text-base sm:text-lg leading-relaxed max-w-4xl">
                            {aboutData[0].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
