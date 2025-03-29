"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useQuery } from "@tanstack/react-query";

const chartConfig = {
  income: {
    label: "Income",
    color: "#F45B3C",
  },
  expenses: {
    label: "Expenses",
    color: "#FF745E",
  },
} satisfies ChartConfig;

export default function BarChatComponent() {
  const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const token = localStorage.getItem("token");

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["business", "income-expense"],
    queryFn: async () => {
      const res = await fetch(`${apiUrl}/dashboard/income-expense`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;

  const result = isSuccess
    ? Object.keys({ ...data.data }).map((month) => ({
        month,
        income: data.data[month].income,
        expenses: data.data[month].expenses,
      }))
    : [];

  console.log(data);

  return (
    <Card className="rounded-none border-0 shadow-none">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={result}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {/* Correct the dataKey to 'income' and 'expenses' */}
            <Bar dataKey="income" fill={chartConfig.income.color} radius={4} />
            <Bar
              dataKey="expenses"
              fill={chartConfig.expenses.color}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
