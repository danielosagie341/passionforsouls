import type { Metadata } from "next";
import { Playfair_Display, Manrope, Parisienne } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PASSION FOR SOULS — A Book by Evang. Chris Ihensckhiem",
  description:
    "PASSION FOR SOULS is the official book launch site for Evang. Chris Ihensckhiem. Visit passionforsouls.com for launch details and order information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="bg-ink-950 font-body text-white antialiased">{children}</body>
    </html>
  );
}
