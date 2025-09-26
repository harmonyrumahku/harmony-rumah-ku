'use client'

import React from 'react'

import CalendlyWidget from '@/components/pages/konsultasi/CalendlyWidget'

import patern from "@/base/assets/patern.png"

import iconhome from "@/base/assets/icon-time.png"

import Image from 'next/image'

import { motion } from 'framer-motion'

export default function KonsultasiLayout() {
    const calendlyUrl = process.env.NEXT_PUBLIC_SCHEDULE as string

    const prefill = {
        name: "",
        email: "",
        customAnswers: {
            a1: "",
            a2: "",
        }
    }

    const utm = {
        utmCampaign: 'harmony-rumahku',
        utmSource: 'website',
        utmMedium: 'consultation-page'
    }

    return (
        <section className="min-h-screen relative container pt-24 overflow-hidden" data-lenis-prevent>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${patern.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="text-center">
                <div className='max-w-full sm:max-w-[450px] mx-auto px-4'>
                    <motion.h1
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl inline-block font-bold text-[#1e211e] leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        Yuk, atur jadwal{' '}
                        <motion.span
                            className="inline-block align-baseline"
                            initial={{ scale: 0.9, rotate: -5, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                        >
                            <Image src={iconhome} alt='harmonyrumahku' className="inline-block align-baseline w-8 sm:w-10 lg:w-12 xl:w-14 -mb-2 sm:-mb-3 lg:-mb-4 h-8 sm:h-10 lg:h-12 xl:h-14" />
                        </motion.span>
                    </motion.h1>
                </div>

                <motion.h3
                    className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight'
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                >
                    konsultasi gratis sekarang!
                </motion.h3>
            </div>

            <div className="relative z-10">
                <CalendlyWidget
                    url={calendlyUrl}
                    prefill={prefill}
                    utm={utm}
                />
            </div>
        </section>
    )
}
