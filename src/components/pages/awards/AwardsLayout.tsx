"use client"

import React from 'react'

import Marquee from 'react-fast-marquee'

import patern from "@/base/assets/patern.png"

import quete from "@/base/assets/quete.png"

import Image from 'next/image'

import { Card, CardContent, CardFooter } from '@/components/ui/card'

import iconhome from "@/base/assets/icon-home.png"

import icon from "@/base/assets/icon.png"

import Link from 'next/link'

import LoadingOverlay from '@/base/Loading/LoadingOverlay'

import { useStateAward } from '@/components/content/Awards/lib/useStateAward'

export default function AwardsLayout({ awardsData }: { awardsData: Award[] }) {
    const {
        isLoading,
        loadingMessage,
        sectionRef,
        handleLinkClick
    } = useStateAward();
    const firstColumn = awardsData.slice(0, Math.ceil(awardsData.length / 2))
    const secondColumn = awardsData.slice(Math.ceil(awardsData.length / 2))

    return (
        <section ref={sectionRef} className='min-h-screen relative container'>
            {/* Pattern Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${patern.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Content */}
            <div className="relative z-10  mx-auto px-4 py-16 pt-24">
                {/* Header Button */}
                <div className="flex justify-center mb-8">
                    <div className="bg-black text-white px-8 py-3 flex items-center gap-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                        <Image src={icon} className='inline-block align-baseline' alt='harmonyrumahku' />
                        <h3>Cerita yang Menghangatkan Hati</h3>
                    </div>
                </div>

                {/* Central Text Section */}
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h1 className="text-4xl inline-block font-bold text-[#1e211e] leading-tight">
                        Setiap penghargaan bukan sekadar trofi, tapi jejak cerita
                        dari <Image src={iconhome} alt='harmonyrumahku' className="inline-block align-baseline w-14 -mb-4 h-14" /> rumah dan keluarga yang tumbuh bersama
                    </h1>

                    <h2 className="text-5xl md:text-6xl font-['Playfair_Display'] italic text-black mt-6">
                        HarmonyRumahKU
                    </h2>
                </div>

                {/* Awards Grid with Marquee */}
                <div className="space-y-8">
                    {/* First Row */}
                    <div className="relative">
                        {/* Left Gradient Overlay */}
                        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[rgb(235,255,230)] via-[rgb(235,255,230)]/80 to-transparent z-10 pointer-events-none"></div>
                        {/* Right Gradient Overlay */}
                        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[rgb(235,255,230)] via-[rgb(235,255,230)]/80 to-transparent z-10 pointer-events-none"></div>

                        <Marquee
                            direction="left"
                            speed={40}
                            pauseOnHover={true}
                            className="py-4 cursor-grab active:cursor-grabbing"
                            gradient={false}
                            loop={0}
                            autoFill
                        >
                            <div className="flex">
                                {firstColumn.map((award) => (
                                    <Card key={award.id} className="bg-green-50 border-green-100 card-width ml-4 p-0">
                                        <Link href={`/awards/${award.slug}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLinkClick(award.name);
                                                setTimeout(() => {
                                                    window.location.href = `/awards/${award.slug}`;
                                                }, 100);
                                            }}
                                        >
                                            <CardContent className="p-6">
                                                <div className="flex flex-col items-start gap-4">
                                                    <Image src={quete} alt="icons" className="text-gray-600 text-2xl mt-1 flex-shrink-0" />
                                                    <div className="flex-1">
                                                        <p className="text-black text-lg leading-relaxed">
                                                            {award.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <CardFooter className="px-6 pb-6">
                                                <div className="flex items-center gap-3 w-full">
                                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                                        <Image src={award.avatar} alt={award.name} width={40} height={40} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <p className="text-black font-medium text-sm">
                                                            {award.name}
                                                        </p>
                                                        <p className="text-gray-600 text-xs">
                                                            {award.keterangan}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardFooter>
                                        </Link>
                                    </Card>
                                ))}
                            </div>
                        </Marquee>
                    </div>

                    {/* Second Row */}
                    <div className="relative">
                        {/* Left Gradient Overlay */}
                        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[rgb(235,255,230)] via-[rgb(235,255,230)]/80 to-transparent z-10 pointer-events-none"></div>
                        {/* Right Gradient Overlay */}
                        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[rgb(235,255,230)] via-[rgb(235,255,230)]/80 to-transparent z-10 pointer-events-none"></div>

                        <Marquee
                            direction="right"
                            speed={40}
                            pauseOnHover={true}
                            className="py-4 cursor-grab active:cursor-grabbing"
                            gradient={false}
                            loop={0}
                            autoFill
                        >
                            <div className="flex">
                                {secondColumn.map((award) => (
                                    <Card key={award.id} className="bg-green-50 border-green-100 card-width w-[300px] ml-4 p-0">
                                        <Link href={`/awards/${award.slug}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLinkClick(award.name);
                                                setTimeout(() => {
                                                    window.location.href = `/awards/${award.slug}`;
                                                }, 100);
                                            }}
                                        >
                                            <CardContent className="p-6">
                                                <div className="flex flex-col items-start gap-4">
                                                    <Image src={quete} alt="icons" className="text-gray-600 text-2xl mt-1 flex-shrink-0" />
                                                    <div className="flex-1">
                                                        <p className="text-black text-lg leading-relaxed">
                                                            {award.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <CardFooter className="px-6 pb-6">
                                                <div className="flex items-center gap-3 w-full">
                                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                                        <Image src={award.avatar} alt={award.name} width={40} height={40} className="w-full h-full object-cover" />
                                                    </div>

                                                    <div>
                                                        <p className="text-black font-medium text-sm">
                                                            {award.name}
                                                        </p>
                                                        <p className="text-gray-600 text-xs">
                                                            {award.keterangan}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardFooter>
                                        </Link>
                                    </Card>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
            <LoadingOverlay isLoading={isLoading} message={loadingMessage} />
        </section>
    )
}
