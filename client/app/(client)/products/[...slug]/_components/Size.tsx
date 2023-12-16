import { ISizeProduct } from "@/interface/products";

type SizeProps = {
  sizeList: ISizeProduct[] | undefined;
  sizeSelect: string;
  setSelect: (value: string) => void;
};

const Size = ({ sizeList, sizeSelect, setSelect }: SizeProps) => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
      {sizeList?.map((size: ISizeProduct) => (
        <button
          key={size.name}
          disabled={size.quantity === 0}
          onClick={() => setSelect(size.name)}
          className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase focus:outline-none sm:flex-1 sm:py-6 text-card-foreground ${
            size.quantity !== 0
              ? "dark:border-secondary hover:bg-primary hover:text-white shadow-sm"
              : "cursor-not-allowed"
          } ${size.name === sizeSelect ? "ring ring-primary" : ""}`}
        >
          <span id="size-choice-1-label">{size.name}</span>

          {size.quantity !== 0 ? (
            <span
              className="pointer-events-none absolute -inset-px rounded-md"
              aria-hidden="true"
            />
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
        </button>
      ))}
    </div>
  );
};

export default Size;
