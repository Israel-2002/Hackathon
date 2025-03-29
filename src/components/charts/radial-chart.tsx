"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FB923D",
  },
  mobile: {
    label: "Mobile",
    color: "#F0F0F0",
  },
} satisfies ChartConfig;

interface RadialChartComponentProps {
  data: number;
  isLoading: boolean;
}

export function RadialChartComponent({
  data,
  isLoading,
}: RadialChartComponentProps) {
  const totalPercentage = Math.ceil((data / 850) * 100);
  const remainingPercentage = 100 - totalPercentage;

  const chartData = [
    {
      month: "january",
      desktop: totalPercentage,
      mobile: remainingPercentage,
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
    <Card className="flex max-h-[200px] flex-col border-0 shadow-none">
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalPercentage}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="#FC6060"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              stackId="a"
              cornerRadius={5}
              fill="#F0F0F0"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
