"use client"

import { useEffect, useState, useRef } from 'react'

import Image from 'next/image'

import Link from 'next/link';

import { ProyekHome } from '@/types/Proyek';

import LoadingOverlay from '@/base/Loading/LoadingOverlay';

export default function ProjectContent({ projectData }: { projectData: ProyekHome[] }) {
    const [isInSection, setIsInSection] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("Memuat halaman proyek...");
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const handleLinkClick = (projectTitle?: string) => {
        if (projectTitle) {
            setLoadingMessage(`Memuat detail untuk "${projectTitle}"`);
        } else {
            setLoadingMessage("Memuat halaman proyek...");
        }
        setIsLoading(true);
    };

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
        <section ref={sectionRef} className="w-full py-4 bg-[#fff7e6] container">
            <div className="flex justify-between items-center mb-6 px-4 md:px-10">
                <h2 className="text-md md:text-3xl font-bold text-[#333333]">Project</h2>

                <Link
                    href="/proyek"
                    className="text-[#708B75] font-medium hover:underline"
                    rel='project'
                    onClick={() => handleLinkClick()}
                >
                    VIEW MORE
                </Link>
            </div>

            <div
                className="overflow-x-auto scrollbar-hide"
                ref={scrollRef}
                style={{
                    scrollBehavior: 'auto',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch',
                    overscrollBehavior: 'contain',
                    scrollSnapType: 'x mandatory'
                }}
            >
                <div className="grid grid-flow-col grid-rows-2 auto-cols-max">
                    {projectData.map((project, idx) => (
                        <Link
                            href={`/proyek/${project.slug}`}
                            key={idx}
                            className="relative h-72 w-[300px] md:w-[500px] overflow-hidden group brightness-70 hover:brightness-100 transition-all duration-300"
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
                                className="w-full h-full object-cover"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 1,
                                }}
                            />
                            {/* Overlay gradasi hanya setengah kiri */}
                            <div
                                className="absolute inset-y-0 left-0 w-2/3 h-full z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(to right, rgba(44,44,44,0.92) 0%, rgba(44,44,44,0.7) 60%, rgba(44,44,44,0) 100%)'
                                }}
                            />
                            <div className="absolute left-4 bottom-10 z-20 text-[#FFFFFF] flex flex-col gap-2 py-0 px-0 group-hover:py-2 group-hover:px-4 bg-transparent backdrop-blur-none group-hover:backdrop-blur-sm group-hover:bg-black/20 rounded-md transition-all duration-300">
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-lg font-semibold leading-tight'>Arsitektur</h3>
                                    <span
                                        className="w-1.5 h-1.5 rounded-full bg-white inline-block"
                                        style={{ opacity: 0.7 }}
                                    ></span>
                                    <div className="text-lg font-semibold leading-tight">{project.city}</div>
                                </div>

                                <div className="text-lg font-semibold leading-tight capitalize">{project.type}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <LoadingOverlay
                isLoading={isLoading}
                message={loadingMessage}
            />
        </section>
    )
}
