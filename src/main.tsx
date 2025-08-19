import "./index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { TanstackQueryClientProvider } from "./shared/provider/tastack-provider";

import {
  Main,
  Faq,
  LetsConnect,
  Login,
  AboutUs,
  Banking,
  ComingSoon,
  Layout,
  ForgotPassword,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
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
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryClientProvider>
      <RouterProvider router={router} />
    </TanstackQueryClientProvider>
  </StrictMode>
);
