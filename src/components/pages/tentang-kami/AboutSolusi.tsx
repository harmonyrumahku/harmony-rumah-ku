import React from 'react'

import Image from 'next/image'

export default function AboutSolusi({ aboutSolusiData }: { aboutSolusiData: AboutSolusi[] }) {
    const data = aboutSolusiData[0]; // Assuming we're using the first item

    return (
        <section className='bg-background'>
            {/* Top Section - Split Layout */}
            <div className='flex flex-col lg:flex-row h-auto lg:h-[60vh]'>
                {/* Left Panel - Yellow-beige background with text */}
                <div className='w-full lg:w-1/3 bg-[#F5F5DC] flex items-center p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                    <div className='text-left w-full'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight mb-2'>
                            Selalu
                            <br />
                            Ada Solusi.
                        </h1>

                        <h2 className='text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 text-right'>
                            {data.span}
                        </h2>
                    </div>
                </div>

                {/* Right Panel - Image */}
                <div className='w-full lg:w-2/3 relative h-[40vh] lg:h-auto'>
                    <Image
                        src={data.image_urls}
                        alt="Landscape with people"
                        fill
                        className='object-cover'
                        priority
                    />
                </div>
            </div>

            {/* Bottom Section - Four Columns */}
            <div className='bg-[#E8F5E8] min-h-[40vh]'>
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full'>
                    {/* First Column - Main Headings */}
                    <div className='flex flex-col bg-[#d9f5d7] justify-center p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 lg:mb-6 leading-tight'>
                            {data.design_plan}
                        </h2>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 lg:mb-6 leading-tight'>
                            {data.engineering_plan}
                        </h2>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight'>
                            {data.management_plan}
                        </h2>
                    </div>

                    {/* Second Column - Design Services */}
                    <div className='flex flex-col bg-[#e8ffe9] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                        <h3 className='text-lg sm:text-xl lg:text-2xl font-sans font-bold text-gray-900 mb-6 lg:mb-8'>
                            DESAIN
                        </h3>
                        <ul className='space-y-3 lg:space-y-4'>
                            {data.design.map((item, index) => (
                                <li key={index} className='text-sm sm:text-base font-sans text-gray-800 font-medium'>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Third Column - Engineering Services */}
                    <div className='flex flex-col bg-[#d9f5d7] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                        <h3 className='text-lg sm:text-xl lg:text-2xl font-sans font-bold text-gray-900 mb-6 lg:mb-8'>
                            ENGINEERING
                        </h3>
                        <ul className='space-y-3 lg:space-y-4'>
                            {data.engineering.map((item, index) => (
                                <li key={index} className='text-sm sm:text-base font-sans text-gray-800 font-medium'>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fourth Column - Management Services */}
                    <div className='flex flex-col bg-[#e8ffe9] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                        <h3 className='text-lg sm:text-xl lg:text-2xl font-sans font-bold text-gray-900 mb-6 lg:mb-8'>
                            MANAJEMEN
                        </h3>
                        <ul className='space-y-3 lg:space-y-4'>
                            {data.management.map((item, index) => (
                                <li key={index} className='text-sm sm:text-base font-sans text-gray-800 font-medium'>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
