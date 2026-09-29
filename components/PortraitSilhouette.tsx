"use client";

import Image from "next/image";

export type Pose = "forward" | "writing" | "reading" | "thinking";

interface Props {
  pose: Pose;
  className?: string;
}

/**
 * Portrait figure using real pose images.
 */
export default function PortraitSilhouette({ pose, className }: Props) {
  const imageMap: Record<Pose, string> = {
    writing: "/images/pose-writing.png",
    forward: "/images/pose-forward.png",
    reading: "/images/pose-reading.png",
    thinking: "/images/pose-forward.png", // fallback to forward if thinking is needed
  };

  return (
    <Image
      src={imageMap[pose]}
      alt={pose}
      width={300}
      height={400}
      className={className}
    />
  );
}
