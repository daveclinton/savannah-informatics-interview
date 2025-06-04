import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function SeriesSection() {
  const series = [
    "Wednesday Season 1",
    "Beef Series",
    "Valhalla Hunters Series",
    "The Witcher Volume 2",
    "The Peripheral",
  ];

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Series</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {series.map((title, i) => (
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
                <h3 className="font-semibold text-xs sm:text-sm">{title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
