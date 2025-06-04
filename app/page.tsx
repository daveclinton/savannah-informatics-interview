import Image from "next/image";
import { Search, Play, Plus, Star, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header - Sticky and positioned over hero */}
      <header className="sticky top-0 z-50 w-full">
        <div className="bg-background/20 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">daveclintonn</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-foreground hover:text-muted-foreground"
                >
                  Home
                </a>
                <a href="#" className="text-muted hover:text-foreground">
                  Discover
                </a>
                <a href="#" className="text-muted hover:text-foreground">
                  Movie Release
                </a>
                <a href="#" className="text-muted hover:text-foreground">
                  Forum
                </a>
                <a href="#" className="text-muted hover:text-foreground">
                  About
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-foreground" />
              <Button
                variant="outline"
                className="border border-border cursor-pointer text-foreground bg-transparent rounded-xl px-8 py-3 text-base"
              >
                Sign up
              </Button>
              <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-3 text-base">
                Login
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Starting from the top of the page */}
      <section className="relative h-[700px] -mt-[72px] overflow-hidden">
        <Image
          src="https://picsum.photos/1920/800?random=1"
          alt="Star Wars: The Force Awakens"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent">
          <div className="flex items-center h-full px-6 max-w-7xl mx-auto pt-[72px]">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold mb-4">
                Star Wars: The Force Awakens
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The First Order has risen from the ashes of the Empire and will
                not rest until Skywalker, the last of the Jedi, has been
                destroyed. With the support of the Republic, General Leia Organa
                leads a brave Resistance.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground rounded-lg px-6 py-3 text-base gap-2">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Trailer
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-foreground cursor-pointer bg-transparent rounded-lg px-6 py-3 text-base gap-2"
                >
                  <Bookmark className="w-4 h-4" />
                  Add Watchlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <span className="text-2xl font-bold">Disney</span>
            <span className="text-2xl font-bold text-[#E50914]">NETFLIX</span>
            <span className="text-2xl font-bold text-[#A100C4]">HBO MAX</span>
            <span className="text-2xl font-bold">PIXAR</span>
            <span className="text-2xl font-bold text-[#E50914]">MARVEL</span>
            <span className="text-2xl font-bold">STAR WARS</span>
            <span className="text-2xl font-bold text-[#FFC107]">
              National Geographic
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Just Release */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Just Release</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

        {/* Popular of the week */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Popular of the week</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                <span className="text-4xl font-bold text-muted">{i + 1}</span>
                <Image
                  src={`https://picsum.photos/80/120?random=${i + 20}`}
                  alt={title}
                  width={80}
                  height={120}
                  className="rounded aspect-[2/3] object-cover"
                />
                <div>
                  <h3 className="font-semibold">{title}</h3>
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
          <h2 className="text-2xl font-bold mb-2">Featured in SaintStream</h2>
          <p className="text-muted-foreground mb-6">
            Best featured for you today
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="relative mb-4">
                <Image
                  src="https://picsum.photos/600/300?random=30"
                  alt="Air: Courting A Legend"
                  width={600}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Air: Courting A Legend
              </h3>
              <p className="text-muted-foreground mb-4">
                Sonny Vaccaro and Nike pursue basketball rookie Michael Jordan,
                creating a partnership that revolutionizes the world of sports
                and contemporary culture.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Play className="w-4 h-4 mr-2" />
                  Play Now
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-foreground"
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
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Movies */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                  <div className="p-3">
                    <h3 className="font-semibold text-sm">{title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Series */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Series</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                  <div className="p-3">
                    <h3 className="font-semibold text-sm">{title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Korean Series */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Korean Series</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                  <div className="p-3">
                    <h3 className="font-semibold text-sm">{title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Sections */}
        <section className="grid md:grid-cols-3 gap-8">
          {/* Movies On Awards */}
          <div>
            <h2 className="text-xl font-bold mb-4">Movies On Awards</h2>
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
                  <h3 className="font-bold text-lg mb-2">Gundala</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                    <span className="text-sm">8.1</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Indonesia&apos;s preeminent comic book superhero and his
                    alter ego Sancaka enter the cinematic universe to battle the
                    wicked Pengkor and his diabolical squad of orphan assassins.
                  </p>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Play Now
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border text-foreground"
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
            <h2 className="text-xl font-bold mb-4">Fast</h2>
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
            <h2 className="text-xl font-bold mb-4">Live</h2>
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
      <footer className="mt-16 py-12 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Our platform is trusted by millions & features best updated movies
              all around the world.
            </h2>
            <div className="flex justify-center space-x-8 text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Home
              </a>
              <a href="#" className="hover:text-foreground">
                Discover
              </a>
              <a href="#" className="hover:text-foreground">
                Influence
              </a>
              <a href="#" className="hover:text-foreground">
                Release
              </a>
            </div>
          </div>
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <div className="w-8 h-8 bg-muted-foreground/50 rounded-full"></div>
            <div className="w-8 h-8 bg-muted-foreground/50 rounded-full"></div>
            <div className="w-8 h-8 bg-muted-foreground/50 rounded-full"></div>
            <div className="w-8 h-8 bg-muted-foreground/50 rounded-full"></div>
          </div>
          <div className="text-center text-muted-foreground text-sm mt-8">
            © 2023
          </div>
        </div>
      </footer>
    </div>
  );
}
