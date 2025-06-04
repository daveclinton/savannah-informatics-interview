import { tmdbFetch } from "@/definitions/helpers/tmdbFetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";

    const data = await tmdbFetch("/movie/top_rated", { page });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    return NextResponse.json(
      { error: "Failed to fetch top rated movies" },
      { status: 500 }
    );
  }
}
