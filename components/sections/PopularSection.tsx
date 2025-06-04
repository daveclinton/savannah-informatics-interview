"use client";

import { useMovies } from "@/hooks/useMovies";

import Image from "next/image";
import { Star } from "lucide-react";
import { Movie, TMDB_IMAGE_BASE_URL } from "@/definitions/tmdb";

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
        {data?.results.slice(0, 4).map((movie: Movie, i: number) => (
          <div
            key={movie.id}
            className="flex items-center space-x-4 bg-card/50 rounded-lg p-4"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted">
              {i + 1}
            </span>
            <Image
              src={`${TMDB_IMAGE_BASE_URL}/w80${movie.poster_path}`}
              alt={movie.title}
              width={80}
              height={120}
              className="rounded aspect-[2/3] object-cover"
            />
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                {movie.title}
              </h3>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                <span className="text-sm">{movie.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
