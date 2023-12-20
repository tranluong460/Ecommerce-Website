import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";
import "@/styles/globals.css";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
