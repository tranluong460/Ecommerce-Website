import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Aside from "@/components/Footer/Aside";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "SEINE",
  description: "SEINE",
  icons: "/logo.png",
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

      <Aside />
      <Footer />
    </>
  );
}
