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

export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:flex-row bg-[#f9f4ea] min-h-[400px]">
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
                        <Link href="https://www.tiktok.com/@harmonyrumahku" className='bg-[#F6E5C2] rounded-full p-3' target='_blank' rel='noopener noreferrer'>
                            <FaTiktok className='w-5 h-5 text-[#E15F24]' />
                        </Link>
                        <Link href="https://www.instagram.com/harmonyrumahku" className='bg-[#F6E5C2] rounded-full p-3' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='w-5 h-5 text-[#E15F24]' />
                        </Link>
                        <Link href="https://www.facebook.com/harmonyrumahku" className='bg-[#F6E5C2] rounded-full p-3' target='_blank' rel='noopener noreferrer'>
                            <FaFacebookF className='w-5 h-5 text-[#E15F24]' />
                        </Link>
                        <Link href="https://www.twitter.com/harmonyrumahku" className='bg-[#F6E5C2] rounded-full p-3' target='_blank' rel='noopener noreferrer'>
                            <IoLogoTwitter className='w-5 h-5 text-[#E15F24]' />
                        </Link>
                    </div>

                    <nav className="flex flex-col gap-2 text-base text-gray-700">
                        <a href="#" className="hover:underline">Project</a>
                        <a href="#" className="hover:underline">Awards</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Artikel</a>
                        <a href="#" className="hover:underline">Kontak</a>
                    </nav>
                </div>
            </div>

            {/* Kanan: Form Kontak */}
            <div className="w-full md:w-2/3 bg-[#e8d1b7] p-8 flex flex-col gap-4">
                <div className="font-bold text-3xl mb-1">Mari Terhubung, Bangun Harmoni Bersama</div>
                <div className="text-sm text-gray-700 mb-2">Ingin mulai mewujudkan hunian impian atau sekadar bertanya? Kami siap mendengarkan dan membantu setiap langkahnya.</div>
                <form className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <div className="flex flex-col flex-1 gap-2">
                            <Label htmlFor="footer-nama" className="text-xs font-medium mb-1">Nama Lengkap</Label>
                            <Input id="footer-nama" type="text" placeholder="Masukkan nama Anda" className="p-3 rounded-2xl bg-white border border-gray-300 text-sm" />
                        </div>
                        <div className="flex flex-col flex-1 gap-2">
                            <Label htmlFor="footer-email" className="text-xs font-medium mb-1">Alamat Email</Label>
                            <Input id="footer-email" type="email" placeholder="nama@email.com" className="p-3 rounded-2xl bg-white border border-gray-300 text-sm" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="footer-kebutuhan" className="text-xs font-medium mb-1">Ceritakan Kebutuhan Anda</Label>
                        <Textarea id="footer-kebutuhan" placeholder="Tulis pertanyaan, ide, atau kebutuhan Anda di sini" className="p-3 rounded-2xl bg-white border border-gray-300 text-sm min-h-[80px]" />
                    </div>
                    <button type="submit" className="bg-[#c97e5a] text-white rounded-2xl px-4 py-4 font-semibold mt-2 hover:bg-[#b96e4a] transition">Kirim Pesan</button>
                </form>
            </div>
        </footer>
    )
}
