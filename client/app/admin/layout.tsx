import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin SEINE",
  description: "Admin SEINE",
  icons: "/logo.png",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-screen">{children}</main>;
};

export default AdminLayout;
