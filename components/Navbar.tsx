"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink-950/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display leading-tight text-white">
          <span className="block text-[13px] uppercase tracking-[0.25em]">{site.brand.line1}</span>
          <span className="block text-[13px] uppercase tracking-[0.25em]">{site.brand.line2}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-white/80 transition hover:text-gold-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/books"
            className="rounded-sm bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink-950 transition hover:bg-gold-400"
          >
            {site.cta}
          </Link>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/98 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.15em] text-white/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/books"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-sm bg-gold-500 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-ink-950"
            >
              {site.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
