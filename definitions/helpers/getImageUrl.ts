import { TMDB_IMAGE_BASE_URL } from "../tmdb";

export const getImageUrl = (
  path: string,
  size: "w200" | "w300" | "w500" | "w780" | "original" = "w500"
) => {
  if (!path) return "/placeholder-movie.jpg"; // Add a placeholder image
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};
