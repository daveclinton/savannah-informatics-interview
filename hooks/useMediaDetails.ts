import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Movie, TVShow } from "@/definitions/tmdb";

type MediaDetails = Movie | TVShow;

interface MediaQueryParams {
  type: string;
  id: string;
}

const fetchMediaDetails = async ({
  type,
  id,
}: MediaQueryParams): Promise<MediaDetails> => {
  try {
    const response = await axios.get("/api/details", {
      params: { type, id },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch ${type} details: ${(error as AxiosError).message}`
    );
  }
};

export const useMediaDetails = ({ type, id }: MediaQueryParams) => {
  return useQuery<MediaDetails, AxiosError>({
    queryKey: ["mediaDetails", type, id],
    queryFn: () => fetchMediaDetails({ type, id }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
