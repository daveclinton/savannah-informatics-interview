import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkeltonLoader = () => {
  return (
    <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-6">
        <Skeleton className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-[300px] w-full rounded-lg bg-gray-200 dark:bg-gray-300" />
        <div className="md:col-span-2 space-y-4">
          <Skeleton className="h-8 w-3/4 bg-gray-200 dark:bg-gray-300" />
          <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-300" />
          <Skeleton className="h-4 w-5/6 bg-gray-200 dark:bg-gray-300" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-32 bg-gray-200 dark:bg-gray-300" />
            <Skeleton className="h-10 w-32 bg-gray-200 dark:bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeltonLoader;
