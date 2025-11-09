"use client";

import * as React from "react";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", expenses: 22200, revenue: 30000 },
  { date: "2024-04-02", expenses: 9700, revenue: 18000 },
  { date: "2024-04-03", expenses: 16700, revenue: 12000 },
  { date: "2024-04-04", expenses: 24200, revenue: 26000 },
  { date: "2024-04-05", expenses: 37300, revenue: 29000 },
  { date: "2024-04-06", expenses: 30100, revenue: 34000 },
  { date: "2024-04-07", expenses: 24500, revenue: 18000 },
  { date: "2024-04-08", expenses: 40900, revenue: 32000 },
  { date: "2024-04-09", expenses: 5900, revenue: 11000 },
  { date: "2024-04-10", expenses: 26100, revenue: 19000 },
  { date: "2024-04-11", expenses: 32700, revenue: 35000 },
  { date: "2024-04-12", expenses: 29200, revenue: 21000 },
  { date: "2024-04-13", expenses: 34200, revenue: 38000 },
  { date: "2024-04-14", expenses: 13700, revenue: 22000 },
  { date: "2024-04-15", expenses: 12000, revenue: 17000 },
  { date: "2024-04-16", expenses: 13800, revenue: 19000 },
  { date: "2024-04-17", expenses: 44600, revenue: 36000 },
  { date: "2024-04-18", expenses: 36400, revenue: 41000 },
  { date: "2024-04-19", expenses: 24300, revenue: 18000 },
  { date: "2024-04-20", expenses: 8900, revenue: 15000 },
  { date: "2024-04-21", expenses: 13700, revenue: 20000 },
  { date: "2024-04-22", expenses: 22400, revenue: 17000 },
  { date: "2024-04-23", expenses: 13800, revenue: 23000 },
  { date: "2024-04-24", expenses: 38700, revenue: 29000 },
  { date: "2024-04-25", expenses: 21500, revenue: 25000 },
  { date: "2024-04-26", expenses: 7500, revenue: 13000 },
  { date: "2024-04-27", expenses: 38300, revenue: 42000 },
  { date: "2024-04-28", expenses: 12200, revenue: 18000 },
  { date: "2024-04-29", expenses: 31500, revenue: 24000 },
  { date: "2024-04-30", expenses: 45400, revenue: 38000 },
  { date: "2024-05-01", expenses: 16500, revenue: 22000 },
  { date: "2024-05-02", expenses: 29300, revenue: 31000 },
  { date: "2024-05-03", expenses: 24700, revenue: 19000 },
  { date: "2024-05-04", expenses: 38500, revenue: 42000 },
  { date: "2024-05-05", expenses: 48100, revenue: 39000 },
  { date: "2024-05-06", expenses: 49800, revenue: 52000 },
  { date: "2024-05-07", expenses: 38800, revenue: 30000 },
  { date: "2024-05-08", expenses: 14900, revenue: 21000 },
  { date: "2024-05-09", expenses: 22700, revenue: 18000 },
  { date: "2024-05-10", expenses: 29300, revenue: 33000 },
  { date: "2024-05-11", expenses: 33500, revenue: 27000 },
  { date: "2024-05-12", expenses: 19700, revenue: 24000 },
  { date: "2024-05-13", expenses: 19700, revenue: 16000 },
  { date: "2024-05-14", expenses: 44800, revenue: 49000 },
  { date: "2024-05-15", expenses: 47300, revenue: 38000 },
  { date: "2024-05-16", expenses: 33800, revenue: 40000 },
  { date: "2024-05-17", expenses: 49900, revenue: 42000 },
  { date: "2024-05-18", expenses: 31500, revenue: 35000 },
  { date: "2024-05-19", expenses: 23500, revenue: 18000 },
  { date: "2024-05-20", expenses: 17700, revenue: 23000 },
  { date: "2024-05-21", expenses: 8200, revenue: 14000 },
  { date: "2024-05-22", expenses: 8100, revenue: 12000 },
  { date: "2024-05-23", expenses: 25200, revenue: 29000 },
  { date: "2024-05-24", expenses: 29400, revenue: 22000 },
  { date: "2024-05-25", expenses: 20100, revenue: 25000 },
  { date: "2024-05-26", expenses: 21300, revenue: 17000 },
  { date: "2024-05-27", expenses: 42000, revenue: 46000 },
  { date: "2024-05-28", expenses: 23300, revenue: 19000 },
  { date: "2024-05-29", expenses: 7800, revenue: 13000 },
  { date: "2024-05-30", expenses: 34000, revenue: 28000 },
  { date: "2024-05-31", expenses: 17800, revenue: 23000 },
  { date: "2024-06-01", expenses: 17800, revenue: 20000 },
  { date: "2024-06-02", expenses: 47000, revenue: 41000 },
  { date: "2024-06-03", expenses: 10300, revenue: 16000 },
  { date: "2024-06-04", expenses: 43900, revenue: 38000 },
  { date: "2024-06-05", expenses: 8800, revenue: 14000 },
  { date: "2024-06-06", expenses: 29400, revenue: 25000 },
  { date: "2024-06-07", expenses: 32300, revenue: 37000 },
  { date: "2024-06-08", expenses: 38500, revenue: 32000 },
  { date: "2024-06-09", expenses: 43800, revenue: 48000 },
  { date: "2024-06-10", expenses: 15500, revenue: 20000 },
  { date: "2024-06-11", expenses: 9200, revenue: 15000 },
  { date: "2024-06-12", expenses: 49200, revenue: 42000 },
  { date: "2024-06-13", expenses: 8100, revenue: 13000 },
  { date: "2024-06-14", expenses: 42600, revenue: 50000 },
  { date: "2024-06-15", expenses: 30700, revenue: 35000 },
  { date: "2024-06-16", expenses: 37100, revenue: 31000 },
  { date: "2024-06-17", expenses: 47500, revenue: 52000 },
  { date: "2024-06-18", expenses: 10700, revenue: 17000 },
  { date: "2024-06-19", expenses: 34100, revenue: 29000 },
  { date: "2024-06-20", expenses: 40800, revenue: 50000 },
  { date: "2024-06-21", expenses: 16900, revenue: 50000 },
  { date: "2024-06-22", expenses: 31700, revenue: 50000 },
  { date: "2024-06-23", expenses: 48000, revenue: 53000 },
  { date: "2024-06-24", expenses: 13200, revenue: 50000 },
  { date: "2024-06-25", expenses: 14100, revenue: 50000 },
  { date: "2024-06-26", expenses: 43400, revenue: 50000 },
  { date: "2024-06-27", expenses: 44800, revenue: 50000 },
  { date: "2024-06-28", expenses: 14900, revenue: 50000 },
  { date: "2024-06-29", expenses: 10300, revenue: 50000 },
  { date: "2024-06-30", expenses: 44600, revenue: 50000 },
];

const chartConfig = {
  expenses: {
    label: "Expenses",
    color: "var(--chart-1)",
  },
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Expenses vs Revenue</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">Cash flow for the last 3 months</span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-expenses)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-expenses)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area dataKey="revenue" type="natural" fill="url(#fillRevenue)" stroke="var(--color-revenue)" />
            <Area dataKey="expenses" type="natural" fill="url(#fillExpenses)" stroke="var(--color-expenses)" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
