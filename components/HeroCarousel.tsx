"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PortraitSilhouette, { type Pose } from "./PortraitSilhouette";

/**
 * HeroCarousel
 * ------------
 * Three figures, three "slots" (left / center / right). Every ROTATE_MS,
 * whichever figure is in `left` steps forward into `center`, the one in
 * `center` recedes to `right`, and the one in `right` swings back around
 * to `left` to queue up again. Because it's a continuous rotation rather
 * than a simple left-right slide, every figure gets its turn front and
 * center, forever, without ever "resetting."
 *
 * The three figures are rendered as separate absolutely-positioned layers
 * stacked on top of one another. Nothing here touches the background —
 * that lives as a sibling layer in <Hero />, so it never moves.
 */

type SlotName = "left" | "center" | "right";
const SLOT_ORDER: SlotName[] = ["left", "center", "right"];

const SLOT_STYLE: Record<
  SlotName,
  { x: string; y: string; scale: number; opacity: number; zIndex: number; filter: string }
> = {
  left: {
    x: "-34%",
    y: "2%",
    scale: 0.44,
    opacity: 0.5,
    zIndex: 10,
    filter: "brightness(0.55) saturate(0.75) blur(1px)",
  },
  center: {
    x: "0%",
    y: "0%",
    scale: 0.70,
    opacity: 1,
    zIndex: 30,
    filter: "brightness(1.05) saturate(1) blur(0px)",
  },
  right: {
    x: "34%",
    y: "3%",
    scale: 0.48,
    opacity: 0.55,
    zIndex: 20,
    filter: "brightness(0.6) saturate(0.8) blur(1px)",
  },
};

// How often the figures rotate, and how long each transition takes.
const ROTATE_MS = 5000;
const TRANSITION = { duration: 1.1, ease: [0.45, 0, 0.2, 1] as const };

interface Figure {
  pose: Pose;
  label: string;
}

// Swap these three for your real cutouts — see README "Using real photos".
const FIGURES: Figure[] = [
  { pose: "writing", label: "Writing / Creating" },
  { pose: "forward", label: "Looking Forward" },
  { pose: "reading", label: "Reading / Inspiring" },
];

export default function HeroCarousel() {
  // order[slotIndex] = which FIGURES index currently sits in that slot
  const [order, setOrder] = useState<number[]>([0, 1, 2]);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current || paused) return;
    const id = setInterval(() => {
      setOrder((prev) => [prev[2], prev[0], prev[1]]);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {FIGURES.map((figure, i) => {
        const slotIndex = order.indexOf(i);
        const slotName = SLOT_ORDER[slotIndex];
        const style = SLOT_STYLE[slotName];

        return (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-end justify-center will-change-transform"
            style={{ zIndex: style.zIndex }}
            animate={{
              x: style.x,
              y: style.y,
              scale: style.scale,
              opacity: style.opacity,
              filter: style.filter,
            }}
            transition={TRANSITION}
          >
            <PortraitSilhouette
              pose={figure.pose}
              className="h-[86%] w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] md:h-[92%]"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
