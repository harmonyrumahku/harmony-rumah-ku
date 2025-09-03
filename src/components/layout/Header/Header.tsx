"use client"

import React from 'react'

import Link from 'next/link'

import { useHeaderState } from '@/lib/useHeaderState'

export default function Header() {
    const {
        menuOpen,
        isScrolled,
        handleMobileMenuClose,
        toggleMobileMenu,
        navigationItems,
        pathname,
    } = useHeaderState();

    return (
        <header className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ease-out ${isScrolled ? 'bg-[#ebffe6]/95 shadow-lg' : 'bg-[#ebffe6]'}`}>
            <nav className='py-4 container flex items-center justify-between w-full px-4 lg:px-10'>
                {/* Brand Logo */}
                <Link href="/" className="text-base md:text-2xl font-semibold text-[#173d2a] tracking-wide select-none transition-all duration-300 hover:scale-105" rel='home'>
                    HarmonyrumahKU
                </Link>

                {/* Desktop Navigation - Central Bar */}
                <div className="hidden lg:flex">
                    <div className="bg-[#d4f0c4]/80 backdrop-blur-sm rounded-full px-2 py-2 flex items-center space-x-2">
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href === "/" && pathname === "/") ||
                                (item.href === "/awards" && pathname.startsWith("/awards")) ||
                                (item.href === "/blog" && pathname.startsWith("/blog")) ||
                                (item.href === "/proyek" && pathname.startsWith("/proyek"));
                            return (
                                <button
                                    key={item.href}
                                    onClick={item.handler}
                                    className={`px-4 py-2.5 rounded-full flex items-center space-x-2 cursor-pointer transition-all duration-300 ${isActive
                                        ? 'bg-[#315440] text-white shadow-lg shadow-[#315440]/25'
                                        : 'bg-transparent text-[#315440] hover:text-[#173d2a] hover:bg-[#c4e8b4]/50'
                                        }`}
                                >
                                    {/* Icons for each navigation item */}
                                    <span className="w-4 h-4">
                                        {item.label === "BERANDA" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                            </svg>
                                        )}
                                        {item.label === "PROYEK" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z" />
                                            </svg>
                                        )}
                                        {item.label === "AWARDS" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        )}
                                        {item.label === "BLOG" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                                            </svg>
                                        )}
                                        {item.label === "TENTANG KAMI" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                            </svg>
                                        )}
                                        {item.label === "KONTAK" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        )}
                                    </span>
                                    <span className="font-medium text-sm">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Action Buttons - Right Side */}
                <div className="hidden lg:flex items-center space-x-3">
                    <Link href="/jasa" className="px-5 py-2 rounded-full bg-transparent border border-[#315440] text-[#315440] font-medium text-sm transition-all duration-300 hover:bg-[#315440]/10 hover:border-[#173d2a]">
                        Jasa
                    </Link>
                    <Link href="/konsultasi" className="px-5 py-2 rounded-full bg-[#315440] text-white font-medium text-sm transition-all duration-300 hover:bg-[#173d2a] shadow-lg shadow-[#315440]/25">
                        Konsultasi
                    </Link>
                </div>

                {/* Mobile Action Buttons & Menu Button */}
                <div className="lg:hidden flex items-center space-x-3">
                    {/* Mobile Action Buttons */}
                    <div className="flex items-center space-x-2">
                        <Link href="/jasa" className="px-3 py-1.5 rounded-full bg-transparent border border-[#315440] text-[#315440] font-medium text-xs transition-all duration-300 hover:bg-[#315440]/10 hover:border-[#173d2a]">
                            Jasa
                        </Link>
                        <Link href="/konsultasi" className="px-3 py-1.5 rounded-full bg-[#315440] text-white font-medium text-xs transition-all duration-300 hover:bg-[#173d2a] shadow-lg shadow-[#315440]/25">
                            Konsultasi
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="relative w-8 h-8 focus:outline-none z-50 transition-all duration-300 hover:scale-110"
                        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
                        onClick={toggleMobileMenu}
                    >
                        <span className="sr-only">{menuOpen ? 'Tutup menu' : 'Buka menu'}</span>
                        {/* Hamburger/X icon */}
                        <span className={`block absolute h-0.5 w-8 bg-[#8a9987] transform transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-4' : 'top-2'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-[#8a9987] transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 left-4' : 'top-4'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-[#8a9987] transform transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-4' : 'top-6'}`}></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#ebffe6] bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-500 ease-in-out lg:hidden ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                    {/* Mobile Menu Content */}
                    <div className="flex flex-col items-center space-y-8">
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href === "/" && pathname === "/") ||
                                (item.href === "/blog" && pathname.startsWith("/blog"));
                            return (
                                <button
                                    key={item.href}
                                    onClick={(e) => {
                                        handleMobileMenuClose();
                                        item.handler(e);
                                    }}
                                    className={`px-6 py-3 rounded-full flex items-center space-x-3 text-base transition-all duration-300 ${isActive
                                        ? 'bg-[#315440] text-white shadow-lg shadow-[#315440]/25'
                                        : 'bg-transparent text-[#8a9987] hover:text-[#315440] hover:bg-[#c4e8b4]/50'
                                        }`}
                                >
                                    {/* Icons for mobile menu */}
                                    <span className="w-5 h-5">
                                        {item.label === "BERANDA" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                            </svg>
                                        )}
                                        {item.label === "PROYEK" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z" />
                                            </svg>
                                        )}
                                        {item.label === "AWARDS" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        )}
                                        {item.label === "BLOG" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                                            </svg>
                                        )}
                                        {item.label === "TENTANG KAMI" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                            </svg>
                                        )}
                                        {item.label === "KONTAK" && (
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        )}
                                    </span>
                                    <span className="font-medium text-sm">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    )
}
