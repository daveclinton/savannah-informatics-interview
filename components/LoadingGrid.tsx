import { Card, CardContent } from "@/components/ui/card";

interface LoadingGridProps {
  count?: number;
}

export default function LoadingGrid({ count = 5 }: LoadingGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="bg-card border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full aspect-[3/4] bg-gray-300 animate-pulse" />
            <div className="p-3">
              <div className="h-4 bg-gray-300 animate-pulse rounded mb-2" />
              <div className="h-3 bg-gray-300 animate-pulse rounded w-1/2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
