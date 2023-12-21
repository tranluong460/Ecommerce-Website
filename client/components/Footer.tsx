import Link from "next/link";
import Logo from "./Logo";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { footer__links } from "@/data/links";

const Footer = () => {
  return (
    <>
      {/* Aside */}
      <aside className="py-10 sm:py-16 lg:py-20 border-t border-b dark:border-secondary">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl md:text-3xl font-bold tracking-tight md:font-extrabold lg:leading-none text-foreground md:text-center lg:mb-7">
            Đăng ký nhận thông tin của chúng tôi
          </h2>

          <p className="mb-4 text-base text-muted-foreground md:mb-6 md:text-center md:text-base lg:px-20 xl:px-56">
            Bạn có muốn nhận thông báo khi có sản phẩm mới không? Đăng ký nhận
            thông tin của chúng tôi và bạn sẽ là một trong những người đầu tiên.
          </p>

          <div className="mb-4">
            <div className="flex max-w-xl md:mx-auto">
              <div className="w-full">
                <label htmlFor="member_email" className="hidden">
                  Địa chỉ email
                </label>

                <div className="relative h-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-muted-foreground"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>

                  <input
                    id="member_email"
                    type="email"
                    name="email_address"
                    className="block w-full px-3 py-4 pl-11 text-base text-accent-foreground bg-background border dark:border-secondary rounded-l-xl focus:bg-background focus:outline-none"
                    placeholder="Nhập email của bạn"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  id="member_submit"
                  className="w-full px-4 py-4 text-base font-medium text-center text-background dark:text-accent-foreground bg-primary hover:bg-primary/90 border dark:border-secondary cursor-pointer rounded-r-xl focus:outline-none"
                  value="Đăng ký"
                />
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground md:text-center font-normal">
            Bằng cách đăng ký, bạn đồng ý với &nbsp;
            <Link
              className="border-b border-gray-500 border-dotted hover:text-primary hover:border-primary"
              href="#"
            >
              Điều khoản dịch vụ
            </Link>
            &nbsp;và
            <Link
              className="border-b border-gray-500 border-dotted hover:text-primary hover:border-primary"
              href="#"
            >
              &nbsp;Chính sách bảo mật
            </Link>
            &nbsp;của SEINE.
          </p>
        </div>
      </aside>
      {/* End Aside */}

      {/* Footer */}
      <footer className="justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10">
        <div className="px-4 mx-auto lg:px-4">
          <div className="grid gap-12 lg:grid-cols-6 lg:gap-16">
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
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
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
      {/* End Footer */}
    </>
  );
};

export default Footer;
