"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function AboutBudaya({ aboutBudayaData }: { aboutBudayaData: BudayaData[] }) {
    return (
        <section className='bg-background container'>
            <div className='flex flex-col md:flex-row min-h-[600px]'>
                {/* Column 1 - Dark Olive Green Background */}
                <div className='bg-[#798a25] text-[#f5f1eb] w-full md:w-[50%] p-8 lg:p-12'>
                    <motion.h2
                        className='font-playfair text-3xl font-bold mb-6'
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        {aboutBudayaData[0].title}
                    </motion.h2>
                    <div className='space-y-6 text-sm lg:text-xl leading-relaxed'>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                        >
                            {aboutBudayaData[0].description}
                        </motion.p>
                        <div className=''>
                            <motion.h3
                                className='mb-3 lg:text-xl'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                {aboutBudayaData[0].span}
                            </motion.h3>

                            <ul className='space-y-3 pl-4'>
                                {
                                    aboutBudayaData.map((item, idx) => {
                                        return (
                                            <div key={idx} className='flex flex-col gap-2'>
                                                {
                                                    item.list.map((item, idx) => {
                                                        return (
                                                            <motion.li
                                                                key={idx}
                                                                className='flex items-start'
                                                                initial={{ opacity: 0, y: 8 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true, amount: 0.2 }}
                                                                transition={{ duration: 0.35, delay: idx * 0.06 }}
                                                            >
                                                                <span className='w-2 h-2 bg-[#f5f1eb] rounded-full mt-3 mr-2 flex-shrink-0'></span>
                                                                <span>{item.description}</span>
                                                            </motion.li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                        >
                            {aboutBudayaData[0].text}
                        </motion.p>
                    </div>
                </div>

                {/* Column 2 - Pale Mint Green Background */}
                <div className='bg-[#e8ffe9] text-[#2d2d2d] w-full md:w-[25%] p-8 lg:p-10'>
                    <motion.h2
                        className='font-playfair text-3xl lg:text-4xl font-bold mb-6'
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45 }}
                    >
                        {aboutBudayaData[0].type[0].title}
                    </motion.h2>
                    <div className='text-sm lg:text-lg leading-relaxed'>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4 }}
                        >
                            {aboutBudayaData[0].type[0].description}
                        </motion.p>
                    </div>
                </div>

                {/* Column 3 - Pale Mint Green Background */}
                <div className='bg-[#d9f5d7] text-[#2d2d2d] w-full md:w-[25%] p-8 lg:p-10'>
                    <motion.h2
                        className='font-playfair text-3xl lg:text-4xl font-bold mb-6'
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45 }}
                    >
                        {aboutBudayaData[0].type[1].title}
                    </motion.h2>
                    <div className='text-sm lg:text-lg leading-relaxed'>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4 }}
                        >
                            {aboutBudayaData[0].type[1].description}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}
