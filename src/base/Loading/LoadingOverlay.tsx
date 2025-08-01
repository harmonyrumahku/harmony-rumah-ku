"use client"

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingOverlayProps {
    isLoading: boolean;
    message?: string;
    progress?: number; // 0-100
}

const SimpleLoader = () => (
    <div className="relative w-32 h-32">
        {/* Simple grid background */}
        <div className="absolute inset-0">
            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="simpleGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#8a9987" strokeWidth="0.3" strokeOpacity="0.2" />
                    </pattern>
                </defs>
                <rect width="128" height="128" fill="url(#simpleGrid)" />
            </svg>
        </div>

        {/* Simple house construction */}
        <div className="absolute inset-0 flex items-end justify-center">
            {/* Foundation */}
            <motion.div
                className="w-20 h-3 bg-[#8a9987] rounded-lg shadow-sm"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* House layers */}
            <div className="absolute bottom-3 flex flex-col items-center space-y-1">
                {/* Layer 1 */}
                <motion.div
                    className="w-16 h-4 bg-[#8a9987]/80 rounded-lg shadow-sm"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                />

                {/* Layer 2 */}
                <motion.div
                    className="w-18 h-4 bg-[#8a9987]/60 rounded-lg shadow-sm"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
                />

                {/* Layer 3 */}
                <motion.div
                    className="w-20 h-4 bg-[#8a9987]/40 rounded-lg shadow-sm"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
                />

                {/* Roof */}
                <motion.div
                    className="w-22 h-3 bg-[#8a9987] rounded-lg shadow-sm"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
                />
            </div>
        </div>

        {/* Simple floating elements */}
        <motion.div
            className="absolute top-3 right-3 w-4 h-4 bg-[#8a9987] rounded-full shadow-sm"
            animate={{
                y: [0, -12, 0],
                opacity: [0.6, 1, 0.6]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />

        <motion.div
            className="absolute top-6 left-6 w-3 h-3 bg-[#8a9987] rounded-full shadow-sm"
            animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
            }}
        />

        {/* Simple completion indicator */}
        <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#8a9987] rounded-full flex items-center justify-center shadow-sm"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 4.2, duration: 0.6, type: "spring", stiffness: 200 }}
        >
            <motion.svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#fff7e6]"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 4.5, duration: 0.4 }}
            >
                <path
                    d="M3 7L6 10L11 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.svg>
        </motion.div>
    </div>
);

const SimpleProgressBar = ({ progress }: { progress?: number }) => {
    if (progress === undefined) return null;

    return (
        <div className="w-full max-w-sm">
            <div className="w-full h-2 bg-[#8a9987]/20 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#8a9987] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export default function LoadingOverlay({ isLoading, message = "Membangun Hunian...", progress }: LoadingOverlayProps) {
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 bg-[#fff7e6] flex items-center justify-center z-[200] w-full h-full"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                        }}
                        className="bg-[#fff7e6] flex flex-col items-center justify-center gap-10 p-10"
                    >
                        <div className="relative">
                            <SimpleLoader />
                        </div>

                        <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-[#8a9987] font-semibold text-xl text-center leading-relaxed"
                            >
                                {message}
                            </motion.p>

                            <motion.div
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                            >
                                <SimpleProgressBar progress={progress} />
                            </motion.div>

                            {progress !== undefined && (
                                <motion.p
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 2.0, duration: 0.5 }}
                                    className="text-sm text-[#8a9987] font-mono font-medium"
                                >
                                    {progress}%
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 