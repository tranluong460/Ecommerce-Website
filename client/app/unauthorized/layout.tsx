import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truy cập bị từ chối",
  description: "Xin lỗi, bạn không có quyền truy cập vào trang này.",
  icons: "/logo.png",
};

export const UnauthorizedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <main className="min-h-screen">{children}</main>;
};
