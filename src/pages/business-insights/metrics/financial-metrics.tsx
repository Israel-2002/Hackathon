import Analytics from "@/pages/business-insights/metrics/analytics/analytics";
import Cards from "@/pages/business-insights/metrics/cards";

const FinancialMetrics = () => {
  return (
    <div className="mt-6 grid grid-cols-2 items-start gap-6 px-6">
      <Cards />
      <Analytics />
    </div>
  );
};

export default FinancialMetrics;
