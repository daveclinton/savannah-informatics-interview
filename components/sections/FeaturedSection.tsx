"use client";

import { useMovies } from "@/hooks/useMovies";
import { PLACEHOLDER_IMAGE, TMDB_IMAGE_BASE_URL } from "@/definitions/tmdb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";

export default function FeaturedSection() {
  const { data, isLoading, error } = useMovies({
    type: "now_playing",
    page: 1,
  });

  if (isLoading) {
    return (
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Featured in SaintStream
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          Best featured for you today
        </p>
        <div>Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Featured in SaintStream
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          Best featured for you today
        </p>
        <div>Error: {error.message}</div>
      </section>
    );
  }

  const featuredMovie = data?.results[0];
  const secondaryMovie = data?.results[1];

  if (!featuredMovie || !secondaryMovie) {
    return (
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Featured in SaintStream
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          Best featured for you today
        </p>
        <div>No movies available</div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold mb-2">
        Featured in SaintStream
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-6">
        Best featured for you today
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <div className="relative mb-4">
            <Image
              src={
                featuredMovie.backdrop_path
                  ? `${TMDB_IMAGE_BASE_URL}/w400${featuredMovie.backdrop_path}`
                  : PLACEHOLDER_IMAGE
              }
              alt={featuredMovie.title}
              width={600}
              height={300}
              className="w-full rounded-lg object-cover aspect-[2/1]"
            />
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
            {featuredMovie.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            {featuredMovie.overview || "No overview available"}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
              <Play className="w-4 h-4 mr-2" />
              Play Now
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Watchlist
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={
              secondaryMovie.poster_path
                ? `${TMDB_IMAGE_BASE_URL}/w400${secondaryMovie.poster_path}`
                : PLACEHOLDER_IMAGE
            }
            alt={secondaryMovie.title}
            width={400}
            height={600}
            className="w-full rounded-lg object-cover aspect-[2/3]"
          />
        </div>
      </div>
    </section>
  );
}
