import { PropsWithChildren } from "react";

import { fontsMplus } from "@/lib/fonts";
import { ActiveSectionProvider } from "@/components/helpers/ActiveSectionProvider";
import { ThemeProvider } from "@/components/helpers/ThemeProvider";
import ThemeToggle from "@/components/common/ThemeToggle";
import Header from "@/layout/Header";
import "../styles/globals.css";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="en"
      className={`${fontsMplus.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <ActiveSectionProvider>
            <Header />
            <div className="pt-[76px]">{children}</div>
            <ThemeToggle />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
