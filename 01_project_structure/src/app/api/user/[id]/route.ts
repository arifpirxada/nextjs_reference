import { NextRequest, NextResponse } from "next/server";
import { users } from "../route";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userId = Number(id);

  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }
  const user = users.get(userId);

  return NextResponse.json({ user });
}
