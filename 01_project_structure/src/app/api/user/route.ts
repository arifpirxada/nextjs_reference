import { NextRequest } from "next/server";

export const users = new Map([
  [1, { id: 1, name: "arifpirxada", email: "arif@temp.com" }],
  [2, { id: 2, name: "testUser", email: "test@temp.com" }],
]);

function userExists(id: number) {
  return users.has(id);
}

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();

    if (!userData.id || !userData.name || !userData.email) {
      return new Response(
        "Please provide all three id (number), name (string) and email (string)",
        { status: 400 }
      );
    }

    if (userExists(userData.id)) {
      return new Response(JSON.stringify({ message: "User already exists!" }), {
        status: 400,
      });
    }

    users.set(userData.id, {
      id: userData.id,
      name: userData.name,
      email: userData.email,
    });

    return new Response(
      JSON.stringify({ message: "User inserted (Temporary)!" }),
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return new Response("Invalid JSON payload provided.", { status: 400 });
    }
    console.error(error);
    return new Response("An unexpected error occurred.", { status: 500 });
  }
}
