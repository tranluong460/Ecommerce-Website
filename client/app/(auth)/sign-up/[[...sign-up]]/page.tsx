"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const RegisterPage = () => {
  const { theme } = useTheme();

  return (
    <div className="max-w-screen-xl m-0 sm:m-3 sm:rounded-lg flex justify-center flex-1 bg-background border dark:border-secondary">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:px-12 flex items-center pt-5">
        <SignUp
          appearance={{ baseTheme: theme === "dark" ? dark : undefined }}
        />
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
  );
};

export default RegisterPage;
