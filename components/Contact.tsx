"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { site } from "@/lib/content";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // NOTE: placeholder only — wire this up to a real endpoint
    // (an API route, Formspree, Resend, etc.) before going live.
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="bg-ink-950 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Contact</p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Get in Touch</h2>
          <p className="mt-6 text-white/70">
            Questions about the launch, press, or bulk orders? Reach out and the team will get
            back to you shortly.
          </p>
          <div className="mt-8 space-y-4 text-white/70">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-gold-400" /> {site.contact.email}
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gold-400" /> {site.contact.phone}
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gold-400" /> {site.event.venue}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-sm border border-white/10 bg-ink-900 p-8"
        >
          <input
            required
            placeholder="Your name"
            className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-white/40 outline-none focus:border-gold-400"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-white/40 outline-none focus:border-gold-400"
          />
          <textarea
            required
            rows={4}
            placeholder="Your message"
            className="w-full border-b border-white/20 bg-transparent py-3 text-white placeholder-white/40 outline-none focus:border-gold-400"
          />
          <button
            type="submit"
            disabled={status !== "idle"}
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink-950 transition hover:bg-gold-400 disabled:opacity-60"
          >
            {status === "idle" && (
              <>
                Send Message <Send size={16} />
              </>
            )}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message Sent ✓"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
