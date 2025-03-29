import AuthLayout from "@/pages/auth/layout";
import SignInPage from "@/pages/auth/signin/page";
import SignupPage from "@/pages/auth/signup/page";
import OverviewPage from "@/pages/overview/page";
import { createBrowserRouter } from "react-router";
import ForgotPasswordPage from "./pages/auth/forgot-password/page";
import SetPasswordPage from "./pages/auth/set-password/page";

export const router = createBrowserRouter([
  { path: "/", Component: OverviewPage },
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
      {
        path: "forgot-password",
        Component: ForgotPasswordPage,
      },
      {
        path: "set-password",
        Component: SetPasswordPage,
      },
    ],
  },
]);
