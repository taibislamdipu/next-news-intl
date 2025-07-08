import { getNewsById } from "@/lib/news-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const newsId = params?.id;

  const data = await getNewsById(newsId);
  return NextResponse.json(data);
}
