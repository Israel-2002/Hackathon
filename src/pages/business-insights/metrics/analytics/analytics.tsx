import { PieChartComponent } from "@/components/charts/pie-chart";
import { cn } from "@/lib/utils";
import Header from "@/pages/business-insights/metrics/analytics/header";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const token = localStorage.getItem("token");

  const { data, isLoading } = useQuery({
    queryKey: ["business", "expenses"],
    queryFn: async () => {
      const res = await fetch(`${apiUrl}/ai_service/generate_expenses`, {
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

    staleTime: 5 * 60 * 1000,
  });

  const expensesData = [
    {
      name: "Utilities",
      amount: data?.data?.expenses.utilities.amount || "0",
      percentage: data?.data?.expenses.utilities.percentage || "0",
    },
    {
      name: "Rent",
      amount: data?.data?.expenses.rent.amount || "0",
      percentage: data?.data?.expenses.rent.percentage || "0",
    },
    {
      name: "Payroll",
      amount: data?.data?.expenses.payroll.amount || "0",
      percentage: data?.data?.expenses.payroll.percentage || "0",
    },
    {
      name: "Equipment",
      amount: data?.data?.expenses.equipment.amount || "0",
      percentage: data?.data?.expenses.equipment.percentage || "0",
    },
  ];

  const summary = data?.data?.summary;

  return (
    <div className="rounded-[14px] border border-[#D4D4D4]">
      <Header />

      {isLoading ? (
        <div className="mx-auto w-fit py-20">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <PieChartComponent expenseData={expensesData} />

          <ul>
            {expensesData.map((data, i) => (
              <li
                key={i}
                className={cn(
                  "borl-[4px] flex items-center justify-between border-b border-l-[4px] py-[14px] pr-2 pl-6 first:border-t",
                  data.name === "Utilities"
                    ? "border-l-[#3B82F6]"
                    : data.name === "Rent"
                      ? "border-l-[#DC2626]"
                      : data.name === "Payroll"
                        ? "border-l-[#16A34A]"
                        : "border-l-[#FB923C]",
                )}
              >
                <h4 className="text-lg text-[#0A0A0A]">{data.name}</h4>

                <div className="flex items-center gap-1">
                  <span>{data.amount}</span>
                  <span className="text-[#A3A3A3]">{`${data.percentage}%`}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="px-6 py-3 text-sm">
            <p className="mb-1 text-[#0A0A0A]">{summary}</p>

            <p className="text-[#737373]">January - June 2024</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Analytics;
