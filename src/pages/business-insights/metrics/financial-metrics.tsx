import Analytics from "@/pages/business-insights/metrics/analytics/analytics";
import Chart from "@/pages/business-insights/metrics/analytics/chart";
import Cards from "@/pages/business-insights/metrics/cards";

const FinancialMetrics = () => {
  return (
    <div className="pb-20">
      <div className="mt-6 grid grid-cols-2 items-start gap-6 px-6 pb-10">
        <Cards />
        <Analytics />
      </div>

      <div className="mx-6 rounded-[8px] border border-[#D4D4D4]">
        <div className="mb-4 border-b border-b-[#D4D4D4] px-4 py-2">
          <h3 className="mb-1 font-semibold text-[#404040]">
            Revenue Projects
          </h3>

          <p className="text-sm text-[#404040]">
            AI-powered forecasting of your future cash position
          </p>
        </div>

        <Chart />

        <div className="mt-4 px-6 py-3">
          <h4 className="mb-1 text-sm text-[#0A0A0A]">AI Cash Flow Analysis</h4>
          <p className="text-[#737373]">
            Your cash reserves are projected to last for approximately 120 days
            at your current burn. Your largest upcoming expenses include Staff
            Salaries (GHS 8,500) on March 31 and Quarterly Tax Payment (GHS
            5,800) on April 15.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialMetrics;
