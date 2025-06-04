import { parseAsInteger, parseAsString, parseAsStringEnum } from "nuqs";

export const searchParamsParsers = {
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

export const searchParamsUrlKeys = {
  searchQuery: "q",
  mediaType: "t",
  page: "p",
  sortBy: "s",
};
