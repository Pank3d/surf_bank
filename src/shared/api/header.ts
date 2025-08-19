import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const getHeaderData = async () => {
  try {
    const { data } = await axios.get("/api/header");

    return data?.data;
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
