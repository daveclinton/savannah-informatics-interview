import Image from "next/image";
import { Play, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
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
  );
}
