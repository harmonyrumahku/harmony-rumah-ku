import React from 'react'

import logo from "@/base/assets/logo.png"

import Image from 'next/image'

export default function HomePage() {
    return (
        <section className="w-full min-h-screen flex font-sans">
            {/* Kiri */}
            <div className="w-[32%] min-w-[320px] bg-[var(--background)] flex flex-col justify-between">
                <div className='flex flex-col justify-between h-full'>
                    {/* Logo Placeholder */}
                    <div className='w-full h-full bg-[#f5ecdc] flex items-center justify-center'>
                        <div className="aspect-square w-1/2">
                            <Image src={logo} quality={100} loading='lazy' alt="logo" className='w-full h-full object-contain' />
                        </div>
                    </div>

                    <div className='w-full h-full flex flex-col justify-center pl-20 bg-[var(--accent)]'>
                        <div className="text-gray-200 text-xl font-semibold leading-relaxed mb-2">
                            Solusi Hunian Menyeluruh –
                        </div>

                        <div className="text-gray-200 text-lg font-medium leading-relaxed">
                            Arsitektur.<br />
                            Konstruksi.<br />
                            Kehangatan
                        </div>
                    </div>
                </div>
            </div>
            {/* Kanan */}
            <div className="w-[68%] relative flex items-center justify-center bg-[#e5e5e5] overflow-hidden">
                {/* Gambar Rumah Placeholder */}
                <Image
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                    alt="Rumah Nyaman"
                    className="w-full h-full object-cover brightness-75"
                    quality={100}
                    loading='lazy'
                    fill
                />
                {/* Overlay Teks */}
                <div className="absolute left-12 bottom-20 max-w-xl">
                    <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-3 drop-shadow-lg">
                        Rumah Nyaman<br />
                        Dimulai dari Cerita
                    </h1>
                    <p className="text-white text-base md:text-lg drop-shadow-lg font-normal">
                        Kami hadir bukan hanya untuk membangun ruang,<br />
                        tapi menciptakan kenyamanan yang menyentuh hati.
                    </p>
                </div>
            </div>
        </section>
    )
}
