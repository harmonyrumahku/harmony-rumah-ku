"use client"

import React, { useEffect, useState, useRef } from "react";

import Image from "next/image";

import type { TimelineItem } from "@/types/Proyek";

import sticker from "@/base/assets/stiker.png"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    const [isInSection, setIsInSection] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

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
                // Hanya lakukan scroll horizontal jika berada di dalam section
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

                // Kurangi kecepatan scroll sedikit lagi untuk kontrol yang lebih halus
                const scrollSpeed = isTouchpadScroll ? 0.6 : 0.9;
                el.scrollLeft += e.deltaY * scrollSpeed;
            }
        };

        el.addEventListener('wheel', onWheel, { passive: false });
        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, [isInSection]);

    return (
        <section ref={sectionRef} className="w-full py-24 bg-[#e3cdb3] relative">
            <div
                className="overflow-x-auto scrollbar-hide"
                ref={scrollRef}
                style={{
                    scrollBehavior: 'auto',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                <div className="relative flex flex-row items-stretch gap-8 sm:gap-24 min-w-max px-10 sm:pl-72 before:absolute before:left-0 before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:bg-[#b3a49d] before:rounded-full">
                    {items.map((item, idx) => (
                        <HoverCard key={idx}>
                            <HoverCardTrigger asChild>
                                <div
                                    className={
                                        `relative flex flex-col items-center min-w-[260px] sm:min-w-[400px] flex-1 cursor-pointer`
                                    }
                                >
                                    {/* Atas (idx genap): Gambar di atas, info di bawah */}
                                    {idx % 2 === 0 && (
                                        <div className="mb-12 sm:mb-24 w-full flex flex-col items-center">
                                            <div className="flex flex-row gap-2 sm:gap-3 w-full justify-center">
                                                {item.image && item.image.map((img, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-full h-32 rounded-xl overflow-hidden border-2 border-white shadow-md transition-transform duration-200 hover:scale-105 bg-gray-100 mb-12"
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={item.title + ' ' + (i + 1)}
                                                            width={112}
                                                            height={112}
                                                            className="object-cover w-full h-full rounded-xl"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-5 flex flex-col items-start w-full">
                                                <div className="text-base font-bold text-neutral-800 mb-1">{item.title}</div>
                                                <div className="text-sm text-neutral-600 whitespace-pre-line line-clamp-2">{item.deskripsi}</div>
                                            </div>
                                        </div>
                                    )}
                                    {/* Dot dan Label */}
                                    <div
                                        className={`absolute z-10 flex flex-col items-center 
                                            ${idx % 2 === 0
                                                ? 'top-[47%] -translate-y-1/2'
                                                : 'top-[54%] -translate-y-1/2'
                                            } 
                                            ${idx === 0
                                                ? 'left-0 -translate-x-1/2'
                                                : idx === items.length - 1
                                                    ? 'right-0 translate-x-1/2'
                                                    : 'left-1/2 -translate-x-1/2'
                                            }`}
                                    >
                                        {/* Zig-zag label: genap di atas, ganjil di bawah */}
                                        {idx % 2 === 0 && (
                                            <span className="text-xs mb-1 font-semibold text-neutral-700 whitespace-nowrap">
                                                {item.label}
                                            </span>
                                        )}
                                        <span className="block w-6 h-6 rounded-full border-4 border-white bg-orange-500 shadow-lg ring-2 ring-orange-200 transition-transform duration-200 hover:scale-110" />
                                        {idx % 2 !== 0 && (
                                            <span className="text-xs mt-2 font-semibold text-neutral-700 whitespace-nowrap">
                                                {item.label}
                                            </span>
                                        )}
                                    </div>

                                    {/* Bawah (idx ganjil): Info di atas, gambar di bawah */}
                                    {idx % 2 !== 0 && (
                                        <div className="mt-12 sm:mt-20 w-full flex flex-col items-center z-50">
                                            <div className="w-full max-w-xs mb-24">
                                                <div className="text-base font-bold text-neutral-800 mb-1">{item.title}</div>
                                                <div className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line line-clamp-2" style={{ maxWidth: '350px' }}>{item.deskripsi}</div>
                                            </div>

                                            <div className="flex flex-row gap-2 sm:gap-3 w-full justify-center">
                                                {item.image && item.image.map((img, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-full h-32 rounded-xl overflow-hidden border-2 border-white shadow-md transition-transform duration-200 hover:scale-105 bg-gray-100"
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={item.title + ' ' + (i + 1)}
                                                            width={112}
                                                            height={112}
                                                            className="object-cover w-full h-full rounded-xl"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent
                                className="w-80 bg-white shadow-xl border border-gray-200 z-[9999] absolute transform -translate-x-1/2 transition-all duration-200 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-white"
                                align="center"
                                sideOffset={8}
                                side="top"
                                avoidCollisions={true}
                                collisionPadding={20}
                            >
                                <div className="space-y-3 p-3 rounded-lg">
                                    <h4 className="text-sm font-semibold text-neutral-800">{item.title}</h4>
                                    <p className="text-sm text-neutral-600">{item.deskripsi}</p>
                                    {item.image && item.image.length > 0 && (
                                        <div className="pt-2">
                                            <p className="text-xs text-neutral-500 mb-2">Galeri:</p>
                                            <div className="flex gap-2 overflow-x-auto">
                                                {item.image.map((img, i) => (
                                                    <div key={i} className="flex-shrink-0">
                                                        <Image
                                                            src={img}
                                                            alt={item.title + ' ' + (i + 1)}
                                                            width={60}
                                                            height={60}
                                                            className="object-cover w-15 h-15 rounded-md border"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            </div>

            <h1 className="absolute bottom-20 left-4 sm:left-20 text-[#966f42] font-bold text-2xl sm:text-4xl -z-0">Perjalanan <br /> kami...</h1>

            <Image src={sticker} alt="sticker" className="absolute top-5 sm:top-0 left-0 w-16 h-16 sm:w-auto sm:h-auto" />
        </section>
    );
}

export { Timeline };