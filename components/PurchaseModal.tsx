"use client";

import { X, Phone, MessageCircle } from "lucide-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle: string;
}

const PHONE_NUMBER = "+2349025440148";

export default function PurchaseModal({ isOpen, onClose, bookTitle }: PurchaseModalProps) {
  if (!isOpen) return null;

  const handlePhoneCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi, I'm interested in purchasing "${bookTitle}"`);
    window.open(`https://wa.me/${PHONE_NUMBER.replace(/\+/g, "")}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-ink-900 p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="font-display text-2xl text-white">Purchase {bookTitle}</h3>
        <p className="mt-2 text-sm text-white/60">
          Choose how you&apos;d like to contact us to complete your purchase.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            onClick={handlePhoneCall}
            className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:border-gold-400/50"
          >
            <Phone className="h-8 w-8 text-gold-400" />
            <span className="text-sm font-medium text-white">Call Us</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:border-green-400/50"
          >
            <MessageCircle className="h-8 w-8 text-green-400" />
            <span className="text-sm font-medium text-white">WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
