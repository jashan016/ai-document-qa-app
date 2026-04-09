import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const { question } = await req.json();

  const filePath = path.join(process.cwd(), "data/final/documents.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  let answer = "";

  if (question.toLowerCase().includes("ai")) {
    answer = data.find((d: any) => d.id === "ai.txt")?.text;
  } else if (question.toLowerCase().includes("machine")) {
    answer = data.find((d: any) => d.id === "ml.txt")?.text;
  } else {
    answer = "No data found";
  }

  return NextResponse.json({ answer });
}
