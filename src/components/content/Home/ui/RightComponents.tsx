import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import { titleVariants, descriptionVariants } from "@/components/content/Home/animation/Animation"

export default function RightComponents({ homeData }: { homeData: HomeResponse }) {
    return (
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
    )
}
