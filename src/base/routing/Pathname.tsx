"use client";

import React, { Fragment, useState, useEffect } from "react";

import Header from "@/components/layout/Header/Header";

import FooterLayout from "@/components/layout/Footer/FooterLayout";

import { Toaster } from "@/components/ui/sonner"

import ModalPopup from "@/base/helper/ModalPopup"

const Pathname = ({ children }: { children: React.ReactNode }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const dontShowAgain = localStorage.getItem('modal-dont-show-again');
        const lastShown = localStorage.getItem('modal-last-shown');

        if (dontShowAgain === 'true') {
            const oneDayInMs = 24 * 60 * 60 * 1000;
            const now = Date.now();
            const lastShownTime = lastShown ? parseInt(lastShown) : 0;

            if (now - lastShownTime > oneDayInMs) {
                localStorage.removeItem('modal-dont-show-again');
                localStorage.removeItem('modal-last-shown');
            } else {
                return;
            }
        }

        const timer = setTimeout(() => {
            setShowModal(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDontShowAgain = () => {
        setShowModal(false);
        localStorage.setItem('modal-dont-show-again', 'true');
        localStorage.setItem('modal-last-shown', Date.now().toString());
    };

    return (
        <Fragment>
            {showModal && <ModalPopup open={showModal} onClose={handleCloseModal} onDontShowAgain={handleDontShowAgain} />}
            <Header />
            {children}
            <FooterLayout />
            <Toaster />
        </Fragment>
    );
};

export default Pathname;