import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEINE Auth",
  description: "SEINE Auth",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
