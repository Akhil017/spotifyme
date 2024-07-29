"use client";

import { TrendingUp } from "lucide-react";
import { PolarGrid, RadialBar, RadialBarChart } from "recharts";

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
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;

type FollowersRadialChartProps = {
  data: { artist: string; popularity: number; fill: string }[];
};

export default function PopularityRadialChart({
  data,
}: FollowersRadialChartProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Artist - Popularity</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={data} innerRadius={30} outerRadius={100}>
            {/* <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="artist" />}
            /> */}
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="Artist"
                  nameKey="artist"
                  indicator="line"
                  labelFormatter={(_, payload) => {
                    return payload?.[0].payload.artist;
                  }}
                />
              }
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="popularity" />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
