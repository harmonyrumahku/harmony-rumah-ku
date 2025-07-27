import React from 'react'

import { Article } from '@/types/Article'

import Link from 'next/link'

import Image from 'next/image'

export default function ArticlePage({ articleData }: { articleData: Article[] }) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    return (
        <section className='bg-[#fff7e6]'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2 sm:gap-4 px-4 sm:px-10">
                <h2 className="font-bold text-[#333333] text-lg sm:text-xl md:text-2xl">Article</h2>
                <Link href="/article" className="text-[#708B75] font-medium hover:underline text-xs sm:text-sm md:text-base" rel='article'>
                    VIEW MORE
                </Link>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 bg-[#e8d1b7]">
                <div className="lg:col-span-1 px-4 sm:px-10 pt-8 sm:pt-28 pb-4 sm:pb-0">
                    <p className="text-[#333333] text-base sm:text-xl leading-relaxed font-normal max-w-full sm:max-w-[230px]">
                        Setiap bangunan punya cerita, dan setiap ruang punya makna. Lewat artikel-artikel kami, temukan inspirasi dan pengetahuan yang relevan untuk menjawab kebutuhan ruang Anda yang terus berkembang.
                    </p>
                </div>

                {/* Right Section - Article Previews */}
                <div className="lg:col-span-2 overflow-x-auto">
                    <div className="flex min-w-0 sm:min-w-max">
                        {articleData.map((article) => (
                            <article key={article.id} className="w-64 sm:w-80 flex-shrink-0">
                                {/* Article Image */}
                                <div className="relative h-60 sm:h-96 w-full aspect-[4/5]">
                                    <Image
                                        src={article.thumbnail}
                                        alt={article.title}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>

                                {/* Article Content */}
                                <div className="py-3 sm:py-4 flex flex-col gap-2 sm:gap-4">
                                    {/* Date */}
                                    <div className='flex flex-col md:flex-row gap-2 sm:gap-4'>
                                        <p className="text-xs sm:text-sm text-[#708B75]">
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
                                    <h3 className="font-bold text-[#333333] text-xs sm:text-sm leading-tight line-clamp-3 flex-grow">
                                        {article.title}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
