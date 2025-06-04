"use client";

import { useMovies } from "@/hooks/useMovies";
import { Movie } from "@/definitions/tmdb";
import MovieCard from "@/components/MovieCard"; // Adjust path to your MovieCard component

export default function PopularSection() {
  const { data, isLoading, error } = useMovies({
    type: "trending",
    timeWindow: "week",
    page: 1,
  });

  if (isLoading) {
    return (
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-6">
          Popular of the Week
        </h2>
        <div>Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-6">
          Popular of the Week
        </h2>
        <div>Error: {error.message}</div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        Popular of the Week
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.results.slice(0, 4).map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
