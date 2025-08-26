import axios from "axios";

const baseURL = import.meta.env.VITE_STRAPI_API_URL!;

export const strapiApi = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
