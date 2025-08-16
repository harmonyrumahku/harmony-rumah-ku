"use client"

import React, { useState, useEffect, useRef } from 'react'

import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button";

import Link from 'next/link'

import { Input } from '@/components/ui/input'

import Image from 'next/image'

import { Article } from '@/types/Article'

import LoadingOverlay from '@/base/Loading/LoadingOverlay';

import books from "@/base/assets/tabler_book.png"

export default function BlogLayout({ articleData }: { articleData: Article[] }) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("Memuat halaman blog...");
    const [search, setSearch] = useState('');
    const [selectedKategori, setSelectedKategori] = useState('');
    const [openKategori, setOpenKategori] = useState(false);
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [openSubcategory, setOpenSubcategory] = useState(false);
    const [isInSection, setIsInSection] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const handleLinkClick = (projectTitle: string) => {
        setLoadingMessage(`Memuat detail untuk "${projectTitle}"...`);
        setIsLoading(true);
    };

    // Ambil unique kategori
    const kategoriOptions = Array.from(new Set(articleData.map(p => p.article_categories)));

    // Ambil unique subcategory berdasarkan kategori yang dipilih
    const subcategoryOptions = selectedKategori
        ? Array.from(new Set(
            articleData
                .filter(p => p.article_categories === selectedKategori)
                .map(p => p.article_sub_categories)
                .filter(Boolean)
        ))
        : [];

    // Filter berdasarkan search dan combobox
    const filteredProjects = articleData.filter(project => {
        const searchLower = search.toLowerCase();
        const matchSearch = searchLower === '' ||
            project.title.toLowerCase().includes(searchLower) ||
            project.article_categories.toLowerCase().includes(searchLower) ||
            (project.article_sub_categories && project.article_sub_categories.toLowerCase().includes(searchLower));

        const matchKategori = selectedKategori ? project.article_categories === selectedKategori : true;
        const matchSubcategory = selectedSubcategory ? project.article_sub_categories === selectedSubcategory : true;

        return matchSearch && matchKategori && matchSubcategory;
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const isVisible = rect.top < windowHeight && rect.bottom > 0;
            setIsInSection(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            // Deteksi scroll dari touchpad (biasanya deltaY lebih kecil dan lebih halus)
            const isTouchpadScroll = Math.abs(e.deltaY) < 100;

            if (e.deltaY !== 0) {
                if (!isInSection) {
                    return;
                }

                // Cek apakah sudah mencapai ujung bawah atau atas
                const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
                const isAtTop = el.scrollTop <= 1;

                // Jika scroll ke bawah dan sudah di ujung bawah, biarkan scroll vertikal normal
                if (e.deltaY > 0 && isAtBottom) {
                    return;
                }

                // Jika scroll ke atas dan sudah di ujung atas, biarkan scroll vertikal normal
                if (e.deltaY < 0 && isAtTop) {
                    return;
                }

                // Jika belum di ujung, lakukan scroll vertikal yang smooth
                e.preventDefault();
                e.stopPropagation();

                // Kurangi kecepatan scroll sedikit lagi untuk kontrol yang lebih halus
                const scrollSpeed = isTouchpadScroll ? 0.6 : 1.0;
                const newScrollTop = el.scrollTop + (e.deltaY * scrollSpeed);

                el.scrollTop = newScrollTop;
            }
        };
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, [isInSection]);

    return (
        <section ref={sectionRef} className="min-h-screen bg-[#fff7e6] container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 min-h-screen">
                {/* Left Column - Text and Navigation */}
                <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-8 lg:h-fit lg:col-span-1 px-4 sm:px-6 lg:pl-10 pt-18 lg:pt-18">
                    <p className="text-base sm:text-lg leading-relaxed text-accent max-w-lg">
                        Setiap bangunan punya cerita, dan setiap ruang punya makna. Lewat artikel-artikel kami, temukan inspirasi dan pengetahuan yang relevan untuk menjawab kebutuhan ruang Anda yang terus berkembang.
                    </p>

                    {/* Search Bar */}
                    <div className="flex flex-col space-y-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                            <Input
                                placeholder="Apa yang ingin kamu cari ?"
                                className="pl-9 sm:pl-10 border-dashed border-2 border-muted-foreground bg-transparent text-sm sm:text-base"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Kategori Filter */}
                            <div className="relative">
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        setOpenKategori(!openKategori);
                                        setOpenSubcategory(false);
                                    }}
                                    className="w-full justify-between p-0 h-auto text-left font-bold text-[#173C29] hover:text-[#173C29] hover:bg-transparent border-none shadow-none"
                                >
                                    <span className="text-sm">
                                        {selectedKategori || "Kategory"}
                                    </span>
                                </Button>

                                {openKategori && (
                                    <div className="absolute top-full left-0 right-0 z-[9999] mt-2 bg-[#fff7e6] max-h-60 overflow-y-auto min-w-48 scrollbar-hide">
                                        <div className="py-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedKategori('');
                                                    setSelectedSubcategory('');
                                                    setOpenKategori(false);
                                                }}
                                                className={`w-full text-left py-2 text-sm ${!selectedKategori ? ' font-medium' : ''}`}
                                            >
                                                All
                                            </button>
                                            {kategoriOptions.map((kat) => (
                                                <button
                                                    key={kat}
                                                    onClick={() => {
                                                        setSelectedKategori(kat);
                                                        setSelectedSubcategory('');
                                                        setOpenKategori(false);
                                                    }}
                                                    className={`w-full text-left py-2 text-s ${selectedKategori === kat ? ' font-medium' : ''}`}
                                                >
                                                    {kat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Subcategory Filter */}
                            <div className="relative">
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        if (selectedKategori) {
                                            setOpenSubcategory(!openSubcategory);
                                            setOpenKategori(false);
                                        }
                                    }}
                                    disabled={!selectedKategori}
                                    className={`w-full justify-between p-0 h-auto text-left font-bold border-none shadow-none ${selectedKategori
                                        ? 'text-[#173C29] hover:text-[#173C29] hover:bg-transparent'
                                        : 'text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    <span className="text-sm">
                                        {selectedSubcategory || "Subcategory"}
                                    </span>
                                </Button>

                                {openSubcategory && selectedKategori && (
                                    <div className="absolute top-full left-0 right-0 z-[9999] mt-2 bg-[#fff7e6] max-h-60 overflow-y-auto min-w-48 scrollbar-hide">
                                        <div className="py-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedSubcategory('');
                                                    setOpenSubcategory(false);
                                                }}
                                                className={`w-full text-left py-2 text-sm  ${!selectedSubcategory ? ' font-medium' : ''}`}
                                            >
                                                All
                                            </button>
                                            {subcategoryOptions.map((subcategory) => (
                                                <button
                                                    key={subcategory}
                                                    onClick={() => {
                                                        setSelectedSubcategory(subcategory);
                                                        setOpenSubcategory(false);
                                                    }}
                                                    className={`w-full text-left py-2 text-sm transition-colors ${selectedSubcategory === subcategory ? ' font-medium' : ''}`}
                                                >
                                                    {subcategory}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {(selectedKategori || selectedSubcategory) && (
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        setSearch('');
                                        setSelectedKategori('');
                                        setSelectedSubcategory('');
                                    }}
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
                    className="overflow-y-auto lg:max-h-screen scrollbar-hide lg:col-span-2 pt-4 sm:pt-6 lg:pt-20"
                    style={{
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch',
                        overscrollBehavior: 'contain',
                        scrollSnapType: 'y proximity',
                        maxHeight: 'calc(100vh - 2rem)',
                        minHeight: '500px'
                    }}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, idx) => (
                            <Link
                                href={`/blog/${project.slug}`}
                                key={idx}
                                className="relative h-full overflow-hidden group cursor-pointer transition-all duration-300"
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(project.title);
                                    setTimeout(() => {
                                        window.location.href = `/blog/${project.slug}`;
                                    }, 100);
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative w-full overflow-hidden aspect-[4/3]">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        quality={100}
                                        fill
                                        loading='lazy'
                                        className="w-full h-full object-cover transition-all duration-500"
                                        style={{
                                            transform: hoveredIdx === idx ? 'scale(1.05)' : 'scale(1)',
                                        }}
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="mt-2 flex flex-col gap-1 px-2 md:px-0">
                                    {/* Title */}
                                    <span className='text-[#77967f]'>{project.article_categories}</span>

                                    <div className='max-w-[180px]'>
                                        <h4 className="text-2xl font-semibold line-clamp-2">
                                            {project.title}
                                        </h4>
                                    </div>

                                    <div className='max-w-[250px]'>
                                        <p className="inline-block text-sm">
                                            {project.description}
                                        </p>

                                    </div>
                                    {/* Icon */}
                                    <div className="flex justify-start mt-2 mb-4">
                                        <Image src={books} alt='book' />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <LoadingOverlay
                isLoading={isLoading}
                message={loadingMessage}
            />
        </section>
    )
}
