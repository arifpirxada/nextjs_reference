import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const data = {
    posts: [
      { id: 1, title: "Hello World", desc: "Lorem Ipsum is simply dummy" },
      { id: 2, title: "Good Morning", desc: "Dolor sit amet consectetur" },
      { id: 3, title: "Welcome Home", desc: "Adipiscing elit sed do" },
      { id: 4, title: "Happy Day", desc: "Eiusmod tempor incididunt" },
      { id: 5, title: "Stay Positive", desc: "Ut labore et dolore" },
      { id: 6, title: "Keep Moving", desc: "Magna aliqua enim ad" },
      { id: 7, title: "Be Yourself", desc: "Minim veniam quis nostrud" },
    ],
  };

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
