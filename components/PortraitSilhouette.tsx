"use client";

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
    <img
      src={imageMap[pose]}
      alt={pose}
      className={className}
    />
  );
}
