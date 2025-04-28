interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  quote: string;
  highlightedQuote?: string[];
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Jane Doe",
    role: "Speech-Language Pathologist",
    organization: "University Medical Center",
    quote:
      "SpeechCatcher has transformed how I conduct assessments. The automated analysis saves me hours of work each week, allowing me to focus more on therapy and less on paperwork.",
    highlightedQuote: [
      "transformed",
      "automated analysis",
      "saves me hours of work",
    ],
    rating: 5,
    image: "https://placehold.co/150x150?text=JD",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Researcher",
    organization: "National Speech Institute",
    quote:
      "The ability to record and analyze multilingual speech data has been invaluable for our research team. SpeechCatcher's IPA compatibility makes working across languages seamless.",
    highlightedQuote: [
      "multilingual speech data",
      "IPA compatibility",
      "seamless",
    ],
    rating: 5,
    image: "https://placehold.co/150x150?text=MC",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Clinical Director",
    organization: "Children's Speech Therapy",
    quote:
      "Our clinic has seen a 40% increase in assessment efficiency since adopting SpeechCatcher. The interactive features keep our young patients engaged throughout sessions.",
    highlightedQuote: [
      "40% increase in assessment efficiency",
      "interactive features",
      "engaged",
    ],
    rating: 5,
    image: "https://placehold.co/150x150?text=SW",
  },
];
