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
      "Automatic recording and time alignment",
      "No more scrambling with forms",
      "Speech prompts at your fingertips",
    ],
  },
  {
    number: 2,
    title: "Transcribe Quickly and Effortlessly",
    highlightedTitle: {
      before: "Transcribe",
      highlight: " Effortlessly",
      after: "",
    },
    features: [
      "Phonological process suggestions",
      "Waveform visualization",
      "Audio playback",
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
      "Annotation and sharing tools",
    ],
  },
];
