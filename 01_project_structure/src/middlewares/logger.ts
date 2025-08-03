import { NextRequest } from "next/server";

export default function loggerMiddleware(request: NextRequest) {
    console.log(" --- LOGGER START --- ")
    console.log(" user-agent: ", request.headers.get("user-agent"))
    console.log(" --- LOGGER END --- ")
}