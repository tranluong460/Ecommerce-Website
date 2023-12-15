import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { filter__links } from "@/data/links";

const FilterDrawn = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="-m-2 ml-4 p-2 text-muted-foreground hover:text-primary sm:ml-6 lg:hidden">
          <span className="sr-only">Lọc</span>
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
            ></path>
          </svg>
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Lọc</SheetTitle>
          <Separator className="my-4" />
        </SheetHeader>

        <Accordion type="multiple" className="w-full">
          {filter__links.map((item) => (
            <AccordionItem key={item.name} value={item.name}>
              <AccordionTrigger>{item.label}</AccordionTrigger>

              {item.children.map((children) => (
                <AccordionContent key={children.name}>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <Checkbox id={`${item.name}-${children.name}`} />
                      <Label htmlFor={`${item.name}-${children.name}`}>
                        {children.label}
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawn;
