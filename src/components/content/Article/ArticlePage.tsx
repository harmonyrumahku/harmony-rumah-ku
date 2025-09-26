"use client"

import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import LoadingOverlay from '@/base/Loading/LoadingOverlay';

import { useStateArticle } from '@/components/content/Article/lib/useStateArticle';

import { motion } from 'framer-motion'
const MotionImage = motion(Image as React.ComponentType<React.ComponentProps<typeof Image>>)

export default function ArticlePage({ articleData }: { articleData: Article[] }) {
    const {
        isLoading,
        loadingMessage,
        scrollRef,
        sectionRef,
        formatDate,
        handleLinkClick
    } = useStateArticle();

    return (
        <section ref={sectionRef} className='bg-[#ebffe6] py-0 md:py-3 container'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2 sm:gap-4 px-4 sm:px-10">
                <motion.h2
                    className="font-bold text-[#333333] text-lg sm:text-xl md:text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                    Artikel
                </motion.h2>
                <Link href="/blog" className="text-[#708B75] font-medium hover:underline text-xs sm:text-sm md:text-base" rel='article'>
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

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 bg-[#d9f5d7]">
                <div className="lg:col-span-1 px-4 sm:px-10 pt-8 md:pt-20 pb-4 sm:pb-0">
                    <motion.p
                        className="text-[#333333] text-base leading-relaxed font-normal max-w-full md:max-w-[230px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                        Setiap bangunan punya cerita, dan setiap ruang punya makna. Lewat artikel-artikel kami, temukan inspirasi dan pengetahuan yang relevan untuk menjawab kebutuhan ruang Anda yang terus berkembang.
                    </motion.p>
                </div>

                {/* Right Section - Article Previews */}
                <div
                    className="lg:col-span-2 overflow-x-auto scrollbar-hide"
                    ref={scrollRef}
                >
                    <div className="flex min-w-0 sm:min-w-max">
                        {articleData.map((article, idx) => (
                            <Link
                                href={`/blog/${article.slug}`}
                                key={article.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(article.title);
                                    setTimeout(() => {
                                        window.location.href = `/blog/${article.slug}`;
                                    }, 100);
                                }}
                            >
                                <article className="w-64 sm:w-96 flex-shrink-0">
                                    {/* Article Image */}
                                    <div className="relative h-60 sm:h-96 w-full aspect-[4/5]">
                                        <MotionImage
                                            src={article.thumbnail}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1], delay: idx * 0.05 }}
                                        />
                                    </div>

                                    {/* Article Content */}
                                    <div className="py-3 sm:py-4 flex flex-col gap-2">
                                        {/* Date */}
                                        <div className='flex flex-col md:flex-row items-start px-2 md:px-0 md:items-center gap-2'>
                                            <motion.p
                                                className="text-xs sm:text-sm text-[#70695e]"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true, amount: 0.3 }}
                                                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.06 }}
                                            >
                                                {formatDate(article.created_at)}
                                            </motion.p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                <motion.span
                                                    className="px-2 py-1 bg-[#d96f4e] text-white text-[10px] sm:text-xs rounded-sm"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true, amount: 0.3 }}
                                                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.08 }}
                                                >
                                                    {article.article_categories}
                                                </motion.span>

                                                <motion.span
                                                    className="px-2 py-1 bg-[#d96f4e] text-white text-[10px] sm:text-xs rounded-sm"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true, amount: 0.3 }}
                                                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.1 }}
                                                >
                                                    {article.article_sub_categories}
                                                </motion.span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <motion.h3
                                            className="font-bold text-[#333333] text-xs sm:text-sm px-2 md:px-0 leading-tight line-clamp-3 flex-grow"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.12 }}
                                        >
                                            {article.title}
                                        </motion.h3>
                                    </div>
                                </article>
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
