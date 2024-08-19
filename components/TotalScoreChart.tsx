"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function TotalScoreChart({
  score,
  total,
  lang,
}: Readonly<{ score: number; total: number; lang: string }>) {
  const chartData = [{ month: "january", right: score, wrong: total - score }];

  const chartConfig = {
    right: {
      label: lang === "jp" ? "正しい" : "correct",
      color: "hsl(var(--chart-1))",
    },
    wrong: {
      label: lang === "jp" ? "間違った" : "incorrect",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col bg-transparent border-0 w-96 shadow-none">
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[500px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={100}
            outerRadius={200}
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
                          className="fill-foreground text-xl font-bold font-mono"
                        >
                          {total !== 0 ? ((100 * score) / total).toFixed(2) : 0}
                          %
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          {lang === "jp" ? "正確度" : "Précision"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="wrong"
              fill="#ddf"
              stackId="a"
              cornerRadius={3}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="right"
              stackId="a"
              cornerRadius={3}
              fill="#22f"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
