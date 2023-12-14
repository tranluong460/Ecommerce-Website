"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav__links_boy, nav__links_girl } from "@/data/links";

const Navigation = () => {
  const [activeBoy, setActiveBoy] = useState(false);
  const [activeGirl, setActiveGirl] = useState(false);

  const toggleActiveBoy = () => {
    setActiveBoy(!activeBoy);
    setActiveGirl(false);
  };

  const toggleActiveGirl = () => {
    setActiveGirl(!activeGirl);
    setActiveBoy(false);
  };

  const onToggle = () => {
    setActiveBoy(false);
    setActiveGirl(false);
  };

  return (
    <div className="flex h-full space-x-8">
      <div className="flex z-10">
        <div className="relative flex">
          <button
            onClick={toggleActiveBoy}
            className={`border-transparent relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
              activeBoy
                ? "text-primary border-b-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
            aria-expanded="false"
          >
            Nam
          </button>
        </div>

        <div
          className={`absolute inset-x-0 top-full text-sm text-muted-foreground transition ease-out duration-200 ${
            activeBoy ? "" : "invisible"
          }`}
        >
          <div
            className="absolute inset-0 top-1/2 bg-black/80 shadow"
            aria-hidden="true"
          />

          <div className="relative bg-secondary">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                  <div className="group relative text-base sm:text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-secondary group-hover:opacity-75">
                      <Image
                        width={1000}
                        height={100}
                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg"
                        alt="Drawstring top with elastic loop closure and textured interior padding."
                        className="object-cover object-center"
                      />
                    </div>

                    <Link
                      href="#"
                      className="mt-6 block font-medium text-foreground"
                    >
                      <p
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></p>
                      New Arrivals
                    </Link>

                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>

                  <div className="group relative text-base sm:text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-secondary group-hover:opacity-75">
                      <Image
                        width={1000}
                        height={100}
                        src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                        alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                        className="object-cover object-center"
                      />
                    </div>

                    <Link
                      href="#"
                      className="mt-6 block font-medium text-foreground"
                    >
                      <p
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></p>
                      Artwork Tees
                    </Link>

                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                </div>

                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                  {nav__links_boy.map((nav) => (
                    <div key={nav.name}>
                      <p className="font-medium text-foreground">{nav.name}</p>

                      <div className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                        {nav.links.map((link) => (
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

      <div className="flex z-50">
        <div className="relative flex">
          <button
            onClick={toggleActiveGirl}
            className={`border-transparent relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
              activeGirl
                ? "text-primary border-b-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Nữ
          </button>
        </div>

        <div
          className={`absolute inset-x-0 top-full text-sm text-muted-foreground transition ease-out duration-200  ${
            activeGirl ? "" : "invisible"
          }`}
        >
          <div
            className="absolute inset-0 top-1/2 bg-black/80 shadow"
            aria-hidden="true"
          ></div>

          <div className="relative bg-secondary">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                  <div className="group relative text-base sm:text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-secondary group-hover:opacity-75">
                      <Image
                        width={1000}
                        height={100}
                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                        alt="Models sitting back to back, wearing Basic Tee in black and bone."
                        className="object-cover object-center"
                      />
                    </div>

                    <Link
                      href="#"
                      className="mt-6 block font-medium text-foreground"
                    >
                      <p
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></p>
                      New Arrivals
                    </Link>

                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>

                  <div className="group relative text-base sm:text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-secondary group-hover:opacity-75">
                      <Image
                        width={1000}
                        height={100}
                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                        alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                        className="object-cover object-center"
                      />
                    </div>

                    <Link
                      href="#"
                      className="mt-6 block font-medium text-foreground"
                    >
                      <p
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></p>
                      Artwork Tees
                    </Link>

                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                </div>

                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                  {nav__links_girl.map((nav) => (
                    <div key={nav.name}>
                      <p className="font-medium text-foreground">{nav.name}</p>

                      <div className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                        {nav.links.map((link) => (
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

      <Link
        href="/products"
        onClick={onToggle}
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
      >
        Sản phẩm
      </Link>
    </div>
  );
};

export default Navigation;
