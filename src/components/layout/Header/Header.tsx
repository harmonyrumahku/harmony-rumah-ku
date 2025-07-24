import React from 'react'

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'

import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-[#232323] text-white px-8 py-3 z-50">
            <nav className='flex items-center justify-between w-full container'>
                <Link href="/" className="text-3xl font-light tracking-wide select-none" rel='home'>
                    HarmonyRumahKU
                </Link>

                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/" className="px-4 py-2 bg-transparent hover:bg-transparent hover:text-[var(--primary)]">BERANDA</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/proyek" className="px-4 py-2 bg-transparent hover:bg-transparent hover:text-[var(--primary)]">PROYEK</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/blog" className="px-4 py-2 bg-transparent hover:bg-transparent hover:text-[var(--primary)]">BLOG</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/tentang-kami" className="px-4 py-2 bg-transparent hover:bg-transparent hover:text-[var(--primary)]">TENTANG KAMI</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/kontak" className="px-4 py-2 bg-transparent hover:bg-transparent hover:text-[var(--primary)]">KONTAK</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </header>
    )
}
