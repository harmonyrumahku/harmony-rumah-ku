"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ImagePreviewProps {
    selectedImage: string | null;
    setSelectedImage: (image: string | null) => void;
    images: string[];
    setCurrentImageIndex: (index: number) => void;
}

export default function ImagePreview({
    selectedImage,
    setSelectedImage,
    images,
    setCurrentImageIndex
}: ImagePreviewProps) {
    // Disable body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size)';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [selectedImage]);

    if (!selectedImage) return null;

    const handleImageError = (url: string) => {
        console.error(`Failed to load image: ${url}`);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[200] overflow-hidden"
                onClick={() => setSelectedImage(null)}
            >
                {/* Modern Container with Architectural Design */}
                <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center p-2 lg:p-6 gap-0 lg:gap-6">

                    {/* Close Button - Modern Floating Design */}
                    <button
                        className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white z-30 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 shadow-2xl group"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close preview"
                    >
                        <svg
                            className="w-6 h-6 lg:w-7 lg:h-7 transition-transform duration-300 group-hover:rotate-90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Main Preview - Enhanced with Modern Styling */}
                    <motion.div
                        className="relative w-full h-[60vh] lg:h-full lg:flex-1 flex items-center justify-center overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-background/95 to-secondary/20 backdrop-blur-sm border border-white/10 shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <Image
                            src={selectedImage}
                            alt="Project Preview"
                            fill
                            className="object-contain p-4 lg:p-8"
                            priority
                            onError={() => handleImageError(selectedImage)}
                            unoptimized={true}
                        />

                        {/* Subtle Overlay for Better Image Visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Thumbnail Gallery - Modern Grid Layout */}
                    <div className="w-full lg:w-80 xl:w-96 h-[35vh] lg:h-full p-3 lg:p-4">
                        <div className="h-full overflow-y-auto scrollbar-hide">
                            {/* Gallery Header */}
                            <div className="mb-4 pb-3 border-b border-white/10">
                                <h3 className="text-white/90 font-playfair text-lg lg:text-xl font-medium">
                                    Gallery View
                                </h3>
                                <p className="text-white/60 text-sm">
                                    {images.length} images available
                                </p>
                            </div>

                            {/* Thumbnail Grid */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                                {images.map((image, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={cn(
                                            "cursor-pointer rounded-xl overflow-hidden transition-all duration-300 group relative",
                                            selectedImage === image
                                                ? 'ring-2 ring-primary scale-105 shadow-xl shadow-primary/20'
                                                : 'hover:scale-105 hover:ring-2 hover:ring-white/30 hover:shadow-lg'
                                        )}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage(image);
                                            setCurrentImageIndex(idx);
                                        }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <div className="relative aspect-square bg-gradient-to-br from-secondary/20 to-muted/10">
                                            <Image
                                                src={image}
                                                alt={`Project thumbnail ${idx + 1}`}
                                                fill
                                                className="object-cover transition-all duration-300 group-hover:scale-110"
                                                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
                                                onError={() => handleImageError(image)}
                                                unoptimized={true}
                                            />

                                            {/* Selection Indicator */}
                                            {selectedImage === image && (
                                                <motion.div
                                                    className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Image Number Badge */}
                                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                                                {idx + 1}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
} 