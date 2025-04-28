// users.ts
export interface UserSegment {
  title: string;
  description: string;
}

export const userSegments: UserSegment[] = [
  {
    title: "Speech Clinicians",
    description:
      "Deliver higher-quality assessments in less time. Automate scoring and securely manage speech testing digitally.",
  },

  {
    title: "Educators",
    description:
      "Efficiently teach complete speech assessment workflows from recording to reporting—all within one integrated platform.",
  },
  {
    title: "Test Creators",
    description:
      "Innovate freely: Create, digitize, or update tests quickly and effectively in any language.",
  },
  {
    title: "Researchers",
    description:
      "Leverage advanced tools for speech data collection and automated analysis. Easily export data for external analysis.",
  },

  {
    title: "Students",
    description:
      "Develop essential transcription and testing skills effortlessly. Focus more on learning and interpreting results with automated analyses.",
  },
  {
    title: "Publishers",
    description:
      "Seamlessly transition to digital publishing. Instantly update materials and analyses to reach global linguistic markets.",
  },
];
