"use client";

import type React from "react";
import { useSearch } from "@/hooks/useSearch";
import {
  useQueryStates,
  parseAsString,
  parseAsInteger,
  parseAsStringEnum,
} from "nuqs";
import {
  Search,
  Film,
  Tv,
  User,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TMDB_IMAGE_BASE_URL } from "@/definitions/tmdb";

// Define parsers for query parameters
const searchParamsParsers = {
  searchQuery: parseAsString.withDefault(""),
  mediaType: parseAsStringEnum<"multi" | "movie" | "tv" | "person">([
    "multi",
    "movie",
    "tv",
    "person",
  ]).withDefault("multi"),
  page: parseAsInteger.withDefault(1),
  sortBy: parseAsStringEnum<"popularity.desc" | "release_date.desc">([
    "popularity.desc",
    "release_date.desc",
  ]).withDefault("popularity.desc"),
};

// Define URL keys for shorter query parameters
const searchParamsUrlKeys = {
  searchQuery: "q",
  mediaType: "t",
  page: "p",
  sortBy: "s",
};

export default function SearchPage() {
  const [params, setParams] = useQueryStates(searchParamsParsers, {
    urlKeys: searchParamsUrlKeys,
    history: "push",
  });

  const { searchQuery, mediaType, page, sortBy } = params;

  const { data, isLoading, error } = useSearch(
    searchQuery,
    mediaType,
    page,
    sortBy
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) setParams({ page: 1 }); // Reset page to 1 on new search
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= (data?.pagination.total_pages || 1)) {
      setParams({ page: newPage });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getMediaTypeIcon = (mediaType: string) => {
    switch (mediaType) {
      case "movie":
        return <Film className="h-4 w-4" />;
      case "tv":
        return <Tv className="h-4 w-4" />;
      case "person":
        return <User className="h-4 w-4" />;
      default:
        return <Film className="h-4 w-4" />;
    }
  };

  const getMediaTypeColor = (mediaType: string) => {
    switch (mediaType) {
      case "movie":
        return "bg-primary text-primary-foreground";
      case "tv":
        return "bg-secondary text-secondary-foreground";
      case "person":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getMediaTypeLabel = (mediaType: string) => {
    switch (mediaType) {
      case "movie":
        return "Movie";
      case "tv":
        return "TV Show";
      case "person":
        return "Person";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Search TMDB</h1>
        <p className="text-muted-foreground">
          Find movies, TV shows, and people from The Movie Database
        </p>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-4 md:flex-row md:items-end"
          >
            <div className="flex-1 space-y-2">
              <label htmlFor="search-query" className="text-sm font-medium">
                Search Query
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="search-query"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setParams({ searchQuery: e.target.value })}
                  placeholder="Enter movie, TV show, or person name"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2 w-full md:w-40">
              <label htmlFor="media-type" className="text-sm font-medium">
                Media Type
              </label>
              <Select
                value={mediaType}
                onValueChange={(value) =>
                  setParams({
                    mediaType: value as "multi" | "movie" | "tv" | "person",
                  })
                }
              >
                <SelectTrigger id="media-type">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multi">All</SelectItem>
                  <SelectItem value="movie">Movies</SelectItem>
                  <SelectItem value="tv">TV Shows</SelectItem>
                  <SelectItem value="person">People</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 w-full md:w-60">
              <label htmlFor="sort-by" className="text-sm font-medium">
                Sort By
              </label>
              <Select
                value={sortBy}
                onValueChange={(value) =>
                  setParams({
                    sortBy: value as "popularity.desc" | "release_date.desc",
                  })
                }
              >
                <SelectTrigger id="sort-by">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity.desc">
                    Popularity (Desc)
                  </SelectItem>
                  <SelectItem value="release_date.desc">
                    Release Date (Desc)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="md:self-end" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                "Search"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}

      {error && (
        <Card className="bg-destructive/10 border-destructive">
          <CardContent className="py-6">
            <p className="text-center text-destructive font-medium">
              Error:{" "}
              {error instanceof Error ? error.message : "An error occurred"}
            </p>
          </CardContent>
        </Card>
      )}

      {data && data.results.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">
              No results found. Try a different search term.
            </p>
          </CardContent>
        </Card>
      )}

      {data && data.results.length > 0 && (
        <>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Found {data.pagination.total_results.toLocaleString()} results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {data.results.map((result) => (
              <Card
                key={`${result.media_type}-${result.id}`}
                className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[2/3] bg-muted">
                  <Image
                    src={
                      result.poster_path || result.profile_path
                        ? `${TMDB_IMAGE_BASE_URL}/w500${
                            result.poster_path || result.profile_path
                          }`
                        : "https://placehold.co/450x350"
                    }
                    alt={result.title || result.name || "Media poster"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardContent className="pt-4 flex-1">
                  <Badge
                    className={`mb-2 ${getMediaTypeColor(result.media_type)}`}
                  >
                    <span className="flex items-center gap-1">
                      {getMediaTypeIcon(result.media_type)}
                      {getMediaTypeLabel(result.media_type)}
                    </span>
                  </Badge>
                  <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                    {result.title || result.name || result.original_name}
                  </h3>
                  {result.release_date && (
                    <p className="text-sm text-muted-foreground mb-2">
                      Released: {new Date(result.release_date).getFullYear()}
                    </p>
                  )}
                  {result.first_air_date && (
                    <p className="text-sm text-muted-foreground mb-2">
                      First Aired:{" "}
                      {new Date(result.first_air_date).getFullYear()}
                    </p>
                  )}
                  {result.overview && (
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {result.overview}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="pt-0">
                  {result.vote_average && result.vote_average > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-medium text-sm">
                          {Math.round(result.vote_average * 10)}%
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        User Score
                      </span>
                    </div>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {data.pagination.total_pages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Page</span>
                  <span className="font-medium">{page}</span>
                  <span className="text-sm text-muted-foreground">
                    of {data.pagination.total_pages}
                  </span>
                </div>

                <Button
                  variant="outline"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === data.pagination.total_pages}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
                {data.pagination.total_results.toLocaleString()} results
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
