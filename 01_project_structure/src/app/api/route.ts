import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const jsonResponse = JSON.stringify({ message: "Hello, Next.js!" });

  return new Response(jsonResponse, {
    status: 200,
    headers: { "Set-Cookie": `token=welcome` },
  });
}
