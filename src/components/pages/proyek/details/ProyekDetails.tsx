"use client"

import React, { useState, useEffect } from 'react'

import Image from 'next/image'

import Link from 'next/link'

import parse, { domToReact, Element, DOMNode } from 'html-react-parser'

import { motion, AnimatePresence } from 'framer-motion'

import type { ProyekDetails } from '@/types/Proyek'

import { H1, H2, H3, H4, P, Blockquote, List, Table as TableTypo, InlineCode, Small } from '@/components/ui/typography'

import { Button } from '@/components/ui/button'

import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table'

import Timeline from '@/components/pages/proyek/details/components/Timeline'

import ImagePreview from '@/components/pages/proyek/details/components/ImagePreview'

import Blobs from "@/base/assets/blobs.png"

import Bathroom from "@/base/assets/bathroom.png"

import Bedroom from "@/base/assets/bedroom.png"

import Garage from "@/base/assets/garage.png"

import Livingroom from "@/base/assets/alive.png"

import meter from "@/base/assets/meter.png"

import deadline from "@/base/assets/deadline.png"

export default function ProyekDetails({ projectData }: { projectData: ProyekDetails }) {
    const info = projectData.information[0] || {};
    const layanan = projectData.proyek_layanan_name?.join(', ');
    const team = projectData.team.map((t) => t.position).join(', ');
    const images = projectData.image_urls || [];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Auto-play functionality
    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="min-h-screen py-10 pt-20 md:pt-28 bg-[#fff7e6]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pb-10">
                {/* Kiri: Info */}
                <div className="flex flex-col gap-6 relative z-10 px-4 md:px-16 order-2 md:order-1">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-6 leading-tight">
                            {projectData.title}
                        </h1>
                        <div className="mb-6 grid grid-cols-[120px_1fr] gap-y-4 text-base">
                            <div className="text-gray-500 font-normal">Klient</div>
                            <div className="text-gray-900">{info.name}</div>
                            <div className="text-gray-500 font-normal">Tahun</div>
                            <div className="text-gray-900">{info.years}</div>
                            <div className="text-gray-500 font-normal">Lokasi</div>
                            <div className="text-gray-900">{info.location}</div>
                            <div className="text-gray-500 font-normal">Intro</div>
                            <div className="text-gray-900">{info.intro}</div>
                            <div className="text-gray-500 font-normal">Deskripsi <br /> singkat</div>
                            <div className="text-gray-900">{info.deskripsi}</div>
                            <div className="text-gray-500 font-normal">Tim</div>
                            <div className="text-gray-900">{team}</div>
                            <div className="text-gray-500 font-normal">Layanan</div>
                            <div className="text-gray-900">{layanan}</div>
                        </div>
                    </div>

                    <Image src={Blobs} alt="blobs" className="absolute top-0 -left-20 z-0" />

                    {/* Info box */}
                    <div className="bg-[rgb(255, 247, 230)] rounded-lg border border-white grid grid-cols-3 gap-6 text-center py-2 mt-6 md:mt-10">
                        <div className='flex flex-col items-center'>
                            <Image src={meter} alt="bathroom" className='w-10 h-10' />
                            <span className="text-lg font-bold">{projectData.surface_area || '-'} m²</span>
                            <div>Luas wilayah</div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image src={deadline} alt="bedroom" className='w-10 h-10' />
                            <span className="text-lg font-bold">{projectData.deadline || '-'} </span>
                            <div>Lama pengerjaan</div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image src={Livingroom} alt="livingroom" className='w-10 h-10' />
                            <span className="text-lg font-bold">{projectData.proyek_type_name || '-'} </span>
                            <div>Tipe bangunan</div>
                        </div>
                        <div className='flex flex-col items-center pl-5'>
                            <Image src={Bedroom} alt="kitchen" className='w-10 h-10' />
                            <span className="text-lg font-bold">{projectData.bedroom_count || 0}</span>
                            <div>Kamar</div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image src={Bathroom} alt="bathroom" className='w-10 h-10' />
                            <span className="text-lg font-bold">{projectData.bathroom_count || 0}</span>
                            <div>Kamar mandi</div>
                        </div>
                        <div className='flex flex-col items-center pr-5'>
                            <Image src={Garage} alt="garage" className='w-10 h-10' />
                            <span className="text-lg font-bold">{projectData.garage_count || 0}</span>
                            <div>Garasi</div>
                        </div>
                    </div>
                </div>

                {/* Kanan: Images */}
                <div className="overflow-y-auto lg:max-h-[120dvh] scrollbar-hide px-2 md:px-0 order-1 md:order-2">
                    {/* Mobile/Tablet: Slider */}
                    <div className="lg:hidden overflow-hidden">
                        <div
                            className="relative h-[250px] md:h-[350px] overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                            onClick={() => setSelectedImage(images[currentImageIndex])}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt={`proyek-image-${currentImageIndex}`}
                                        fill
                                        className="object-cover"
                                        quality={85}
                                        priority={currentImageIndex === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Desktop: Masonry Layout */}
                    <div className="hidden lg:block">
                        <div className='columns-2 gap-3 space-y-3'>
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className="overflow-hidden rounded-lg bg-gray-200 w-full mb-3 break-inside-avoid group cursor-pointer"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`proyek-image-${i}`}
                                        className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500 ease-out"
                                        width={800}
                                        height={600}
                                        quality={85}
                                        loading="lazy"
                                        sizes="(max-width: 1280px) 50vw, 50vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {projectData.timeline && <Timeline items={projectData.timeline} />}

            <div className='px-4 md:px-16 pt-14'>
                {parse(projectData.content || '', {
                    replace: (domNode) => {
                        if (domNode.type === 'tag') {
                            const el = domNode as Element;
                            const children = domToReact(el.children as DOMNode[], { replace: (domNode) => (domNode.type === 'tag' ? undefined : undefined) });
                            switch (el.name) {
                                case 'h1': return <H1>{children}</H1>;
                                case 'h2': return <H2>{children}</H2>;
                                case 'h3': return <H3>{children}</H3>;
                                case 'h4': return <H4>{children}</H4>;
                                case 'p': return <P>{children}</P>;
                                case 'blockquote': return <Blockquote>{children}</Blockquote>;
                                case 'ul':
                                case 'ol': return <List>{children}</List>;
                                case 'li': return <li>{children}</li>;
                                case 'table': return <TableTypo>{children}</TableTypo>;
                                case 'code': return <InlineCode>{children}</InlineCode>;
                                case 'strong': return <strong>{children}</strong>;
                                case 'em': return <em>{children}</em>;
                                case 'small': return <Small>{children}</Small>;
                                default: return undefined;
                            }
                        }
                    },
                })}
            </div>

            {/* Message */}
            <div className='px-4 md:px-16'>
                <h3 className='text-2xl font-bold mb-6'>👷 Tim dengan Proyek Penuh Hati</h3>
                {/* Tabel Tim */}
                <div className="overflow-x-auto mb-6 pl-0 md:pl-10">
                    <Table className="bg-white rounded-lg border border-gray-300 text-sm shadow-sm w-full max-w-[350px] border-separate border-spacing-0">
                        <TableHeader>
                            <TableRow className="bg-gray-100">
                                <TableHead className="px-4 py-2 font-semibold text-left border-b-2 border-r border-gray-300">Nama</TableHead>
                                <TableHead className="px-4 py-2 font-semibold text-left border-b-2 border-gray-300">Peran</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projectData.team.map((member, idx) => (
                                <TableRow key={idx} className="even:bg-gray-50">
                                    <TableCell className="px-4 py-2 border-b border-r border-gray-200">{member.name}</TableCell>
                                    <TableCell className="px-4 py-2 border-b border-gray-200">{member.position}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {/* Pesan */}
                <div className="text-[15px] text-gray-700 max-w-[600px] mb-2">
                    <p className='whitespace-pre-line'>{projectData.template_message}</p>
                </div>

                <Link href={`mailto:rr@rr-design.com`}>
                    <Button className='text-black mt-6 cursor-pointer bg-[#e97d5a] hover:bg-[#e97d5a]/90 rounded-lg px-6 py-2 font-semibold'>
                        📩 Hubungi kami – Kami siap mendengarkan.
                    </Button>
                </Link>
            </div>

            {/* Image Preview Modal */}
            <ImagePreview
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                images={images}
                setCurrentImageIndex={setCurrentImageIndex}
            />
        </section>
    )
}
