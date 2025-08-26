import { useQuery } from "@tanstack/react-query";
import { type IStrapi } from "./types";
import { strapiApi } from "./strapi";

interface ILetsConnectPageData extends IStrapi {
  description: string[];
}

export const getPageLetsConnectData =
  async (): Promise<ILetsConnectPageData | null> => {
    try {
      const { data } = await strapiApi.get("/api/lets-connect-page");

      return data?.data;
    } catch (error) {
      console.error("Error fetching header data:", error);
      return null;
    }
  };

export const usePageLetsConnectData = () => {
  return useQuery({
    queryKey: ["pageLetsConnectData"],
    queryFn: getPageLetsConnectData,
    staleTime: 5 * 60 * 1000,
  });
};
