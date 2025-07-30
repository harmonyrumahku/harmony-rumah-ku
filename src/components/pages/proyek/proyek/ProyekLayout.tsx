"use client"

import React, { useState } from 'react'

import { Search } from 'lucide-react'

import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

import Link from 'next/link'

import { Input } from '@/components/ui/input'

import Image from 'next/image'

import { Proyek } from '@/types/Proyek'

export default function ProyekLayout({ projectData }: { projectData: Proyek[] }) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [search, setSearch] = useState('');
    const [selectedKategori, setSelectedKategori] = useState('');
    const [openKategori, setOpenKategori] = useState(false);
    const [selectedLayanan, setSelectedLayanan] = useState("");
    const [openLayanan, setOpenLayanan] = useState(false);
    const [selectedWilayah, setSelectedWilayah] = useState("");
    const [openWilayah, setOpenWilayah] = useState(false);

    // Ambil unique kategori
    const kategoriOptions = Array.from(new Set(projectData.map(p => p.type)));

    // Ambil unique layanan
    const layananOptions = Array.from(new Set(projectData.map(p => p.layanan).filter(Boolean)));

    // Ambil unique wilayah
    const wilayahOptions = Array.from(new Set(projectData.map(p => p.city).filter(Boolean)));

    // Filter berdasarkan search dan combobox
    const filteredProjects = projectData.filter(project => {
        const searchLower = search.toLowerCase();
        const matchSearch = searchLower === '' ||
            project.title.toLowerCase().includes(searchLower) ||
            project.city.toLowerCase().includes(searchLower) ||
            (project.layanan && project.layanan.toLowerCase().includes(searchLower));

        const matchKategori = selectedKategori ? project.type === selectedKategori : true;
        const matchLayanan = selectedLayanan ? project.layanan === selectedLayanan : true;
        const matchWilayah = selectedWilayah ? project.city === selectedWilayah : true;

        return matchSearch && matchKategori && matchLayanan && matchWilayah;
    });

    return (
        <section className="min-h-screen bg-[#fff7e6]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 min-h-screen">
                {/* Left Column - Text and Navigation */}
                <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-8 lg:h-fit lg:col-span-1 px-4 sm:px-6 lg:pl-10 pt-18 lg:pt-10">
                    <p className="text-base sm:text-lg leading-relaxed text-accent max-w-lg">
                        Kami Hadir untuk Setiap Langkah Perjalanan Hunian Anda. Dari merancang ruang yang nyaman, memastikan struktur yang kokoh, hingga mengelola proyek dengan penuh tanggung jawab — <strong>semua kami hadirkan untuk menciptakan rumah yang selaras dengan hidup Anda.</strong>
                    </p>

                    {/* Search Bar */}
                    <div className="flex flex-col space-y-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                            <Input
                                placeholder="Apa yang ingin kamu cari ?"
                                className="pl-9 sm:pl-10 border-dashed border-2 border-muted-foreground bg-transparent text-sm sm:text-base"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-accent text-base sm:text-lg mb-2">Filter</h3>

                            <Popover open={openKategori} onOpenChange={setOpenKategori}>
                                <PopoverTrigger asChild className='bg-[#fff7e6] border-0 shadow-0'>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openKategori}
                                        className="w-full justify-between"
                                    >
                                        {selectedKategori
                                            ? kategoriOptions.find((kat) => kat === selectedKategori)
                                            : "Pilih Kategori..."}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Cari kategori..." className="h-9" />
                                        <CommandList>
                                            <CommandEmpty>Tidak ada kategori.</CommandEmpty>
                                            <CommandGroup>
                                                {kategoriOptions.map((kat) => (
                                                    <CommandItem
                                                        key={kat}
                                                        value={kat}
                                                        onSelect={(currentValue) => {
                                                            setSelectedKategori(currentValue === selectedKategori ? "" : currentValue);
                                                            setOpenKategori(false);
                                                        }}
                                                    >
                                                        {kat}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                selectedKategori === kat ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <Popover open={openLayanan} onOpenChange={setOpenLayanan}>
                                <PopoverTrigger asChild className='bg-[#fff7e6] border-0 shadow-0'>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openLayanan}
                                        className="w-full justify-between"
                                    >
                                        {selectedLayanan
                                            ? layananOptions.find((layanan) => layanan === selectedLayanan)
                                            : "Pilih Layanan..."}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Cari layanan..." className="h-9" />
                                        <CommandList>
                                            <CommandEmpty>Tidak ada layanan.</CommandEmpty>
                                            <CommandGroup>
                                                {layananOptions.map((layanan) => (
                                                    <CommandItem
                                                        key={layanan}
                                                        value={layanan}
                                                        onSelect={(currentValue) => {
                                                            setSelectedLayanan(currentValue === selectedLayanan ? "" : currentValue);
                                                            setOpenLayanan(false);
                                                        }}
                                                    >
                                                        {layanan}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                selectedLayanan === layanan ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <Popover open={openWilayah} onOpenChange={setOpenWilayah}>
                                <PopoverTrigger asChild className='bg-[#fff7e6] border-0 shadow-0'>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openWilayah}
                                        className="w-full justify-between"
                                    >
                                        {selectedWilayah
                                            ? wilayahOptions.find((wilayah) => wilayah === selectedWilayah)
                                            : "Pilih Wilayah..."}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Cari wilayah..." className="h-9" />
                                        <CommandList>
                                            <CommandEmpty>Tidak ada wilayah.</CommandEmpty>
                                            <CommandGroup>
                                                {wilayahOptions.map((wilayah) => (
                                                    <CommandItem
                                                        key={wilayah}
                                                        value={wilayah}
                                                        onSelect={(currentValue) => {
                                                            setSelectedWilayah(currentValue === selectedWilayah ? "" : currentValue);
                                                            setOpenWilayah(false);
                                                        }}
                                                    >
                                                        {wilayah}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                selectedWilayah === wilayah ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSearch('');
                                    setSelectedKategori('');
                                    setSelectedLayanan('');
                                    setSelectedWilayah('');
                                }}
                                className='bg-[#fff7e6]'
                            >
                                Clear Filter
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Vertical Scrolling Grid */}
                <div className="overflow-y-auto lg:max-h-screen scrollbar-hide lg:col-span-2 pt-4 sm:pt-6 lg:pt-20">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProjects.map((project, idx) => (
                            <Link
                                href={`/proyek/${project.slug}`}
                                key={idx}
                                className="relative h-40 sm:h-48 lg:h-52 overflow-hidden group cursor-pointer"
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                            >
                                {/* Gambar utama */}
                                <Image
                                    src={project.image_urls[0]}
                                    alt={project.title}
                                    quality={100}
                                    fill
                                    loading='lazy'
                                    className="w-full h-full object-cover transition-all duration-500"
                                    style={{
                                        transform: hoveredIdx === idx ? 'scale(1.05)' : 'scale(1)',
                                        position: 'absolute',
                                        inset: 0,
                                        zIndex: 1,
                                    }}
                                />

                                {/* Hover Overlay */}
                                <div
                                    className="absolute inset-0 bg-[#ff8a65] transition-all duration-700 ease-in-out flex items-center justify-center z-10"
                                    style={{
                                        opacity: hoveredIdx === idx ? 1 : 0,
                                    }}
                                >
                                    <div className="text-white px-2 sm:px-4">
                                        <div className="space-y-1 sm:space-y-2">
                                            <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-light leading-tight">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm sm:text-base lg:text-lg font-light">
                                                {project.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
