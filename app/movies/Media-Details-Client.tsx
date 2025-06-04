"use client";

import { useMediaDetails } from "@/hooks/useMediaDetails";
import { Movie, TVShow, TMDB_IMAGE_BASE_URL } from "@/definitions/tmdb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Bookmark } from "lucide-react";
import SkeletonLoader from "./skeleton-loader";

const PLACEHOLDER_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAGlJREFUeF7t1QENAAAIgOD/tH/7mQAJJAZF1W4AAIAOAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAgP4B3R/0+wIAX7zG+wAAAABJRU5ErkJggg==";

interface DetailsPageProps {
  type: string;
  id: string;
}

export default function DetailsClient({ type, id }: DetailsPageProps) {
  const { data, isLoading, error } = useMediaDetails({ type, id });

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error || !data) {
    return (
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Error</h1>
        <p className="text-muted-foreground">
          Failed to load details. Please try again later.
        </p>
      </section>
    );
  }

  const isMovie = (data: Movie | TVShow): data is Movie => type === "movie";
  const title = isMovie(data) ? data.title : data.name;
  const date = isMovie(data) ? data.release_date : data.first_air_date;
  const runtime = isMovie(data) ? data.runtime : null;
  const seasons = isMovie(data) ? null : data.number_of_seasons;
  const episodes = isMovie(data) ? null : data.number_of_episodes;
  const genres =
    data.genres?.map((g: { name: string }) => g.name).join(", ") || "N/A";

  return (
    <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Backdrop */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-6">
        <Image
          src={
            data.backdrop_path
              ? `${TMDB_IMAGE_BASE_URL}/w1280${data.backdrop_path}`
              : PLACEHOLDER_IMAGE
          }
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Poster */}
        <div>
          <Image
            src={
              data.poster_path
                ? `${TMDB_IMAGE_BASE_URL}/w500${data.poster_path}`
                : PLACEHOLDER_IMAGE
            }
            alt={title}
            width={300}
            height={450}
            className="w-full rounded-lg object-cover aspect-[2/3]"
          />
        </div>

        {/* Details */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {title}
          </h1>
          <p className="text-muted-foreground">
            {date ? new Date(date).getFullYear() : "N/A"} | {genres} |{" "}
            {isMovie(data)
              ? runtime
                ? `${Math.floor(runtime / 60)}h ${runtime % 60}m`
                : "N/A"
              : `${seasons} Season${seasons !== 1 ? "s" : ""}${
                  episodes
                    ? `, ${episodes} Episode${episodes !== 1 ? "s" : ""}`
                    : ""
                }`}
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            {data.overview || "No overview available"}
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 bg-card/90 border rounded px-2 py-1 text-sm">
              <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {data.vote_average.toFixed(1)}
            </span>
            <span className="text-muted-foreground text-sm">
              ({data.vote_count} votes)
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base gap-2">
              <Play className="w-4 h-4 fill-current" />
              Watch Now
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base gap-2"
            >
              <Bookmark className="w-4 h-4" />
              Add Watchlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
