import AuthLayout from "@/pages/auth/layout";
import SignInPage from "@/pages/auth/signin/page";
import SignupPage from "@/pages/auth/signup/page";
import OverviewPage from "@/pages/overview/page";
import { createBrowserRouter, redirect } from "react-router";

import PageLayout from "./components/page-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    children: [
      {
        path: "",
        Component: OverviewPage,
      },
    ],

    loader: async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return redirect("/auth/signin");
      }

      const userString = localStorage.getItem("user");
      const user = userString ? JSON.parse(userString) : null;

      return { token, user };
    },
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "signup",
        Component: SignupPage,
      },
      {
        path: "signin",
        Component: SignInPage,
      },
    ],
  },
]);
