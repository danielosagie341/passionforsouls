import Contact from "@/components/Contact";
import ImageGrid from "@/components/ImageGrid";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const contactImages = [
  {
    src: "/images/SP7.jpeg",
    alt: "Quiet workspace with notebook",
    caption: "Reach out for launch details and partnership inquiries.",
  },
  {
    src: "/images/SP6.jpeg",
    alt: "Table with books and notes",
    caption: "A project built around thoughtful stories and real experiences.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-ink-950 text-white">
      <Navbar />
      <PageHeader
        eyebrow="Contact"
        title="Talk to the team"
        description="Have a question about the launch, bulk orders, or events? Send a message and we’ll connect you with the right person."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-ink-900/90 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
            <Contact />
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-ink-900/90 p-8 shadow-[0_35px_70px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-400">Need help?</p>
              <p className="mt-4 text-white/70 leading-8">
                We&apos;re happy to answer questions about purchasing, event access, media requests, and author appearances. Use the form or reach out directly through the listed email and phone.
              </p>
            </div>
            <ImageGrid items={contactImages} />
          </div>
        </div>
      </section>
    </main>
  );
}
