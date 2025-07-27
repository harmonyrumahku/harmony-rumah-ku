import { Fragment } from "react";

import HomePage from "@/components/content/HomePage";

import ProjectContent from "@/components/content/ProjectContent";

import AboutPage from "@/components/content/AboutPage";

import ArticlePage from "@/components/content/ArticlePage";

import HomePageSkeleton from "@/base/helper/HomePageSkelaton";

import { fetchProyekData } from "@/utils/FetchProyek";

import { fetchHomeData } from "@/utils/FetchHome";

import { fetchAboutData } from "@/utils/FetchAbout";

import { fetchArticleData } from "@/utils/FetchArticle";

export default async function Page() {
  try {
    const projectData = await fetchProyekData();
    const homeData = await fetchHomeData();
    const aboutData = await fetchAboutData();
    const articleData = await fetchArticleData();

    return <Fragment>
      <HomePage homeData={homeData} />
      <ProjectContent projectData={projectData} />
      <AboutPage aboutData={aboutData} />
      <ArticlePage articleData={articleData} />
    </Fragment>;
  } catch (error) {
    console.error('Error fetching Project data:', error);
    return (
      <HomePageSkeleton />
    );
  }
}