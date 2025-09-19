import React from 'react'

export default function AboutBudaya({ aboutBudayaData }: { aboutBudayaData: BudayaData[] }) {
    return (
        <section className='bg-background container'>
            <div className='flex flex-col md:flex-row min-h-[600px]'>
                {/* Column 1 - Dark Olive Green Background */}
                <div className='bg-[#798a25] text-[#f5f1eb] w-full md:w-[50%] p-8 lg:p-12'>
                    <h2 className='font-playfair text-3xl font-bold mb-6'>
                        {aboutBudayaData[0].title}
                    </h2>
                    <div className='space-y-6 text-sm lg:text-xl leading-relaxed'>
                        <p>
                            {aboutBudayaData[0].description}
                        </p>
                        <div className=''>
                            <h3 className='mb-3 lg:text-xl'>{aboutBudayaData[0].span}</h3>

                            <ul className='space-y-3 pl-4'>
                                {
                                    aboutBudayaData.map((item, idx) => {
                                        return (
                                            <div key={idx} className='flex flex-col gap-2'>
                                                {
                                                    item.list.map((item, idx) => {
                                                        return (
                                                            <li key={idx} className='flex items-start'>
                                                                <span className='w-2 h-2 bg-[#f5f1eb] rounded-full mt-3 mr-2 flex-shrink-0'></span>
                                                                <span>{item.description}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <p>
                            {aboutBudayaData[0].text}
                        </p>
                    </div>
                </div>

                {/* Column 2 - Pale Mint Green Background */}
                <div className='bg-[#e8ffe9] text-[#2d2d2d] w-full md:w-[25%] p-8 lg:p-10'>
                    <h2 className='font-playfair text-3xl lg:text-4xl font-bold mb-6'>
                        {aboutBudayaData[0].type[0].title}
                    </h2>
                    <div className='text-sm lg:text-lg leading-relaxed'>
                        <p>
                            {aboutBudayaData[0].type[0].description}
                        </p>
                    </div>
                </div>

                {/* Column 3 - Pale Mint Green Background */}
                <div className='bg-[#d9f5d7] text-[#2d2d2d] w-full md:w-[25%] p-8 lg:p-10'>
                    <h2 className='font-playfair text-3xl lg:text-4xl font-bold mb-6'>
                        {aboutBudayaData[0].type[1].title}
                    </h2>
                    <div className='text-sm lg:text-lg leading-relaxed'>
                        <p>
                            {aboutBudayaData[0].type[1].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
