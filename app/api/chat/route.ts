// app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { input } = await req.json();
  console.log("KEY:", process.env.OPENROUTER_API_KEY)
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`, // ẩn ở server
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
