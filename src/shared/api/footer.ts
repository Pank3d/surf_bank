import { type IStrapi } from "./types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface IFooterData extends IStrapi {
  description: string;
  support_time: string;
  terms_privacy: {
    title: string;
    link: string;
  }[];
  email: string;
}

export const getFooterData = async (): Promise<IFooterData | null> => {
  try {
    const { data } = await axios.get("/api/Footer");

    return data?.data;
  } catch (error) {
    console.error("Error fetching Footer data:", error);
    return null;
  }
};

export const useFooterData = () => {
  return useQuery({
    queryKey: ["FooterData"],
    queryFn: getFooterData,
    staleTime: 5 * 60 * 1000,
  });
};
