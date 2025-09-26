"use client"

import React from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'

const MotionImage = motion(Image)

export default function AboutSolusi({ aboutSolusiData }: { aboutSolusiData: AboutSolusi[] }) {
    const data = aboutSolusiData[0]; // Assuming we're using the first item

    return (
        <section className='bg-background'>
            {/* Top Section - Split Layout */}
            <div className='flex flex-col lg:flex-row h-auto lg:h-[60vh]'>
                {/* Left Panel - Yellow-beige background with text */}
                <div className='w-full lg:w-1/3 bg-[#F5F5DC] flex items-center p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                    <div className='text-left w-full'>
                        <motion.h1
                            className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight mb-2'
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            Selalu
                            <br />
                            Ada Solusi.
                        </motion.h1>

                        <motion.h2
                            className='text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 text-right'
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                        >
                            {data.span}
                        </motion.h2>
                    </div>
                </div>

                {/* Right Panel - Image */}
                <div className='w-full lg:w-2/3 relative h-[40vh] lg:h-auto'>
                    <MotionImage
                        src={data.image_urls}
                        alt="Landscape with people"
                        fill
                        className='object-cover'
                        initial={{ opacity: 0, scale: 1.03 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        priority
                    />
                </div>
            </div>

            {/* Bottom Section - Four Columns */}
            <div className='bg-[#E8F5E8] min-h-[40vh]'>
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full'>
                    {/* First Column - Main Headings */}
                    <div className='flex flex-col bg-[#d9f5d7] justify-center p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                        <motion.h2
                            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 lg:mb-6 leading-tight'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            {data.design_plan}
                        </motion.h2>
                        <motion.h2
                            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 lg:mb-6 leading-tight'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                        >
                            {data.engineering_plan}
                        </motion.h2>
                        <motion.h2
                            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {data.management_plan}
                        </motion.h2>
                    </div>

                    {/* Second Column - Design Services */}
                    <div className='flex flex-col bg-[#e8ffe9] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                        <motion.h3
                            className='text-lg sm:text-xl lg:text-2xl font-sans font-bold text-gray-900 mb-6 lg:mb-8'
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                        >
                            DESAIN
                        </motion.h3>
                        <ul className='space-y-3 lg:space-y-4'>
                            {data.design.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className='text-sm sm:text-base font-sans text-gray-800 font-medium'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.35, delay: index * 0.06 }}
                                >
                                    {item.title}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Third Column - Engineering Services */}
                    <div className='flex flex-col bg-[#d9f5d7] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                        <motion.h3
                            className='text-lg sm:text-xl lg:text-2xl font-sans font-bold text-gray-900 mb-6 lg:mb-8'
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                        >
                            ENGINEERING
                        </motion.h3>
                        <ul className='space-y-3 lg:space-y-4'>
                            {data.engineering.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className='text-sm sm:text-base font-sans text-gray-800 font-medium'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.35, delay: index * 0.06 }}
                                >
                                    {item.title}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Fourth Column - Management Services */}
                    <div className='flex flex-col bg-[#e8ffe9] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0'>
                        <motion.h3
                            className='text-lg sm:text-xl lg:text-2xl font-sans font-bold text-gray-900 mb-6 lg:mb-8'
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                        >
                            MANAJEMEN
                        </motion.h3>
                        <ul className='space-y-3 lg:space-y-4'>
                            {data.management.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className='text-sm sm:text-base font-sans text-gray-800 font-medium'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.35, delay: index * 0.06 }}
                                >
                                    {item.title}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
