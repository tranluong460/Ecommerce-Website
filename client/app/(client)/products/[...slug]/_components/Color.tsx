"use client";

import { useRouter } from "next/navigation";

type ColorProps = {
  id: string | undefined;
  colors: { name: string }[] | undefined;
  colorParam: string;
};

const Color = ({ id, colors, colorParam }: ColorProps) => {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-3">
      {colors?.map((color) => (
        <label
          key={color.name}
          onClick={() =>
            router.push(`/products/${id}/${color.name}`, { scroll: false })
          }
          className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
            color.name === colorParam ? "ring ring-primary" : ""
          }`}
        >
          <span className="sr-only">{color.name}</span>

          <span
            className="h-8 w-8 rounded-full border dark:border-secondary"
            style={{ backgroundColor: `#${color.name}` }}
          />
        </label>
      ))}
    </div>
  );
};

export default Color;
