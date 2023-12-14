import Container from "../Container";
import Logo from "../Logo";
import Navigation from "./Navigation";
import NavigationDrawn from "./NavigationDrawn";
import UserMenu from "./UserMenu";
import CartDrawn from "./CartDrawn";
import ChangeTheme from "./ChangeTheme";

const Header = () => {
  return (
    <header className="relative bg-background">
      <div className="border-b dark:border-secondary">
        <Container>
          <div className="flex h-16 items-center">
            <NavigationDrawn />

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
