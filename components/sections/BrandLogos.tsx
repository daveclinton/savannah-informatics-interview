"use client";

import Slider from "react-slick";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

const brands = [
  { name: "Disney", color: "text-foreground" },
  { name: "NETFLIX", color: "text-[#E50914]" },
  { name: "HBO MAX", color: "text-[#A100C4]" },
  { name: "PIXAR", color: "text-foreground" },
  { name: "MARVEL", color: "text-[#E50914]" },
  { name: "STAR WARS", color: "text-foreground" },
  { name: "National Geographic", color: "text-[#FFC107]" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 5 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 2 },
    },
  ],
  appendDots: (dots: React.ReactNode) => (
    <div className="mt-4">
      <ul className="flex justify-center gap-2">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div className="w-2 h-2 bg-white/50 rounded-full hover:bg-white transition-all cursor-pointer" />
  ),
};

export default function BrandLogos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-6 w-24 bg-gray-200 dark:bg-gray-300"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Slider {...sliderSettings}>
          {brands.map((brand, i) => (
            <div key={i} className="px-2">
              <span
                className={`text-lg sm:text-xl lg:text-2xl font-bold ${brand.color} text-center block`}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
