import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const previews = [
  {
    href: "/books",
    title: "Books",
    description: "Discover the edition, workbook features, and how every chapter turns insight into action.",
    image: "/images/SP5.jpeg",
  },
  {
    href: "/author",
    title: "Author",
    description: "Learn more about Evang. Chris Ihensckhiem’s journey and the ideas that shaped this book.",
    image: "/images/SP3.jpeg",
  },
  {
    href: "/reviews",
    title: "Reviews",
    description: "See what early readers are saying about the impact of passion for souls.",
    image: "/images/SP8.jpeg",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Ask about launch details, media, partnerships, or bulk orders.",
    image: "/images/SP7.jpeg",
  },
];

export default function Home() {
  return (
    <main className="bg-ink-950 text-white">
      <Navbar />
      <Hero />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">Welcome</p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            A lighter space for the same bold story.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70">
            passion for souls is expanding beyond a single page. Explore the full book, the author behind it, reader reactions, and how to connect with the launch.
          </p>
        </div>
      </section>

      <section id="event" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-3xl border border-white/10 bg-ink-900/90 p-10 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Launch preview</p>
              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">A milestone night in Lagos</h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                The launch event brings community, conversation, and the first opportunity to experience the book together. It’s the home for the author’s voice, live questions, and the first signed copies.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-950 transition hover:bg-gold-400"
              >
                Request event details
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/90 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/SP2.jpeg" alt="Launch event preview" fill className="object-cover object-top object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-white/10 bg-ink-900/90 p-10 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Expanded site</p>
              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Explore every page.</h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                Use the navigation to move between the full book experience, the author profile, curated reviews, and direct contact options.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {previews.map((preview) => (
                  <Link
                    key={preview.href}
                    href={preview.href}
                    className="rounded-3xl border border-white/10 bg-ink-950/80 p-6 text-left transition hover:border-gold-400"
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-gold-400">{preview.title}</p>
                    <p className="mt-3 text-sm leading-7 text-white/70">{preview.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/90 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image src="/images/SP4.jpeg" alt="Reading inspiration" fill className="object-cover object-top" />
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/90 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image src="/images/SP1.jpeg" alt="Book and notes" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
