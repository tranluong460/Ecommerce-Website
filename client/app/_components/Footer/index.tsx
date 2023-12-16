import Link from "next/link";
import Logo from "../Logo";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { footer__links } from "@/data/links";

const Footer = () => {
  return (
    <footer className="bg-background justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10">
      <div className="px-4 mx-auto max-w-8xl lg:px-4">
        <div className="grid gap-12 lg:grid-cols-6 lg:gap-18">
          <div className="col-span-2">
            <span className="box-border inline-block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 relative max-w-full">
              <span className="box-border block w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 max-w-full" />
              <Logo />
            </span>

            <p className="text-muted-foreground">
              SEINE đang tạo ra những bộ trang phục sản xuất trong nước hoàn
              toàn có thể sánh ngang với các thương hiệu thời trang nam đến từ
              nước ngoài về kiểu dáng, chất lượng lẫn phong cách thời trang.
            </p>
          </div>

          {footer__links.map((link) => (
            <div key={link.name}>
              <h3 className="mb-6 text-sm font-semibold text-foreground uppercase">
                {link.name}
              </h3>

              <ul>
                {link.nav.map((item) => (
                  <li className="mb-4" key={item.name}>
                    <Link
                      href={item.url}
                      className="font-medium text-muted-foreground hover:text-primary hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border dark:border-secondary lg:my-12" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center">
            © 2023&nbsp;
            <Link href="/" className="hover:underline">
              SEINE™
            </Link>
            .&nbsp;All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="#"
              className="text-muted-foreground hover:text-primary ms-5"
            >
              <DiscordLogoIcon className="w-4 h-4" />
            </Link>

            <Link
              href="#"
              className="text-muted-foreground hover:text-primary ms-5"
            >
              <TwitterLogoIcon className="w-4 h-4" />
            </Link>

            <Link
              href="#"
              className="text-muted-foreground hover:text-primary ms-5"
            >
              <GitHubLogoIcon className="w-4 h-4" />
            </Link>

            <Link
              href="#"
              className="text-muted-foreground hover:text-primary ms-5"
            >
              <InstagramLogoIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
