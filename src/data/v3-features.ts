// v3-features.ts
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const v3features: Feature[] = [
  {
    title: "Manageable caseloads through efficiency",
    description:
      "Reduce time spent on paperwork with automated scoring, time alignment, and intuitive data management tools.",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5"
    >
      <path d="M12 12h.01"></path>
      <path d="M7 12h.01"></path>
      <path d="M17 12h.01"></path>
      <path d="M3 12h.01"></path>
      <path d="M19 12h.01"></path>
      <path d="m8 16-.58-.58A2 2 0 0 1 7 14.34V14"></path>
      <path d="M17 14v.34a2 2 0 0 1-.42 1.08L16 16"></path>
      <path d="m12 16-.58-.58a2 2 0 0 1-.42-1.08V14"></path>
      <path d="M7.1 7.93c-.15.28-.24.59-.24.93C6.86 10 7.86 11 9.1 11"></path>
      <path d="M14.9 7.93c.15.28.24.59.24.93C15.14 10 14.14 11 12.9 11"></path>
      <path
        d="M5.83 7.86C5.82 7.59 5.88 7.26 6.13 7.1M6.13 7.1C6.38 6.94 6.88 7 7.34 7.1M6.13 7.1C6.13 7.1 6.04 5.87 6.13 5.25M6.13 5.25C6.34 4 7.58 4.23 8.5 4.42M6.13 5.25 5 7"
      ></path>
      <path
        d="M18.17 7.86c.01-.27-.05-.6-.3-.76M17.87 7.1c-.25-.16-.75-.1-1.21 0M17.87 7.1s.09-1.23 0-1.85M17.87 5.25C17.66 4 16.42 4.23 15.5 4.42M17.87 5.25 19 7"
      ></path>
    </svg>`,
  },
  {
    title: "Simplified interactive recording",
    description:
      "Automatically align speech data, handle multiple targets effortlessly, and eliminate tedious manual entry.",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5"
    >
      <path d="M21 15V6"></path>
      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
      <path d="M12 12H3"></path>
      <path d="M16 6H3"></path>
      <path d="M12 18H3"></path>
    </svg>`,
  },
  {
    title: "Immediate automated analyses",
    description:
      "Instantly access automated, evidence-based analyses to confidently measure progress and effectiveness.",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5"
    >
      <path d="m3 16 4 4 4-4"></path>
      <path d="M7 20V4"></path>
      <rect x="15" y="4" width="4" height="6" rx="2"></rect>
      <path d="M17 20v-6h-2"></path>
      <path d="M15 20h4"></path>
    </svg>`,
  },
  {
    title: "Supportive, collaborative platform",
    description:
      "Easily share results and collaborate with colleagues, ensuring you're never isolated in managing complex cases.",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5"
    >
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      ></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>`,
  },
  {
    title: "Assisted transcription to boost productivity",
    description:
      "Minimize transcription burdens with visual waveforms, phonetic character keyboards, and automatic sound suggestions.",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5"
    >
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      ></path>
    </svg>`,
  },
  {
    title: "Customizable digital test creation",
    description:
      "Quickly digitize existing tests or create tailored assessments suited precisely to your clients' needs.",
    icon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5"
    >
      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
      <path d="M12 8v8"></path>
      <path d="M8 12h8"></path>
    </svg>`,
  },
];
