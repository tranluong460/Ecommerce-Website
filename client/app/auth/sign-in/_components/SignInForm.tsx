"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const SignInForm = () => {
  const { theme } = useTheme();

  return (
    <div className="sip-div-1">
      <SignIn appearance={{ baseTheme: theme === "dark" ? dark : undefined }} />
    </div>
  );
};

export default SignInForm;
