import { notFound } from "next/navigation";
import Image from "next/image";
import { getImageUrl } from "@/definitions/helpers/getImageUrl";
import { Star } from "lucide-react";

async function getMovieDetails(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) return null;
  return response.json();
}

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(params.id);

  if (!movie) notFound();

  return (
    <div className="min-h-screen">
      <div className="relative h-[70vh]">
        <Image
          src={getImageUrl(movie.backdrop_path, "original")}
          alt={movie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-4 max-w-2xl">{movie.overview}</p>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-xl">{movie.vote_average.toFixed(1)}</span>
            </div>
            <span>{movie.release_date}</span>
            <span>{movie.runtime} min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
