import { ISizeProduct } from "@/interface/products";

type SizeProps = {
  sizes: ISizeProduct[] | undefined;
};

const Size = ({ sizes }: SizeProps) => {
  return (
    <div className="mt-4">
      <span className="sr-only">Chọn kích cỡ</span>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        {sizes?.map((size: ISizeProduct) => (
          <div
            key={size.name}
            className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase focus:outline-none sm:flex-1 sm:py-6 text-card-foreground ${
              size.quantity !== 0
                ? "dark:border-secondary hover:bg-primary hover:text-white shadow-sm cursor-pointer"
                : "cursor-not-allowed"
            }`}
          >
            <input
              type="radio"
              name="size-choice"
              value="XS"
              className="sr-only"
              aria-labelledby="size-choice-1-label"
            />
            <span id="size-choice-1-label">{size.name}</span>

            {size.quantity !== 0 ? (
              <span
                className="pointer-events-none absolute -inset-px rounded-md"
                aria-hidden="true"
              ></span>
            ) : (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200 dark:border-gray-600"
              >
                <svg
                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                >
                  <line
                    x1="0"
                    y1="100"
                    x2="100"
                    y2="0"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Size;
