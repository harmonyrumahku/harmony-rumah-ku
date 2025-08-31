import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProyekSkelaton() {
    return (
        <section className="min-h-screen bg-[#fff7e6] container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 min-h-screen">
                {/* Left Column - Text and Navigation */}
                <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-8 lg:h-fit lg:col-span-1 px-4 sm:px-6 lg:pl-10 pt-18 lg:pt-18">
                    {/* Description text skeleton */}
                    <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>

                    {/* Search and Filters */}
                    <div className="flex flex-col space-y-6">
                        {/* Search Bar skeleton */}
                        <Skeleton className="h-10 w-full rounded-md" />

                        <div className="flex flex-col gap-4">
                            {/* Kategori Filter skeleton */}
                            <Skeleton className="h-8 w-full" />

                            {/* Layanan Filter skeleton */}
                            <Skeleton className="h-8 w-full" />

                            {/* Wilayah Filter skeleton */}
                            <Skeleton className="h-8 w-full" />
                        </div>
                    </div>
                </div>

                {/* Right Column - Project Grid */}
                <div className="overflow-y-auto lg:max-h-screen scrollbar-hide lg:col-span-2 pt-4 sm:pt-6 lg:pt-20">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-8 gap-2">
                        {/* Generate 12 project skeleton cards */}
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <div key={idx} className="relative h-40 sm:h-48 lg:h-64 overflow-hidden">
                                <Skeleton className="w-full h-full rounded-md" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
