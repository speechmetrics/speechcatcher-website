// v1-users.ts
export interface UserSegment {
  title: string;
  description: string;
}

export const v1userSegments: UserSegment[] = [
  {
    title: "Speech clinicians",
    description:
      "Enjoy speech testing in a fully secure, digital environment. No more manual scoring! Deliver better quality speech assessments and enjoy significant time savings!",
  },
  {
    title: "Researchers",
    description:
      "Access innovative methods to sample and analyze speech data. Benefit from powerful solutions for data analysis. Export your test data for analysis in 3rd party software.",
  },
  {
    title: "Teachers",
    description:
      "Teach all workflows involved in speech assessment, from client data management to reporting. Explore different methods and analyses in one convenient package.",
  },
  {
    title: "Students",
    description:
      "Sharpen your testing and transcription skills for every step involved in speech testing. Let your device take care of data analysis, and enjoy more time learning from your results.",
  },
  {
    title: "Test creators",
    description:
      "Create new tests, digitize or update existing ones. Take advantage of a fully digital environment. Explore new approaches and materials, in any language.",
  },
  {
    title: "Test publishers",
    description:
      "Harness the potential of all-digital test publishing. Update test materials or analyses within seconds. Expand speech testing into additional linguistic markets.",
  },
];
