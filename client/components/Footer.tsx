import Link from "next/link";
import Logo from "./Logo";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { footer__links } from "@/data/links";
import "@/styles/other/footer.css";

const Footer = () => {
  return (
    <>
      {/* Aside */}
      <aside className="fr-ae-aside">
        <div className="fr-ae-div-1">
          <h2 className="fr-ae-h2">Đăng ký nhận thông tin của chúng tôi</h2>

          <p className="fr-ae-p-1">
            Bạn có muốn nhận thông báo khi có sản phẩm mới không? Đăng ký nhận
            thông tin của chúng tôi và bạn sẽ là một trong những người đầu tiên.
          </p>

          <div className="fr-ae-div-2">
            <div className="fr-ae-div-3">
              <div className="fr-ae-div-4">
                <label htmlFor="member_email" className="fr-ae-label">
                  Địa chỉ email
                </label>

                <div className="fr-ae-div-5">
                  <div className="fr-ae-div-6">
                    <svg
                      className="fr-ae-svg"
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
                    className="fr-ae-input-1"
                    placeholder="Nhập email của bạn"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  id="member_submit"
                  className="fr-ae-input-2"
                  value="Đăng ký"
                />
              </div>
            </div>
          </div>

          <p className="fr-ae-p-2">
            Bằng cách đăng ký, bạn đồng ý với &nbsp;
            <Link className="fr-ae-link" href="#">
              Điều khoản dịch vụ
            </Link>
            &nbsp;và
            <Link className="fr-ae-link" href="#">
              &nbsp;Chính sách bảo mật
            </Link>
            &nbsp;của SEINE.
          </p>
        </div>
      </aside>
      {/* End Aside */}

      {/* Footer */}
      <footer className="fr-fr-footer">
        <div className="fr-fr-div-1">
          <div className="fr-fr-div-2">
            <div className="fr-fr-div-3">
              <span className="fr-fr-span-1">
                <span className="fr-fr-span-2" />
                <Logo />
              </span>

              <p className="fr-fr-p">
                SEINE đang tạo ra những bộ trang phục sản xuất trong nước hoàn
                toàn có thể sánh ngang với các thương hiệu thời trang nam đến từ
                nước ngoài về kiểu dáng, chất lượng lẫn phong cách thời trang.
              </p>
            </div>

            {footer__links.map((link) => (
              <div key={link.name}>
                <h3 className="fr-fr-h3">{link.name}</h3>

                <ul>
                  {link.nav.map((item) => (
                    <li className="fr-fr-li" key={item.name}>
                      <Link href={item.url} className="fr-fr-link-1">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="fr-fr-hr" />

          <div className="fr-fr-div-4">
            <span className="fr-fr-span-3">
              © 2023&nbsp;
              <Link href="/" className="fr-fr-link-2">
                SEINE™
              </Link>
              .&nbsp;All Rights Reserved.
            </span>

            <div className="fr-fr-div-5">
              <Link href="#" className="fr-fr-link-3">
                <svg
                  className="fr-fr-svg"
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

              <Link href="#" className="fr-fr-link-3 fr-fr-link-4">
                <DiscordLogoIcon className="fr-fr-svg" />
              </Link>

              <Link href="#" className="fr-fr-link-3 fr-fr-link-4">
                <TwitterLogoIcon className="fr-fr-svg" />
              </Link>

              <Link href="#" className="fr-fr-link-3 fr-fr-link-4">
                <GitHubLogoIcon className="fr-fr-svg" />
              </Link>

              <Link href="#" className="fr-fr-link-3 fr-fr-link-4">
                <InstagramLogoIcon className="fr-fr-svg" />
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
