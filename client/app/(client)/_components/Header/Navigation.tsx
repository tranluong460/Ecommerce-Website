"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav__links } from "@/data/links";

const Navigation = () => {
  const [active, setActive] = useState<{ [key: string]: boolean }>({
    boy: false,
    girl: false,
  });

  return (
    <div className="flex h-full items-center space-x-8">
      {nav__links.map((nav) => (
        <div key={nav.name} className="flex">
          <div className="relative flex">
            <button
              onClick={() =>
                setActive((prev) => ({
                  ...prev,
                  [nav.name]: !prev[nav.name],
                  ...(nav.name === "boy" && { girl: false }),
                  ...(nav.name === "girl" && { boy: false }),
                }))
              }
              className={`border-transparent relative -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                active[nav.name]
                  ? "text-primary border-b-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {nav.label}
            </button>
          </div>

          <div
            className={`absolute inset-x-0 top-full text-sm text-muted-foreground transition ease-out duration-200 ${
              active[nav.name] ? "" : "invisible"
            }`}
          >
            <div className="absolute inset-0 top-1/2 bg-black/80 shadow" />

            <div className="relative bg-secondary">
              <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                    {nav.best.map((item) => (
                      <div
                        key={item.image}
                        className="group relative text-base sm:text-sm"
                      >
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-secondary group-hover:opacity-75">
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

                        <p className="mt-1">{item.secondary}</p>
                      </div>
                    ))}
                  </div>

                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                    {nav.children.map((item) => (
                      <div key={item.name}>
                        <p className="font-medium text-foreground">
                          {item.name}
                        </p>

                        <div className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                          {item.links.map((link) => (
                            <div className="flex" key={link.name}>
                              <Link href="#" className="hover:text-primary">
                                {link.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div onClick={() => setActive({ boy: false, girl: false })}>
        <Link
          href="/products"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
        >
          Sản phẩm
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
