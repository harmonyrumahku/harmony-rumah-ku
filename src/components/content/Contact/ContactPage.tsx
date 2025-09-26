"use client"

import React from 'react'

import { Card, CardContent } from '@/components/ui/card'

import Link from 'next/link'

import Image from 'next/image'

import { motion } from 'framer-motion'
const MotionImage = motion(Image as React.ComponentType<React.ComponentProps<typeof Image>>)

export default function ContactPage({ contactData }: { contactData: Contact[] }) {
    return (
        <section className='bg-[#ebffe6] pt-4 container' id='kontak'>
            <div className="flex mb-8 gap-2 sm:gap-4 px-4 sm:px-10">
                <motion.h2
                    className="font-bold text-[#333333] text-lg sm:text-xl md:text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                >
                    Contact
                </motion.h2>
            </div>

            <div className="bg-[#ebffe6] px-10 py-10 ">
                <div className="flex flex-col gap-2 mb-8">
                    <motion.span
                        className="inline-block bg-transparent border border-[#708B75] text-xs px-3 py-1 rounded-full w-fit"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                        Terhubung dengan kami
                    </motion.span>
                    <motion.h2
                        className="font-semibold text-[#333333] text-2xl sm:text-3xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: 0.06 }}
                    >
                        Wujudkan Rumah Impian Sekarang!
                    </motion.h2>
                    <motion.p
                        className="text-[#333] text-base sm:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                    >
                        Kami di sini untuk bantu Anda mulai dari nol. Yuk, cerita sedikit tentang proyek Anda.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contactData.map((contact, idx) => (
                        <Card key={idx} className="bg-[#ebffe6] border-none shadow px-0 py-6">
                            <CardContent className="flex flex-col items-start gap-2">
                                <MotionImage
                                    src={contact.image_urls}
                                    alt={contact.title}
                                    width={500}
                                    height={500}
                                    className='w-[60px] h-[60px]'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: idx * 0.05 }}
                                />
                                <motion.div
                                    className="font-semibold text-[#333] text-lg"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.06 }}
                                >
                                    {contact.title}
                                </motion.div>
                                <motion.div
                                    className="text-[#666] text-sm mb-1"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.08 }}
                                >
                                    {contact.text}
                                </motion.div>
                                <Link href={contact.url} target='_blank' rel='noopener noreferrer' className="text-sm font-bold hover:underline">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: idx * 0.1 }}
                                    >
                                        {contact.label}
                                    </motion.span>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
