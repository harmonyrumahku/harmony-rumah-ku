import React from 'react'

import { Metadata } from 'next'

import KonsultasiLayout from '@/components/pages/konsultasi/KonsultasiLayout'

import { konsultasiMetadata } from '@/components/pages/konsultasi/meta/Metadata'

export const metadata: Metadata = konsultasiMetadata

export default function page() {
    return (
        <KonsultasiLayout />
    )
}
