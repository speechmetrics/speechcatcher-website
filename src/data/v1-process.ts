// v1-process.ts
export interface ProcessStep {
  number: number;
  title: string;
  features: string[];
}

export const v1processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Interactive speech recording",
    features: [
      "Automatic time alignment",
      "One or many targets per image",
      "Optional text prompts",
      "Subtle time-saving actions",
    ],
  },
  {
    number: 2,
    title: "Assisted phonetic transcription",
    features: [
      "Waveform visualization",
      "Minimal transcription work",
      "Sound specific suggestions",
      "Keyboard for phonetic characters",
    ],
  },
  {
    number: 3,
    title: "Automatic analysis and reporting",
    features: [
      "Fully automated analyses",
      "Customizable reports",
      "Direct access to data records",
      "Convenient report annotation tool",
    ],
  },
];
