import Footer from "@/components/layout/Footer/Footer";

import FooterSkeleton from "@/components/layout/Footer/FooterSkelaton";

import { fetchSocialMediaData } from "@/utils/FetchSocialMedia";

export default async function FooterLayout() {
    try {
        const socialMediaData = await fetchSocialMediaData();

        return (
            <Footer socialMediaData={socialMediaData} />
        );
    } catch {
        return (
            <FooterSkeleton />
        );
    }
}