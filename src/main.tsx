import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import {
  Main,
  Faq,
  LetsConnect,
  Login,
  AboutUs,
  Banking,
  ComingSoon,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/lets-connect",
    element: <LetsConnect />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/banking",
    element: <Banking />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoon />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
