"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";

const ChangeTheme = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="ct-icon-1" />
          <MoonIcon className="ct-icon-2" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")} className="ct-dmi">
          <SunIcon />
          <Label className="ct-label">Sáng</Label>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")} className="ct-dmi">
          <MoonIcon />
          <Label className="ct-label">Tối</Label>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")} className="ct-dmi">
          <DesktopIcon />
          <Label className="ct-label">Hệ Thống</Label>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeTheme;
