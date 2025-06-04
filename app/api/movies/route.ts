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
        endpoint = `/trending/movie/${timeWindow}`;
        break;
      case "top_rated":
        endpoint = "/movie/top_rated";
        break;
      case "popular":
        endpoint = "/movie/popular";
        break;
      case "now_playing":
        endpoint = "/movie/now_playing";
        break;
      default:
        return NextResponse.json(
          {
            error:
              "Invalid type parameter. Use 'trending', 'top_rated', 'popular', or 'now_playing'.",
          },
          { status: 400 }
        );
    }

    const data = await tmdbFetch(endpoint, params);

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching ${type} movies:`, error);
    return NextResponse.json(
      { error: `Failed to fetch ${type} movies` },
      { status: 500 }
    );
  }
}
