import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ul className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li className="flex items-center">
            <Skeleton className="w-96 h-5" />
          </li>
        </ul>
      </nav>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <button
                    key={`product-${i}`}
                    className="relative flex h-24 items-center justify-center rounded-md bg-background text-sm font-medium uppercase text-foreground hover:bg-background/80 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Skeleton className="h-full w-full object-cover object-center" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="aspect-h-1 aspect-w-1 w-full">
              <Skeleton className="h-[800px] w-[580px] object-cover object-center sm:rounded-lg" />
            </div>
          </div>

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Skeleton className="w-[500px] h-10" />

            <div className="mt-3">
              <Skeleton className="w-32 h-6" />
            </div>

            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={`product-star-${i}`}
                      className="flex items-center"
                    >
                      <Skeleton className="w-5 h-5" />
                    </div>
                  ))}
                </div>

                <span className="ml-3 text-sm font-medium text-primary hover:text-primary/80">
                  <Skeleton className="w-24 h-5" />
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <Skeleton className="w-[500px] h-20" />
            </div>

            <div className="mt-5">
              <Skeleton className="w-44 h-5" />

              <div className="mt-4">
                <ul className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <li key={`product-highlights-${i}`}>
                      <Skeleton className="w-32 h-5" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <div className="mt-10">
                <Skeleton className="w-24 h-5" />

                <div className="mt-2">
                  <div className="flex items-center space-x-3">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`product-color-${i}`}
                        className=" className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5"
                      >
                        <Skeleton className="h-8 w-8 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Skeleton className="w-24 h-5" />

                <div className="mt-3 flex items-center gap-1">
                  <Skeleton className="h-7 w-7 p-1" />
                  <Skeleton className="h-7 w-24 p-1" />
                  <Skeleton className="h-7 w-7 p-1" />
                  <span className="ml-3">
                    <Skeleton className="w-24 h-5" />
                  </span>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <Skeleton className="w-16 h-5" />
                  <Skeleton className="w-24 h-5" />
                </div>

                <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`product-size-${i}`}
                      className="group relative flex items-center justify-center rounded-md py-3 px-4 sm:flex-1 sm:py-6"
                    >
                      <Skeleton className="absolute -inset-px rounded-md" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center gap-2">
                <Skeleton className="w-[500px] h-10" />
                <Skeleton className="w-10 h-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
