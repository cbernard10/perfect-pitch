"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

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

const chartConfig = {
  accuracy: {
    label: "正確度",
  },
  C: {
    label: "ハ",
    color: "#77f",
  },
  Db: {
    label: "嬰ハ",
    color: "#22e",
  },
  D: {
    label: "ニ",
    color: "#77f",
  },
  Eb: {
    label: "嬰ニ",
    color: "#22e",
  },
  E: {
    label: "ホ",
    color: "#77f",
  },
  F: {
    label: "ヘ",
    color: "#77f",
  },
  Gb: {
    label: "嬰ヘ",
    color: "#22e",
  },
  G: {
    label: "ト",
    color: "#77f",
  },
  Ab: {
    label: "嬰ト",
    color: "#22e",
  },
  A: {
    label: "イ",
    color: "#77f",
  },
  Bb: {
    label: "嬰イ",
    color: "#22e",
  },
  B: {
    label: "ロ",
    color: "#77f",
  },
} satisfies ChartConfig;

const dict = {
  C: "ハ",
  Db: "嬰ハ",
  D: "ニ",
  Eb: "嬰ニ",
  E: "ホ",
  F: "ヘ",
  Gb: "嬰ヘ",
  G: "ト",
  Ab: "嬰ト",
  A: "イ",
  Bb: "嬰イ",
  B: "ロ",
};

export function ScoreTracker(props: { scores: number[]; totals: number[] }) {
  const chartData = Object.keys(chartConfig)
    .slice(1)
    .map((key, index) => {
      return {
        note: key,
        accuracy:
          props.totals[index] === 0
            ? 0
            : props.scores[index] / props.totals[index],
        // @ts-ignore
        fill: chartConfig[key as keyof ChartConfig].color,
      };
    });

  console.log(chartData);

  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardContent className="bg-transparent">
        <ChartContainer
          config={chartConfig}
          className="w-[500px] bg-transparent"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="note"
              tickLine={false}
              tickMargin={20}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="accuracy"
              strokeWidth={0}
              radius={0}
              activeIndex={2}
              width={20}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
