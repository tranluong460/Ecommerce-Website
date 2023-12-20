import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEINE",
  description: "SEINE",
  icons: "/logo.png",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-screen flex justify-center">{children}</main>;
};

export default AuthLayout;
