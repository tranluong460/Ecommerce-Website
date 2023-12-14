"use client";

import { useState } from "react";
import Container from "../Container";
import Logo from "../Logo";
import Navigation from "./Navigation";
import NavDrawn from "./NavDrawn";
import UserMenu from "./UserMenu";
import CartDrawn from "./CartDrawn";
import ChangeTheme from "./ChangeTheme";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="relative bg-background">
      <NavDrawn showNav={showNav} setShowNav={() => setShowNav(!showNav)} />

      <div className="border-b dark:border-secondary">
        <Container>
          <div className="flex h-16 items-center">
            <button
              onClick={() => setShowNav(!showNav)}
              className="relative rounded-md bg-background p-2 text-muted-foreground hover:text-primary lg:hidden"
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
              <Navigation />
            </div>

            <div className="ml-auto flex items-center">
              <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <UserMenu />
              </div>

              <div className="ml-4 flow-root lg:ml-6">
                <CartDrawn />
              </div>

              <div className="hidden lg:ml-6 lg:flex">
                <ChangeTheme />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
