import type { Metadata } from "next";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Spacing from "@/components/Spacing";
import Section from "@/components/Section";
import AnimeComponent from "@/components/AnimeComponent";

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
    <html lang="en">
      <body
        className={cn(
          jetBrainsMono.variable,
          "font-sans h-full bg-background flex flex-col"
        )}
      >
        <Header />
        <Spacing size="md" />
        <Section className="flex-1 max-md:px-8 max-lg:px-8">
          <AnimeComponent>{children}</AnimeComponent>
        </Section>
      </body>
    </html>
  );
}
