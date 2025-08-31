import React from 'react'

import { Contact } from '@/types/Contact'

import { Card, CardContent } from '@/components/ui/card'

import Link from 'next/link'

import Image from 'next/image'

export default function ContactPage({ contactData }: { contactData: Contact[] }) {
    // Dummy data fallback if contactData is empty
    return (
        <section className='bg-[#ebffe6] pt-4 container' id='kontak'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2 sm:gap-4 px-4 sm:px-10">
                <h2 className="font-bold text-[#333333] text-lg sm:text-xl md:text-2xl">Contact</h2>
                <Link href="/contact" className="text-[#708B75] font-medium hover:underline text-xs sm:text-sm md:text-base" rel='contact'>
                    VIEW MORE
                </Link>
            </div>

            <div className="bg-[#ebffe6] px-10 py-10 md:py-20">
                <div className="flex flex-col gap-2 mb-8">
                    <span className="inline-block bg-transparent border border-[#708B75] text-xs px-3 py-1 rounded-full w-fit">Terhubung dengan kami</span>
                    <h2 className="font-semibold text-[#333333] text-2xl sm:text-3xl">Wujudkan Rumah Impian Sekarang!</h2>
                    <p className="text-[#333] text-base sm:text-lg">Kami di sini untuk bantu Anda mulai dari nol. Yuk, cerita sedikit tentang proyek Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contactData.map((contact, idx) => (
                        <Card key={idx} className="bg-[#ebffe6] border-none shadow px-0 py-6">
                            <CardContent className="flex flex-col items-start gap-2">
                                <Image src={contact.image_urls} alt={contact.title} width={500} height={500} className='w-[60px] h-[60px]' />
                                <div className="font-semibold text-[#333] text-lg">{contact.title}</div>
                                <div className="text-[#666] text-sm mb-1">{contact.text}</div>
                                <Link href={contact.url} target='_blank' rel='noopener noreferrer' className="text-sm font-bold hover:underline">{contact.label}</Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
