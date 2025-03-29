"use client";

import * as React from "react";
import { Label, Pie, PieChart, PieProps } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  expenses: {
    label: "Total Expenses",
  },
  utilities: {
    label: "Utilities",
    color: "hsl(141, 53%, 53%)", // Green
  },
  rent: {
    label: "Rent",
    color: "hsl(0, 78%, 62%)", // Red
  },
  payroll: {
    label: "Payroll",
    color: "hsl(221, 70%, 60%)", // Blue
  },
  equipment: {
    label: "Equipment",
    color: "hsl(36, 90%, 55%)", // Orange
  },
} satisfies ChartConfig;

interface ExpenseItem {
  name: string;
  amount: string;
  percentage: string;
}

interface PieChartComponentProps {
  expenseData: ExpenseItem[];
}

export function PieChartComponent({ expenseData }: PieChartComponentProps) {
  const { totalExpenses, chartData } = React.useMemo(() => {
    const total = expenseData.reduce(
      (acc, curr) => acc + parseFloat(curr.amount) || 0,
      0,
    );
    const data = expenseData.map((item) => ({
      ...item,
      value: parseFloat(item.amount) || 0,
      fill: getColorForCategory(item.name),
    }));
    return { totalExpenses: total, chartData: data };
  }, [expenseData]);

  function getColorForCategory(name: string): string {
    switch (name.toLowerCase()) {
      case "utilities":
        return chartConfig.utilities.color;
      case "rent":
        return chartConfig.rent.color;
      case "payroll":
        return chartConfig.payroll.color;
      case "equipment":
        return chartConfig.equipment.color;
      default:
        return "#8884d8";
    }
  }

  const pieProps: PieProps = {
    data: chartData,
    dataKey: "value",
    nameKey: "name",
    innerRadius: "60%",
    outerRadius: "80%",
    paddingAngle: 2,
    strokeWidth: 1,
    animationDuration: 500,
    labelLine: false,
  };

  return (
    <Card className="flex flex-col rounded-none border-0 py-0 shadow-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            
            <Pie {...pieProps}>
              <Label
                content={({ viewBox }) => {
                  // @ts-expect-error "error on next line"
                  const { cx, cy } = viewBox || {};
                  if (typeof cx === "number" && typeof cy === "number") {
                    return (
                      <text
                        x={cx}
                        y={cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={cx}
                          y={cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalExpenses.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                          })}
                        </tspan>
                        <tspan
                          x={cx}
                          y={cy + 24}
                          className="fill-muted-foreground"
                        >
                          {chartConfig.expenses.label}
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
