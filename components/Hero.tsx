"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Ticket, Play } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] w-full flex-col overflow-hidden bg-ink-950 pt-24"
    >
      {/* Static background layer — this never animates or moves */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-950 to-black" />
        <div className="absolute inset-0 bg-radial-fade" />
        
        {/* Background image */}
        <Image
          src="/images/bg.png"
          alt=""
          fill
          className="absolute inset-0 object-cover object-top"
          priority
        />

        <div className="grain absolute inset-0" />
      </div>

      {/* Figures layer — this is the only thing that rotates, every 5s */}
      <div className="absolute inset-x-0 bottom-0 top-[6%] z-10">
        <HeroCarousel />
      </div>

      {/* Foreground text content */}
      <div className="relative z-20 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-end px-6 pb-10 text-center opacity-50">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-[11px] uppercase tracking-[0.35em] text-gold-400"
        >
          {site.book.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance font-display text-6xl font-medium leading-[0.95] text-white sm:text-7xl md:text-8xl"
        >
          {site.book.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-sm uppercase tracking-[0.25em] text-white/70"
        >
          The new book by{" "}
          <span className="font-script text-2xl normal-case tracking-normal text-gold-300">
            {site.book.author}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/books"
            className="rounded-sm bg-gold-500 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-ink-950 transition hover:bg-gold-400"
          >
            order Now
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] text-[11px] uppercase tracking-[0.3em] text-white/40 md:block">
        Scroll to discover
      </div>
    </section>
  );
}
