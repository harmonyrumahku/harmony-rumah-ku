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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 px-10">
                <h2 className="font-bold text-[#333333] text-xl sm:text-2xl">Article</h2>
                <Link href="/article" className="text-[#708B75] font-medium hover:underline text-sm sm:text-base" rel='article'>
                    VIEW MORE
                </Link>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#e8d1b7]">
                <div className="lg:col-span-1 px-10 pt-28">
                    <p className="text-[#333333] text-xl leading-relaxed font-normal max-w-[230px]">
                        Setiap bangunan punya cerita, dan setiap ruang punya makna. Lewat artikel-artikel kami, temukan inspirasi dan pengetahuan yang relevan untuk menjawab kebutuhan ruang Anda yang terus berkembang.
                    </p>
                </div>

                {/* Right Section - Article Previews */}
                <div className="lg:col-span-2 overflow-x-auto">
                    <div className="flex min-w-max">
                        {articleData.map((article) => (
                            <article key={article.id} className="w-80 flex-shrink-0">
                                {/* Article Image */}
                                <div className="relative h-96 w-full aspect-[4/5]">
                                    <Image
                                        src={article.thumbnail}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Article Content */}
                                <div className="py-4 flex flex-col gap-4">
                                    {/* Date */}
                                    <div className='flex flex-col md:flex-row gap-4'>
                                        <p className="text-sm text-[#708B75]">
                                            {formatDate(article.created_at)}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-[#d96f4e] text-white text-xs rounded-sm">
                                                {article.article_categories}
                                            </span>

                                            <span className="px-2 py-1 bg-[#d96f4e] text-white text-xs rounded-sm">
                                                {article.article_sub_categories}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-[#333333] text-sm leading-tight line-clamp-3 flex-grow">
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
