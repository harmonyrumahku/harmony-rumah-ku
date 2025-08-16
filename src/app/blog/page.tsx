import React from 'react'

import { Metadata } from 'next'

import BlogLayout from '@/components/pages/blog/BlogLayout'

import ProyekSkelaton from '@/components/pages/proyek/proyek/ProyekSkelaton'

export const metadata: Metadata = {
    title: 'Blog - HarmonyrumahKU',
    description: 'Blog - HarmonyrumahKU',
}

export default async function Page() {
    try {
        return (
            <BlogLayout />
        );
    } catch {
        return (
            <ProyekSkelaton />
        );
    }
}