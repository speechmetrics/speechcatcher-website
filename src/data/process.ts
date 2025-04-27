// process.ts
export interface ProcessStep {
  number: number;
  title: string;
  features: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Record with Ease",
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
    features: [
      "Assisted phonetic transcription",
      "Intuitive waveform visualization",
      "Simplified workflow",
      "Phonetic character support",
    ],
  },
  {
    number: 3,
    title: "Analyze Automatically",
    features: [
      "Instant comprehensive analyses",
      "Customizable reports",
      "Easy data management",
      "Annotation and sharing tools",
    ],
  },
];
