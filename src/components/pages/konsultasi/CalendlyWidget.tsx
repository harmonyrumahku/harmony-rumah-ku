'use client'

import React, { useMemo } from 'react'

import dynamic from 'next/dynamic'

const InlineWidget = dynamic(() => import('react-calendly').then(m => m.InlineWidget), {
    ssr: false,
})

interface CalendlyWidgetProps {
    url: string
    prefill?: {
        name?: string
        email?: string
        customAnswers?: Record<string, string>
    }
    pageSettings?: {
        backgroundColor?: string
        hideEventTypeDetails?: boolean
        hideLandingPageDetails?: boolean
        primaryColor?: string
        textColor?: string
    }
    utm?: {
        utmCampaign?: string
        utmSource?: string
        utmMedium?: string
        utmContent?: string
        utmTerm?: string
    }
}

export default function CalendlyWidget({
    url,
    prefill,
    pageSettings,
    utm,
}: CalendlyWidgetProps) {
    const styles = useMemo(() => ({ height: '100%', width: '100%' as const }), [])
    const memoPrefill = useMemo(() => prefill, [prefill])
    const memoPageSettings = useMemo(() => pageSettings, [pageSettings])
    const memoUtm = useMemo(() => utm, [utm])

    return (
        <div
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
        </div>
    )
}
