"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-xs uppercase tracking-[0.35em] text-gold-400"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-4 font-display text-4xl font-medium leading-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-6 text-base leading-8 text-white/70"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
