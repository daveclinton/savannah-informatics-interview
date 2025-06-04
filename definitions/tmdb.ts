export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  runtime: number | null;
  genres: { id: number; name: string }[];
}

export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  original_name: string;
  popularity: number;
  number_of_seasons: number;
  number_of_episodes: number;
  genres: { id: number; name: string }[];
}

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const PLACEHOLDER_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAGlJREFUeF7t1QENAAAIgOD/tH/7mQAJJAZF1W4AAIAOAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAACAAAgP4B3R/0+wIAX7zG+wAAAABJRU5ErkJggg==";

export interface TMDBSearchResult {
  id: number;
  media_type: string;
  title?: string;
  name?: string;
  original_name?: string;
  poster_path?: string;
  profile_path?: string;
  release_date?: string;
  first_air_date?: string;
  overview?: string;
  vote_average?: number;
}

export interface SearchResponse {
  results: TMDBSearchResult[];
  pagination: {
    page: number;
    total_pages: number;
    total_results: number;
  };
}
