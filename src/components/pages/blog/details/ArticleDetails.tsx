"use client"

import React from 'react'

import { format } from 'date-fns'

import { Share2, Facebook, Twitter, Instagram, Linkedin, Mail, ArrowLeft } from 'lucide-react'

import type { ArticleDetails } from '@/types/Article'

import Image from 'next/image'

export default function ArticleDetails({ articleData }: { articleData: ArticleDetails }) {
    const formatDate = (dateString: string) => {
        try {
            return format(new Date(dateString), 'MMMM dd, yyyy')
        } catch {
            return format(new Date(), 'MMMM dd, yyyy')
        }
    }

    // Function to parse HTML content and extract structured data
    const parseArticleContent = (htmlContent: string) => {
        // Remove HTML tags and extract clean text
        const cleanText = htmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

        // Extract paragraphs with their styling information
        const paragraphs = htmlContent.match(/<p[^>]*>(.*?)<\/p>/g)?.map(p => {
            const text = p.replace(/<[^>]*>/g, '').trim()
            const hasStrong = p.includes('<strong>')
            const hasCenterAlign = p.includes('ql-align-center')
            return { text, isBold: hasStrong, centerAlign: hasCenterAlign }
        }).filter(p => p.text.length > 0 && p.text !== '<br>' && p.text !== '') || []

        // Use all paragraphs without filtering duplicates
        const uniqueParagraphs = paragraphs

        return {
            cleanText,
            paragraphs: uniqueParagraphs,
            wordCount: cleanText.split(' ').length
        }
    }

    // Parse the article content
    const parsedContent = parseArticleContent(articleData.content)

    // Split all paragraphs into two parts for two-column layout
    // Ensure right column has enough content
    const totalParagraphs = parsedContent.paragraphs.length
    const leftColumnCount = Math.min(8, Math.ceil(totalParagraphs * 0.6)) // Left column gets 60% or max 8 paragraphs
    const leftColumnContent = parsedContent.paragraphs.slice(0, leftColumnCount)
    const rightColumnContent = parsedContent.paragraphs.slice(leftColumnCount)

    return (
        <section className="min-h-screen bg-[#fff7e6] container">
            {/* Banner */}
            <div className='relative w-full aspect-[21/9] overflow-hidden'>
                <Image
                    fill
                    src={articleData.thumbnail[0]}
                    className="object-cover"
                    alt="Urban Landscape"
                />
            </div>

            {/* Two Column Layout */}
            <header className="max-w-7xl mx-auto px-4 md:px-8 py-10">
                {/* BY NATURE Label */}
                <div className='flex flex-col gap-6 mb-10 md:mb-14'>
                    <h3 className="text-sm font-medium text-gray-600 uppercase">{articleData.article_categories}</h3>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
                        {articleData.title}
                    </h1>

                    {/* Date and Social Icons */}
                    <div className="flex gap-4 items-center">
                        <time className="text-base text-gray-600 font-medium">
                            {formatDate(articleData.created_at)}
                        </time>

                        <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" title="Share">
                                <Share2 size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" title="Facebook">
                                <Facebook size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" title="Twitter">
                                <Twitter size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" title="Instagram">
                                <Instagram size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" title="LinkedIn">
                                <Linkedin size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" title="Email">
                                <Mail size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* First two paragraphs */}
                        {leftColumnContent.slice(0, 2).map((paragraph, index) => (
                            <p key={index} className={`text-base text-gray-800 leading-relaxed ${paragraph.isBold ? 'font-bold' : ''} ${paragraph.centerAlign ? 'text-center' : ''}`}>
                                {paragraph.text}
                            </p>
                        ))}

                        {/* First Large Image */}
                        <div className="my-12">
                            <div className="relative w-full aspect-[3/3] rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    fill
                                    src={articleData.thumbnail[1]}
                                    className="object-cover"
                                    alt="Urban Architecture"
                                />
                            </div>
                        </div>

                        {/* Only 3 paragraphs after image */}
                        {leftColumnContent.slice(2, 6).map((paragraph, index) => (
                            <p key={index} className={`text-base text-gray-800 leading-relaxed ${paragraph.isBold ? 'font-bold' : ''} ${paragraph.centerAlign ? 'text-center' : ''}`}>
                                {paragraph.text}
                            </p>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Remaining paragraphs from left column (after the 3 paragraphs) */}
                        {leftColumnContent.slice(6).map((paragraph, index) => (
                            <p key={index} className={`text-base text-gray-800 leading-relaxed ${paragraph.isBold ? 'font-bold' : ''} ${paragraph.centerAlign ? 'text-center' : ''}`}>
                                {paragraph.text}
                            </p>
                        ))}

                        {/* Second part of all paragraphs */}
                        {rightColumnContent.length > 0 ? (
                            rightColumnContent.map((paragraph, index) => (
                                <p key={index} className={`text-base text-gray-800 leading-relaxed ${paragraph.isBold ? 'font-bold' : ''} ${paragraph.centerAlign ? 'text-center' : ''}`}>
                                    {paragraph.text}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No additional content</p>
                        )}
                    </div>
                </div>

                {/* Second Large Image - Standalone */}
                <div className="my-12">
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            fill
                            src={articleData.thumbnail[2]}
                            className="object-cover"
                            alt="Urban Landscape"
                        />
                    </div>

                    <h3 className='text-center text-base mt-10'>{articleData.label_image}</h3>
                </div>

                <div className='flex flex-col gap-2 max-w-2xl'>
                    <span className='font-bold text-gray-800'>Conclusion</span>
                    <h3 className='text-base text-gray-800 leading-relaxed'>{articleData.closing_text}</h3>
                    <div className='mt-4'>
                        <ArrowLeft size={28} />
                    </div>
                </div>
            </header>
        </section>
    )
}
