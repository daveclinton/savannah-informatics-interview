import { tmdbFetch } from "@/definitions/helpers/tmdbFetch";
import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

interface TMDBSearchResult {
  id: number;
  title?: string;
  name?: string;
  original_name?: string;
  poster_path?: string;
  release_date?: string;
  first_air_date?: string;
  media_type?: string;
  popularity?: number;
}

interface TMDBSearchResponse {
  page: number;
  results: TMDBSearchResult[];
  total_pages: number;
  total_results: number;
}

interface SearchResponse {
  results: TMDBSearchResult[];
  pagination: {
    page: number;
    total_pages: number;
    total_results: number;
  };
}

interface APIError extends Error {
  status?: number;
  message: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const type = searchParams.get("type") || "multi";
    const page = searchParams.get("page") || "1";
    const sortBy = searchParams.get("sortBy") || null;
    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400 }
      );
    }
    const pageNum = parseInt(page, 10);
    if (isNaN(pageNum) || pageNum < 1 || pageNum > 1000) {
      return NextResponse.json(
        { error: "Invalid page number" },
        { status: 400 }
      );
    }
    const validTypes = ["movie", "tv", "person", "multi"];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: "Invalid search type" },
        { status: 400 }
      );
    }
    const cacheKey = `tmdb_search:${query}:${type}:${page}:${sortBy}`;
    const getCachedData = unstable_cache(
      async () => {
        const data: TMDBSearchResponse = await tmdbFetch(`/search/${type}`, {
          query,
          page,
        });

        let results = data.results;

        if (sortBy === "popularity.desc") {
          results = [...results].sort(
            (a, b) => (b.popularity || 0) - (a.popularity || 0)
          );
        } else if (sortBy === "release_date.desc") {
          results = [...results].sort(
            (a, b) =>
              new Date(
                b.release_date || b.first_air_date || "9999-12-31"
              ).getTime() -
              new Date(
                a.release_date || a.first_air_date || "9999-12-31"
              ).getTime()
          );
        }
        return {
          ...data,
          results,
        };
      },
      [cacheKey],
      { revalidate: 60 * 5 }
    );

    const data = await getCachedData();

    const response: SearchResponse = {
      results: data.results,
      pagination: {
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results,
      },
    };

    return NextResponse.json(response);
  } catch (error: unknown) {
    console.error("Error searching:", error);
    if (error instanceof Error && "status" in error) {
      const apiError = error as APIError;
      if (apiError.status === 429) {
        return NextResponse.json(
          { error: "TMDB API rate limit exceeded", details: apiError.message },
          { status: 429 }
        );
      }
      if (apiError.status === 401) {
        return NextResponse.json(
          { error: "Invalid TMDB API key", details: apiError.message },
          { status: 401 }
        );
      }
    }
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to search", details: errorMessage },
      { status: 500 }
    );
  }
}
