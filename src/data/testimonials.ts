interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  quote: string;
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
    image: "https://placehold.co/150x150?text=SJ",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    role: "Speech-Language Pathologist",
    organization: "University Medical Center",
    quote:
      "SpeechCatcher has transformed how I conduct assessments. The automated analysis saves me hours of work each week, allowing me to focus more on therapy and less on paperwork.",
    image: "https://placehold.co/150x150?text=SJ",
  },
  {
    id: 3,
    name: "Dr. Jane Doe",
    role: "Speech-Language Pathologist",
    organization: "University Medical Center",
    quote:
      "SpeechCatcher has transformed how I conduct assessments. The automated analysis saves me hours of work each week, allowing me to focus more on therapy and less on paperwork.",
    image: "https://placehold.co/150x150?text=SJ",
  },
];
