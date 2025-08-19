import { NextResponse } from "next/server";

import { fetchArticleData } from "@/utils/FetchArticle";

export async function GET() {
  try {
    const articles = await fetchArticleData();
    return NextResponse.json({ data: articles });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
