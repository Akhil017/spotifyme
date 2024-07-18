import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="space-y-8">
      <div className="h-[272px] w-full border rounded-lg flex flex-col items-center justify-center gap-4">
        <Skeleton className="size-24 md:size-28 rounded-full" />
        <Skeleton className="w-40 h-6 " />
        <Skeleton className="w-60 h-6 " />
        <Skeleton className="w-20 h-4 " />
      </div>
      <div className="space-y-8">
        <Skeleton className="w-60 h-8" />
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Skeleton className="size-24 md:size-28 rounded-full" />
              <Skeleton className="w-40 h-6 " />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8 pb-8">
        <Skeleton className="w-60 h-8" />
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Skeleton className="size-24 md:size-28 rounded-full" />
              <Skeleton className="w-40 h-6 " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
