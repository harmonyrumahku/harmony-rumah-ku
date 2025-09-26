"use client"

import React from 'react'

import Marquee from 'react-fast-marquee'

import patern from "@/base/assets/patern.png"

import quete from "@/base/assets/quete.png"

import { motion } from 'framer-motion'

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
                        <motion.img src={icon.src} className='inline-block align-baseline' alt='harmonyrumahku'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                        >
                            Cerita yang Menghangatkan Hati
                        </motion.h3>
                    </div>
                </div>

                {/* Central Text Section */}
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <motion.h1
                        className="text-4xl inline-block font-bold text-[#1e211e] leading-tight"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Setiap penghargaan bukan sekadar trofi, tapi jejak cerita
                        dari <motion.img src={iconhome.src} alt='harmonyrumahku' className="inline-block align-baseline w-14 -mb-4 h-14"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        /> rumah dan keluarga yang tumbuh bersama
                    </motion.h1>

                    <motion.h2
                        className="text-5xl md:text-6xl font-['Playfair_Display'] italic text-black mt-6"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        HarmonyRumahKU
                    </motion.h2>
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
                                                    <motion.img src={quete.src} alt="icons" className="text-gray-600 text-2xl mt-1 flex-shrink-0"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true, amount: 0.15 }}
                                                        transition={{ duration: 0.35 }}
                                                    />
                                                    <div className="flex-1">
                                                        <motion.p className="text-black text-lg leading-relaxed"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true, amount: 0.15 }}
                                                            transition={{ duration: 0.45 }}
                                                        >
                                                            {award.description}
                                                        </motion.p>
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <CardFooter className="px-6 pb-6">
                                                <div className="flex items-center gap-3 w-full">
                                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                                        <motion.img src={award.avatar} alt={award.name} width={40} height={40} className="w-full h-full object-cover"
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true, amount: 0.15 }}
                                                            transition={{ duration: 0.35 }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <motion.p className="text-black font-medium text-sm"
                                                            initial={{ opacity: 0, y: 8 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true, amount: 0.15 }}
                                                            transition={{ duration: 0.35 }}
                                                        >
                                                            {award.name}
                                                        </motion.p>
                                                        <motion.p className="text-gray-600 text-xs"
                                                            initial={{ opacity: 0, y: 8 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true, amount: 0.15 }}
                                                            transition={{ duration: 0.35, delay: 0.05 }}
                                                        >
                                                            {award.keterangan}
                                                        </motion.p>
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
                                                    <motion.img src={quete.src} alt="icons" className="text-gray-600 text-2xl mt-1 flex-shrink-0"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.35 }}
                                                    />
                                                    <div className="flex-1">
                                                        <motion.p className="text-black text-lg leading-relaxed"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.45 }}
                                                        >
                                                            {award.description}
                                                        </motion.p>
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <CardFooter className="px-6 pb-6">
                                                <div className="flex items-center gap-3 w-full">
                                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                                        <motion.img src={award.avatar} alt={award.name} width={40} height={40} className="w-full h-full object-cover"
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.35 }}
                                                        />
                                                    </div>

                                                    <div>
                                                        <motion.p className="text-black font-medium text-sm"
                                                            initial={{ opacity: 0, y: 8 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.35 }}
                                                        >
                                                            {award.name}
                                                        </motion.p>
                                                        <motion.p className="text-gray-600 text-xs"
                                                            initial={{ opacity: 0, y: 8 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.35, delay: 0.05 }}
                                                        >
                                                            {award.keterangan}
                                                        </motion.p>
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
