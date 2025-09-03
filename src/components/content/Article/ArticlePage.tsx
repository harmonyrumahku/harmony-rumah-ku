"use client"

import React from 'react'

import { Article } from '@/types/Article'

import Link from 'next/link'

import Image from 'next/image'

import LoadingOverlay from '@/base/Loading/LoadingOverlay';

import { useStateArticle } from '@/components/content/Article/lib/useStateArticle';

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
                <h2 className="font-bold text-[#333333] text-lg sm:text-xl md:text-2xl">Artikel</h2>
                <Link href="/blog" className="text-[#708B75] font-medium hover:underline text-xs sm:text-sm md:text-base" rel='article'>
                    VIEW MORE
                </Link>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 bg-[#d9f5d7]">
                <div className="lg:col-span-1 px-4 sm:px-10 pt-8 md:pt-20 pb-4 sm:pb-0">
                    <p className="text-[#333333] text-base leading-relaxed font-normal max-w-full md:max-w-[230px]">
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

            <LoadingOverlay
                isLoading={isLoading}
                message={loadingMessage}
            />
        </section>
    )
}
