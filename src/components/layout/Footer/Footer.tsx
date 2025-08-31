"use client"

import React from 'react'

import Image from 'next/image'

import logo from "@/base/assets/logo.png"

import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

import { IoLogoTwitter } from "react-icons/io";

import Link from 'next/link'

import { Input } from '@/components/ui/input'

import { Label } from '@/components/ui/label'

import { Textarea } from '@/components/ui/textarea'

import { useContactForm } from '@/lib/useContactForm'

export default function Footer() {
    const {
        formData,
        isSubmitting,
        canSubmit,
        remainingTime,
        showLimitNotice,
        handleInputChange,
        handleSubmit
    } = useContactForm();

    return (
        <footer className="w-full flex flex-col md:flex-row bg-[#ebffe6] min-h-[400px] container">
            {/* Kiri: Logo, Nama, Alamat */}
            <div className="flex flex-col md:flex-row items-start p-8 w-full gap-4">
                <div className='flex flex-col gap-6 mb-4 md:mb-0'>
                    <Image src={logo} alt="HarmonyrumahKU" width={100} height={100} />
                    <div className="text-2xl font-normal">HarmonyrumahKU</div>
                    <div className="text-sm text-gray-600">Jln. alamat</div>
                </div>

                {/* Tengah: Ikon Sosmed & Navigasi */}
                <div className="flex flex-col justify-center items-start md:items-end w-full pr-0 md:pr-24 p-0 md:p-8 gap-6">
                    <div className="flex gap-8 mb-4">
                        {/* Placeholder Ikon Sosmed */}
                        <Link href="https://www.tiktok.com/@harmonyrumahku" className='bg-[#d9f5d7] rounded-full p-3' target='_blank' rel='noopener noreferrer'>
                            <FaTiktok className='w-5 h-5' />
                        </Link>
                        <Link href="https://www.instagram.com/harmonyrumahku" className='bg-[#d9f5d7] rounded-full p-3' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='w-5 h-5' />
                        </Link>
                        <Link href="https://www.facebook.com/harmonyrumahku" className='bg-[#d9f5d7] rounded-full p-3' target='_blank' rel='noopener noreferrer'>
                            <FaFacebookF className='w-5 h-5' />
                        </Link>
                        <Link href="https://www.twitter.com/harmonyrumahku" className='bg-[#d9f5d7] rounded-full p-3' target='_blank' rel='noopener noreferrer'>
                            <IoLogoTwitter className='w-5 h-5' />
                        </Link>
                    </div>

                    <nav className="flex flex-wrap md:flex-col gap-8 md:gap-4 text-base text-gray-700">
                        <a href="#" className="hover:underline">Project</a>
                        <a href="#" className="hover:underline">Awards</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Artikel</a>
                        <a href="#" className="hover:underline">Kontak</a>
                    </nav>
                </div>
            </div>

            {/* Kanan: Form Kontak */}
            <div className="w-full md:w-2/3 bg-[#d9f5d7] p-8 flex flex-col gap-4">
                <div className="font-bold text-3xl mb-1">Mari Terhubung, Bangun Harmoni Bersama</div>
                <div className="text-sm text-gray-700 mb-2">Ingin mulai mewujudkan hunian impian atau sekadar bertanya? Kami siap mendengarkan dan membantu setiap langkahnya.</div>

                {/* Daily Limit Notice */}
                {showLimitNotice && (
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg text-sm">
                        <strong>Batas Harian:</strong> Anda sudah mengirim pesan hari ini.
                        Silakan coba lagi dalam <strong>{remainingTime}</strong>.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <div className="flex flex-col flex-1 gap-2">
                            <Label htmlFor="footer-nama_lengkap" className="text-xs font-medium mb-1">Nama Lengkap</Label>
                            <Input
                                id="footer-nama_lengkap"
                                type="text"
                                placeholder="Masukkan nama Anda"
                                className="p-3 rounded-2xl bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.nama_lengkap}
                                onChange={handleInputChange}
                                required
                                disabled={!canSubmit}
                            />
                        </div>
                        <div className="flex flex-col flex-1 gap-2">
                            <Label htmlFor="footer-email" className="text-xs font-medium mb-1">Alamat Email</Label>
                            <Input
                                id="footer-email"
                                type="email"
                                placeholder="nama@email.com"
                                className="p-3 rounded-2xl bg-white border border-gray-300 text-sm"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                disabled={!canSubmit}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="footer-kebutuhan" className="text-xs font-medium mb-1">Ceritakan Kebutuhan Anda</Label>
                        <Textarea
                            id="footer-kebutuhan"
                            placeholder="Tulis pertanyaan, ide, atau kebutuhan Anda di sini"
                            className="p-3 rounded-2xl bg-white border border-gray-300 text-sm min-h-[80px]"
                            value={formData.kebutuhan}
                            onChange={handleInputChange}
                            required
                            disabled={!canSubmit}
                        />
                    </div>

                    {/* Status Messages */}
                    {/* Removed inline status messages */}

                    <button
                        type="submit"
                        disabled={isSubmitting || !canSubmit}
                        className="bg-[#d9f5d7] border border-white rounded-2xl px-4 py-4 font-semibold mt-2 hover:bg-[#d9f5d7] transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Mengirim...' : !canSubmit ? 'Batas Harian Tercapai' : 'Kirim Pesan'}
                    </button>
                </form>
            </div>
        </footer>
    )
}
