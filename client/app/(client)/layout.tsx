import type { Metadata } from "next";

import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "SEINE",
  description: "SEINE",
  icons: "/user.jpg",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="bg-background min-h-screen">{children}</main>
    </>
  );
}
