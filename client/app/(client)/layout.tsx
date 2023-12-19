import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

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
      <Toaster />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
