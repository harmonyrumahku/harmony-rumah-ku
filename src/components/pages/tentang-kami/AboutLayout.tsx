"use client"

import React from 'react';

import { motion } from 'framer-motion';

import Image from 'next/image';

const MotionImage = motion(Image);

export default function AboutPages({ aboutPagesData }: { aboutPagesData: AboutPages[] }) {

    return (
        <section className="min-h-screen bg-background container pt-24 md:pt-32 pb-10">
            <div className="px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Statistics */}
                    <div className="space-y-10">
                        <div className="text-center lg:text-left">
                            <motion.h1
                                className="text-6xl text-black mb-4"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {aboutPagesData[0].number}
                            </motion.h1>
                            <motion.p
                                className="text-black text-lg leading-relaxed"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {aboutPagesData[0].description}
                            </motion.p>
                        </div>

                        <div className="flex justify-center lg:justify-start space-x-4">
                            <MotionImage
                                src={aboutPagesData[0].image_urls}
                                alt='tentang-harmony-rumahku'
                                quality={100}
                                width={300}
                                height={300}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                    {/* Middle Column - Services */}
                    <div className="space-y-4">
                        <motion.h2
                            className="text-gray-500 text-xl font-normal"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            ARCHITECTURE
                        </motion.h2>
                        <div className="space-y-2">
                            {
                                aboutPagesData.map((aboutItem, aboutIdx) => {
                                    return (
                                        <div key={aboutIdx} className='flex flex-col gap-2'>
                                            {
                                                aboutItem.category.map((catItem, catIdx) => {
                                                    return (
                                                        <motion.span
                                                            key={catIdx}
                                                            className='text-xl'
                                                            initial={{ opacity: 0, y: 12 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                                                        >
                                                            {catItem.title}
                                                        </motion.span>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

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
                                                            <motion.span
                                                                className="text-black text-xl min-w-[150px]"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.4 }}
                                                            >
                                                                {item.title}
                                                            </motion.span>
                                                            <motion.span
                                                                className="text-black text-xl font-medium"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.4 }}
                                                            >
                                                                {item.number}
                                                            </motion.span>

                                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                                <motion.div
                                                                    className="bg-[#66FF66] h-2 rounded-full"
                                                                    style={{ width: `${item.number}%`, transformOrigin: 'left' }}
                                                                    initial={{ scaleX: 0 }}
                                                                    animate={{ scaleX: 1 }}
                                                                    transition={{ duration: 0.6 }}
                                                                ></motion.div>
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
                        <div className="bg-[#f7fff5] border border-[#f7fff5] rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <div className="w-5 h-5 text-[#4CAF50]">
                                    <motion.svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.45 }}
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </motion.svg>
                                </div>
                                <motion.span
                                    className="text-[#4CAF50] text-xl font-medium"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    PENCAPAIAN
                                </motion.span>
                            </div>

                            <motion.p
                                className="text-black text-xl leading-relaxed"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {aboutPagesData[0].award}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 