import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEINE",
  description: "SEINE",
  icons: "/logo.png",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background flex justify-center">
      {children}
    </main>
  );
}
