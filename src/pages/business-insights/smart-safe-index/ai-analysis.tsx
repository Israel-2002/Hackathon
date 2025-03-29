import { RadialChartComponent } from "@/components/charts/radial-chart";
import FundingOptions from "@/pages/business-insights/smart-safe-index/funding-options";
import Stats from "@/pages/business-insights/smart-safe-index/stats";
import { useQuery } from "@tanstack/react-query";

const AiAnalysis = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const token = localStorage.getItem("token");

  const { data, isLoading } = useQuery({
    queryKey: ["business", "smart-index"],
    queryFn: async () => {
      const res = await fetch(`${apiUrl}/ai_service/generate_smart_index`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("");
      }

      return res.json();
    },
  });

  return (
    <div className="px-6">
      <div className="mt-6 items-start gap-6 rounded-t-[8px] border border-[#F0F0F0] px-6 py-5">
        <h3 className="font-semibold text-[#404040]">Smart Safe Index</h3>
      </div>

      <div className="mb-4 rounded-b-[8px] border px-6 pb-3">
        <RadialChartComponent
          data={data?.data?.smart_save_index}
          isLoading={isLoading}
        />

        <p className="text-center text-[#737373]">
          This score can grant you access to financial aid
        </p>

        <div>
          <h4 className="mb-1 text-[#0A0A0A]">AI Analysis</h4>
          <p className="text-[#737373]">
            Your financial health has improved by 7 points since last month.
            Your debt-to-income ratio has decreased, and your cash flow is more
            stable. Continue to monitor your expenses in the Marketing category,
            which has increased by 15%.
          </p>
        </div>
      </div>

      <Stats data={data?.data} isLoading={isLoading} />
      <FundingOptions />
    </div>
  );
};

export default AiAnalysis;
