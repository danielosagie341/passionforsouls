import Author from "@/components/Author";
import ImageGrid from "@/components/ImageGrid";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const authorImages = [
  {
    src: "/images/SP3.jpeg",
    alt: "Author notes on a table",
    caption: "A voice shaped by quiet practice and honest reflection.",
  },
  {
    src: "/images/SP4.jpeg",
    alt: "Person writing with coffee nearby",
    caption: "A book born from lived experience and disciplined work.",
  },
];

export default function AuthorPage() {
  return (
    <main className="bg-ink-950 text-white">
      <Navbar />
      <PageHeader
        eyebrow="Author"
        title="Meet Evang. Chris Ihensckhiem"
        description="The author of passion for souls writes from the place where courage meets everyday routine. Discover the story behind the story."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-ink-900/90 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-400">The story</p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">A life turned into a roadmap for others.</h2>
            <p className="text-white/70 leading-8">
              Daniel combines memoir, practical habits, and frank guidance to help readers move past hesitation and toward sustained progress. His work is personal, grounded, and built for people who want both insight and action.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-ink-950/80 p-5 text-white/70">
                <p className="text-sm uppercase tracking-[0.3em] text-gold-400">Background</p>
                <p className="mt-3 text-sm leading-7">
                  A decade of journals, conversations, and offline practice shaped the voice that appears in this book.
                </p>
              </div>
              <div className="rounded-2xl bg-ink-950/80 p-5 text-white/70">
                <p className="text-sm uppercase tracking-[0.3em] text-gold-400">Approach</p>
                <p className="mt-3 text-sm leading-7">
                  Honest storytelling paired with practical questions helps readers find the next right move, not just the next inspirational quote.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-ink-900/90 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
            <Author />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Visuals</p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">Scenes from the writing process</h2>
          <div className="mt-10">
            <ImageGrid items={authorImages} />
          </div>
        </div>
      </section>
    </main>
  );
}
