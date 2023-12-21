"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const SignInForm = () => {
  const { theme } = useTheme();

  return (
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:px-12 flex items-center pt-5">
      <SignIn appearance={{ baseTheme: theme === "dark" ? dark : undefined }} />
    </div>
  );
};

export default SignInForm;
