"use client";

import { useState } from "react";
import Image from "next/image";
import { Book } from "@/lib/books";
import PurchaseModal from "./PurchaseModal";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-[0_45px_90px_rgba(0,0,0,0.35)] transition hover:border-gold-400/30">
        <div className="relative h-96 md:h-[600px] w-full overflow-hidden bg-ink-950">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-contain transition group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>

        <div className="p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-400">{book.author}</p>
          <h3 className="mt-1 font-display text-xl text-white">{book.title}</h3>
          <p className="mt-2 text-xs text-white/60">{book.description}</p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 w-full rounded-sm bg-gold-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink-950 transition hover:bg-gold-400"
          >
            Purchase
          </button>
        </div>
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookTitle={book.title}
      />
    </>
  );
}
