import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin SEINE",
  description: "Admin SEINE",
  icons: "/logo.png",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen">{children}</main>;
}
