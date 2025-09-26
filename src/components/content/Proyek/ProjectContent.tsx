"use client"

import Link from 'next/link';

import LoadingOverlay from '@/base/Loading/LoadingOverlay';

import { useStateProyek } from '@/components/content/Proyek/lib/useStateProyek';

import { motion } from 'framer-motion';

import ProjectCard from '@/components/content/Proyek/ProjectCard';

export default function ProjectContent({ projectData }: { projectData: ProyekHome[] }) {
    const {
        isLoading,
        loadingMessage,
        scrollRef,
        sectionRef,
        handleLinkClick
    } = useStateProyek();

    return (
        <section ref={sectionRef} className="w-full py-4 bg-[#ebffe6] container">
            <div className="flex justify-between items-center mb-6 px-4 md:px-10">
                <motion.h2
                    className="text-md md:text-3xl font-bold text-[#333333]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                    Proyek
                </motion.h2>

                <Link
                    href="/proyek"
                    className="text-[#708B75] font-medium hover:underline"
                    rel='project'
                    onClick={() => handleLinkClick()}
                >
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
                    {projectData.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} onLinkClick={handleLinkClick} />
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