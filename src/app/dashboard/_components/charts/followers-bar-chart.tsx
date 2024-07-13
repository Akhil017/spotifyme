"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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
  desktop: {
    color: "hsl(var(--chart-1))",
  },

  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

type FollowersBarChartProps = {
  data: { artist: string; followers: number; image: string }[];
};

export function FollowersBarChart({ data }: FollowersBarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Artist - Followers</CardTitle>
        <CardDescription>Followers bar chart</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-auto h-[200px]"
        >
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              right: 0,
              left: 25,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="artist"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey="followers" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="followers"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="followers"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Your top 5 artists and no of their followers
        </div>
      </CardFooter>
    </Card>
  );
}
