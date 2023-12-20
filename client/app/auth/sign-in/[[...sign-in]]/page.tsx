"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const LoginPage = () => {
  const { theme } = useTheme();

  return (
    <section className="sip-section">
      <div className="sip-div-1">
        <SignIn
          appearance={{ baseTheme: theme === "dark" ? dark : undefined }}
        />
      </div>

      <div className="sip-div-2">
        <div
          className="sip-div-3"
          style={{
            backgroundImage: "url('/background.svg')",
          }}
        />
      </div>
    </section>
  );
};

export default LoginPage;
