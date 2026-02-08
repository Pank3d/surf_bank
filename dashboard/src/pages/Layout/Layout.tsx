import { Navigation, MobileHeader } from "@/widgets";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";

export const Layout = () => (
  <div className={style.layout}>
    <Navigation />
    <MobileHeader />
    <Outlet />
    {/* <FloatNavigation /> */}
  </div>
);
