import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/features/theme/theme_provider";
import Header from "@/widgets/ui/header";
import { dbClient } from "@/shared/lib/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crystal",
  description: "Best online note taker",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>
) {

  const bla = dbClient.note.findMany();


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
