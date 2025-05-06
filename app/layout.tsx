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
  description: "Student seeking an apprenticeship as a full-stack developer",
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
        <div className="px-4 md:px-8">{children}</div>
      </body>
    </html>
  );
}
