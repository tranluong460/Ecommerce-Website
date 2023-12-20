import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";
import "@/styles/globals.css";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Cửa hàng thời trang SEINE",
  referrer: "origin-when-cross-origin",
  keywords: [
    "SEINE",
    "Shop SEINE",
    "Shop thời trang",
    "Cửa hàng thời trang SEINE",
  ],
  authors: { name: "Trần Văn Lương", url: "https://github.com/tranluong460" },
  creator: "Trần Văn Lương",
  publisher: "Trần Văn Lương",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider localization={viVN}>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
