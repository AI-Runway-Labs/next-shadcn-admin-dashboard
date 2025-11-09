"use client";

import { useEffect, useState } from "react";

import { TrendingUp, TrendingDown, Loader2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BalanceResponse {
  balance: number;
  currency?: string;
  message?: string;
}

interface NetBurnResponse {
  netBurn: number;
  currency?: string;
  message?: string;
}

export function SectionCards() {
  const [currentBalance, setCurrentBalance] = useState<number | null>(null);
  const [isLoadingBalance, setIsLoadingBalance] = useState(true);
  const [netBurn, setNetBurn] = useState<number | null>(null);
  const [isLoadingNetBurn, setIsLoadingNetBurn] = useState(true);
  const [currency, setCurrency] = useState<string>("USD");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch("/api/cash-tracker/current-balance");
        if (!response.ok) {
          throw new Error("Failed to fetch balance");
        }
        const data: BalanceResponse = await response.json();
        setCurrentBalance(data.balance);
        setCurrency(data.currency ?? "USD");
      } catch (error) {
        console.error("Error fetching balance:", error);
        setCurrentBalance(0);
      } finally {
        setIsLoadingBalance(false);
      }
    };

    fetchBalance();
  }, []);

  useEffect(() => {
    const fetchNetBurn = async () => {
      try {
        const response = await fetch("/api/cash-tracker/net-burn");
        if (!response.ok) {
          throw new Error("Failed to fetch net burn");
        }
        const data: NetBurnResponse = await response.json();
        setNetBurn(data.netBurn);
        setCurrency(data.currency ?? "USD");
      } catch (error) {
        console.error("Error fetching net burn:", error);
        setNetBurn(0);
      } finally {
        setIsLoadingNetBurn(false);
      }
    };

    fetchNetBurn();
  }, []);

  const formatBalance = (amount: number | null): string => {
    if (amount === null) return "$0.00";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatNetBurn = (amount: number | null): string => {
    if (amount === null) return "$0.00";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Current Balance</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {isLoadingBalance ? (
              <div className="flex items-center gap-2">
                <Loader2 className="size-4 animate-spin" />
                <span>Loading...</span>
              </div>
            ) : (
              formatBalance(currentBalance)
            )}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Current company balance <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Total available funds</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Net Burn</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {isLoadingNetBurn ? (
              <div className="flex items-center gap-2">
                <Loader2 className="size-4 animate-spin" />
                <span>Loading...</span>
              </div>
            ) : (
              formatNetBurn(netBurn)
            )}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Monthly cash burn rate <TrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">Expenses minus revenue</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">45,678</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">4.5%</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  );
}
