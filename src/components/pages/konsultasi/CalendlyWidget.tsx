'use client'

import { InlineWidget } from 'react-calendly'

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
    className?: string
}

export default function CalendlyWidget({
    url,
    prefill,
    pageSettings,
    utm,
    className = ''
}: CalendlyWidgetProps) {
    return (
        <div className={`w-full h-[700px] ${className}`}>
            <InlineWidget
                url={url}
                prefill={prefill}
                pageSettings={pageSettings}
                utm={utm}
                styles={{
                    height: '100%',
                    width: '100%'
                }}
            />
        </div>
    )
}
