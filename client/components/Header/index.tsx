import Logo from "@/components/Logo";
import Container from "@/components/Container";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import UserMenu from "./UserMenu";
import CartDrawn from "./CartDrawn";
import ChangeTheme from "./ChangeTheme";
import "@/styles/other/header.css";

const Header = () => {
  return (
    <header className="relative bg-background">
      <div className="border-b dark:border-secondary">
        <Container>
          <div className="flex h-16 items-center">
            <NavigationMobile />

            <div className="ml-4 flex lg:ml-0 z-10">
              <Logo />
            </div>

            <div className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
              <Navigation />
            </div>

            <div className="ml-auto flex items-center z-10">
              <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 cursor-pointer">
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
