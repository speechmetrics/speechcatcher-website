// process.ts
export interface ProcessStep {
  number: number;
  title: string;
  highlightedTitle?: {
    before?: string;
    highlight: string;
    after?: string;
  };
  features: string[];
  screenshot?: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Record with Ease",
    highlightedTitle: {
      before: "Record ",
      highlight: "with Ease",
      after: "",
    },
    features: [
      "Automatic time alignment",
      "Customizable prompts",
      "Flexible target management",
      "Efficient data capture",
    ],
  },
  {
    number: 2,
    title: "Transcribe Effortlessly",
    highlightedTitle: {
      before: "Transcribe",
      highlight: " Effortlessly",
      after: "",
    },
    features: [
      "Assisted phonetic transcription",
      "Intuitive waveform visualization",
      "Simplified workflow",
      "Phonetic character support",
    ],
    screenshot: "/transcription.webp",
  },
  {
    number: 3,
    title: "Analyze Automatically",
    highlightedTitle: {
      before: "Analyze ",
      highlight: "Automatically",
      after: "",
    },
    features: [
      "Instant comprehensive analyses",
      "Customizable reports",
      "Easy data management",
      "Annotation and sharing tools",
    ],
  },
];
