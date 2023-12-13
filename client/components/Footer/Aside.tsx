import Link from "next/link";

const Aside = () => {
  return (
    <aside className="py-10 sm:py-16 bg-background lg:py-20 border-t border-b dark:border-secondary">
      <div className="px-4 mx-auto max-w-8xl">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold tracking-tight md:font-extrabold lg:leading-none text-foreground md:text-center lg:mb-7">
          Đăng ký nhận thông tin của chúng tôi
        </h2>

        <p className="mb-4 text-base text-mutedForeground md:mb-6 md:text-center md:text-md lg:px-20 xl:px-56">
          Bạn có muốn nhận thông báo khi có sản phẩm mới không? Đăng ký nhận
          thông tin của chúng tôi và bạn sẽ là một trong những người đầu tiên.
        </p>
        <div className="mb-4">
          <div className="flex max-w-xl md:mx-auto">
            <div className="w-full" data-style="clean">
              <label htmlFor="member_email" className="hidden">
                Địa chỉ email
              </label>

              <div className="relative h-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-mutedForeground"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                  </svg>
                </div>

                <input
                  type="email"
                  id="member_email"
                  name="email_address"
                  className="block w-full px-3 py-4 pl-11 text-base text-accentForeground bg-background border dark:border-secondary rounded-l-xl focus:bg-background focus:outline-none"
                  placeholder="Nhập email của bạn"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="submit"
                id="member_submit"
                className="w-full px-4 py-4 text-base font-medium text-center text-background dark:text-foreground bg-primary border dark:border-secondary cursor-pointer rounded-r-xl hover:bg-primary/80 focus:outline-none"
                value="Đăng ký"
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 md:text-center dark:text-gray-400 font-normal">
          Bằng cách đăng ký, bạn đồng ý với &nbsp;
          <Link className="text-primary hover:underline" href="#">
            Điều khoản dịch vụ
          </Link>
          &nbsp;và
          <Link className="text-primary hover:underline" href="#">
            &nbsp;Chính sách bảo mật
          </Link>
          &nbsp;của SEINE.
        </p>
      </div>
    </aside>
  );
};

export default Aside;
