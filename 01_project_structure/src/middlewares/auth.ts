import { NextRequest } from "next/server";

export default function authMiddleware(request: NextRequest) {
  console.log("User authenticated");
}