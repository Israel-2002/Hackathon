import AuthLayout from "@/pages/auth/layout";
import SignInPage from "@/pages/auth/signin/page";
import SignupPage from "@/pages/auth/signup/page";
import OverviewPage from "@/pages/overview/page";
import { createBrowserRouter, redirect } from "react-router";
import PageLayout from "./components/page-layout";
import Transactionspage from "./pages/transactionspage";
import BusinessInsights from "@/pages/business-insights/business-insights";
import FinancialMetrics from "@/pages/business-insights/metrics/financial-metrics";
import AiAnalysis from "@/pages/business-insights/smart-safe-index/ai-analysis";
import ReportsPage from "./pages/reports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    children: [
      {
        path: "",
        Component: OverviewPage,
        loader: async () => {
          const token = localStorage.getItem("token");

          if (!token) {
            return redirect("/auth/signin");
          }

          return token;
        },
      },
      {
        path: "transactions",
        Component: Transactionspage,
      },
      {
        path: "reports",
        Component: ReportsPage,
      },
      {
        path: "insights",
        Component: BusinessInsights,
        children: [
          {
            index: true,
            Component: FinancialMetrics,
          },
          {
            path: "business-credibility",
            Component: AiAnalysis,
          },
        ],
      },
    ],
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
