import GrowthRecommendation from "@/pages/business-insights/smart-safe-index/growth-recommendation";

const FundingOptions = () => {
  return (
    <div className="mt-4">
      <div className="border-b border-b-[#F0F0F0] px-2 py-5">
        <h4 className="font-semibold text-[#404040]">Growth recommendations</h4>
      </div>

      <div className="my-4 bg-[#EFF6FF] px-4 py-[14px]">
        <p className="text-[#0A0A0A]">
          Implementing all recommendations could increase your revenue by
          approximately 80%. for.
        </p>
      </div>

      <GrowthRecommendation />
    </div>
  );
};

export default FundingOptions;
