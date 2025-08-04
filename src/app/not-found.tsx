"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Search, Phone, Sparkles, Zap, Target } from 'lucide-react'

export default function NotFound() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <section className="min-h-screen relative overflow-hidden bg-[#fff7e6]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {isClient && (
                    <>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                rotate: [360, 180, 0],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl"
                        />
                    </>
                )}
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center pt-16 p-4">
                <div className="max-w-5xl mx-auto text-center">
                    {isClient ? (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-12"
                        >
                            {/* 404 Number with Enhanced Effects */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.3, ease: "backOut" }}
                                className="relative"
                            >
                                <div className="relative">
                                    <h1 className="text-8xl md:text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 leading-none tracking-tighter">
                                        404
                                    </h1>
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl -z-10 animate-pulse"></div>
                                    {/* Sparkle Effects */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute -top-4 -right-4 text-blue-500/70"
                                    >
                                        <Sparkles size={32} />
                                    </motion.div>
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="absolute -bottom-4 -left-4 text-purple-500/70"
                                    >
                                        <Zap size={28} />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Error Message with Modern Typography */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="space-y-6"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                                    Halaman Tidak Ditemukan
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                    Maaf, halaman yang Anda cari tidak dapat ditemukan.
                                    Mungkin halaman telah dipindahkan atau URL yang Anda masukkan salah.
                                </p>
                            </motion.div>

                            {/* Enhanced Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href="/"
                                        className="group relative flex items-center gap-3 px-10 py-5 bg-[#c97e5b] text-white rounded-2xl font-semibold text-lg shadow-2xl hover:bg-[#b86d4a] transition-all duration-300 overflow-hidden"
                                    >
                                        <Home className="w-6 h-6 relative z-10" />
                                        <span className="relative z-10">Kembali ke Beranda</span>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href="/proyek"
                                        className="group flex items-center gap-3 px-10 py-5 bg-white/80 backdrop-blur-xl text-gray-700 rounded-2xl font-semibold text-lg border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-300 shadow-xl"
                                    >
                                        <Search className="w-6 h-6" />
                                        Lihat Proyek
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Modern Help Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                className="pt-16"
                            >
                                <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl border border-gray-200 relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Target className="w-8 h-8 text-blue-500" />
                                            <h3 className="text-2xl font-bold text-gray-800">
                                                Butuh Bantuan?
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                            Tim kami siap membantu Anda menemukan informasi yang Anda butuhkan.
                                            Jangan ragu untuk menghubungi kami.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <Link
                                                    href="/tentang-kami"
                                                    className="flex items-center gap-3 px-8 py-4 bg-[#c97e5b] text-white rounded-xl font-semibold hover:bg-[#b86d4a] transition-all duration-300 shadow-lg hover:shadow-[#c97e5b]/25"
                                                >
                                                    <ArrowLeft className="w-5 h-5" />
                                                    Tentang Kami
                                                </Link>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <Link
                                                    href={`${process.env.NEXT_PUBLIC_URL}#kontak`}
                                                    className="flex items-center gap-3 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold border border-gray-200 hover:bg-gray-200 transition-all duration-300"
                                                >
                                                    <Phone className="w-5 h-5" />
                                                    Hubungi Kami
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        // Server-side fallback content
                        <div className="space-y-12">
                            <div className="relative">
                                <h1 className="text-8xl md:text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 leading-none tracking-tighter">
                                    404
                                </h1>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                                    Halaman Tidak Ditemukan
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                                    Maaf, halaman yang Anda cari tidak dapat ditemukan.
                                    Mungkin halaman telah dipindahkan atau URL yang Anda masukkan salah.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                                <Link
                                    href="/"
                                    className="group relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                                >
                                    <Home className="w-6 h-6" />
                                    <span>Kembali ke Beranda</span>
                                </Link>
                                <Link
                                    href="/proyek"
                                    className="group flex items-center gap-3 px-10 py-5 bg-white/80 backdrop-blur-xl text-gray-700 rounded-2xl font-semibold text-lg border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-300 shadow-xl"
                                >
                                    <Search className="w-6 h-6" />
                                    Lihat Proyek
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
