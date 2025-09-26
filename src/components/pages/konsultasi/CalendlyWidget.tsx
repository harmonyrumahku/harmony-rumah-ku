'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'

import dynamic from 'next/dynamic'

import LoadingOverlay from '@/base/Loading/LoadingOverlay'

const InlineWidget = dynamic(() => import('react-calendly').then(m => m.InlineWidget), {
    ssr: false,
})

export default function CalendlyWidget({
    url,
    prefill,
    pageSettings,
    utm,
}: CalendlyWidgetProps) {
    const [isLoading, setIsLoading] = useState(true)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const styles = useMemo(() => ({ height: '100%', width: '100%' as const }), [])
    const memoPrefill = useMemo(() => prefill, [prefill])
    const memoPageSettings = useMemo(() => pageSettings, [pageSettings])
    const memoUtm = useMemo(() => utm, [utm])

    useEffect(() => {
        setIsLoading(true)

        const node = containerRef.current
        if (!node) return

        let timeoutId: number | null = null
        const iframe: HTMLIFrameElement | null = node.querySelector('iframe')

        const handleLoaded = () => {
            setIsLoading(false)
            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
            if (iframe) {
                iframe.removeEventListener('load', handleLoaded)
            }
        }

        timeoutId = window.setTimeout(() => {
            setIsLoading(false)
            if (iframe) {
                iframe.removeEventListener('load', handleLoaded)
            }
        }, 4000)

        if (iframe) {
            iframe.addEventListener('load', handleLoaded)
        }

        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
            if (iframe) {
                iframe.removeEventListener('load', handleLoaded)
            }
        }
    }, [url])

    return (
        <div
            ref={containerRef}
            className="w-full h-[900px] md:h-[700px] px-4 mt-10 sm:mt-0 relative z-0"
            style={{
                overscrollBehavior: 'auto',
                willChange: 'transform',
                transform: 'translateZ(0)'
            }}
        >
            <InlineWidget
                url={url}
                prefill={memoPrefill}
                pageSettings={memoPageSettings}
                utm={memoUtm}
                styles={styles}
            />

            {/* Loading overlay to prevent empty area before Calendly loads */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <LoadingOverlay isLoading={isLoading} message="Menyiapkan jadwal kamu..." />
            </div>
        </div>
    )
}
