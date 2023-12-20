"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const SignUpForm = () => {
  const { theme } = useTheme();

  return (
    <div className="sup-div-1">
      <SignUp appearance={{ baseTheme: theme === "dark" ? dark : undefined }} />
    </div>
  );
};

export default SignUpForm;
