import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder endpoint for runway estimation
  // TODO: Implement actual runway calculation logic when backend is ready
  // Runway is typically calculated as: current balance / monthly net burn
  // Result is usually in months

  return NextResponse.json(
    {
      runwayMonths: 12,
      message: "Backend is not ready yet. This is a placeholder endpoint.",
    },
    { status: 200 },
  );
}
