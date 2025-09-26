import { Fragment } from "react";

import HomePage from "@/components/content/Home/HomePage";

import ProjectContent from "@/components/content/Proyek/ProjectContent";

import AboutPage from "@/components/content/About/AboutPage";

import ArticlePage from "@/components/content/Article/ArticlePage";

import ContactPage from "@/components/content/Contact/ContactPage";

import HomePageSkeleton from "@/base/helper/HomePageSkelaton";

import AwardPage from "@/components/content/Awards/AwardPage"

import { fetchSliceProyekData } from "@/utils/FetchProyek";

import { fetchHomeData } from "@/utils/FetchHome";

import { fetchAboutData } from "@/utils/FetchAbout";

import { fetchSliceArticleData } from "@/utils/FetchArticle";

import { fetchContactData } from "@/utils/FetchContact";

import { fetchSliceAwardsData } from "@/utils/FetchAwards";

export default async function Page() {
  try {
    const projectData = await fetchSliceProyekData();
    const homeData = await fetchHomeData();
    const aboutData = await fetchAboutData();
    const articleData = await fetchSliceArticleData();
    const contactData = await fetchContactData();
    const awardsData = await fetchSliceAwardsData();

    return <Fragment>
      <HomePage homeData={homeData} />
      <ProjectContent projectData={projectData} />
      <AboutPage aboutData={aboutData} />
      <AwardPage awardsData={awardsData} />
      <ArticlePage articleData={articleData} />
      <ContactPage contactData={contactData} />
    </Fragment>;
  } catch {
    return (
      <HomePageSkeleton />
    );
  }
}