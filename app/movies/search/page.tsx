/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useSearch } from "@/hooks/useSearch";
import { useQueryStates } from "nuqs";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import {
  searchParamsParsers,
  searchParamsUrlKeys,
} from "@/definitions/helpers/search";
import { getMediaTypeLabel } from "@/definitions/helpers/mediaType";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

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
    if (searchQuery) setParams({ page: 1 });
  };

  const handleReset = () => {
    setParams({
      searchQuery: "",
      mediaType: "multi",
      page: 1,
      sortBy: "popularity.desc",
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= (data?.pagination.total_pages || 1)) {
      setParams({ page: newPage });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const generatePaginationItems = () => {
    const totalPages = data?.pagination.total_pages || 1;
    const currentPage = page;
    const items = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      items.push(1);

      if (currentPage > 4) {
        items.push("ellipsis1");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        items.push(i);
      }

      if (currentPage < totalPages - 3) {
        items.push("ellipsis2");
      }
      if (totalPages > 1) {
        items.push(totalPages);
      }
    }

    return items;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Search TMDB</h1>
        <p className="text-muted-foreground">
          Find movies, TV shows, and people from The Movie Database
        </p>
      </div>

      <Card className="mb-8 shadow-sm">
        <CardContent className="pt-6">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5 space-y-2">
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
                    className="pl-10 h-11"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
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
                  <SelectTrigger id="media-type" className="h-11">
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

              <div className="md:col-span-3 space-y-2">
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
                  <SelectTrigger id="sort-by" className="h-11">
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

              <div className="md:col-span-2 flex gap-2">
                <Button
                  type="submit"
                  className="flex-1 h-11"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="h-11 px-3"
                  title="Reset all filters"
                >
                  Reset
                </Button>
              </div>
            </div>
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
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b">
            <div>
              <h2 className="text-2xl font-bold">Search Results</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {data.pagination.total_results.toLocaleString()} results for
                &quot;{searchQuery}&quot;
              </p>
            </div>

            {data.pagination.total_pages > 1 && (
              <div className="text-sm text-muted-foreground">
                Page {page} of {data.pagination.total_pages}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.results
              .reduce<[any[], any[]]>(
                (acc, result, index) => {
                  acc[index % 2].push(result);
                  return acc;
                },
                [[], []]
              )
              .map((column, colIndex) => (
                <div key={colIndex} className="space-y-4">
                  {column.map((result) => (
                    <Link
                      key={`${result.media_type}-${result.id}`}
                      href={`/movies/${result.media_type}/${result.id}`}
                    >
                      <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="relative w-16 h-20 flex-shrink-0">
                              <Image
                                src={`https://image.tmdb.org/t/p/w200/${
                                  result.poster_path || result.profile_path
                                }`}
                                alt={
                                  result.title || result.name || "Media poster"
                                }
                                fill
                                className="object-cover rounded-md"
                                sizes="64px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors">
                                {result.title ||
                                  result.name ||
                                  result.original_name}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {getMediaTypeLabel(result.media_type)} •{" "}
                                {result.release_date
                                  ? new Date(result.release_date).getFullYear()
                                  : result.first_air_date
                                  ? new Date(
                                      result.first_air_date
                                    ).getFullYear()
                                  : "N/A"}
                              </p>
                              {result.overview && (
                                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                  {result.overview}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ))}
          </div>

          {data.pagination.total_pages > 1 && (
            <div className="flex flex-col items-center gap-4 pt-6 border-t">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(page - 1)}
                      className={
                        page === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {generatePaginationItems().map((item, index) => (
                    <PaginationItem key={index}>
                      {typeof item === "number" ? (
                        <PaginationLink
                          onClick={() => handlePageChange(item)}
                          isActive={item === page}
                          className="cursor-pointer"
                        >
                          {item}
                        </PaginationLink>
                      ) : (
                        <PaginationEllipsis />
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(page + 1)}
                      className={
                        page === data.pagination.total_pages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

              <div className="text-sm text-muted-foreground">
                Showing {(page - 1) * 20 + 1}-
                {Math.min(page * 20, data.pagination.total_results)} of{" "}
                {data.pagination.total_results.toLocaleString()} results
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
