import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getImageUrl } from "@/definitions/helpers/getImageUrl";
import { Movie } from "@/definitions/tmdb";

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card
      className="bg-card border-border overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            width={300}
            height={400}
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute bottom-2 left-2">
            <div className="flex items-center space-x-1 bg-black/50 px-2 py-1 rounded">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-white">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm line-clamp-2">{movie.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
