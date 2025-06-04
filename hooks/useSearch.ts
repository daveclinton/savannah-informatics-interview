import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { SearchResponse } from "@/definitions/tmdb";

const axiosInstance = axios.create({
  baseURL: "/api",
});

const fetchSearchResults = async (
  query: string,
  type: string,
  page: number,
  sortBy?: string
) => {
  const params = { query, type, page, ...(sortBy && { sortBy }) };
  const response = await axiosInstance.get<SearchResponse>("/search", {
    params,
  });
  if (response.status !== 200)
    throw new Error("Failed to fetch search results");
  return response.data;
};

export const useSearch = (
  query: string,
  type: string = "multi",
  page: number = 1,
  sortBy?: string
) => {
  return useQuery<SearchResponse, Error>({
    queryKey: ["search", query, type, page, sortBy],
    queryFn: () => fetchSearchResults(query, type, page, sortBy),
    enabled: !!query,
  });
};
