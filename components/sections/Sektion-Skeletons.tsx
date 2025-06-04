"use client";

import { Skeleton } from "@/components/ui/skeleton";

interface MovieSectionProps {
  limit?: number;
}

export default function SectionSkeleton({ limit = 6 }: MovieSectionProps) {
  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: limit }).map((_, i) => (
          <Skeleton
            key={i}
            className="h-44 md:h-52 2xl:h-56 w-full rounded-lg bg-gray-200 dark:bg-gray-300"
          />
        ))}
      </div>
    </section>
  );
}
