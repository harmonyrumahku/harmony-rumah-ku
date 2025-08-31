"use client"

import React, { useEffect, useState, useRef } from 'react'

import { Article } from '@/types/Article'

import Link from 'next/link'

import Image from 'next/image'

export default function ArticlePage({ articleData }: { articleData: Article[] }) {
    const [isInSection, setIsInSection] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

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

                // Cek apakah sudah mencapai ujung kanan atau kiri
                const isAtRightEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
                const isAtLeftEnd = el.scrollLeft <= 1;

                // Jika scroll ke kanan dan sudah di ujung kanan, biarkan scroll vertikal normal
                if (e.deltaY > 0 && isAtRightEnd) {
                    return;
                }

                // Jika scroll ke kiri dan sudah di ujung kiri, biarkan scroll vertikal normal
                if (e.deltaY < 0 && isAtLeftEnd) {
                    return;
                }

                // Jika belum di ujung, lakukan scroll horizontal
                e.preventDefault();
                e.stopPropagation();

                // Kurangi kecepatan scroll sedikit lagi untuk kontrol yang lebih halus
                const scrollSpeed = isTouchpadScroll ? 0.4 : 0.7;
                el.scrollLeft += e.deltaY * scrollSpeed;
            }
        };
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, [isInSection]);

    return (
        <section ref={sectionRef} className='bg-[#ebffe6] py-0 md:py-3 container'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2 sm:gap-4 px-4 sm:px-10">
                <h2 className="font-bold text-[#333333] text-lg sm:text-xl md:text-2xl">Artikel</h2>
                <Link href="/article" className="text-[#708B75] font-medium hover:underline text-xs sm:text-sm md:text-base" rel='article'>
                    VIEW MORE
                </Link>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 bg-[#d9f5d7]">
                <div className="lg:col-span-1 px-4 sm:px-10 pt-8 md:pt-20 pb-4 sm:pb-0">
                    <p className="text-[#333333] text-base sm:text-xl leading-relaxed font-normal max-w-full md:max-w-[230px]">
                        Setiap bangunan punya cerita, dan setiap ruang punya makna. Lewat artikel-artikel kami, temukan inspirasi dan pengetahuan yang relevan untuk menjawab kebutuhan ruang Anda yang terus berkembang.
                    </p>
                </div>

                {/* Right Section - Article Previews */}
                <div
                    className="lg:col-span-2 overflow-x-auto scrollbar-hide"
                    ref={scrollRef}
                    style={{
                        scrollBehavior: 'auto',
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch',
                        overscrollBehavior: 'contain',
                        scrollSnapType: 'x mandatory'
                    }}
                >
                    <div className="flex min-w-0 sm:min-w-max">
                        {articleData.map((article) => (
                            <Link href={`/blog/${article.slug}`} key={article.id}>
                                <article className="w-64 sm:w-96 flex-shrink-0">
                                    {/* Article Image */}
                                    <div className="relative h-60 sm:h-96 w-full aspect-[4/5]">
                                        <Image
                                            src={article.thumbnail}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Article Content */}
                                    <div className="py-3 sm:py-4 flex flex-col gap-2">
                                        {/* Date */}
                                        <div className='flex flex-col md:flex-row items-start px-2 md:px-0 md:items-center gap-2'>
                                            <p className="text-xs sm:text-sm text-[#70695e]">
                                                {formatDate(article.created_at)}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                <span className="px-2 py-1 bg-[#d96f4e] text-white text-[10px] sm:text-xs rounded-sm">
                                                    {article.article_categories}
                                                </span>

                                                <span className="px-2 py-1 bg-[#d96f4e] text-white text-[10px] sm:text-xs rounded-sm">
                                                    {article.article_sub_categories}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-bold text-[#333333] text-xs sm:text-sm px-2 md:px-0 leading-tight line-clamp-3 flex-grow">
                                            {article.title}
                                        </h3>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
