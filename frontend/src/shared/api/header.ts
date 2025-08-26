import { type IStrapi } from "./types";
import { useQuery } from "@tanstack/react-query";
import { strapiApi } from "./strapi";
export interface IHeaderData extends IStrapi {
  button_link: string;
}

export const getHeaderData = async () => {
  try {
    const { data } = await strapiApi.get("/api/header");

    return data?.data as IHeaderData;
  } catch (error) {
    console.error("Error fetching header data:", error);
    return null;
  }
};

export const useHeaderData = () => {
  return useQuery({
    queryKey: ["headerData"],
    queryFn: getHeaderData,
    staleTime: 5 * 60 * 1000,
  });
};
