import { GROWTH_RECOMMENDATION } from "@/pages/business-insights/constants";

const GrowthRecommendation = () => {
  return (
    <ul className="grid gap-4 pb-20">
      {GROWTH_RECOMMENDATION.map(({ title, description }, i) => (
        <li key={i} className="rounded-[8px] border border-[#D4D4D4] p-6">
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="font-medium text-[#1F1F1F]">{description}</p>
        </li>
      ))}
    </ul>
  );
};

export default GrowthRecommendation;
