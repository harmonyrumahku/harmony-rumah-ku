import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'

export default function AboutSkelaton() {
    return (
        <div className="min-h-screen bg-background">
            {/* AboutLayout Skeleton */}
            <section className="container pt-32">
                <div className="px-4 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Statistics */}
                        <div className="space-y-10">
                            <div className="text-center lg:text-left">
                                <Skeleton className="h-16 w-32 mx-auto lg:mx-0 mb-4" />
                                <div className="space-y-3">
                                    <Skeleton className="h-6 w-full" />
                                    <Skeleton className="h-6 w-5/6" />
                                    <Skeleton className="h-6 w-4/5" />
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <Skeleton className="h-[300px] w-[300px] rounded-md" />
                            </div>
                        </div>

                        {/* Middle Column - Services */}
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-32" />
                            <div className="space-y-2">
                                {Array.from({ length: 4 }).map((_, idx) => (
                                    <Skeleton key={idx} className="h-6 w-3/4" />
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Cities Progress & Achievement */}
                        <div className="space-y-6">
                            <div className="space-y-3">
                                {Array.from({ length: 3 }).map((_, idx) => (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <Skeleton className="h-6 w-32" />
                                        <Skeleton className="h-6 w-12" />
                                        <Skeleton className="h-2 flex-1 rounded-full" />
                                    </div>
                                ))}
                            </div>
                            <div className="bg-[#f7fff5] border border-[#f7fff5] rounded-lg p-4 max-w-[300px]">
                                <div className="flex items-center space-x-2 mb-3">
                                    <Skeleton className="w-5 h-5 rounded" />
                                    <Skeleton className="h-6 w-24" />
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-6 w-full" />
                                    <Skeleton className="h-6 w-5/6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AboutBudaya Skeleton */}
            <section className="container">
                <div className="flex flex-col md:flex-row min-h-[600px]">
                    {/* Column 1 - Dark Olive Green Background */}
                    <div className="bg-[#798a25] w-full md:w-[50%] p-8 lg:p-12">
                        <Skeleton className="h-12 w-3/4 mb-6 bg-[#f5f1eb]" />
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <Skeleton className="h-6 w-full bg-[#f5f1eb]" />
                                <Skeleton className="h-6 w-5/6 bg-[#f5f1eb]" />
                                <Skeleton className="h-6 w-4/5 bg-[#f5f1eb]" />
                            </div>
                            <div>
                                <Skeleton className="h-6 w-1/2 mb-3 bg-[#f5f1eb]" />
                                <div className="space-y-3 pl-4">
                                    {Array.from({ length: 4 }).map((_, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <Skeleton className="w-2 h-2 rounded-full mt-3 mr-2 flex-shrink-0 bg-[#f5f1eb]" />
                                            <Skeleton className="h-6 w-3/4 bg-[#f5f1eb]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Skeleton className="h-6 w-full bg-[#f5f1eb]" />
                                <Skeleton className="h-6 w-4/5 bg-[#f5f1eb]" />
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Pale Mint Green Background */}
                    <div className="bg-[#e8ffe9] w-full md:w-[25%] p-8 lg:p-12">
                        <Skeleton className="h-12 w-3/4 mb-6" />
                        <div className="space-y-3">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-5/6" />
                            <Skeleton className="h-6 w-4/5" />
                        </div>
                    </div>

                    {/* Column 3 - Pale Mint Green Background */}
                    <div className="bg-[#d9f5d7] w-full md:w-[25%] p-8 lg:p-12">
                        <Skeleton className="h-12 w-3/4 mb-6" />
                        <div className="space-y-3">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-5/6" />
                            <Skeleton className="h-6 w-4/5" />
                        </div>
                    </div>
                </div>
            </section>

            {/* AboutSolusi Skeleton */}
            <section>
                {/* Top Section - Split Layout */}
                <div className="flex flex-col lg:flex-row h-auto lg:h-[60vh]">
                    {/* Left Panel - Yellow-beige background */}
                    <div className="w-full lg:w-1/3 bg-[#F5F5DC] flex items-center p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0">
                        <div className="text-left w-full">
                            <Skeleton className="h-16 w-3/4 mb-2" />
                            <Skeleton className="h-16 w-2/3 mb-4" />
                            <Skeleton className="h-8 w-1/2 ml-auto" />
                        </div>
                    </div>

                    {/* Right Panel - Image */}
                    <div className="w-full lg:w-2/3 relative h-[40vh] lg:h-auto">
                        <Skeleton className="w-full h-full" />
                    </div>
                </div>

                {/* Bottom Section - Four Columns */}
                <div className="bg-[#E8F5E8] min-h-[40vh]">
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full">
                        {/* First Column - Main Headings */}
                        <div className="flex flex-col bg-[#d9f5d7] justify-center p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0">
                            <Skeleton className="h-12 w-3/4 mb-4 lg:mb-6" />
                            <Skeleton className="h-12 w-2/3 mb-4 lg:mb-6" />
                            <Skeleton className="h-12 w-5/6" />
                        </div>

                        {/* Second Column - Design Services */}
                        <div className="flex flex-col bg-[#e8ffe9] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0">
                            <Skeleton className="h-8 w-24 mb-6 lg:mb-8" />
                            <div className="space-y-3 lg:space-y-4">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <Skeleton key={idx} className="h-6 w-3/4" />
                                ))}
                            </div>
                        </div>

                        {/* Third Column - Engineering Services */}
                        <div className="flex flex-col bg-[#d9f5d7] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0">
                            <Skeleton className="h-8 w-32 mb-6 lg:mb-8" />
                            <div className="space-y-3 lg:space-y-4">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <Skeleton key={idx} className="h-6 w-3/4" />
                                ))}
                            </div>
                        </div>

                        {/* Fourth Column - Management Services */}
                        <div className="flex flex-col bg-[#e8ffe9] p-6 sm:p-8 lg:p-12 min-h-[30vh] lg:min-h-0">
                            <Skeleton className="h-8 w-28 mb-6 lg:mb-8" />
                            <div className="space-y-3 lg:space-y-4">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <Skeleton key={idx} className="h-6 w-3/4" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AboutFilosofi Skeleton */}
            <section className="container">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Top-Left: Image Section */}
                    <div className="relative h-80 md:h-96 overflow-hidden">
                        <Skeleton className="w-full h-full" />
                    </div>

                    {/* Top-Middle: Text Block */}
                    <div className="bg-[#def5dc] p-6 md:p-8 flex flex-col justify-center">
                        <div className="space-y-3 max-w-[350px]">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-5/6" />
                            <Skeleton className="h-6 w-4/5" />
                        </div>
                    </div>

                    {/* Top-Right: Title with Background */}
                    <div className="relative p-6 md:p-8 flex items-center justify-center overflow-hidden">
                        <Skeleton className="w-full h-full absolute inset-0" />
                        <div className="relative z-10">
                            <Skeleton className="h-8 w-48" />
                        </div>
                    </div>

                    {/* Bottom-Left: Philosophy Section */}
                    <div className="bg-[#def5dc] p-6 md:p-8">
                        <Skeleton className="h-8 w-3/4 mb-4" />
                        <div className="space-y-3">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-5/6" />
                            <Skeleton className="h-6 w-4/5" />
                        </div>
                    </div>

                    {/* Bottom-Middle: Principles Section */}
                    <div className="bg-[#798a25] p-6 md:p-8">
                        <div className="space-y-3">
                            <Skeleton className="h-6 w-full bg-white" />
                            <Skeleton className="h-6 w-5/6 bg-white" />
                            <Skeleton className="h-6 w-4/5 bg-white" />
                            <Skeleton className="h-6 w-3/4 bg-white" />
                        </div>
                    </div>

                    {/* Bottom-Right: Statistics Section */}
                    <div className="bg-[#def5dc] p-6 md:p-8 rounded-lg flex flex-col items-start justify-center">
                        <div className="flex flex-col gap-4">
                            <Skeleton className="h-16 w-24" />
                            <div className="space-y-2">
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="h-6 w-4/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
