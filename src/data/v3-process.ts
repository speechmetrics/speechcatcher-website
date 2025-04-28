// v3-process.ts
export interface ProcessStep {
  number: number;
  title: string;
  features: string[];
}

export const v3processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Efficient Recording",
    features: [
      "Automatic time alignment",
      "Tailored prompts",
      "Easy target management",
    ],
  },
  {
    number: 2,
    title: "Easy Transcription",
    features: [
      "Assisted phonetic transcription",
      "Quick waveform visuals",
      "Intuitive character input",
    ],
  },
  {
    number: 3,
    title: "Instant Analysis & Reporting",
    features: [
      "Automatically generate reliable reports",
      "Customizable output formats",
      "Focus on therapeutic planning",
    ],
  },
];
