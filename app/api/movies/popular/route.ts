import { tmdbFetch } from "@/definitions/helpers/tmdbFetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "1";
    const data = await tmdbFetch("/movie/popular", { page });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return NextResponse.json(
      { error: "Failed to fetch popular movies" },
      { status: 500 }
    );
  }
}
