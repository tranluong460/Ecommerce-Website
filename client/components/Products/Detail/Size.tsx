"use client";

import { useState } from "react";

const Size = () => {
  const [active, setActive] = useState("");

  const sizes = [
    { name: "XSS", quantity: 0 },
    { name: "XS", quantity: 10 },
    { name: "S", quantity: 8 },
    { name: "M", quantity: 6 },
    { name: "L", quantity: 4 },
    { name: "XL", quantity: 2 },
    { name: "XXL", quantity: 0 },
    { name: "XXXL", quantity: 0 },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
      {sizes.map((size) => (
        <div
          key={size.name}
          onClick={() => size.quantity !== 0 && setActive(size.name)}
          className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase focus:outline-none sm:flex-1 sm:py-6 text-cardForeground ${
            active === size.name ? "bg-primary text-white" : "bg-secondary"
          } ${
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
  );
};

export default Size;
