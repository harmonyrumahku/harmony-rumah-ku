"use client"

import React from 'react'

import { motion } from 'framer-motion'

import Image from 'next/image'

const MotionImage = motion(Image)

import bg from "@/base/assets/about.png"

export default function AboutFilosofi({ aboutFilosofiData }: { aboutFilosofiData: AboutFilosofi[] }) {
    return (
        <section className='bg-background container'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {/* Top-Left: Image Section */}
                <div className='relative h-80 md:h-full overflow-hidden'>
                    <MotionImage
                        src={aboutFilosofiData[0].image_urls}
                        alt="Painting outdoors in nature"
                        fill
                        className='object-cover'
                        initial={{ opacity: 0, scale: 1.03 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        priority
                    />
                </div>

                {/* Top-Middle: Text Block */}
                <div className='bg-[#def5dc] p-6 md:p-8 flex flex-col justify-center'>
                    <motion.p
                        className='text-gray-800 text-sm md:text-xl leading-relaxed max-w-[350px]'
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        {aboutFilosofiData[0].description}
                    </motion.p>
                </div>

                {/* Top-Right: Title with Golden Background */}
                <div className='relative p-6 md:p-8 flex items-center justify-center overflow-hidden'>
                    <MotionImage
                        src={bg}
                        alt="Background"
                        fill
                        className='object-cover'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className='relative z-10'>
                        <motion.h2
                            className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 text-center leading-tight'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            {aboutFilosofiData[0].title}
                        </motion.h2>
                    </div>
                </div>

                {/* Bottom Row */}

                {/* Bottom-Left: Philosophy Section */}
                <div className='bg-[#def5dc] p-6 md:p-8'>
                    <motion.h3
                        className='text-xl md:text-2xl font-serif text-gray-900 mb-4'
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45 }}
                    >
                        {aboutFilosofiData[0].title_filosofi}
                    </motion.h3>
                    <div className='space-y-4'>
                        <motion.p
                            className='text-gray-800 text-sm md:text-xl leading-relaxed'
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                        >
                            {aboutFilosofiData[0].filosofi[0].description}
                        </motion.p>
                    </div>
                </div>

                {/* Bottom-Middle: Principles Section */}
                <div className='bg-[#798a25] p-6 md:p-8'>
                    <motion.p
                        className='text-white text-sm md:text-xl leading-relaxed'
                        style={{ lineHeight: 2 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45 }}
                    >
                        {aboutFilosofiData[0].filosofi[1].description}
                    </motion.p>
                </div>

                {/* Bottom-Right: Statistics Section */}
                <div className='bg-[#def5dc] p-6 md:p-8 rounded-lg flex flex-col items-start justify-center'>
                    <div className='flex flex-col gap-4'>
                        <motion.div
                            className='text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-2'
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            {aboutFilosofiData[0].number}
                        </motion.div>

                        <motion.p
                            className='text-gray-800 text-sm md:text-xl max-w-[250px]'
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                        >
                            {aboutFilosofiData[0].filosofi[2].description}
                        </motion.p>
                    </div>
                </div>

            </div>
        </section>
    )
}
