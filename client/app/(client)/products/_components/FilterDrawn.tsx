"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { filter__links } from "@/data/links";

const FilterDrawn = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    sex: true,
    size: true,
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="-m-2 ml-4 p-2 text-muted-foreground hover:text-primary sm:ml-6 lg:hidden">
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Lọc</SheetTitle>
          <Separator className="my-4" />
        </SheetHeader>

        {filter__links.map((item) => (
          <Collapsible
            key={item.name}
            open={isOpen[item.name]}
            onOpenChange={() =>
              setIsOpen((prev) => ({ ...prev, [item.name]: !prev[item.name] }))
            }
            className="border-t dark:border-secondary px-4 py-6"
          >
            <CollapsibleTrigger className="-mx-2 -my-3 flow-root w-full">
              <div className="flex items-center justify-between px-2 py-3 text-muted-foreground hover:text-primary">
                <span className="font-medium">{item.label}</span>
                <span className="ml-6 flex items-center">
                  {isOpen[item.name] ? <MinusIcon /> : <PlusIcon />}
                </span>
              </div>
            </CollapsibleTrigger>
            {item.children.map((children) => (
              <CollapsibleContent key={children.name} className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Checkbox
                      id={`${item.name}-${children.name}`}
                      className="h-4 w-4 rounded border dark:border-secondary text-primary focus:ring-primary"
                    />
                    <Label
                      htmlFor={`${item.name}-${children.name}`}
                      className="ml-3 min-w-0 flex-1 text-muted-foreground"
                    >
                      {children.label}
                    </Label>
                  </div>
                </div>
              </CollapsibleContent>
            ))}
          </Collapsible>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawn;
