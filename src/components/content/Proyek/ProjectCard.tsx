import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import { motion } from 'framer-motion'

const MotionImage = motion(Image as React.ComponentType<React.ComponentProps<typeof Image>>);

export default function ProjectCard({ project, idx, onLinkClick }: ProjectCardProps) {
    return (
        <Link
            href={`/proyek/${project.slug}`}
            className="relative h-72 w-[300px] md:w-[500px] overflow-hidden group brightness-70 hover:brightness-100 transition-all duration-300"
            onClick={(e) => {
                e.preventDefault();
                onLinkClick(project.title);
                setTimeout(() => {
                    window.location.href = `/proyek/${project.slug}`;
                }, 100);
            }}
        >
            <MotionImage
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
                <div className='flex items-center gap-2'>
                    <motion.h3
                        className='text-lg font-semibold leading-tight'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.06 }}
                    >
                        Arsitektur
                    </motion.h3>
                    <span
                        className="w-1.5 h-1.5 rounded-full bg-white inline-block"
                        style={{ opacity: 0.7 }}
                    ></span>
                    <motion.span
                        className="text-lg font-semibold leading-tight"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.08 }}
                    >
                        {project.city}
                    </motion.span>
                </div>

                <motion.span
                    className="text-lg font-semibold leading-tight capitalize block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.1 }}
                >
                    {project.type}
                </motion.span>
            </div>
        </Link>
    )
}
