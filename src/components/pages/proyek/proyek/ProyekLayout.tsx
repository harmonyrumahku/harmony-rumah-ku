"use client"

import React from 'react'

import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button";

import Link from 'next/link'

import { Input } from '@/components/ui/input'

import Image from 'next/image'

import LoadingOverlay from '@/base/Loading/LoadingOverlay';

import { useStateProyek } from '@/components/pages/proyek/proyek/lib/useStateProyek';

export default function ProyekLayout({ projectData }: { projectData: ProyekHome[] }) {
    const {
        // State
        hoveredIdx,
        setHoveredIdx,
        isLoading,
        loadingMessage,
        search,
        setSearch,
        selectedKategori,
        selectedLayanan,
        selectedWilayah,
        openKategori,
        openLayanan,
        openWilayah,

        // Refs
        scrollRef,
        sectionRef,

        // Computed values
        kategoriOptions,
        layananOptions,
        wilayahOptions,
        filteredProjects,

        // Handlers
        handleLinkClick,
        handleKategoriToggle,
        handleLayananToggle,
        handleWilayahToggle,
        handleKategoriSelect,
        handleLayananSelect,
        handleWilayahSelect,
        clearAllFilters,
    } = useStateProyek(projectData);

    return (
        <section ref={sectionRef} className="min-h-screen bg-background container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 min-h-screen">
                {/* Left Column - Text and Navigation */}
                <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-8 lg:h-fit lg:col-span-1 px-4 sm:px-6 lg:pl-10 pt-18 lg:pt-18">
                    <p className="text-base sm:text-lg leading-relaxed text-[#000000] max-w-lg">
                        Kami Hadir untuk Setiap Langkah Perjalanan Hunian Anda. Dari merancang ruang yang nyaman, memastikan struktur yang kokoh, hingga mengelola proyek dengan penuh tanggung jawab — <strong>semua kami hadirkan untuk menciptakan rumah yang selaras dengan hidup Anda.</strong>
                    </p>

                    {/* Search Bar */}
                    <div className="flex flex-col space-y-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                            <Input
                                placeholder="Apa yang ingin kamu cari ?"
                                className="pl-9 sm:pl-10 border-0 border-b-2 border-dashed border-muted-foreground bg-transparent text-sm sm:text-base rounded-none"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Kategori Filter */}
                            <div className="relative">
                                <Button
                                    variant="ghost"
                                    onClick={handleKategoriToggle}
                                    className="w-full justify-between p-0 h-auto text-left font-bold text-primary hover:text-primary hover:bg-transparent border-none shadow-none"
                                >
                                    <span className="text-sm">
                                        {selectedKategori || "Kategory"}
                                    </span>
                                </Button>

                                {openKategori && (
                                    <div className="absolute top-full left-0 right-0 z-[9999] mt-2 bg-background max-h-60 overflow-y-auto min-w-48 scrollbar-hide">
                                        <div className="py-2">
                                            <button
                                                onClick={() => handleKategoriSelect('')}
                                                className={`w-full text-left py-2 text-sm ${!selectedKategori ? ' font-medium' : ''}`}
                                            >
                                                All
                                            </button>
                                            {kategoriOptions.map((kat) => (
                                                <button
                                                    key={kat}
                                                    onClick={() => handleKategoriSelect(kat)}
                                                    className={`w-full text-left py-2 text-s ${selectedKategori === kat ? ' font-medium' : ''}`}
                                                >
                                                    {kat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Layanan Filter */}
                            <div className="relative">
                                <Button
                                    variant="ghost"
                                    onClick={handleLayananToggle}
                                    className="w-full justify-between p-0 h-auto text-left font-bold text-primary hover:text-primary hover:bg-transparent border-none shadow-none"
                                >
                                    <span className="text-sm">
                                        {selectedLayanan || "Layanan"}
                                    </span>
                                </Button>

                                {openLayanan && (
                                    <div className="absolute top-full left-0 right-0 z-[9999] mt-2 bg-background max-h-60 overflow-y-auto min-w-48 scrollbar-hide">
                                        <div className="py-2">
                                            <button
                                                onClick={() => handleLayananSelect('')}
                                                className={`w-full text-left py-2 text-sm  ${!selectedLayanan ? ' font-medium' : ''}`}
                                            >
                                                All
                                            </button>
                                            {layananOptions.map((layanan) => (
                                                <button
                                                    key={layanan}
                                                    onClick={() => handleLayananSelect(layanan)}
                                                    className={`w-full text-left py-2 text-sm transition-colors ${selectedLayanan === layanan ? ' font-medium' : ''}`}
                                                >
                                                    {layanan}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Wilayah Filter */}
                            <div className="relative">
                                <Button
                                    variant="ghost"
                                    onClick={handleWilayahToggle}
                                    className="w-full justify-between p-0 h-auto text-left font-bold text-primary hover:text-primary hover:bg-transparent border-none shadow-none"
                                >
                                    <span className="text-sm">
                                        {selectedWilayah || "Wilayah"}
                                    </span>
                                </Button>

                                {openWilayah && (
                                    <div className="absolute top-full left-0 right-0 z-[9999] mt-2 bg-background max-h-60 overflow-y-auto min-w-48 scrollbar-hide">
                                        <div className="py-2">
                                            <button
                                                onClick={() => handleWilayahSelect('')}
                                                className={`w-full text-left py-2 text-sm ${!selectedWilayah ? ' font-medium' : ''}`}
                                            >
                                                All
                                            </button>
                                            {wilayahOptions.map((wilayah) => (
                                                <button
                                                    key={wilayah}
                                                    onClick={() => handleWilayahSelect(wilayah)}
                                                    className={`w-full text-left py-2 text-sm  ${selectedWilayah === wilayah ? ' font-medium' : ''}`}
                                                >
                                                    {wilayah}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {(selectedKategori || selectedLayanan || selectedWilayah) && (
                                <Button
                                    variant="ghost"
                                    onClick={clearAllFilters}
                                    className='p-0 h-auto text-left font-normal border-none shadow-none text-sm'
                                >
                                    Clear all filters
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column - Vertical Scrolling Grid */}
                <div
                    ref={scrollRef}
                    className="hidden md:block overflow-y-auto lg:max-h-screen scrollbar-hide lg:col-span-2 pt-4 sm:pt-6 lg:pt-20"
                    style={{
                        maxHeight: 'calc(100vh - 2rem)',
                        minHeight: '700px'
                    }}
                >
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-8">
                            {filteredProjects.map((project, idx) => (
                                <Link
                                    href={`/proyek/${project.slug}`}
                                    key={idx}
                                    className="relative h-40 sm:h-48 lg:h-64 overflow-hidden group cursor-pointer"
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(project.title);
                                        // Navigate after a short delay to show loading
                                        setTimeout(() => {
                                            window.location.href = `/proyek/${project.slug}`;
                                        }, 100);
                                    }}
                                >
                                    {/* Gambar utama */}
                                    <Image
                                        src={project.image_urls}
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
                                        className="absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center z-10"
                                        style={{
                                            backgroundColor: hoveredIdx === idx ? 'rgba(255, 138, 101, 0.9)' : 'transparent',
                                        }}
                                    >
                                        <div className="text-white px-2 sm:px-4 transition-all duration-700 ease-in-out"
                                            style={{
                                                opacity: hoveredIdx === idx ? 1 : 0,
                                            }}
                                        >
                                            <div className="space-y-1 sm:space-y-2">
                                                <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-light leading-tight">
                                                    {project.title}
                                                </h4>
                                                <p className="text-sm sm:text-base lg:text-lg font-light">
                                                    {project.city}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="w-24 h-24 mb-6 rounded-full bg-primary flex items-center justify-center">
                                <Search className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                Maaf, proyek yang Anda cari tidak ditemukan
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-md">
                                Coba ubah kata kunci pencarian atau filter yang Anda gunakan untuk menemukan proyek yang sesuai.
                            </p>
                            <Button
                                variant="outline"
                                onClick={clearAllFilters}
                                className="px-6"
                            >
                                Reset Filter
                            </Button>
                        </div>
                    )}
                </div>

                <div className='block md:hidden'>
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-8">
                            {filteredProjects.map((project, idx) => (
                                <Link
                                    href={`/proyek/${project.slug}`}
                                    key={idx}
                                    className="relative h-64 overflow-hidden group cursor-pointer"
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(project.title);
                                        // Navigate after a short delay to show loading
                                        setTimeout(() => {
                                            window.location.href = `/proyek/${project.slug}`;
                                        }, 100);
                                    }}
                                >
                                    {/* Gambar utama */}
                                    <Image
                                        src={project.image_urls}
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
                                        className="absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center z-10"
                                        style={{
                                            backgroundColor: hoveredIdx === idx ? 'rgba(255, 138, 101, 0.9)' : 'transparent',
                                        }}
                                    >
                                        <div className="text-white px-2 sm:px-4 transition-all duration-700 ease-in-out"
                                            style={{
                                                opacity: hoveredIdx === idx ? 1 : 0,
                                            }}
                                        >
                                            <div className="space-y-1 sm:space-y-2">
                                                <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-light leading-tight">
                                                    {project.title}
                                                </h4>
                                                <p className="text-sm sm:text-base lg:text-lg font-light">
                                                    {project.city}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="w-24 h-24 mb-6 rounded-full bg-primary flex items-center justify-center">
                                <Search className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                Maaf, proyek yang Anda cari tidak ditemukan
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-md">
                                Coba ubah kata kunci pencarian atau filter yang Anda gunakan untuk menemukan proyek yang sesuai.
                            </p>
                            <Button
                                variant="outline"
                                onClick={clearAllFilters}
                                className="px-6"
                            >
                                Reset Filter
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            <LoadingOverlay
                isLoading={isLoading}
                message={loadingMessage}
            />
        </section>
    )
}
