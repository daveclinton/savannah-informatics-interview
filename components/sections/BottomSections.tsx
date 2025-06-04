import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Plus, Star } from "lucide-react";

export default function BottomSections() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      <div>
        <h2 className="text-lg sm:text-xl font-bold mb-4">Movies On Awards</h2>
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
              <h3 className="font-bold text-base sm:text-lg mb-2">Gundala</h3>
              <div className="flex items-center space-x-1 mb-2">
                <Star className="w-4 h-4 fill-chart-1 text-chart-1" />
                <span className="text-sm">8.1</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Indonesia&apos;s preeminent comic book superhero and his alter
                ego Sancaka enter the cinematic universe to battle the wicked
                Pengkor and his diabolical squad of orphan assassins.
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
      <div>
        <h2 className="text-lg sm:text-xl font-bold mb-4">Live</h2>
        <div className="space-y-3">
          {["Sonic 2: The Hedgehog", "Pathan", "Black Adam"].map((title, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
