import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const display = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
    <html lang="en">
      <body className={`${body.className} ${display.className} bg-ink-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
