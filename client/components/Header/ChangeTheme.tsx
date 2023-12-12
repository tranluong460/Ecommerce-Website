"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";

const ChangeTheme = () => {
  const [show, setShow] = useState(false);
  const { setTheme } = useTheme();

  return (
    <div onClick={() => setShow(!show)} className="relative cursor-pointer">
      <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent text-mutedForeground hover:text-primary relative h-9 w-9 border dark:border-secondary rounded-md">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>

      <ul
        className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border dark:border-secondary bg-popover p-1 text-popover-foreground shadow-md ${
          show ? "" : "hidden"
        }`}
      >
        <li
          onClick={() => setTheme("light")}
          className="relative flex gap-2 items-center cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accentForeground hover:bg-accent text-mutedForeground"
        >
          <SunIcon width={20} />
          Sáng
        </li>

        <li
          onClick={() => setTheme("dark")}
          className="relative flex gap-2 items-center cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accentForeground hover:bg-accent text-mutedForeground"
        >
          <MoonIcon width={20} />
          Tối
        </li>

        <li
          onClick={() => setTheme("system")}
          className="relative flex gap-2 items-center cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accentForeground hover:bg-accent text-mutedForeground"
        >
          <DesktopIcon width={20} />
          Hệ thống
        </li>
      </ul>
    </div>
  );
};

export default ChangeTheme;
