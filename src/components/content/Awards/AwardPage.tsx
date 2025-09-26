"use client"

import Image from 'next/image'

import Link from 'next/link';

import LoadingOverlay from '@/base/Loading/LoadingOverlay';

import { useStateAward } from '@/components/content/Awards/lib/useStateAward';

import { motion } from 'framer-motion';
const MotionImage = motion(Image as React.ComponentType<React.ComponentProps<typeof Image>>);

export default function ProjectContent({ awardsData }: { awardsData: Award[] }) {
    const {
        isLoading,
        loadingMessage,
        scrollRef,
        sectionRef,
        handleLinkClick
    } = useStateAward();

    return (
        <section ref={sectionRef} className="w-full py-4 bg-[#ebffe6] container">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 px-4 sm:px-6 lg:px-10 gap-4">
                <motion.h2
                    className="text-md md:text-3xl font-bold text-[#333333]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                    Awards
                </motion.h2>

                <Link href="/awards" className="text-[#708B75] font-medium hover:underline text-sm sm:text-base" rel='about'>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: 0.06 }}
                    >
                        VIEW MORE
                    </motion.span>
                </Link>
            </div>

            <div
                className="overflow-x-auto scrollbar-hide"
                ref={scrollRef}
            >
                <div className="grid grid-flow-col grid-rows-2 auto-cols-max">
                    {awardsData.map((project, idx) => (
                        <Link
                            href={`/awards/${project.slug}`}
                            key={idx}
                            className="relative h-72 w-[300px] md:w-[500px] overflow-hidden group brightness-70 hover:brightness-100 transition-all duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(project.name);
                                setTimeout(() => {
                                    window.location.href = `/awards/${project.slug}`;
                                }, 100);
                            }}
                        >
                            {/* Gambar utama */}
                            <MotionImage
                                src={project.after}
                                alt={project.name}
                                quality={100}
                                fill
                                loading='lazy'
                                className="w-full h-full object-cover"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 1,
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1], delay: idx * 0.05 }}
                            />
                            <div
                                className="absolute inset-y-0 left-0 w-2/3 h-full z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(to right, rgba(44,44,44,0.92) 0%, rgba(44,44,44,0.7) 60%, rgba(44,44,44,0) 100%)'
                                }}
                            />
                            <div className="absolute left-4 bottom-10 z-20 text-[#FFFFFF] flex flex-col gap-2 py-0 px-0 group-hover:py-2 group-hover:px-4 bg-transparent backdrop-blur-none group-hover:backdrop-blur-sm group-hover:bg-black/20 rounded-md transition-all duration-300">
                                <div className='flex flex-col gap-2'>
                                    <motion.h3
                                        className='text-base font-semibold leading-tight'
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.06 }}
                                    >
                                        {project.name}
                                    </motion.h3>
                                    <motion.span
                                        className="text-base font-semibold leading-tight"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.08 }}
                                    >
                                        {project.keterangan}
                                    </motion.span>
                                </div>
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