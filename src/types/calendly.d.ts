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