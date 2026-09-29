# PASSION FOR SOULS — Book Launch Website

A dark, cinematic, editorial-style launch site built for **PASSION FOR SOULS** with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**.

The centerpiece is the hero section: three layers of the author, each on its own
independent, absolutely-positioned layer, rotating through the center-forward
position every 5 seconds — while the background behind them stays completely still.

---

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) or visit the site as passionforsouls.com once deployed.

Requires Node.js 18.18+.

---

## Project structure

```
app/
  layout.tsx        Root layout — fonts, metadata
  page.tsx           Composes every section in order
  globals.css        Tailwind + a couple of global tweaks
components/
  Navbar.tsx
  Hero.tsx           Static background + <HeroCarousel /> + hero copy
  HeroCarousel.tsx   ⭐ the rotating figures — see below
  PortraitSilhouette.tsx   Placeholder figure art (swap for real photos)
  AboutBook.tsx
  Author.tsx
  Event.tsx
  Gallery.tsx
  Contact.tsx
  Footer.tsx
lib/
  content.ts         All site copy in one place — edit this first
public/images/       Where your real photos go, once you have them
```

---

## How the rotating hero carousel works

Open `components/HeroCarousel.tsx`. The short version:

- There are three **slots**: `left`, `center`, `right`, each with its own
  position, scale, opacity, blur and brightness (`SLOT_STYLE`). `center` is
  full-size, full-brightness, and on top; `left`/`right` are smaller, dimmer,
  and pushed behind.
- There are three **figures** (`FIGURES`), each independently rendered as its
  own `motion.div`, absolutely positioned on top of one another.
- Every `ROTATE_MS` (5000ms), a `setInterval` rotates which figure occupies
  which slot: whoever is at `left` steps forward into `center`, whoever is at
  `center` recedes to `right`, and whoever is at `right` swings back around to
  `left`. Because Framer Motion's `animate` prop is bound to the slot's style,
  it smoothly interpolates every time the slot assignment changes — that's the
  whole animation, no keyframe timeline needed.
- It respects `prefers-reduced-motion` (the interval simply never starts), and
  pauses on hover so it doesn't fight with someone reading the hero text.

To change the pacing, edit the two constants at the top of the file:

```ts
const ROTATE_MS = 5000;        // how often the figures rotate
const TRANSITION = { duration: 1.1, ease: [0.45, 0, 0.2, 1] };
```

The background — the bookshelf/window line art, the gradient, the grain
texture — lives entirely in `Hero.tsx`, as a sibling layer *above* which
`HeroCarousel` is rendered. It has no shared state with the carousel, so it's
structurally impossible for it to move when the figures rotate.

---

## Using real photos instead of the placeholder art

Right now each "figure" is `components/PortraitSilhouette.tsx` — an abstract
gold silhouette drawn in SVG, used purely as a stand-in so the site works out
of the box. This isn't a limitation of the approach, just of what I can
produce directly (no image-generation tool is available to me in this
environment, so I couldn't generate photoreal cutouts of your author myself).

To use real photography, exactly like the moodboard you shared:

1. **Shoot (or select) 3 photos of the same person in the same setting**, at
   the same distance from camera, with consistent lighting — one facing
   forward, one angled left, one angled right (or whatever three poses you
   want).
2. **Remove the background from each one**, so you're left with a transparent
   PNG cutout of just the person. [remove.bg](https://www.remove.bg) or
   Photoshop's "Select Subject" both work well. Keep the crop height
   consistent across all three.
3. **Drop the three PNGs into `public/images/`** — e.g. `pose-forward.png`,
   `pose-writing.png`, `pose-reading.png`.
4. **In `HeroCarousel.tsx`**, replace the `<PortraitSilhouette ... />` line
   inside the `.map()` with a Next.js `<Image />`:

   ```tsx
   import Image from "next/image";

   // ...

   <Image
     src={figure.src}
     alt={figure.label}
     width={520}
     height={720}
     priority
     className="h-[86%] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] md:h-[92%]"
   />
   ```

   and update the `FIGURES` array to hold a `src` path instead of a `pose`:

   ```ts
   const FIGURES = [
     { src: "/images/pose-writing.png", label: "Writing / Creating" },
     { src: "/images/pose-forward.png", label: "Looking Forward" },
     { src: "/images/pose-reading.png", label: "Reading / Inspiring" },
   ];
   ```

Everything else — the slot rotation, the timing, the pausing on hover — keeps
working exactly as it does now, because none of that logic cares what's
actually being rendered inside each slot.

You can do the same swap in `Author.tsx` and `Gallery.tsx`, which also use
`PortraitSilhouette` as a placeholder.

If you'd rather use a real photographed background (instead of the drawn
bookshelf/window line art), add it inside the "Static background layer" `div`
in `Hero.tsx`:

```tsx
<Image src="/images/background.jpg" alt="" fill className="object-cover object-top opacity-40" />
```

---

## Editing content

Everything in the copy — nav labels, book title, author name, synopsis,
event date/venue, contact details — lives in `lib/content.ts`. Edit that one
file to re-skin the whole site for a different book.

## Customizing the look

- **Colors** — `tailwind.config.ts`, under `theme.extend.colors` (`ink` for
  the dark backgrounds, `gold` for the accent).
- **Fonts** — `app/layout.tsx`. Currently Playfair Display (headings),
  Manrope (body/nav), and Parisienne (the author signature-style name). Swap
  any of these for other Google Fonts by changing the import and the font
  object.

## Deploying

The fastest path is [Vercel](https://vercel.com) — push this to a GitHub repo
and import it, or run `npx vercel` from this folder. No environment variables
are required for the current placeholder build.
