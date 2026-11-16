import type { Metadata } from "next";
import ScrollMotion from "@/components/ScrollMotion";
import "./globals.css";
import "./services/services.css";

export const metadata: Metadata = {
  title: {
    default: "SYVONIX Technologies | Intelligence Meets Innovation",
    template: "%s | SYVONIX Technologies",
  },
  description: "SYVONIX Technologies builds thoughtful software, AI-powered solutions and intelligent digital experiences for ambitious businesses.",
  openGraph: {
    title: "SYVONIX Technologies",
    description: "Intelligence Meets Innovation.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollMotion>{children}</ScrollMotion></body></html>;
}
