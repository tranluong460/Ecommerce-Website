import type { Metadata } from "next";

import Header from "@/app/_components/Header";
import Aside from "../_components/Footer/Aside";
import Footer from "../_components/Footer";

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
