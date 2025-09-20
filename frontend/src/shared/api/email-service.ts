import axios from "axios";

const baseURL = import.meta.env.VITE_EMAIL_SERVICE_URL!;

export const emailServiceApi = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});