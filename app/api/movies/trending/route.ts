import { tmdbFetch } from "@/definitions/helpers/tmdbFetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const timeWindow = searchParams.get("time_window") || "week"; // day or week

    const data = await tmdbFetch(`/trending/movie/${timeWindow}`);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return NextResponse.json(
      { error: "Failed to fetch trending movies" },
      { status: 500 }
    );
  }
}
