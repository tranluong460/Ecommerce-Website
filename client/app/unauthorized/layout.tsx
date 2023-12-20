import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unauthorized",
  description: "Unauthorized",
  icons: "/logo.png",
};

export default function UnauthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen">{children}</main>;
}
