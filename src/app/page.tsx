import { Fragment } from "react";

import HomePage from "@/components/content/HomePage";

import ProjectContent from "@/components/content/ProjectContent";

import { fetchProyekData } from "@/utils/FetchProyek";

import HomePageSkeleton from "@/base/helper/HomePageSkelaton";

export default async function Page() {
  try {
    const projectData = await fetchProyekData();

    return <Fragment>
      <HomePage />
      <ProjectContent projectData={projectData} />
    </Fragment>;
  } catch (error) {
    console.error('Error fetching Project data:', error);
    return (
      <HomePageSkeleton />
    );
  }
}