"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { filter__links } from "@/data/links";

const Filter = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    sex: true,
    size: true,
  });

  return (
    <div className="hidden lg:block">
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
                {isOpen[item.name] ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                )}
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
    </div>
  );
};

export default Filter;
