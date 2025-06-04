"use client";

import { useMovies } from "@/hooks/useMovies";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { Movie, TMDB_IMAGE_BASE_URL } from "@/definitions/tmdb";

interface MovieSectionProps {
  title: string;
  type: "trending" | "top_rated" | "popular";
  limit?: number;
}

export default function MovieSection({
  title,
  type,
  limit = 5,
}: MovieSectionProps) {
  const { data, isLoading, error } = useMovies({ type, page: 1 });

  if (isLoading) {
    return (
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-6">{title}</h2>
        <div>Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-6">{title}</h2>
        <div>Error: {error.message}</div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.results.slice(0, limit).map((movie: Movie) => (
          <Card
            key={movie.id}
            className="bg-card border-border overflow-hidden group cursor-pointer"
          >
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={`${TMDB_IMAGE_BASE_URL}/w300${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={400}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-2 left-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                    <span className="text-sm">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="font-semibold text-xs sm:text-sm">
                  {movie.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
