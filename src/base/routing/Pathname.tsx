"use client";

import React, { Fragment } from "react";

import Header from "@/components/layout/Header/Header";

import FooterLayout from "@/components/layout/Footer/Footer";

import { Toaster } from "@/components/ui/sonner"

import ModalPopup from "@/base/helper/ModalPopup"

import { useStatePathname } from "@/base/routing/lib/useStatePathname";

const Pathname = ({ children }: { children: React.ReactNode }) => {
    const { showModal, handleCloseModal, handleDontShowAgain } = useStatePathname();

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