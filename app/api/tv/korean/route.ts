import { tmdbFetch } from "@/definitions/helpers/tmdbFetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";

    const data = await tmdbFetch("/discover/tv", {
      page,
      with_origin_country: "KR",
      sort_by: "popularity.desc",
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Korean TV shows:", error);
    return NextResponse.json(
      { error: "Failed to fetch Korean TV shows" },
      { status: 500 }
    );
  }
}
