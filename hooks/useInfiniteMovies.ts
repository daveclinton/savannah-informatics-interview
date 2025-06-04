/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";

export const useInfiniteMovies = (endpoint: string) => {
  const [movies, setMovies] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(`${endpoint}?page=${page}`);
      const data = await response.json();
      setMovies((prev: any) => [...prev, ...data.results]);
      setHasMore(page < data.total_pages);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error loading more:", error);
    } finally {
      setLoading(false);
    }
  }, [endpoint, page, loading, hasMore]);

  useEffect(() => {
    loadMore();
  }, []);

  return { movies, loading, hasMore, loadMore };
};
