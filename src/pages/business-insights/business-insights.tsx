import { Button } from "@/components/ui/button";
import Filter from "@/pages/business-insights/filter";
import { PlusCircle } from "lucide-react";
import { Outlet } from "react-router";

const BusinessInsights = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <div>
          <h2 className="text-[20px] font-bold text-[#001213]">
            Business Insights
          </h2>
          <p className="text-sm text-[#4D595A]">
            Smart recommendations to improve your financial health
          </p>
        </div>
      </div>

      <Filter />
      <Outlet />
    </div>
  );
};

export default BusinessInsights;
