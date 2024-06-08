import { Skeleton } from "@/components/ui/skeleton";

export function BannerStatsSkeleton() {
  return (
    <div className="flex w-full flex-col gap-8">
      <Skeleton className="flex items-center space-x-4 mb-2 h-80" />
      <Skeleton className="flex items-center space-x-4 h-48 mb-2" />
      <Skeleton className="flex items-center space-x-4 h-96" />
    </div>
  );
}
