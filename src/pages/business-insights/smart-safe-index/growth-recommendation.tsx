import { GROWTH_RECOMMENDATION } from "@/pages/business-insights/constants";
import { useQuery } from "@tanstack/react-query";

const GrowthRecommendation = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const token = localStorage.getItem("token");

  const { data } = useQuery({
    queryKey: ["business", "recommendations"],
    queryFn: async () => {
      const res = await fetch(`${apiUrl}/ai_service/recommendations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return res.json();
    },
  });

  console.log(data);

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
