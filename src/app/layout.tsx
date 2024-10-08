import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { fontOswald, fontGrotesk, fontInter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer";
import SmoothScrolling from "./components/SmoothScrolling";

export const metadata: Metadata = {
  title: "WEZOM: Business Software Development Company",
  description: "Generated by create next app",
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
          fontGrotesk.variable,
          fontOswald.variable,
          fontInter.variable,
          "font-inter"
        )}
      >
        <SmoothScrolling>
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
