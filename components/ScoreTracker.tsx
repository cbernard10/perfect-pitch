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

const chartConfigJp = {
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

const chartConfigFr = {
  accuracy: {
    label: "Précision",
  },
  C: {
    label: "Do",
    color: "#77f",
  },
  Db: {
    label: "Do#",
    color: "#22e",
  },
  D: {
    label: "Ré",
    color: "#77f",
  },
  Eb: {
    label: "Ré#",
    color: "#22e",
  },
  E: {
    label: "Mi",
    color: "#77f",
  },
  F: {
    label: "Fa",
    color: "#77f",
  },
  Gb: {
    label: "Fa#",
    color: "#22e",
  },
  G: {
    label: "Sol",
    color: "#77f",
  },
  Ab: {
    label: "Sol#",
    color: "#22e",
  },
  A: {
    label: "La",
    color: "#77f",
  },
  Bb: {
    label: "La#",
    color: "#22e",
  },
  B: {
    label: "Si",
    color: "#77f",
  },
} satisfies ChartConfig;

export function ScoreTracker(props: {
  scores: number[];
  totals: number[];
  lang: string;
}) {
  const chartConfig = props.lang === "jp" ? chartConfigJp : chartConfigFr;
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
