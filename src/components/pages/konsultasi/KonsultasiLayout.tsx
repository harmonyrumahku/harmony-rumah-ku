'use client'

import React from 'react'

import CalendlyWidget from './CalendlyWidget'

import patern from "@/base/assets/patern.png"

import iconhome from "@/base/assets/icon-time.png"

import Image from 'next/image'

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
                <div className='max-w-full sm:max-w-[500px] mx-auto px-4'>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl inline-block font-bold text-[#1e211e] leading-tight">
                        Yuk, atur jadwal <Image src={iconhome} alt='harmonyrumahku' className="inline-block align-baseline w-8 sm:w-10 lg:w-12 xl:w-14 -mb-2 sm:-mb-3 lg:-mb-4 h-8 sm:h-10 lg:h-12 xl:h-14" />
                    </h1>
                </div>

                <h3 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight'>konsultasi gratis sekarang!</h3>
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
