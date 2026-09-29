"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { site } from "@/lib/content";

export default function AboutBook() {
  return (
    <section id="about" className="bg-ink-950 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto aspect-[3/4] w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-sm border border-gold-500/30" />
          <div className="absolute -inset-4 -z-10 rounded-sm bg-gold-500/10 blur-2xl" />
          <div className="flex h-full w-full items-center justify-center rounded-sm bg-ink-900">
            <BookOpen className="text-gold-400/60" size={72} strokeWidth={1} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">About the Book</p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">{site.book.title}</h2>
          <div className="mt-6 space-y-4 text-white/70">
            {site.book.synopsis.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-white/60">
            {site.book.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
