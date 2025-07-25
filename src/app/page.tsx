import { Fragment } from "react";

import HomePage from "@/components/content/HomePage";

import ProjectContent from "@/components/content/ProjectContent";

import { fetchProyekData } from "@/utils/FetchProyek";

import HomePageSkeleton from "@/base/helper/HomePageSkelaton";

import { fetchHomeData } from "@/utils/FetchHome";

export default async function Page() {
  try {
    const projectData = await fetchProyekData();
    const homeData = await fetchHomeData();

    return <Fragment>
      <HomePage homeData={homeData} />
      <ProjectContent projectData={projectData} />
    </Fragment>;
  } catch (error) {
    console.error('Error fetching Project data:', error);
    return (
      <HomePageSkeleton />
    );
  }
}