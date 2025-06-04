import { tmdbFetch } from "@/definitions/helpers/tmdbFetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "popular";

  try {
    const page = searchParams.get("page") || "1";
    const timeWindow = searchParams.get("time_window") || "week";

    let endpoint: string;
    const params: { [key: string]: string } = { page };

    switch (type) {
      case "trending":
        endpoint = `/trending/tv/${timeWindow}`;
        break;
      case "top_rated":
        endpoint = "/tv/top_rated";
        break;
      case "popular":
        endpoint = "/tv/popular";
        break;
      case "airing_today":
        endpoint = "/tv/airing_today";
        break;
      case "on_the_air":
        endpoint = "/tv/on_the_air";
        break;
      case "korean":
        endpoint = "/discover/tv";
        params.with_origin_country = "KR";
        params.sort_by = "popularity.desc";
        break;
      default:
        return NextResponse.json(
          {
            error:
              "Invalid type parameter. Use 'trending', 'top_rated', 'popular', 'airing_today', 'on_the_air', or 'korean'.",
          },
          { status: 400 }
        );
    }

    const data = await tmdbFetch(endpoint, params);

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching ${type} TV shows:`, error);
    return NextResponse.json(
      { error: `Failed to fetch ${type} TV shows` },
      { status: 500 }
    );
  }
}
