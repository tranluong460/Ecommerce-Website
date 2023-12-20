"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const RegisterPage = () => {
  const { theme } = useTheme();

  return (
    <section className="sup-section">
      <div className="sup-div-1">
        <SignUp
          appearance={{ baseTheme: theme === "dark" ? dark : undefined }}
        />
      </div>

      <div className="sup-div-2">
        <div
          className="sup-div-3"
          style={{
            backgroundImage: "url('/background.svg')",
          }}
        />
      </div>
    </section>
  );
};

export default RegisterPage;
