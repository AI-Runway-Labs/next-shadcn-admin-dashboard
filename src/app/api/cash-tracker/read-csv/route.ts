import { NextResponse } from "next/server";

export async function POST() {
  // Placeholder endpoint for CSV reading functionality
  // TODO: Implement actual CSV reading logic when backend is ready
  return NextResponse.json(
    {
      message: "Backend is not ready yet. This is a placeholder endpoint.",
      status: "pending",
    },
    { status: 200 },
  );
}
