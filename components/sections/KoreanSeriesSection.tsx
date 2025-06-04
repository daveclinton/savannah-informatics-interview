"use client";

import { TVShow } from "@/definitions/tmdb";
import { useTVShows } from "@/hooks/useTvShows";
import MovieCard from "../layout/MovieCard";
import SectionSkeleton from "./Sektion-Skeletons";

export default function KoreanSeriesSection() {
  const { data, isLoading, error } = useTVShows({ type: "korean", page: 1 });

  if (isLoading) {
    return <SectionSkeleton />;
  }

  if (error) {
    return (
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Korean Series</h2>
        <div>Error: {error.message}</div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Korean Series</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {data?.results.slice(0, 6).map((show: TVShow) => (
          <MovieCard key={show.id} item={show} />
        ))}
      </div>
    </section>
  );
}
