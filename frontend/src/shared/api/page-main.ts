import { useQuery } from "@tanstack/react-query";
import { type IStrapi } from "./types";
import { strapiApi } from "./strapi";

interface IMainPageData extends IStrapi {
  hero_button_link: string;
  our_mission_button_link: string;
  we_empower_cards_data: {
    title: string;
    description: string;
  }[];
  multicards_button_link: string;
}

export const getPageMainData = async (): Promise<IMainPageData | null> => {
  try {
    const { data } = await strapiApi.get("/api/main-page");

    return data?.data;
  } catch (error) {
    console.error("Error fetching header data:", error);
    return null;
  }
};

export const usePageMainData = () => {
  return useQuery({
    queryKey: ["pageMainData"],
    queryFn: getPageMainData,
    staleTime: 5 * 60 * 1000,
  });
};
