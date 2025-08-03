import { NextRequest } from "next/server";

let todos = [
  { note: "Buy food", done: true, date: "03 July" },
  { note: "Travel", done: false, date: "02 August" },
  { note: "more recently with desktop", done: true, date: "14 May" },
  { note: "it to make a type", done: false, date: "02 March" },
  { note: "opposed to usin", done: true, date: "02 August" },
];

export async function GET() {
  return new Response(JSON.stringify(todos), { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    if (!requestBody.note || !requestBody.done || !requestBody.date) {
      return new Response(
        "Please provide all three note (string), done (boolean) and date (string)",
        { status: 400 }
      );
    }

    todos.push(requestBody)

    return new Response(JSON.stringify({ message: "Todo inserted (Temporary)!" }), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return new Response("Invalid JSON payload provided.", { status: 400 });
    }
    console.error(error);
    return new Response("An unexpected error occurred.", { status: 500 });
  }
}