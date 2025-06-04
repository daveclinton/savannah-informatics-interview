"use client";

import Image from "next/image";
import { Play, Plus, Star, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] -mt-[64px] sm:-mt-[72px] overflow-hidden">
        <Image
          src="https://picsum.photos/1920/800?random=1"
          alt="Star Wars: The Force Awakens"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent">
          <div className="flex items-center h-full px-4 sm:px-6 max-w-7xl mx-auto pt-[64px] sm:pt-[72px]">
            <div className="max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Star Wars: The Force Awakens
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                The First Order has risen from the ashes of the Empire and will
                not rest until Skywalker, the last of the Jedi, has been
                destroyed. With the support of the Republic, General Leia Organa
                leads a brave Resistance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base gap-2">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Trailer
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-foreground bg-transparent rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base gap-2"
                >
                  <Bookmark className="w-4 h-4" />
                  Add Watchlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos - Responsive layout */}
      <section className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 opacity-60">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold">
              Disney
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#E50914]">
              NETFLIX
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#A100C4]">
              HBO MAX
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold">
              PIXAR
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#E50914]">
              MARVEL
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold">
              STAR WARS
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFC107]">
              National Geographic
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Just Release */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Just Release</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card
                key={i}
                className="bg-card border-border overflow-hidden group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={`https://picsum.photos/300/400?random=${i + 10}`}
                      alt={`Movie ${i}`}
                      width={300}
                      height={400}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-2 left-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                        <span className="text-sm">8.{i}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular of the Week */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            Popular of the Week
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "The Last of Us",
              "Red Notice",
              "Squid Game",
              "Stranger Things",
            ].map((title, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 bg-card/50 rounded-lg p-4"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted">
                  {i + 1}
                </span>
                <Image
                  src={`https://picsum.photos/80/120?random=${i + 20}`}
                  alt={title}
                  width={80}
                  height={120}
                  className="rounded aspect-[2/3] object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {title}
                  </h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                    <span className="text-sm">8.{i + 5}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured in SaintStream */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Featured in SaintStream
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Best featured for you today
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <div className="relative mb-4">
                <Image
                  src="https://picsum.photos/600/300?random=30"
                  alt="Air: Courting A Legend"
                  width={600}
                  height={300}
                  className="w-full rounded-lg object-cover aspect-[2/1]"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                Air: Courting A Legend
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Sonny Vaccaro and Nike pursue basketball rookie Michael Jordan,
                creating a partnership that revolutionizes the world of sports
                and contemporary culture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                  <Play className="w-4 h-4 mr-2" />
                  Play Now
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-foreground rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Watchlist
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="https://picsum.photos/400/600?random=31"
                alt="The Last of Us"
                width={400}
                height={600}
                className="w-full rounded-lg object-cover aspect-[2/3]"
              />
            </div>
          </div>
        </section>

        {/* Movies */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Movies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "Antman & The Wasp Quantumania",
              "Air: Courting A Legend",
              "John Wick Chapter 4",
              "Morbius World",
              "Super Mario Bros",
            ].map((title, i) => (
              <Card
                key={i}
                className="bg-card border-border overflow-hidden group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={`https://picsum.photos/300/400?random=${i + 40}`}
                      alt={title}
                      width={300}
                      height={400}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-2 left-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                        <span className="text-sm">8.{i + 2}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="font-semibold text-xs sm:text-sm">
                      {title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Series */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Series</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "Wednesday Season 1",
              "Beef Series",
              "Valhalla Hunters Series",
              "The Witcher Volume 2",
              "The Peripheral",
            ].map((title, i) => (
              <Card
                key={i}
                className="bg-card border-border overflow-hidden group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={`https://picsum.photos/300/400?random=${i + 50}`}
                      alt={title}
                      width={300}
                      height={400}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-2 left-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                        <span className="text-sm">8.{i + 3}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="font-semibold text-xs sm:text-sm">
                      {title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Korean Series */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Korean Series</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "Toxic",
              "Irregular",
              "Race Season 1",
              "Ghost Doctor",
              "The Producer",
            ].map((title, i) => (
              <Card
                key={i}
                className="bg-card border-border overflow-hidden group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={`https://picsum.photos/300/400?random=${i + 60}`}
                      alt={title}
                      width={300}
                      height={400}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-2 left-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                        <span className="text-sm">8.{i + 4}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="font-semibold text-xs sm:text-sm">
                      {title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Sections */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Movies On Awards */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">
              Movies On Awards
            </h2>
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="https://picsum.photos/400/300?random=70"
                    alt="Gundala"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base sm:text-lg mb-2">
                    Gundala
                  </h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                    <span className="text-sm">8.1</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Indonesia&apos;s preeminent comic book superhero and his
                    alter ego Sancaka enter the cinematic universe to battle the
                    wicked Pengkor and his diabolical squad of orphan assassins.
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Play Now
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border text-foreground px-4 py-2 text-sm"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Add Watchlist
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fast */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">Fast</h2>
            <div className="space-y-3">
              {["Oppenheimer", "The End Hours", "The Flash", "Scream"].map(
                (title, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Image
                      src={`https://picsum.photos/60/80?random=${i + 80}`}
                      alt={title}
                      width={60}
                      height={80}
                      className="rounded aspect-[3/4] object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-sm">{title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-chart-1 text-chart-1" />
                        <span className="text-xs">8.{i + 1}</span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Live */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">Live</h2>
            <div className="space-y-3">
              {["Sonic 2: The Hedgehog", "Pathan", "Black Adam"].map(
                (title, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Image
                      src={`https://picsum.photos/60/80?random=${i + 90}`}
                      alt={title}
                      width={60}
                      height={80}
                      className="rounded aspect-[3/4] object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-sm">{title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-chart-1 text-chart-1" />
                        <span className="text-xs">8.{i + 6}</span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 py-8 sm:py-12 px-4 sm:px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Our platform is trusted by millions & features best updated movies
              all around the world.
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-muted-foreground">
              <a
                href="#"
                className="text-sm sm:text-base hover:text-foreground"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-foreground"
              >
                Discover
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-foreground"
              >
                Influence
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-foreground"
              >
                Release
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-4 sm:gap-6 text-muted-foreground">
            <div className="w-8 h-8 bg-muted-foreground/50 rounded-full"></div>
            <div className="w-8 h-8 bg-muted-foreground/50 rounded-full"></div>
            <div className="w-8 h-8 bg-muted-foreground/50 rounded-full"></div>
            <div className="w-8 h-8 bg-muted-foreground/50 rounded-full"></div>
          </div>
          <div className="text-center text-muted-foreground text-sm mt-6 sm:mt-8">
            © 2023
          </div>
        </div>
      </footer>
    </div>
  );
}
