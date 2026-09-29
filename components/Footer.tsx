import { Instagram, Twitter, Facebook } from "lucide-react";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-white/70">
          {site.brand.line1} {site.brand.line2}
        </p>
        <div className="flex gap-5 text-white/50">
          <a href="#" aria-label="Instagram" className="hover:text-gold-400">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gold-400">
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gold-400">
            <Facebook size={18} />
          </a>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {site.book.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
