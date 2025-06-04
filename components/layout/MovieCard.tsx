"use client";

import { Movie, PLACEHOLDER_IMAGE, TVShow } from "@/definitions/tmdb";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: Movie | TVShow;
  className?: string;
};

const MovieCard = ({ item, className }: Props) => {
  const isMovie = (item: Movie | TVShow): item is Movie => "title" in item;
  const title = isMovie(item) ? item.title : item.name;
  const date = isMovie(item) ? item.release_date : item.first_air_date;
  const link = isMovie(item)
    ? `/movies/movie/${item.id}`
    : `movies/tv/${item.id}`;

  return (
    <Link
      href={link}
      className="inline-block whitespace-normal"
      prefetch={false}
    >
      <div
        className={cn(
          "rounded-lg overflow-hidden border relative h-44 md:h-52 2xl:h-56 aspect-[3/4] md:aspect-[3/4] shadow-md hover:border-primary transition-all duration-300 group",
          className
        )}
      >
        <div className="absolute inset-0 w-full h-full object-cover group-hover:brightness-50 transition-all duration-300">
          <Image
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w300/${item.poster_path}`
                : PLACEHOLDER_IMAGE
            }
            alt={title}
            width={300}
            height={450}
            className="w-full rounded-lg object-cover aspect-[3/4]"
          />
        </div>

        <p className="absolute px-1.5 py-0.5 top-1 left-1 bg-card/90 border rounded text-xs flex items-center gap-1 text-primary">
          <StarIcon className="size-3 md:size-3.5" />
          <span>{item.vote_average.toFixed(1)}</span>
        </p>

        <div className="h-full z-10 relative flex items-end">
          <div className="p-2 pt-12 bg-gradient-to-b from-black/0 via-black/80 to-black w-full">
            <h3 className="text-xs md:text-sm font-semibold text-ellipsis line-clamp-1 overflow-hidden group-hover:text-primary transition-all">
              {title}
            </h3>
            <p className="text-[10px] md:text-xs text-white dark:text-foreground/80 h-0 overflow-hidden group-hover:h-[8lh] line-clamp-[8] transition-all">
              {item.overview || "No overview available"}
            </p>
            <p className="text-[10px] md:text-xs text-muted-foreground group-hover:h-0 overflow-hidden transition-all">
              {date} | {item.original_language.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
