import Footer from "@/components/layout/Footer";
import BottomSections from "@/components/sections/BottomSections";
import BrandLogos from "@/components/sections/BrandLogos";
import FeaturedSection from "@/components/sections/FeaturedSection";
import HeroSection from "@/components/sections/HeroSection";
import KoreanSeriesSection from "@/components/sections/KoreanSeriesSection";
import MovieSection from "@/components/sections/MovieSection";
import PopularSection from "@/components/sections/PopularSection";
import SeriesSection from "@/components/sections/SeriesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <BrandLogos />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <MovieSection title="Top Rated Movies" type="top_rated" />
        <PopularSection />
        <MovieSection title="Popular Movies" type="popular" />
        <FeaturedSection />
        <SeriesSection />
        <KoreanSeriesSection />
        <BottomSections />
      </div>
      <Footer />
    </div>
  );
}
