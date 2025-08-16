"use client"

import React from 'react'

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
} from '@/components/ui/navigation-menu'

import Link from 'next/link'

import { useHeaderState } from '@/lib/useHeaderState'

export default function Header() {
    const {
        menuOpen,
        isScrolled,
        handleMobileMenuClose,
        toggleMobileMenu,
        navigationItems,
    } = useHeaderState();

    return (
        <header className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ease-out ${isScrolled ? 'bg-[#fff7e6]/95 backdrop-blur-sm shadow-lg' : 'bg-[#fff7e6]'}`}>
            <nav className='py-3 container flex items-center justify-between w-full px-4 lg:px-10'>
                <Link href="/" className="text-3xl font-normal text-[#8a9987] tracking-wide select-none transition-all duration-300 hover:scale-105" rel='home'>
                    HarmonyrumahKU
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="px-4 py-2 text-[#8a9987] hover:text-[var(--primary)] transition-all duration-300 cursor-pointer hover:scale-105 block"
                                        onClick={item.handler}
                                    >
                                        {item.label}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#fff7e6] bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-500 ease-in-out lg:hidden ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="flex flex-col items-center space-y-8">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-2xl text-[#8a9987] hover:text-[var(--primary)] transition-all duration-300 cursor-pointer hover:scale-105 block"
                                        onClick={(e) => {
                                            handleMobileMenuClose();
                                            item.handler(e);
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="lg:hidden flex items-center">
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
            </nav>
        </header>
    )
}
