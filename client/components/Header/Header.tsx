"use client";

import { useState } from "react";
import Link from "next/link";

import { IoCartOutline } from "react-icons/io5";
import { BsChevronCompactUp } from "react-icons/bs";

import Container from "../Container";
import Logo from "../Logo";
import UserMenu from "./UserMenu";
import ChangeTheme from "./ChangeTheme";
import CartDrawn from "./CartDrawn";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCartDrawn, setShowCartDrawn] = useState(false);

  const nav__links = [
    { url: "products", label: "Sản phẩm" },
    { url: "#", label: "Bộ sưu tập" },
    { url: "#", label: "Khuyến mãi" },
  ];

  return (
    <header className="border-b bg-background dark:border-secondary">
      <CartDrawn
        showCartDrawn={showCartDrawn}
        setShowCartDrawn={() => setShowCartDrawn(!showCartDrawn)}
      />

      <Container>
        <div className="flex items-center justify-between py-4 relative">
          <div className="flex items-center md:space-x-10 lg:space-x-20">
            <Logo />

            <div className="max-md:hidden">
              <ul className="flex items-center space-x-7 lg:space-x-10 mx-6">
                {nav__links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`/${link.url}`}
                      className="text-sm font-medium transition-colors hover:text-primary text-mutedForeground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[100px] lg:w-[300px] text-mutedForeground"
              placeholder="Tìm kiếm ..."
              type="search"
            />

            <ChangeTheme />

            <UserMenu />

            <button
              onClick={() => setShowCartDrawn(!showCartDrawn)}
              className="p-2 bg-secondary rounded-full text-mutedForeground hover:text-primary"
            >
              <IoCartOutline size={20} />
            </button>

            <span
              onClick={() => setShowNav(!showNav)}
              className="p-[9px] bg-gray-100 rounded-full md:hidden"
            >
              <BsChevronCompactUp
                className={`transition ease-in duration-150 ${
                  showNav ? "rotate-180" : "0"
                }`}
              />
            </span>
          </div>
        </div>

        <div
          className={`md:hidden ${
            showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
          }`}
        >
          <ul className="flex flex-col opacity-75 px-2">
            {nav__links.map((link, index) => (
              <li key={index}>
                <Link
                  href={`/${link.url}`}
                  className="text-sm font-medium transition-colors hover:text-primary text-mutedForeground w-full py-3 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[100px] lg:w-[300px] text-mutedForeground"
            placeholder="Tìm kiếm ..."
            type="search"
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
