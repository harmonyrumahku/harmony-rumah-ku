import React from "react";

import Image from "next/image";

import type { TimelineItem } from "@/types/Proyek";

import sticker from "@/base/assets/stiker.png"

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="w-full overflow-x-auto whitespace-nowrap px-10 py-24 sm:pl-72 scrollbar-hide bg-[#e3cdb3] relative">
            <div className="relative flex flex-row items-stretch gap-8 sm:gap-24 min-w-max before:absolute before:left-0 before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:bg-[#b3a49d] before:rounded-full">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={
                            `relative flex flex-col items-center min-w-[260px] sm:min-w-[400px] flex-1`
                        }
                    >
                        {/* Atas (idx genap): Gambar di atas, info di bawah */}
                        {idx % 2 === 0 && (
                            <div className="mb-12 sm:mb-20 w-full flex flex-col items-center">
                                <div className="flex flex-row gap-2 sm:gap-3 w-full justify-center">
                                    {item.image && item.image.map((img, i) => (
                                        <div
                                            key={i}
                                            className="w-full h-32 rounded-xl overflow-hidden border-2 border-white shadow-md transition-transform duration-200 hover:scale-105 bg-gray-100 mb-14"
                                        >
                                            <Image
                                                src={img}
                                                alt={item.title + ' ' + (i + 1)}
                                                width={112}
                                                height={112}
                                                className="object-cover w-full h-full rounded-xl"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 sm:mt-5 flex flex-col items-start w-full">
                                    <div className="text-base font-bold text-neutral-800 mb-1">{item.title}</div>
                                    <div className="text-sm text-neutral-600 whitespace-pre-line">{item.deskripsi}</div>
                                </div>
                            </div>
                        )}
                        {/* Dot dan Label */}
                        <div
                            className={`absolute z-10 flex flex-col items-center 
                                ${idx % 2 === 0
                                    ? 'top-[47%] -translate-y-1/2'
                                    : 'top-[54%] -translate-y-1/2'
                                } 
                                ${idx === 0
                                    ? 'left-0 -translate-x-1/2'
                                    : idx === items.length - 1
                                        ? 'right-0 translate-x-1/2'
                                        : 'left-1/2 -translate-x-1/2'
                                }`}
                        >
                            {/* Zig-zag label: genap di atas, ganjil di bawah */}
                            {idx % 2 === 0 && (
                                <span className="text-xs mb-2 font-semibold text-neutral-700 whitespace-nowrap">
                                    {item.label}
                                </span>
                            )}
                            <span className="block w-6 h-6 rounded-full border-4 border-white bg-orange-500 shadow-lg ring-2 ring-orange-200 transition-transform duration-200 hover:scale-110" />
                            {idx % 2 !== 0 && (
                                <span className="text-xs mt-2 font-semibold text-neutral-700 whitespace-nowrap">
                                    {item.label}
                                </span>
                            )}
                        </div>

                        {/* Bawah (idx ganjil): Info di atas, gambar di bawah */}
                        {idx % 2 !== 0 && (
                            <div className="mt-12 sm:mt-20 w-full flex flex-col items-center">
                                <div className="w-full max-w-xs mb-20">
                                    <div className="text-base font-bold text-neutral-800 mb-1">{item.title}</div>
                                    <div className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line" style={{ maxWidth: '350px' }}>{item.deskripsi}</div>
                                </div>

                                <div className="flex flex-row gap-2 sm:gap-3 w-full justify-center">
                                    {item.image && item.image.map((img, i) => (
                                        <div
                                            key={i}
                                            className="w-full h-32 rounded-xl overflow-hidden border-2 border-white shadow-md transition-transform duration-200 hover:scale-105 bg-gray-100"
                                        >
                                            <Image
                                                src={img}
                                                alt={item.title + ' ' + (i + 1)}
                                                width={112}
                                                height={112}
                                                className="object-cover w-full h-full rounded-xl"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <h1 className="absolute bottom-20 left-4 sm:left-20 text-[#966f42] font-bold text-2xl sm:text-4xl">Perjalanan <br /> kami...</h1>

            <Image src={sticker} alt="sticker" className="absolute top-5 sm:top-0 left-0 w-16 h-16 sm:w-auto sm:h-auto" />
        </div>
    );
}

export { Timeline };