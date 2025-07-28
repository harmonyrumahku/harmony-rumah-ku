import React from 'react'

import { Proyek } from '@/types/Proyek'

import Blobs from "@/base/assets/blobs.png"

import Image from 'next/image'

import Bathroom from "@/base/assets/bathroom.png"

import Bedroom from "@/base/assets/bedroom.png"

import Garage from "@/base/assets/garage.png"

import Livingroom from "@/base/assets/alive.png"

import meter from "@/base/assets/meter.png"

import deadline from "@/base/assets/deadline.png"

export default function ProyekDetails({ projectData }: { projectData: Proyek }) {
    const info = projectData.information[0] || {};
    const layanan = projectData.proyek_layanan_name?.join(', ');
    const team = projectData.team.map((t) => t.position).join(', ');
    const images = projectData.image_urls || [];

    return (
        <section className="min-h-screen py-10 pt-28 bg-[#fff7e6]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Kiri: Info */}
                <div className="flex flex-col gap-6 justify-between relative z-10 px-4 md:px-16">
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
                    <div className="bg-[rgb(255, 247, 230)] rounded-lg border border-white grid grid-cols-3 gap-6 text-center py-2">
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

                {/* Kanan: Foto */}
                <div className="overflow-y-auto lg:max-h-[120dvh] scrollbar-hide">
                    <div className='columns-2 gap-3 space-y-3'>
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-lg bg-gray-200 w-full mb-3 break-inside-avoid"
                            >
                                <Image
                                    src={img}
                                    alt={`proyek-image-${i}`}
                                    className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
                                    width={1080}
                                    height={1080}
                                    quality={100}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
