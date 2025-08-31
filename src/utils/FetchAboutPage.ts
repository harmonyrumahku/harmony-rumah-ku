import { AboutPages, AboutPagesResponse } from "@/types/AboutPages";

import { AboutFilosofi, AboutFilosofiResponse } from "@/types/AboutFilosofi";

import { AboutSolusi, AboutSolusiResponse } from "@/types/AboutSolusi";

import { BudayaData, AboutBudayaResponse } from "@/types/AboutBudaya";

export const fetchAboutPages = async (): Promise<AboutPages[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_ABOUT_PAGES) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ABOUT_PAGES as string}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse: AboutPagesResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};

export const fetchAboutFilosofi = async (): Promise<AboutFilosofi[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_ABOUT_FILOSOFI) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ABOUT_FILOSOFI as string}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse: AboutFilosofiResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};

export const fetchAboutSolusi = async (): Promise<AboutSolusi[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_ABOUT_SOLUSI) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ABOUT_SOLUSI as string}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse: AboutSolusiResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};

export const fetchAboutBudaya = async (): Promise<BudayaData[]> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_ABOUT_ABOUT_BUDAYA) {
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ABOUT_ABOUT_BUDAYA as string}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
        },
        next: { revalidate: 5 },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const apiResponse: AboutBudayaResponse = await response.json();
    return apiResponse.data;
  } catch {
    return [];
  }
};
