// app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { input } = await req.json();
  console.log("KEY:", process.env.OPENROUTER_API_KEY)
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`, // ẩn ở server
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001",
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Lỗi server khi gọi OpenRouter." }, { status: 500 });
  }
}
