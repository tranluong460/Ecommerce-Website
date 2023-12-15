"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
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
    </div>
  );
};

export default Filter;
