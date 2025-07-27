"use client"

import React from 'react'

import Image from 'next/image'

import Link from 'next/link';

import { Proyek } from '@/types/Proyek';

export default function ProjectContent({ projectData }: { projectData: Proyek[] }) {
    const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const onWheel = (e: WheelEvent) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, []);

    return (
        <section className="w-full py-10 bg-[#fff7e6]">
            <div className="flex justify-between items-center mb-6 px-10">
                <h2 className="text-3xl font-bold text-[#333333]">Project</h2>

                <Link href="/proyek" className="text-[#708B75] font-medium hover:underline" rel='project'>VIEW MORE</Link>
            </div>

            <div className="overflow-x-auto" ref={scrollRef} style={{ scrollbarWidth: 'none' }}>
                <div className="grid grid-flow-col grid-rows-2 auto-cols-max">
                    {projectData.map((project, idx) => (
                        <div
                            key={idx}
                            className="relative h-64 w-[450px] overflow-hidden group"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            {/* Gambar utama */}
                            <Image
                                src={project.photo_url}
                                alt={project.title}
                                quality={100}
                                fill
                                loading='lazy'
                                className="w-full h-full object-cover transition-opacity duration-500"
                                style={{
                                    opacity: hoveredIdx === idx ? 0 : 1,
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 1,
                                }}
                            />
                            {/* Gambar hover */}
                            <Image
                                src={project.photo_url}
                                alt={project.title + ' hover'}
                                quality={100}
                                fill
                                loading='lazy'
                                className="w-full h-full object-cover transition-opacity duration-500"
                                style={{
                                    opacity: hoveredIdx === idx ? 1 : 0,
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 2,
                                }}
                            />
                            {/* Overlay gradasi hanya setengah kiri */}
                            <div
                                className="absolute inset-y-0 left-0 w-2/3 h-full z-10 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(to right, rgba(44,44,44,0.92) 0%, rgba(44,44,44,0.7) 60%, rgba(44,44,44,0) 100%)'
                                }}
                            />
                            <div className="absolute left-4 bottom-10 z-20 text-[#FFFFFF] flex items-center gap-2">
                                <div className="text-lg font-semibold leading-tight capitalize">{project.type}</div>
                                <span
                                    className="w-1.5 h-1.5 rounded-full bg-white inline-block"
                                    style={{ opacity: 0.7 }}
                                ></span>
                                <div className="text-lg font-semibold leading-tight">{project.city}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
