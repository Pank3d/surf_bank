import { useQuery } from "@tanstack/react-query";
import { type IStrapi } from "./types";
import { strapiApi } from "./strapi";

interface IAboutPageData extends IStrapi {
  description: string;
  hero_button_link: string;
  cards: {
    title: string;
    description: string;
  }[];
  demo_button_link: string;
}

export const getPageAboutData = async (): Promise<IAboutPageData | null> => {
  try {
    const { data } = await strapiApi.get("/api/about-page");

    return data?.data;
  } catch (error) {
    console.error("Error fetching header data:", error);
    return null;
  }
};

export const usePageAboutData = () => {
  return useQuery({
    queryKey: ["pageAboutData"],
    queryFn: getPageAboutData,
    staleTime: 5 * 60 * 1000,
  });
};
