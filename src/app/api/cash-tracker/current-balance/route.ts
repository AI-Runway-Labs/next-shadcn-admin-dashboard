import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder endpoint for current balance
  // TODO: Implement actual balance retrieval logic when backend is ready

  return NextResponse.json(
    {
      balance: 0,
      currency: "USD",
      message: "Backend is not ready yet. This is a placeholder endpoint.",
    },
    { status: 200 },
  );
}
