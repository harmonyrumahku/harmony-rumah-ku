import { Card } from '@/components/ui/card'

import Image from 'next/image'

import { Jasa } from '@/types/Jasa'

import Link from 'next/link'

export function CardJasa({ service, isExpanded, onToggle }: {
    service: Jasa,
    isExpanded: boolean,
    onToggle: (id: string) => void
}) {
    return (
        <div className="relative group">
            <Card
                className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4 cursor-pointer"
                onClick={() => isExpanded && onToggle(service.id)}
            >
                <div className="relative h-48 sm:h-64 lg:h-96 overflow-hidden rounded-[1rem] sm:rounded-[1.5rem]">
                    <Image
                        src={service.image_urls}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                    <Link href="/konsultasi" className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 cursor-pointer">
                        <button className="bg-white/20 hover:bg-white/30 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 backdrop-blur-md border border-white/20 cursor-pointer">
                            {service.category}
                        </button>
                    </Link>

                    <div className='absolute bottom-5 left-3 sm:left-4'>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                            {service.title}
                        </h3>
                    </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="space-y-3 sm:space-y-4 pl-2 sm:pl-4 pr-2 sm:pr-4">

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>

                <div className={`flex justify-center -mt-8 sm:-mt-6 cursor-pointer transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-6 sm:max-h-8'
                    }`}
                    onClick={(e) => {
                        e.stopPropagation()
                        onToggle(service.id)
                    }}
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </Card >
        </div >
    )
}