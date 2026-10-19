import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Ramadhoni Gibran Maulana - Software Engineer",
  description:
    "Portofolio Ramadhoni Gibran Maulana — Software Engineer dengan fokus frontend. Kenali karya, keahlian, dan perjalanan saya.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
