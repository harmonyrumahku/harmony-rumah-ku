import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog'


import logo from "@/base/assets/logo.png"

import Image from 'next/image'

import { useContactForm } from '@/lib/useContactForm'

interface ModalPopupProps {
    open: boolean;
    onClose: () => void;
    onDontShowAgain: () => void;
}

export default function ModalPopup({ open, onClose, onDontShowAgain }: ModalPopupProps) {
    const {
        formData,
        isSubmitting,
        canSubmit,
        remainingTime,
        showLimitNotice,
        handleInputChange,
        handleSubmit
    } = useContactForm();

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-4xl max-h-[95vh] overflow-hidden flex flex-col p-0 border-0 shadow-none outline-0">
                <DialogTitle className="sr-only">Newsletter Signup</DialogTitle>
                <div className="flex bg-gray-900 rounded-lg overflow-hidden">
                    {/* Left Section - Information Panel */}
                    <div className="w-1/2 bg-background p-8 relative">
                        {/* Pattern Background */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full" style={{
                                backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                                backgroundSize: '40px 40px'
                            }}></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Logo */}
                            <div className="flex items-center mb-8">
                                <div className="mr-1">
                                    <Image src={logo} alt="harmonyrumahku" width={100} height={100} />
                                </div>

                                <span className=" text-xl font-semibold mt-7">HARMONY & RUMAH KU®</span>
                            </div>

                            {/* Description */}
                            <div className=" space-y-4">
                                <h3 className="font-bold text-2xl mb-2">Mari Terhubung, Bangun Harmoni Bersama</h3>
                                <p className="text-sm leading-relaxed">
                                    Ingin mulai mewujudkan hunian impian atau sekadar bertanya? Kami siap mendengarkan dan membantu setiap langkahnya.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form Panel */}
                    <div className="w-1/2 bg-[#173d2a] p-8 relative">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-white text-gray-300 hover:text-gray-300 transition-colors"
                        >
                        </button>

                        {/* Daily Limit Notice */}
                        {showLimitNotice && (
                            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg text-sm mb-4">
                                <strong>Batas Harian:</strong> Anda sudah mengirim pesan hari ini.
                                Silakan coba lagi dalam <strong>{remainingTime}</strong>.
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="modal-nama_lengkap" className="text-xs font-medium mb-1 text-gray-300">Nama Lengkap</label>
                                    <input
                                        id="modal-nama_lengkap"
                                        type="text"
                                        placeholder="Masukkan nama Anda"
                                        className="bg-transparent border-0 rounded-none px-0 py-2 text-gray-300 outline-none placeholder-gray-500 focus:border-orange-500 focus:ring-0 w-full"
                                        value={formData.nama_lengkap}
                                        onChange={handleInputChange}
                                        required
                                        disabled={!canSubmit}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="modal-email" className="text-xs font-medium mb-1 text-gray-300">Alamat Email</label>
                                    <input
                                        id="modal-email"
                                        type="email"
                                        placeholder="nama@email.com"
                                        className="bg-transparent border-0 rounded-none px-0 py-2 text-gray-300 outline-none placeholder-gray-500 focus:border-orange-500 focus:ring-0 w-full"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        disabled={!canSubmit}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="modal-kebutuhan" className="text-xs font-medium mb-1 text-gray-300">Ceritakan Kebutuhan Anda</label>
                                    <textarea
                                        id="modal-kebutuhan"
                                        placeholder="Tulis pertanyaan, ide, atau kebutuhan Anda di sini"
                                        className="bg-transparent border-0 rounded-none px-0 py-2 text-gray-300 outline-none placeholder-gray-500 focus:border-orange-500 focus:ring-0 w-full min-h-[80px] resize-none"
                                        value={formData.kebutuhan}
                                        onChange={handleInputChange}
                                        required
                                        disabled={!canSubmit}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || !canSubmit}
                                className="w-full bg-[#d9f2cb] hover:bg-[#d9f2cb] font-semibold py-3 px-6 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Mengirim...' : !canSubmit ? 'Batas Harian Tercapai' : 'Kirim Pesan'}
                            </button>

                            {/* Footer */}
                            <div className="flex justify-between items-center text-xs text-gray-400 mt-8">
                                <span>Privasi Anda penting bagi kami.</span>
                                <button
                                    type="button"
                                    onClick={onDontShowAgain}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    Jangan tampilkan lagi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}