"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav__links_boy, nav__links_girl } from "@/data/links";

type NavDrawnProps = {
  showNav: boolean;
  setShowNav: () => void;
};

const NavigationDrawn = ({ showNav, setShowNav }: NavDrawnProps) => {
  const [activeBoy, setActiveBoy] = useState(true);
  const [activeGirl, setActiveGirl] = useState(false);

  const toggleActiveBoy = () => {
    setActiveBoy(!activeBoy);
    setActiveGirl(false);
  };

  const toggleActiveGirl = () => {
    setActiveGirl(!activeGirl);
    setActiveBoy(false);
  };

  return (
    <div className={`relative z-40 lg:hidden ${showNav ? "" : "invisible"}`}>
      <div
        className={`fixed inset-0 bg-black/70 bg-opacity-25 transition-opacity ease-linear duration-300 ${
          showNav ? "opacity-70" : "opacity-0"
        }`}
      />

      <div className="fixed inset-0 z-40 flex">
        <div
          className={`relative flex w-full max-w-xs flex-col overflow-auto bg-background pb-12 shadow-xl transition ease-in-out duration-300 transform ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex px-4 pb-2 pt-5">
            <button
              onClick={setShowNav}
              className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-primary"
            >
              <span className="absolute -inset-0.5"></span>

              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-2">
            <div className="border-b dark:border-secondary">
              <div
                className="-mb-px flex space-x-8 px-4"
                aria-orientation="horizontal"
                role="tablist"
              >
                <button
                  onClick={toggleActiveBoy}
                  className={`border-transparent flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium ${
                    activeBoy
                      ? "border-b-primary text-primary"
                      : "text-foreground"
                  }`}
                >
                  Nam
                </button>

                <button
                  onClick={toggleActiveGirl}
                  className={`border-transparent flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium ${
                    activeGirl
                      ? "border-b-primary text-primary"
                      : "text-foreground"
                  }`}
                >
                  Nữ
                </button>
              </div>
            </div>

            <div
              className={`space-y-10 px-4 pb-8 pt-10 ${
                activeBoy ? "" : "hidden"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-4">
                <div className="group relative text-sm">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
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
                    <p className="absolute inset-0 z-10" aria-hidden="true"></p>
                    New Arrivals
                  </Link>

                  <p aria-hidden="true" className="mt-1 text-muted-foreground">
                    Shop now
                  </p>
                </div>

                <div className="group relative text-sm">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                      width={100}
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
                    <p className="absolute inset-0 z-10" aria-hidden="true"></p>
                    Artwork Tees
                  </Link>

                  <p aria-hidden="true" className="mt-1 text-muted-foreground">
                    Shop now
                  </p>
                </div>
              </div>

              <div>
                {nav__links_boy.map((nav) => (
                  <div key={nav.name} className="mt-10">
                    <span
                      id="men-clothing-heading-mobile"
                      className="font-medium text-foreground"
                    >
                      {nav.name}
                    </span>

                    <div
                      role="list"
                      aria-labelledby="men-clothing-heading-mobile"
                      className="mt-6 flex flex-col space-y-6"
                    >
                      {nav.links.map((link) => (
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

            <div
              className={`space-y-10 px-4 pb-8 pt-10 ${
                activeGirl ? "" : "hidden"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-4">
                <div className="group relative text-sm">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
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
                    <p className="absolute inset-0 z-10" aria-hidden="true"></p>
                    New Arrivals
                  </Link>

                  <p aria-hidden="true" className="mt-1 text-muted-foreground">
                    Shop now
                  </p>
                </div>

                <div className="group relative text-sm">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
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
                    <p className="absolute inset-0 z-10" aria-hidden="true"></p>
                    Basic Tees
                  </Link>

                  <p aria-hidden="true" className="mt-1 text-muted-foreground">
                    Shop now
                  </p>
                </div>
              </div>

              <div>
                {nav__links_girl.map((nav) => (
                  <div key={nav.name} className="mt-10">
                    <span
                      id="men-clothing-heading-mobile"
                      className="font-medium text-foreground"
                    >
                      {nav.name}
                    </span>

                    <div
                      role="list"
                      aria-labelledby="men-clothing-heading-mobile"
                      className="mt-6 flex flex-col space-y-6"
                    >
                      {nav.links.map((link) => (
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
          </div>

          <div className="space-y-6 border-t dark:border-secondary px-4 py-6">
            <div className="flow-root">
              <Link
                href="/products"
                className="-m-2 block p-2 font-medium text-foreground hover:text-primary"
              >
                Sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawn;
