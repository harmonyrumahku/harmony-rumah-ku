import React from 'react'

import Image from 'next/image'

import { easeOut, motion } from 'framer-motion'

import { logoVariants, textVariants } from "@/components/content/Home/animation/Animation"

export default function LeftComponents({ homeData }: { homeData: HomeResponse }) {
    return (
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
    )
}
