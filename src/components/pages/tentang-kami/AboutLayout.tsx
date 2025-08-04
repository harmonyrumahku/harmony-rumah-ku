"use client"

import React from 'react';

import { Button } from '@/components/ui/button';

import { ArrowLeft } from 'lucide-react';

import Image from 'next/image';

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-[#fff7e6]">
            <div className="container px-4 lg:px-10">
                <div className="flex flex-col lg:flex-row min-h-screen">

                    {/* Left Section - Text and Form */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="max-w-md mx-auto lg:mx-0">
                            {/* Coming Soon Label */}
                            <p className="text-sm font-medium text-black uppercase tracking-wide mb-4">
                                Dalam Pengembangan
                            </p>

                            {/* Main Title */}
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight">
                                Halaman ini sedang dalam tahap perkembangan.
                            </h1>

                            {/* Call to Action */}
                            <p className="text-lg text-black mb-8 leading-relaxed">
                                Kami sedang bekerja keras untuk menyelesaikan halaman ini.
                            </p>

                            {/* Back Button */}
                            <Button
                                onClick={() => window.history.back()}
                                className="bg-black hover:bg-gray-800 text-white flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Kembali
                            </Button>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 relative overflow-hidden">
                        {/* Placeholder for the woman with umbrella image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image src={"https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg"} alt='image-thumb' width={1080} height={1080} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 