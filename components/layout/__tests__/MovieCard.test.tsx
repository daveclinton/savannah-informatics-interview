/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import MovieCard from "../MovieCard";
import { Movie, TVShow } from "@/definitions/tmdb";
import "@testing-library/jest-dom";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

// Mock Next.js Link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, prefetch, ...props }: any) => (
    <a href={href} prefetch={prefetch?.toString()} {...props}>
      {children}
    </a>
  ),
}));

describe("MovieCard", () => {
  const mockMovie: Movie = {
    id: 123,
    title: "Test Movie",
    original_title: "Test Movie",
    overview: "This is a test movie overview",
    poster_path: "/test-poster.jpg",
    backdrop_path: "/test-backdrop.jpg",
    release_date: "2023-12-01",
    genre_ids: [28, 12],
    adult: false,
    original_language: "en",
    popularity: 8.5,
    vote_count: 1000,
    video: false,
    vote_average: 7.8,
    runtime: 120,
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
    ],
  };

  const mockTVShow: TVShow = {
    id: 456,
    name: "Test TV Show",
    original_name: "Test TV Show",
    overview: "This is a test TV show overview",
    poster_path: "/test-tv-poster.jpg",
    backdrop_path: "/test-tv-backdrop.jpg",
    first_air_date: "2023-11-15",
    genre_ids: [18, 10765],
    original_language: "es",
    popularity: 9.2,
    vote_count: 850,
    vote_average: 8.4,
    origin_country: ["US"],
    number_of_seasons: 3,
    number_of_episodes: 24,
    genres: [
      { id: 18, name: "Drama" },
      { id: 10765, name: "Sci-Fi & Fantasy" },
    ],
  };

  const mockMovieWithoutPoster: Movie = {
    ...mockMovie,
    poster_path: "",
  };

  const mockMovieWithoutOverview: Movie = {
    ...mockMovie,
    overview: "",
  };

  describe("Movie rendering", () => {
    it("renders movie card with all details", () => {
      render(<MovieCard item={mockMovie} />);

      expect(screen.getByText("Test Movie")).toBeInTheDocument();
      expect(
        screen.getByText("This is a test movie overview")
      ).toBeInTheDocument();
      expect(screen.getByText("2023-12-01 | EN")).toBeInTheDocument();
      expect(screen.getByText("7.8")).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: "Test Movie" })
      ).toBeInTheDocument();
    });

    it("generates correct movie link", () => {
      render(<MovieCard item={mockMovie} />);

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/movies/movie/123");
    });

    it("displays placeholder image when poster_path is empty", () => {
      render(<MovieCard item={mockMovieWithoutPoster} />);

      const image = screen.getByRole("img", { name: "Test Movie" });
      expect(image).toHaveAttribute(
        "src",
        expect.stringContaining("data:image/png;base64")
      );
    });

    it("shows 'No overview available' when overview is empty", () => {
      render(<MovieCard item={mockMovieWithoutOverview} />);

      expect(screen.getByText("No overview available")).toBeInTheDocument();
    });
  });

  describe("TV Show rendering", () => {
    it("renders TV show card with all details", () => {
      render(<MovieCard item={mockTVShow} />);

      expect(screen.getByText("Test TV Show")).toBeInTheDocument();
      expect(
        screen.getByText("This is a test TV show overview")
      ).toBeInTheDocument();
      expect(screen.getByText("2023-11-15 | ES")).toBeInTheDocument();
      expect(screen.getByText("8.4")).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: "Test TV Show" })
      ).toBeInTheDocument();
    });

    it("generates correct TV show link", () => {
      render(<MovieCard item={mockTVShow} />);

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "movies/tv/456");
    });
  });

  describe("Common functionality", () => {
    it("applies custom className when provided", () => {
      const { container } = render(
        <MovieCard item={mockMovie} className="custom-class" />
      );

      const cardDiv = container.querySelector(".custom-class");
      expect(cardDiv).toBeInTheDocument();
    });

    it("displays star icon with rating", () => {
      render(<MovieCard item={mockMovie} />);

      const starIcon = screen.getByText("7.8").closest("p");
      expect(starIcon).toHaveClass(
        "absolute",
        "px-1.5",
        "py-0.5",
        "top-1",
        "left-1"
      );
    });

    it("formats vote average to one decimal place", () => {
      const movieWithPreciseRating: Movie = {
        ...mockMovie,
        vote_average: 7.86543,
      };

      render(<MovieCard item={movieWithPreciseRating} />);
      expect(screen.getByText("7.9")).toBeInTheDocument();
    });

    it("displays uppercase language code", () => {
      render(<MovieCard item={mockTVShow} />);
      expect(screen.getByText("2023-11-15 | ES")).toBeInTheDocument();
    });

    it("has proper accessibility attributes", () => {
      render(<MovieCard item={mockMovie} />);

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/movies/movie/123");

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("alt", "Test Movie");
    });

    it("sets prefetch to false on link", () => {
      render(<MovieCard item={mockMovie} />);

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("prefetch", "false");
    });
  });

  describe("Edge cases", () => {
    it("handles missing release_date for movies", () => {
      const movieWithoutDate: Movie = {
        ...mockMovie,
        release_date: "",
      };

      render(<MovieCard item={movieWithoutDate} />);
      // Use a more flexible text matcher to handle spacing variations
      expect(
        screen.getByText((content, element) => {
          return element?.textContent?.trim() === "| EN";
        })
      ).toBeInTheDocument();
    });

    it("handles missing first_air_date for TV shows", () => {
      const tvShowWithoutDate: TVShow = {
        ...mockTVShow,
        first_air_date: "",
      };

      render(<MovieCard item={tvShowWithoutDate} />);
      // Use a more flexible text matcher to handle spacing variations
      expect(
        screen.getByText((content, element) => {
          return element?.textContent?.trim() === "| ES";
        })
      ).toBeInTheDocument();
    });

    it("handles zero vote average", () => {
      const movieWithZeroRating: Movie = {
        ...mockMovie,
        vote_average: 0,
      };

      render(<MovieCard item={movieWithZeroRating} />);
      expect(screen.getByText("0.0")).toBeInTheDocument();
    });
  });
});
