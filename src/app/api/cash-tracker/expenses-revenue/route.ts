import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder endpoint for expenses and revenue time series data
  // TODO: Implement actual data retrieval logic when backend is ready

  // Generate placeholder data for the last 3 months (same date range as chart)
  const data = [];
  const startDate = new Date("2024-04-01");
  const endDate = new Date("2024-06-30");

  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const dateStr = date.toISOString().split("T")[0];
    // Generate realistic financial data: expenses typically lower than revenue
    const revenue = Math.floor(Math.random() * 50000) + 10000; // $10k - $60k
    const expenses = Math.floor(Math.random() * 40000) + 5000; // $5k - $45k
    data.push({
      date: dateStr,
      expenses,
      revenue,
    });
  }

  return NextResponse.json(
    {
      data,
      message: "Backend is not ready yet. This is a placeholder endpoint.",
    },
    { status: 200 },
  );
}
