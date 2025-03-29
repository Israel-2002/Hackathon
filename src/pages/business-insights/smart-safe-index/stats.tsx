interface StatsProps {
  data: {
    payment_history: number;
    revenue_stability: number;
    debt_income_ratio: number;
    business_longevity: number;
    smart_save_index: number;
  };
  isLoading: boolean;
}

const Stats = ({ data, isLoading }: StatsProps) => {
  const stats = [
    {
      stat: "Payment History",
      percentage: data?.payment_history,
    },
    {
      stat: "Revenue Stability",
      percentage: data?.revenue_stability,
    },
    {
      stat: "Debt-to-Income ratio",
      percentage: data?.debt_income_ratio,
    },
    {
      stat: "Business Longevity",
      percentage: data?.business_longevity,
    },
  ];

  if (isLoading) {
    return (
      <div className="mx-auto w-fit py-10">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-4">
      {stats.map((stat, i) => (
        <li
          key={i}
          className="mt-4 grid place-items-center border-x border-x-[#CACACA] py-[36px]"
        >
          <div className="w-fit">
            <h4 className="mb-2 text-[17px] font-semibold">{stat.stat}</h4>
            <div className="relative h-[4px] rounded-full bg-[#FDE9E9]">
              <div
                style={{ transform: `scaleX(${stat.percentage / 10})` }}
                className="absolute inset-0 origin-left rounded-full bg-[#FC6060]"
              ></div>
            </div>
            <h5 className="mt-2 text-center text-sm text-[#414141]">
              {stat.percentage >= 8
                ? "Excellent"
                : stat.percentage >= 7
                  ? "Good"
                  : stat.percentage >= 5
                    ? "Fair"
                    : "Poor"}
            </h5>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Stats;
