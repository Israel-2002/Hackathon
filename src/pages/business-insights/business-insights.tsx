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

        <Button className="rounded-full bg-[#FC6060] px-4 py-2.5 text-white hover:bg-[#FC6060]/90">
          <PlusCircle className="h-4 w-4" />
          Add transaction
        </Button>
      </div>

      <Filter />
      <Outlet />
    </div>
  );
};

export default BusinessInsights;
