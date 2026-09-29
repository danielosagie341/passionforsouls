"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import PortraitSilhouette from "./PortraitSilhouette";
import { site } from "@/lib/content";

export default function Author() {
  return (
    <section id="author" className="relative overflow-hidden bg-ink-900 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">The Author</p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">{site.author.name}</h2>
          <div className="mt-6 space-y-4 text-white/70">
            {site.author.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex gap-4 border-l-2 border-gold-500 pl-5">
            <Quote className="mt-1 shrink-0 text-gold-400" size={20} />
            <p className="font-display text-lg italic text-white/80">{site.author.quote}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="order-1 mx-auto flex aspect-[3/4] w-full max-w-sm items-end justify-center rounded-sm bg-gradient-to-b from-ink-800 to-black lg:order-2"
        >
          <PortraitSilhouette pose="forward" className="h-[92%] w-auto" />
        </motion.div>
      </div>
    </section>
  );
}
