'use client';

import { useMovies } from '@/hooks/useMovies';
import {
  Movie,
  PLACEHOLDER_IMAGE,
  TMDB_IMAGE_BASE_URL,
} from '@/definitions/tmdb';
import Image from 'next/image';
import { Play, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Slider from 'react-slick';
import { useRef } from 'react';
import { redirect } from 'next/navigation';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnHover: true,
  appendDots: (dots: React.ReactNode) => (
    <div className="absolute bottom-4 left-0 right-0">
      <ul className="flex justify-center gap-2">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-all cursor-pointer" />
  ),
};

export default function HeroSection() {
  const { data, isLoading, error } = useMovies({
    type: 'trending',
    timeWindow: 'week',
    page: 1,
  });
  const sliderRef = useRef<Slider>(null);

  if (isLoading) {
    return (
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] -mt-[64px] sm:-mt-[72px] overflow-hidden">
        <Skeleton className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent">
          <div className="flex items-center h-full px-4 sm:px-6 max-w-7xl mx-auto pt-[64px] sm:pt-[72px]">
            <div className="max-w-lg space-y-4">
              <Skeleton className="h-10 w-3/4 bg-gray-200 dark:bg-gray-300" />
              <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-300" />
              <Skeleton className="h-4 w-5/6 bg-gray-200 dark:bg-gray-300" />
              <div className="flex flex-wrap gap-4">
                <Skeleton className="h-10 w-32 bg-gray-200 dark:bg-gray-300" />
                <Skeleton className="h-10 w-32 bg-gray-200 dark:bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data?.results?.length) {
    return (
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] -mt-[64px] sm:-mt-[72px] overflow-hidden">
        <Image
          src={PLACEHOLDER_IMAGE}
          alt="Fallback"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent">
          <div className="flex items-center h-full px-4 sm:px-6 max-w-7xl mx-auto pt-[64px] sm:pt-[72px]">
            <div className="max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                No Trending Movies Available
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                Unable to load trending movies at this time.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const movies = data.results.slice(0, 6);

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] -mt-[64px] sm:-mt-[72px] overflow-hidden">
      <Slider {...sliderSettings} ref={sliderRef}>
        {movies.map((movie: Movie) => (
          <div
            key={movie.id}
            className="relative h-[500px] sm:h-[600px] md:h-[700px]"
          >
            <Image
              src={
                movie.backdrop_path
                  ? `${TMDB_IMAGE_BASE_URL}/w1280${movie.backdrop_path}`
                  : PLACEHOLDER_IMAGE
              }
              alt={movie.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-background/40 to-transparent">
              <div className="flex items-center h-full px-4 sm:px-6 max-w-7xl mx-auto pt-[64px] sm:pt-[72px]">
                <div className="max-w-lg">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {movie.title}
                  </h1>
                  <p className="text-sm sm:text-base text-black dark:text-white mb-6 leading-relaxed">
                    {movie.overview || 'No overview available'}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      onClick={() => {
                        redirect(`/movies/movie/${movie.id}`);
                      }}
                      className="bg-green-500 hover:bg-green-400 cursor-pointer text-primary rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base gap-2"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        redirect(
                          'https://www.figma.com/design/caYGXx5fSx16Xez2xJiZ3V/Saintstream-Movie-Streaming-Website--Community-?node-id=18-2808&p=f&t=o8LgZwqTLb6ZswMa-0'
                        );
                      }}
                      className="border-border text-foreground bg-transparent rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base gap-2"
                    >
                      <Bookmark className="w-4 h-4" />
                      Figma Design
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
