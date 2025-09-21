"use client";

import { useState, useEffect } from "react";

export const useStatePathname = () => {
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

    return {
        showModal,
        handleCloseModal,
        handleDontShowAgain
    };
};
