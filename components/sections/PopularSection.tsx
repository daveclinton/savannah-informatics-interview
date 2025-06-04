"use client";

import { useMovies } from "@/hooks/useMovies";
import { Movie } from "@/definitions/tmdb";
import MovieCard from "../layout/MovieCard";
import SectionSkeleton from "./Sektion-Skeletons";
export default function PopularSection() {
  const { data, isLoading, error } = useMovies({
    type: "trending",
    timeWindow: "week",
    page: 1,
  });

  if (isLoading) {
    return <SectionSkeleton />;
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {data?.results.slice(0, 6).map((movie: Movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </div>
    </section>
  );
}
