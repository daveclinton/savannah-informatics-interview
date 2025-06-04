"use client";

import { TVShow } from "@/definitions/tmdb";
import { useTVShows } from "@/hooks/useTvShows";
import MovieCard from "../layout/MovieCard";
import SectionSkeleton from "./Sektion-Skeletons";

interface SeriesSectionProps {
  title: string;
  type: "popular" | "top_rated" | "airing_today" | "on_the_air" | "trending";
  limit?: number;
}

export default function SeriesSection({
  title,
  type,
  limit = 5,
}: SeriesSectionProps) {
  const { data, isLoading, error } = useTVShows({ type, page: 1 });

  if (isLoading) {
    return <SectionSkeleton />;
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {data?.results.slice(0, limit).map((show: TVShow) => (
          <MovieCard key={show.id} item={show} />
        ))}
      </div>
    </section>
  );
}
