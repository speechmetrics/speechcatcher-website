// users.ts
export interface UserSegment {
  title: string;
  description: string;
}

export const userSegments: UserSegment[] = [
  {
    title: "Speech Clinicians",
    description:
      "Deliver comprehensive assessment in less time. Keep all of your data secure in a single app.",
  },

  {
    title: "Educators",
    description:
      "Teach all aspects of speech sound assessment in efficient and engaging ways. Create and share training materials.",
  },
  {
    title: "Test Creators",
    description:
      "Create and pilot new tests for any language, dialect, or multilingual setting.",
  },
  {
    title: "Researchers",
    description:
      "Leverage cutting edge technologies for test building, speech data collection, and automated analysis. Easily export data for external analysis.",
  },

  {
    title: "Students",
    description:
      "Develop essential speech testing skills using the most advanced software. Save time with instant analyses to learn more from the speech data.",
  },
  {
    title: "Publishers",
    description:
      "Offer you existing tests in fully digital format. Bring the most advanced testing software to all of your customers.",
  },
];
