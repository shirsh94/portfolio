import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { getYearsOfExperience } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const years = getYearsOfExperience();

export const metadata: Metadata = {
  title: "Shirsh Shukla | Senior Flutter Engineer",
  description: `Senior Flutter Engineer with ${years}+ years of experience building scalable mobile applications.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground selection:bg-[#e2e0dd] dark:selection:bg-foreground dark:selection:text-background font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
