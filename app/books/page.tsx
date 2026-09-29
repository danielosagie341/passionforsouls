import BookCard from "@/components/BookCard";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { books } from "@/lib/books";

export default function BooksPage() {
  return (
    <main className="bg-ink-950 text-white">
      <Navbar />
      <PageHeader
        eyebrow="Books"
        title="Our Books"
        description="Explore our collection of inspiring books designed to deepen your faith and guide your spiritual journey."
      />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-3xl gap-12 lg:grid-cols-1 md:grid-cols-2">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}
