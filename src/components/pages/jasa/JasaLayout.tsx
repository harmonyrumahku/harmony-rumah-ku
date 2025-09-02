"use client"

import React, { useState } from 'react'

import { Jasa } from '@/types/Jasa'

import Image from 'next/image'

import patern from "@/base/assets/patern.png"

import iconhome from "@/base/assets/icon-home.png"

import { CardJasa } from "@/components/pages/jasa/card/CardJasa"

export default function JasaLayout({ jasaData }: { jasaData: Jasa[] }) {
    const [expandedCard, setExpandedCard] = useState<string | null>(null)

    const toggleCard = (cardId: string) => {
        if (expandedCard === cardId) {
            setExpandedCard(null)
        } else {
            setExpandedCard(cardId)
        }
    }

    return (
        <section className='min-h-screen relative container overflow-hidden'>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${patern.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 pt-16 sm:pt-20 lg:pt-24">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-full sm:max-w-[800px] mx-auto px-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl inline-block font-bold text-[#1e211e] leading-tight">
                        Mewujudkan ruang impian Anda <Image src={iconhome} alt='harmonyrumahku' className="inline-block align-baseline w-8 sm:w-10 lg:w-12 xl:w-14 -mb-2 sm:-mb-3 lg:-mb-4 h-8 sm:h-10 lg:h-12 xl:h-14" /> dari konsep hingga kenyataan
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {jasaData.map((service) => {
                            const isExpanded = expandedCard === service.id
                            return (
                                <CardJasa
                                    key={service.id}
                                    service={service}
                                    isExpanded={isExpanded}
                                    onToggle={toggleCard}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
