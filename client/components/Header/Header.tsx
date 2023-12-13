"use client";

import { useState } from "react";
import Container from "../Container";
import Logo from "../Logo";
import Nav from "./Nav";
import NavDrawn from "./NavDrawn";
import UserMenu from "./UserMenu";
import CartDrawn from "./CartDrawn";
import ChangeTheme from "./ChangeTheme";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCartDrawn, setShowCartDrawn] = useState(false);

  return (
    <header className="relative bg-background">
      <NavDrawn showNav={showNav} setShowNav={() => setShowNav(!showNav)} />

      <CartDrawn
        showCartDrawn={showCartDrawn}
        setShowCartDrawn={() => setShowCartDrawn(!showCartDrawn)}
      />

      <Container>
        <div className="border-b dark:border-secondary">
          <div className="flex h-16 items-center">
            <button
              onClick={() => setShowNav(!showNav)}
              className="relative rounded-md bg-background p-2 text-mutedForeground hover:text-primary lg:hidden"
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <div className="ml-4 flex lg:ml-0">
              <span className="sr-only">SEINE</span>
              <Logo />
            </div>

            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <Nav />
            </div>

            <div className="ml-auto flex items-center">
              <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <UserMenu />
              </div>

              <div className="ml-4 flow-root lg:ml-6">
                <button
                  onClick={() => setShowCartDrawn(!showCartDrawn)}
                  className="group -m-2 flex items-center p-2"
                >
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-mutedForeground group-hover:text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="hidden lg:ml-6 lg:flex">
                <ChangeTheme />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
