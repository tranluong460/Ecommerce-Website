import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { filter__links } from "@/data/links";

const Filter = () => {
  return (
    <div className="hidden lg:block">
      <Accordion type="single" collapsible className="w-full">
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
    </div>
  );
};

export default Filter;
