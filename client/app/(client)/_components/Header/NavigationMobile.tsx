"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav__links } from "@/data/links";

const NavigationMobile = () => {
  const [active, setActive] = useState<{ [key: string]: boolean }>({
    boy: true,
    girl: false,
  });

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuIcon className="h-7 w-7 hover:text-primary" />
        </SheetTrigger>

        <SheetContent side="left" className="overflow-auto">
          <SheetHeader>
            <div className="border-b dark:border-secondary">
              <div className="-mb-px flex space-x-8">
                {nav__links.map((nav) => (
                  <button
                    key={`${nav.name}-header`}
                    onClick={() =>
                      setActive((prev) => ({
                        ...prev,
                        [nav.name]: !prev[nav.name],
                        ...(nav.name === "boy" && { girl: false }),
                        ...(nav.name === "girl" && { boy: false }),
                      }))
                    }
                    className={`border-transparent flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium ${
                      active[nav.name]
                        ? "border-b-primary text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {nav.label}
                  </button>
                ))}
              </div>
            </div>
          </SheetHeader>

          {nav__links.map((nav) => (
            <div
              key={`${nav.name}-content`}
              className={`space-y-10 pb-8 pt-5 ${
                active[nav.name] ? "" : "hidden"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-4">
                {nav.best.map((item) => (
                  <div key={item.image} className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        width={1000}
                        height={1000}
                        src={item.image}
                        alt={item.image}
                        className="object-cover object-center"
                      />
                    </div>

                    <Link
                      href="#"
                      className="mt-6 block font-medium text-foreground"
                    >
                      <p className="absolute inset-0" />
                      {item.label}
                    </Link>

                    <p className="mt-1 text-muted-foreground">
                      {item.secondary}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                {nav.children.map((item) => (
                  <div key={item.name} className="mt-10">
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>

                    <div className="mt-6 flex flex-col space-y-6">
                      {item.links.map((link) => (
                        <div key={link.name} className="flow-root">
                          <Link
                            href={link.url}
                            className="-m-2 block p-2 text-muted-foreground hover:text-primary"
                          >
                            {link.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-6 border-t dark:border-secondary py-6">
            <div className="flow-root">
              <Link
                href="/products"
                className="-m-2 block p-2 font-medium text-foreground hover:text-primary"
              >
                Sản phẩm
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationMobile;
