import { getAllNews } from "@/lib/news-data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllNews();
  return NextResponse.json(data);
}
