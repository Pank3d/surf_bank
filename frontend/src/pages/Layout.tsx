import { Header, Footer } from "@/widgets";
import { Outlet } from "react-router";

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
