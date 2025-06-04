import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";

export default function FeaturedSection() {
  return (
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
            creating a partnership that revolutionizes the world of sports and
            contemporary culture.
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
  );
}
