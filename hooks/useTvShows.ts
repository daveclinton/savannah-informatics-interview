import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { TMDBResponse, TVShow } from "@/definitions/tmdb";

type TVShowType =
  | "trending"
  | "top_rated"
  | "popular"
  | "airing_today"
  | "on_the_air"
  | "korean";

interface TVShowQueryParams {
  type: TVShowType;
  page?: number;
  timeWindow?: "day" | "week";
}

const fetchTVShows = async ({
  type,
  page = 1,
  timeWindow = "week",
}: TVShowQueryParams): Promise<TMDBResponse<TVShow>> => {
  try {
    const response = await axios.get("/api/tv", {
      params: {
        type,
        page,
        ...(type === "trending" && { time_window: timeWindow }),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch ${type} TV shows: ${(error as AxiosError).message}`
    );
  }
};

export const useTVShows = ({
  type,
  page = 1,
  timeWindow = "week",
}: TVShowQueryParams) => {
  return useQuery<TMDBResponse<TVShow>, AxiosError>({
    queryKey: [
      "tvShows",
      type,
      page,
      type === "trending" ? timeWindow : undefined,
    ],
    queryFn: () => fetchTVShows({ type, page, timeWindow }),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
