import { Metadata } from "next";
import "@/styles/client/unauthorized.css";

export const metadata: Metadata = {
  title: "Truy cập bị từ chối",
  description: "Xin lỗi, bạn không có quyền truy cập vào trang này.",
  icons: "/logo.png",
};

const UnauthorizedLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="udl-main">{children}</main>;
};

export default UnauthorizedLayout;
