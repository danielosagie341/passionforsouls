import Image from "next/image";

interface ImageGridItem {
  src: string;
  alt: string;
  caption: string;
}

interface ImageGridProps {
  items: ImageGridItem[];
}

export default function ImageGrid({ items }: ImageGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.src}
          className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-[0_30px_70px_rgba(0,0,0,0.25)]"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-top"
              priority={false}
            />
          </div>
          <div className="px-5 py-4 text-white/80">
            <p className="text-sm leading-6">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
