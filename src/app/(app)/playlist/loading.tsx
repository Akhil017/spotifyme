import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg flex gap-2 hover:border-primary duration-300"
        >
          <div>
            <Skeleton className="size-20  md:size-28 rounded-full" />
          </div>

          <div className="w-full space-y-2">
            <Skeleton className="h-6 w-full rounded-md" />
            <div className="flex gap-2 flex-wrap">
              <Skeleton className="h-4 w-32 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
