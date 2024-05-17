import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/feature/theme/theme-provider";
import Header from "@/widgets/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crystal",
  description: "Best online note taker",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>
) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class" 
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >   
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
