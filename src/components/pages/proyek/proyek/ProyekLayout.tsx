"use client"

import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Proyek } from '@/types/Proyek'

export default function ProyekLayout({ projectData }: { projectData: Proyek[] }) {
    const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

    return (
        <section className="min-h-screen bg-[#fff7e6]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 min-h-screen">
                {/* Left Column - Text and Navigation */}
                <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-8 lg:h-fit lg:col-span-1 px-4 sm:px-6 lg:pl-10 pt-18 lg:pt-10">
                    <p className="text-base sm:text-lg leading-relaxed text-accent max-w-lg">
                        Kami Hadir untuk Setiap Langkah Perjalanan Hunian Anda. Dari merancang ruang yang nyaman, memastikan struktur yang kokoh, hingga mengelola proyek dengan penuh tanggung jawab — <strong>semua kami hadirkan untuk menciptakan rumah yang selaras dengan hidup Anda.</strong>
                    </p>

                    {/* Search Bar */}
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                            <Input
                                placeholder="Cari"
                                className="pl-9 sm:pl-10 border-dashed border-2 border-muted-foreground bg-transparent text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-accent text-base sm:text-lg">Filter</h3>
                        <div className="space-y-2 sm:space-y-3">
                            <button className="block text-left text-accent hover:text-primary transition-colors text-sm sm:text-base">
                                Kategori
                            </button>
                            <button className="block text-left text-accent hover:text-primary transition-colors text-sm sm:text-base">
                                Layanan
                            </button>
                            <button className="block text-left text-accent hover:text-primary transition-colors text-sm sm:text-base">
                                Wilayah
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Vertical Scrolling Grid */}
                <div className="overflow-y-auto lg:max-h-screen scrollbar-hide lg:col-span-2 pt-4 sm:pt-6 lg:pt-15">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {projectData.map((project, idx) => (
                            <div
                                key={idx}
                                className="relative h-40 sm:h-48 lg:h-52 overflow-hidden group cursor-pointer"
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                            >
                                {/* Gambar utama */}
                                <Image
                                    src={project.image_urls[0]}
                                    alt={project.title}
                                    quality={100}
                                    fill
                                    loading='lazy'
                                    className="w-full h-full object-cover transition-all duration-500"
                                    style={{
                                        transform: hoveredIdx === idx ? 'scale(1.05)' : 'scale(1)',
                                        position: 'absolute',
                                        inset: 0,
                                        zIndex: 1,
                                    }}
                                />

                                {/* Hover Overlay */}
                                <div
                                    className="absolute inset-0 bg-[#ff8a65] transition-all duration-700 ease-in-out flex items-center justify-center z-10"
                                    style={{
                                        opacity: hoveredIdx === idx ? 1 : 0,
                                    }}
                                >
                                    <div className="text-white text-center px-2 sm:px-4">
                                        <div className="space-y-1 sm:space-y-2">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light leading-tight">
                                                {project.proyek_type_name}
                                            </h3>
                                            <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-light leading-tight">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm sm:text-base lg:text-lg font-light">
                                                {project.proyek_city_name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
