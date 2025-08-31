"use client"

import React from 'react'

import Image from 'next/image'

import { easeOut, motion } from 'framer-motion'

import { HomeResponse } from '@/types/Home'

export default function HomePage({ homeData }: { homeData: HomeResponse }) {

    const logoVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easeOut
            }
        }
    }

    const textVariants = {
        hidden: {
            y: 20,
            opacity: 0,
            textShadow: "0 0 5px rgba(255,255,255,0.3)"
        },
        visible: {
            y: 0,
            opacity: 1,
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            transition: {
                y: { duration: 0.6, ease: easeOut },
                opacity: { duration: 0.6, ease: easeOut },
                textShadow: { duration: 0.6, ease: easeOut }
            }
        }
    }

    const titleVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: easeOut
            }
        }
    }

    const descriptionVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: easeOut
            }
        }
    }

    return (
        <section className="w-full min-h-full lg:min-h-screen flex flex-col lg:flex-row font-sans container" id='home'>
            {/* Kiri */}
            <div className="w-full lg:w-[28%] lg:min-w-[320px] bg-[var(--background)] flex flex-col justify-between order-2 lg:order-1">
                <div className='flex flex-row lg:flex-col justify-between h-full'>
                    {/* Logo Placeholder */}
                    <div className='w-full h-60 lg:h-full bg-[#ebffe6] flex items-center justify-center py-8 lg:py-10'>
                        <motion.div
                            className="aspect-square w-1/3 lg:w-1/3"
                            variants={logoVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Image
                                src={homeData.data[0].logo}
                                quality={100}
                                width={500}
                                height={500}
                                loading='lazy'
                                alt="logo"
                                className='w-full h-full object-contain'
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className='w-full h-60 lg:h-full flex flex-col justify-center px-6 lg:pl-10'
                        style={{
                            background: "linear-gradient(135deg, #344D3D 0%, #4A6741 50%, #344D3D 100%)"
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: easeOut }}
                    >
                        <motion.h3
                            className="text-gray-200 text-lg lg:text-2xl font-semibold leading-relaxed mb-2 max-w-[350px] lg:max-w-[250px]"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {homeData.data[0].text}
                        </motion.h3>
                    </motion.div>
                </div>
            </div>

            {/* Kanan */}
            <div className="w-full lg:w-[72%] relative flex items-center justify-center bg-[#e5e5e5] overflow-hidden h-[50dvh] lg:h-auto order-1 lg:order-2">
                {/* Gambar Rumah Placeholder */}
                <div className="absolute inset-0">
                    <Image
                        src={homeData.data[0].image_urls}
                        alt="Rumah Nyaman"
                        className="w-full h-full object-cover brightness-75"
                        quality={100}
                        loading='lazy'
                        fill
                    />
                </div>

                {/* Overlay Teks */}
                <div className="absolute left-0 md:left-4 lg:left-32 bottom-4 md:bottom-10 lg:bottom-20 max-w-xl px-4 lg:px-0">
                    <motion.h1
                        className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-2 lg:mb-3 drop-shadow-lg"
                        style={{ maxWidth: '100%' }}
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {homeData.data[0].title}
                    </motion.h1>
                    <motion.p
                        className="text-white text-sm sm:text-base lg:text-lg drop-shadow-lg font-normal"
                        style={{ maxWidth: '100%' }}
                        variants={descriptionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {homeData.data[0].description}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
