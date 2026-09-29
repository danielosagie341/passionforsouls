import ImageGrid from "@/components/ImageGrid";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const reviews = [
  {
    quote:
      "This book felt like a personal conversation in the middle of my own biggest questions.",
    name: "Amina O.",
    role: "Community organizer",
  },
  {
    quote:
      "A beautiful blend of honesty, practical momentum, and encouragement for anyone starting again.",
    name: "Samuel I.",
    role: "Creative director",
  },
  {
    quote:
      "passion for souls made me see growth as a daily practice instead of a distant goal.",
    name: "Chinyere N.",
    role: "Mindset coach",
  },
];

const reviewImages = [
  {
    src: "/images/SP8.jpeg",
    alt: "Readers sharing a book",
    caption: "A page for community and reflection.",
  },
  {
    src: "/images/sp1.jpeg",
    alt: "Books stacked next to a journal",
    caption: "A book built for repeat reading.",
  },
  {
    src: "/images/SP2.jpeg",
    alt: "Notebook and quiet writing space",
    caption: "The space to make every chapter your own.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="bg-ink-950 text-white">
      <Navbar />
      <PageHeader
        eyebrow="Reviews"
        title="What readers are saying"
        description="Real reactions from people who have already begun the passion for souls journey. Each note is a reminder that change is possible."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-3xl border border-white/10 bg-ink-900/90 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
                <p className="text-xl leading-9 text-white/90">“{review.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-gold-400">{review.name}</p>
                <p className="text-white/60">{review.role}</p>
              </article>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-ink-900/90 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-400">Praise</p>
              <p className="mt-4 text-white/70 leading-8">
                Readers describe passion for souls as honest, practical, and deeply motivating. These pages are meant for people who want tools, not just inspiration.
              </p>
            </div>
            <ImageGrid items={reviewImages} />
          </div>
        </div>
      </section>
    </main>
  );
}
