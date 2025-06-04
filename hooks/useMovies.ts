import { TMDBResponse, Movie, TVShow } from "@/definitions/tmdb";
import { useState, useEffect } from "react";

export const usePopularMovies = (page = 1) => {
  const [data, setData] = useState<TMDBResponse<Movie> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/movies/popular?page=${page}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return { data, loading, error };
};

export const useTrendingMovies = (timeWindow: "day" | "week" = "week") => {
  const [data, setData] = useState<TMDBResponse<Movie> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/movies/trending?time_window=${timeWindow}`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeWindow]);

  return { data, loading, error };
};

export const useKoreanTVShows = (page = 1) => {
  const [data, setData] = useState<TMDBResponse<TVShow> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/tv/korean?page=${page}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { data, loading, error };
};
