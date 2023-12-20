import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "@/styles/client/base.css";

export const metadata: Metadata = {
  title: "SEINE",
  description: "SEINE",
  icons: "/logo.png",
};

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <Header />
      <main className="cl-main">{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
