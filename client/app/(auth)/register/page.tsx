import Link from "next/link";

import Logo from "@/components/Logo";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-secondary dark:bg-primaryForeground flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-3 sm:rounded-lg flex justify-center flex-1 bg-background border dark:border-secondary">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:px-12">
          <Logo />

          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-foreground">Đăng ký</h1>

            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-background border dark:border-secondary placeholder-mutedForeground text-sm focus:outline-none focus:border-primary focus:bg-background text-accentForeground"
                  type="email"
                  placeholder="Tên"
                />

                <input
                  className="mt-2 w-full px-8 py-3 rounded-lg font-medium bg-background border dark:border-secondary placeholder-mutedForeground text-sm focus:outline-none focus:border-primary focus:bg-background text-accentForeground"
                  type="email"
                  placeholder="Email"
                />

                <input
                  className="mt-2 w-full px-8 py-3 rounded-lg font-medium bg-background border dark:border-secondary placeholder-mutedForeground text-sm focus:outline-none focus:border-primary focus:bg-background text-accentForeground"
                  type="password"
                  placeholder="Mật khẩu"
                />

                <input
                  className="mt-2 w-full px-8 py-3 rounded-lg font-medium bg-background border dark:border-secondary placeholder-mutedForeground text-sm focus:outline-none focus:border-primary focus:bg-background text-accentForeground"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                />

                <button className="mt-5 tracking-wide font-semibold bg-primary text-primaryForeground w-full py-3 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-">Đăng ký</span>
                </button>

                <div className="flex gap-1 text-xs justify-end mt-3">
                  <span className="text-mutedForeground">
                    Bạn đã có tài khoản?
                  </span>
                  <Link href="/login" className="text-primary hover:underline">
                    Đăng nhập
                  </Link>
                </div>

                <div className="my-5 border-b dark:border-secondary text-center">
                  <div className="leading-none px-2 inline-block text-sm text-mutedForeground tracking-wide font-medium bg-popover transform translate-y-1/2">
                    Hoặc đăng nhập bằng
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-semibold rounded-lg py-2 bg-background dark:bg-secondary border dark:border-secondary text-foreground dark:text-mutedForeground flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:opacity-70 dark:hover:opacity-90">
                    <div className="p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Đăng nhập bằng Google</span>
                  </button>
                </div>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  Tôi đồng ý tuân theo&nbsp;
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Điều khoản dịch vụ&nbsp;
                  </Link>
                  và
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    &nbsp;Chính sách quyền riêng tư
                  </Link>
                  &nbsp;của SEINE
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/background.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
