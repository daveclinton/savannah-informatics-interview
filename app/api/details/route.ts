import { tmdbFetch } from "@/definitions/helpers/tmdbFetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  try {
    if (!type || !id || !["movie", "tv"].includes(type)) {
      return NextResponse.json(
        {
          error: "Invalid type or id. Use type='movie' or 'tv' and a valid id.",
        },
        { status: 400 }
      );
    }

    const endpoint = `/${type}/${id}`;
    const data = await tmdbFetch(endpoint, {
      append_to_response: "credits,images",
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching ${type} movies:`, error);
    return NextResponse.json(
      { error: `Failed to fetch ${type} movies` },
      { status: 500 }
    );
  }
}
