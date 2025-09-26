"use client"

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import sticker from "@/base/assets/stiker.png"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    const [isInSection, setIsInSection] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
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
                e.stopPropagation();

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

    const handleMobileItemClick = (item: TimelineItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    return (
        <section ref={sectionRef} className="w-full py-24 bg-[#d9f5d7] relative">
            <div
                className="overflow-x-auto scrollbar-hide"
                ref={scrollRef}
            >
                <div className="relative flex flex-row items-stretch gap-8 sm:gap-24 min-w-max px-10 sm:pl-72 before:absolute before:left-0 before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:bg-[#b3a49d] before:rounded-full">
                    {items.map((item, idx) => (
                        isMobile ? (
                            <div key={idx} className="relative flex flex-col items-center min-w-[260px] sm:min-w-[400px] flex-1">
                                {/* Mobile: Show content with click handler */}
                                <div
                                    className="relative flex flex-col items-center w-full cursor-pointer group transition-all duration-300 hover:bg-white/5 rounded-lg p-2 -m-2"
                                    onClick={() => handleMobileItemClick(item)}
                                >
                                    {/* Atas (idx genap): Gambar di atas, info di bawah */}
                                    {idx % 2 === 0 && (
                                        <div className="mb-12 sm:mb-24 w-full flex flex-col items-center">
                                            <div className="flex flex-row gap-2 sm:gap-3 w-full justify-center">
                                                {item.image && item.image.map((img, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="w-full h-32 rounded-xl overflow-hidden border-2 border-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl bg-gray-100 mb-12"
                                                        initial={{ opacity: 0, y: 12 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true, amount: 0.2 }}
                                                        transition={{ duration: 0.4, delay: i * 0.06 }}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={item.title + ' ' + (i + 1)}
                                                            width={112}
                                                            height={112}
                                                            className="object-cover w-full h-full rounded-xl"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className="mt-5 flex flex-col items-start w-full transition-all duration-300 group-hover:translate-y-[-2px]">
                                                <motion.div className="text-base font-bold text-neutral-800 mb-1 group-hover:text-[#010f12] transition-colors duration-300" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }}>{item.title}</motion.div>
                                                <motion.div className="text-sm text-neutral-600 whitespace-pre-line line-clamp-2 group-hover:text-neutral-700 transition-colors duration-300" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.05 }}>{item.deskripsi}</motion.div>
                                                <div className="mt-2 text-xs text-[#010f12] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                                    <span>Tap untuk detail</span>
                                                    <span className="animate-bounce">👆</span>
                                                </div>
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
                                        <span className="block w-6 h-6 rounded-full border-4 border-white bg-[#010f12] shadow-lg ring-2 ring-white transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#010f12]/20 group-hover:shadow-xl animate-pulse" />
                                        {idx % 2 !== 0 && (
                                            <span className="text-xs mt-2 font-semibold text-neutral-700 whitespace-nowrap">
                                                {item.label}
                                            </span>
                                        )}
                                    </div>

                                    {/* Bawah (idx ganjil): Info di atas, gambar di bawah */}
                                    {idx % 2 !== 0 && (
                                        <div className="mt-12 sm:mt-20 w-full flex flex-col items-center z-50">
                                            <div className="w-full max-w-xs mb-24 transition-all duration-300 group-hover:translate-y-[-2px]">
                                                <div className="text-base font-bold text-neutral-800 mb-1 group-hover:text-[#010f12] transition-colors duration-300">{item.title}</div>
                                                <div className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line line-clamp-2 group-hover:text-neutral-700 transition-colors duration-300" style={{ maxWidth: '350px' }}>{item.deskripsi}</div>
                                                <div className="mt-2 text-xs text-[#010f12] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                                    <span>Tap untuk detail</span>
                                                    <span className="animate-bounce">👆</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-row gap-2 sm:gap-3 w-full justify-center">
                                                {item.image && item.image.map((img, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="w-full h-32 rounded-xl overflow-hidden border-2 border-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl bg-gray-100"
                                                        initial={{ opacity: 0, y: 12 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true, amount: 0.2 }}
                                                        transition={{ duration: 0.4, delay: i * 0.06 }}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={item.title + ' ' + (i + 1)}
                                                            width={112}
                                                            height={112}
                                                            className="object-cover w-full h-full rounded-xl"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
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
                                                    <motion.div className="text-base font-bold text-neutral-800 mb-1" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }}>{item.title}</motion.div>
                                                    <motion.div className="text-sm text-neutral-600 whitespace-pre-line line-clamp-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.05 }}>{item.deskripsi}</motion.div>
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
                                            <span className="block w-6 h-6 rounded-full border-4 border-white bg-[#010f12] shadow-lg ring-2 ring-white transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#010f12]/20 group-hover:shadow-xl animate-pulse" />
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
                                                        <motion.div
                                                            key={i}
                                                            className="w-full h-32 rounded-xl overflow-hidden border-2 border-white shadow-md transition-transform duration-200 hover:scale-105 bg-gray-100"
                                                            initial={{ opacity: 0, y: 12 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true, amount: 0.2 }}
                                                            transition={{ duration: 0.4, delay: i * 0.06 }}
                                                        >
                                                            <Image
                                                                src={img}
                                                                alt={item.title + ' ' + (i + 1)}
                                                                width={112}
                                                                height={112}
                                                                className="object-cover w-full h-full rounded-xl"
                                                            />
                                                        </motion.div>
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
                        )
                    ))}
                </div>
            </div>

            {/* Mobile Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="w-[90vw] max-w-md">
                    <DialogHeader>
                        <DialogTitle>{selectedItem?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            {selectedItem?.deskripsi}
                        </p>
                        {selectedItem?.image && selectedItem.image.length > 0 && (
                            <div className="pt-2">
                                <p className="text-xs text-neutral-500 mb-2">Galeri:</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {selectedItem.image.map((img, i) => (
                                        <div key={i} className="aspect-square">
                                            <Image
                                                src={img}
                                                alt={selectedItem.title + ' ' + (i + 1)}
                                                width={200}
                                                height={200}
                                                className="object-cover w-full h-full rounded-md border"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            <h1 className="absolute bottom-20 left-4 sm:left-20 text-[#b7cfb6] font-bold text-2xl sm:text-4xl -z-0">Perjalanan <br /> kami...</h1>

            <Image src={sticker} alt="sticker" className="absolute top-5 sm:top-0 left-0 w-16 h-16 sm:w-auto sm:h-auto" />
        </section>
    );
}

export { Timeline };