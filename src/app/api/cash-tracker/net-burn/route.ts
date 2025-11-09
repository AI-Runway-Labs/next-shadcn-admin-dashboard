import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder endpoint for net burn
  // TODO: Implement actual net burn calculation logic when backend is ready
  // Net burn is typically calculated as expenses minus revenue (negative value)

  return NextResponse.json(
    {
      netBurn: -15000,
      currency: "USD",
      message: "Backend is not ready yet. This is a placeholder endpoint.",
    },
    { status: 200 },
  );
}
