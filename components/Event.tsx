"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { site } from "@/lib/content";

export default function Event() {
  return (
    <section id="event" className="bg-ink-950 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Launch Event</p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Join Us for the Launch
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 rounded-sm border border-white/10 bg-ink-900 p-8"
          >
            <div className="flex items-start gap-4">
              <CalendarDays className="mt-1 text-gold-400" size={22} />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Date</p>
                <p className="text-lg text-white">{site.event.launchDate}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-gold-400" size={22} />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Venue</p>
                <p className="text-lg text-white">{site.event.venue}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-gold-400" size={22} />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Time</p>
                <p className="text-lg text-white">{site.event.time}</p>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-block w-full rounded-sm bg-gold-500 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-ink-950 transition hover:bg-gold-400"
            >
              {site.event.tickets}
            </a>
          </motion.div>

          <motion.ol
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 border-l border-white/10 pl-8"
          >
            {site.event.schedule.map((item) => (
              <li key={item.time} className="relative">
                <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-gold-500" />
                <p className="text-sm uppercase tracking-[0.15em] text-gold-400">{item.time}</p>
                <p className="mt-1 text-white">{item.title}</p>
                <p className="text-sm text-white/60">{item.description}</p>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
