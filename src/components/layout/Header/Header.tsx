"use client"

import React, { useState } from 'react'

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'

import Link from 'next/link'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="fixed top-0 left-0 w-full bg-[#fff7e6] text-black py-3 z-[200]">
            <nav className='flex items-center justify-between w-full px-4 lg:px-10'>
                <Link href="/" className="text-3xl font-normal text-[#8a9987] tracking-wide select-none" rel='home'>
                    HarmonyrumahKU
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className="px-4 py-2 text-[#8a9987] hover:text-[var(--primary)] transition-colors">BERANDA</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/proyek" className="px-4 py-2 text-[#8a9987] hover:text-[var(--primary)] transition-colors">PROYEK</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/blog" className="px-4 py-2 text-[#8a9987] hover:text-[var(--primary)] transition-colors">BLOG</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/tentang-kami" className="px-4 py-2 text-[#8a9987] hover:text-[var(--primary)] transition-colors">TENTANG KAMI</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={`${process.env.NEXT_PUBLIC_URL}/#kontak`} className="px-4 py-2 text-[#8a9987] hover:text-[var(--primary)] transition-colors">KONTAK</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#fff7e6] bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="flex flex-col items-center space-y-8">
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className="text-2xl text-[#8a9987] hover:text-[var(--primary)] transition-colors" onClick={() => setMenuOpen(false)}>BERANDA</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/proyek" className="text-2xl text-[#8a9987] hover:text-[var(--primary)] transition-colors" onClick={() => setMenuOpen(false)}>PROYEK</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/blog" className="text-2xl text-[#8a9987] hover:text-[var(--primary)] transition-colors" onClick={() => setMenuOpen(false)}>BLOG</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/tentang-kami" className="text-2xl text-[#8a9987] hover:text-[var(--primary)] transition-colors" onClick={() => setMenuOpen(false)}>TENTANG KAMI</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/kontak" className="text-2xl text-[#8a9987] hover:text-[var(--primary)] transition-colors" onClick={() => setMenuOpen(false)}>KONTAK</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        className="relative w-8 h-8 focus:outline-none z-50"
                        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className="sr-only">{menuOpen ? 'Tutup menu' : 'Buka menu'}</span>
                        {/* Hamburger/X icon */}
                        <span className={`block absolute h-0.5 w-8 bg-[#8a9987] transform transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-4' : 'top-2'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-[#8a9987] transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 left-4' : 'top-4'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-[#8a9987] transform transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-4' : 'top-6'}`}></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}
