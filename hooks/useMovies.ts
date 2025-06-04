import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { TMDBResponse, Movie } from "@/definitions/tmdb";

type MovieType = "trending" | "top_rated" | "popular" | "now_playing";

interface MovieQueryParams {
  type: MovieType;
  page?: number;
  timeWindow?: "day" | "week";
}

const fetchMovies = async ({
  type,
  page = 1,
  timeWindow = "week",
}: MovieQueryParams): Promise<TMDBResponse<Movie>> => {
  try {
    const response = await axios.get("/api/movies", {
      params: {
        type,
        page,
        ...(type === "trending" && { time_window: timeWindow }),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch ${type} movies: ${(error as AxiosError).message}`
    );
  }
};

export const useMovies = ({
  type,
  page = 1,
  timeWindow = "week",
}: MovieQueryParams) => {
  return useQuery<TMDBResponse<Movie>, AxiosError>({
    queryKey: [
      "movies",
      type,
      page,
      type === "trending" ? timeWindow : undefined,
    ],
    queryFn: () => fetchMovies({ type, page, timeWindow }),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
