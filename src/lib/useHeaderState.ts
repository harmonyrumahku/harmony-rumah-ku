"use client"

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLenis, useScrollTo } from '@/lib/useLenis'

export function useHeaderState() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const lenis = useLenis();
    const scrollTo = useScrollTo();
    const router = useRouter();
    const pathname = usePathname();

    // Handle header background opacity on scroll
    useEffect(() => {
        if (!lenis) return;

        const updateHeaderOpacity = () => {
            const scrolled = lenis.scroll > 50;
            setIsScrolled(scrolled);
        };

        lenis.on('scroll', updateHeaderOpacity);

        return () => {
            lenis.off('scroll', updateHeaderOpacity);
        };
    }, [lenis]);

    // Memoized event handlers to prevent recreation on every render
    const handleInternalNavigation = useCallback((href: string, e: React.MouseEvent) => {
        e.preventDefault();

        if (href === '/') {
            // If navigating to home page
            if (pathname === '/') {
                // If already on home page, scroll to top
                scrollTo('html', {
                    duration: 1.2,
                    offset: 0,
                });
            } else {
                // If on other page, navigate to home and scroll to top
                router.push('/');
            }
        } else {
            // For other internal pages, use Next.js router
            router.push(href);
        }
    }, [pathname, router, scrollTo]);

    // Handle contact link specifically
    const handleContactClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();

        // Check if we're on the main page
        if (pathname === '/') {
            // If on main page, scroll to contact section
            scrollTo('#kontak', {
                duration: 1.2,
                offset: -80,
            });
        } else {
            // If on other page, navigate to home with contact hash
            router.push('/#kontak');
        }
    }, [pathname, router, scrollTo]);

    // Memoized navigation items to prevent recreation
    const navigationItems = useMemo(() => [
        { href: '/', label: 'BERANDA', handler: (e: React.MouseEvent) => handleInternalNavigation('/', e) },
        { href: '/proyek', label: 'PROYEK', handler: (e: React.MouseEvent) => handleInternalNavigation('/proyek', e) },
        { href: '/blog', label: 'BLOG', handler: (e: React.MouseEvent) => handleInternalNavigation('/blog', e) },
        { href: '/tentang-kami', label: 'TENTANG KAMI', handler: (e: React.MouseEvent) => handleInternalNavigation('/tentang-kami', e) },
        { href: '/#kontak', label: 'KONTAK', handler: handleContactClick }
    ], [handleInternalNavigation, handleContactClick]);

    // Memoized mobile menu close handler
    const handleMobileMenuClose = useCallback(() => {
        setMenuOpen(false);
    }, []);

    // Toggle mobile menu
    const toggleMobileMenu = useCallback(() => {
        setMenuOpen((prev) => !prev);
    }, []);

    return {
        // State
        menuOpen,
        isScrolled,

        // Handlers
        handleInternalNavigation,
        handleContactClick,
        handleMobileMenuClose,
        toggleMobileMenu,

        // Data
        navigationItems,

        // Utilities
        pathname
    };
}