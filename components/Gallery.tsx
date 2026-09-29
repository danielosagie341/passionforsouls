"use client";

import { motion } from "framer-motion";
import PortraitSilhouette, { type Pose } from "./PortraitSilhouette";

const items: { pose: Pose; label: string }[] = [
  { pose: "forward", label: "Looking Forward" },
  { pose: "writing", label: "Writing / Creating" },
  { pose: "thinking", label: "Thinking / Reflecting" },
  { pose: "reading", label: "Reading / Inspiring" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink-900 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Gallery</p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Behind the Chapters</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.pose}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-gradient-to-b from-ink-800 to-black"
            >
              <PortraitSilhouette
                pose={item.pose}
                className="absolute bottom-0 left-1/2 h-[95%] w-auto -translate-x-1/2 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-gold-300">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
