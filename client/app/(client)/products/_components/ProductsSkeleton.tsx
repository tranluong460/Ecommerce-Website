import { Skeleton } from "@/components/ui/skeleton";

const ProductsSkeleton = () => {
  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {[...Array(4)].map((_, i) => (
          <div key={`products-${i}`} className="group relative">
            <div className="flex flex-col gap-y-1">
              <Skeleton className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-secondary lg:aspect-none group-hover:opacity-75 lg:h-80" />
              <div className="mt-2">
                <Skeleton className="h-7 w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSkeleton;
