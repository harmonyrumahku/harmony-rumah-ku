"use client"

import React from 'react'

import { motion } from 'framer-motion'

import Image from 'next/image'

import iconplay from "@/base/assets/icon-play.png"

import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from '@/components/ui/dialog'

import patern from "@/base/assets/patern.png"

export default function AwardsDetails({ awardsData }: { awardsData: AwardDetails }) {

    const getYouTubeEmbedUrl = (url?: string) => {
        if (!url) return undefined;
        try {
            const u = new URL(url.startsWith('http') ? url : `https://${url}`);
            let id = '';
            if (u.hostname.includes('youtu.be')) {
                id = u.pathname.replace('/', '');
            } else if (u.pathname.startsWith('/shorts/')) {
                id = u.pathname.split('/')[2] || '';
            } else if (u.searchParams.get('v')) {
                id = u.searchParams.get('v') || '';
            } else if (u.pathname.startsWith('/embed/')) {
                id = u.pathname.split('/')[2] || '';
            }
            if (!id) return undefined;
            const params = new URLSearchParams({
                rel: '0',
                modestbranding: '1',
                playsinline: '1',
            });
            return `https://www.youtube.com/embed/${id}?${params.toString()}`;
        } catch {
            return undefined;
        }
    };

    const beforeViewportRef = React.useRef<HTMLDivElement | null>(null);
    const afterViewportRef = React.useRef<HTMLDivElement | null>(null);

    const [beforeIndex, setBeforeIndex] = React.useState(0);
    const [afterIndex, setAfterIndex] = React.useState(0);

    const [beforeWidth, setBeforeWidth] = React.useState(0);
    const [afterWidth, setAfterWidth] = React.useState(0);

    React.useEffect(() => {
        const handleResize = () => {
            if (beforeViewportRef.current) setBeforeWidth(beforeViewportRef.current.clientWidth);
            if (afterViewportRef.current) setAfterWidth(afterViewportRef.current.clientWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        const total = awardsData.before?.length || 0;
        if (total <= 1) return;
        const id = setInterval(() => {
            setBeforeIndex((i) => (i + 1) % total);
        }, 3000);
        return () => clearInterval(id);
    }, [awardsData.before]);

    React.useEffect(() => {
        const total = awardsData.after?.length || 0;
        if (total <= 1) return;
        const id = setInterval(() => {
            setAfterIndex((i) => (i + 1) % total);
        }, 3000);
        return () => clearInterval(id);
    }, [awardsData.after]);

    return (
        <section className="min-h-screen bg-background container pt-20 md:pt-24 px-4 py-10 relative">
            {/* Hero Banner */}
            <div className='relative w-full aspect-[16/9] max-w-7xl mx-auto overflow-hidden rounded-xl border border-border bg-muted mb-28 z-10'>
                <Image
                    fill
                    src={awardsData.after?.[0] || awardsData.avatar}
                    className="object-cover"
                    alt={awardsData.title}
                    sizes="100vw"
                    priority
                />

                {/* Play button overlay */}
                {awardsData.youtube_url ? (
                    <Dialog>
                        <DialogTrigger asChild>
                            <button
                                aria-label="Play video"
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-20 md:w-20 rounded-full group grid place-items-center overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-white/15 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/60"
                            >
                                {/* inner dim */}
                                <span className="absolute inset-0 rounded-full bg-black/30" />
                                {/* glow ring */}
                                <span className="absolute inset-[-14%] rounded-full bg-gradient-to-tr from-white/20 via-transparent to-white/10 opacity-60 group-hover:opacity-90 blur-md transition-opacity" />
                                {/* pulse ring */}
                                <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30" />
                                {/* icon */}
                                <Image src={iconplay} alt="Play" width={48} height={48} className="relative z-[1] drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform" />
                            </button>
                        </DialogTrigger>

                        <DialogContent showCloseButton={false} className="p-0 overflow-hidden backdrop-blur-xl bg-black/70 border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/20 max-w-4xl md:max-w-5xl w-[calc(100%-2rem)]">
                            <DialogTitle className="sr-only">{awardsData.title} – Video</DialogTitle>
                            <DialogClose asChild>
                                <button
                                    aria-label="Close video"
                                    className="absolute top-3 right-3 z-[2] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full w-10 h-10 grid place-items-center text-white shadow-lg transition-all duration-200 hover:scale-105"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </DialogClose>

                            <div className="relative w-full aspect-video">
                                <iframe
                                    src={getYouTubeEmbedUrl(awardsData.youtube_url)}
                                    title={awardsData.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                ) : null}
            </div>

            {/* Header & Quote */}
            <div className="px-4 md:px-6 mb-10 md:mb-20">
                <div className="-mt-8 flex flex-col items-center text-center">
                    <div className="relative -top-10 flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full ring-2 ring-background overflow-hidden shadow-md bg-muted">
                            <Image
                                src={awardsData.avatar}
                                width={64}
                                height={64}
                                alt={awardsData.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="mt-3 text-base font-bold text-muted-foreground">{awardsData.name}</span>
                        <span className="mt-3 text-sm text-muted-foreground">{awardsData.keterangan}</span>
                    </div>

                    <blockquote className="max-w-2xl text-balance text-base md:text-lg font-medium">
                        “{awardsData.description}”
                    </blockquote>
                </div>

                {/* Rich Content (Quill HTML) */}
                <div
                    className="mt-8 md:mt-10 text-sm md:text-base leading-relaxed text-muted-foreground [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_p]:mt-4 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 text-center max-w-4xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: awardsData.content }}
                />
            </div>

            {/* Before / After Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-0 md:px-6">
                {/* Before */}
                <div className='p-4 bg-white rounded-lg border border-border'>
                    <div className="mb-3 text-center text-sm font-medium text-muted-foreground">Sebelum</div>
                    <div ref={beforeViewportRef} className="relative w-full overflow-hidden rounded-lg border border-border bg-muted">
                        <motion.div
                            className="flex"
                            animate={{ x: -beforeIndex * beforeWidth }}
                            transition={{ type: 'tween', duration: 0.6 }}
                            style={{ width: '100%' }}
                        >
                            {awardsData.before?.map((src, idx) => (
                                <div key={`before-${idx}`} className="relative shrink-0 w-full aspect-[6/4]">
                                    <Image
                                        fill
                                        src={src}
                                        className="object-cover"
                                        alt={`Sebelum ${idx + 1}`}
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                    />
                                </div>
                            ))}
                        </motion.div>

                        {(awardsData.before?.length || 0) > 1 ? (
                            <>
                                <button
                                    aria-label="Sebelumnya"
                                    onClick={() => {
                                        const total = awardsData.before?.length || 0;
                                        if (total > 0) setBeforeIndex((i) => (i - 1 + total) % total);
                                    }}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-[1] grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
                                >
                                    ‹
                                </button>
                                <button
                                    aria-label="Berikutnya"
                                    onClick={() => {
                                        const total = awardsData.before?.length || 0;
                                        if (total > 0) setBeforeIndex((i) => (i + 1) % total);
                                    }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-[1] grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
                                >
                                    ›
                                </button>
                            </>
                        ) : null}
                    </div>
                </div>

                {/* After */}
                <div className='p-4 bg-white rounded-lg border border-border'>
                    <div className="mb-3 text-center text-sm font-medium text-muted-foreground">Sesudah</div>
                    <div ref={afterViewportRef} className="relative w-full overflow-hidden rounded-lg border border-border bg-muted">
                        <motion.div
                            className="flex"
                            animate={{ x: -afterIndex * afterWidth }}
                            transition={{ type: 'tween', duration: 0.6 }}
                            style={{ width: '100%' }}
                        >
                            {awardsData.after?.map((src, idx) => (
                                <div key={`after-${idx}`} className="relative shrink-0 w-full aspect-[6/4]">
                                    <Image
                                        fill
                                        src={src}
                                        className="object-cover"
                                        alt={`Sesudah ${idx + 1}`}
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                    />
                                </div>
                            ))}
                        </motion.div>

                        {(awardsData.after?.length || 0) > 1 ? (
                            <>
                                <button
                                    aria-label="Sebelumnya"
                                    onClick={() => {
                                        const total = awardsData.after?.length || 0;
                                        if (total > 0) setAfterIndex((i) => (i - 1 + total) % total);
                                    }}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-[1] grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
                                >
                                    ‹
                                </button>
                                <button
                                    aria-label="Berikutnya"
                                    onClick={() => {
                                        const total = awardsData.after?.length || 0;
                                        if (total > 0) setAfterIndex((i) => (i + 1) % total);
                                    }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-[1] grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
                                >
                                    ›
                                </button>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>

            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${patern.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
        </section>
    )
}
