export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  price?: string;
}

export const books: Book[] = [
  {
    id: "can-god-still-forgive-me",
    title: "Can God Still Forgive Me",
    author: "Daniel",
    description: "A powerful exploration of redemption and grace.",
    image: "/assets/Can God Still Forgive Me.jpeg",
  },
  {
    id: "god-of-safety",
    title: "God Of Safety",
    author: "Daniel",
    description: "Finding peace and protection in faith.",
    image: "/assets/God Of Safety.jpeg",
  },
];
