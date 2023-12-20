import type { Metadata } from "next";
import "@/styles/client/auth.css";

export const metadata: Metadata = {
  title: "SEINE",
  description: "SEINE",
  icons: "/logo.png",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="al-main">{children}</main>;
};

export default AuthLayout;
