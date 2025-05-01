import type { Metadata } from "next";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Spacing from "@/components/Spacing";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Guy BADE . Software Engineer",
  description:
    "Etudiant à la recherche d'une alternance en tant que développeur full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full ">
      <body
        className={cn(jetBrainsMono.variable, "font-sans h-full bg-background")}
      >
        <Header />
        <Spacing size="sm" />
        {children}
      </body>
    </html>
  );
}
