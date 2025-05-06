export enum FeedbackStatus {
  IN_PROGRESS = "inProgress",
  UNDER_REVIEW = "underReview",
  PLANNED = "planned",
  COMPLETED = "completed",
  CONSIDERING = "considering",
}

export type FeedbackStatusConfig = {
  label: string;
};

export const FEEDBACK_STATUSES: Record<FeedbackStatus, FeedbackStatusConfig> = {
  [FeedbackStatus.IN_PROGRESS]: {
    label: "In Progress",
  },
  [FeedbackStatus.UNDER_REVIEW]: {
    label: "Under Review",
  },
  [FeedbackStatus.PLANNED]: {
    label: "Planned",
  },
  [FeedbackStatus.COMPLETED]: {
    label: "Completed",
  },
  [FeedbackStatus.CONSIDERING]: {
    label: "Considering",
  },
};

export type FeedbackItem = {
  id: number;
  title: string;
  description: string;
  votes: number;
  comments: number;
  status?: FeedbackStatus;
};

export const feedbackItems: FeedbackItem[] = [
  {
    id: 1,
    title: "Multiple speaker recording for conversation analysis",
    description:
      "Allow simultaneous recording from multiple speakers to analyze conversation patterns, turn-taking, and discourse in natural speech settings.",
    votes: 203,
    status: FeedbackStatus.IN_PROGRESS,
    comments: 38,
  },
  {
    id: 2,
    title: "Customizable assessment templates",
    description:
      "Ability to create custom assessment templates with specific phoneme sets, word lists, and scoring criteria to match clinical or research protocols.",
    votes: 159,
    comments: 30,
    status: undefined,
  },
  {
    id: 3,
    title: "Multi-language phoneme comparison",
    description:
      "Add ability to compare phoneme inventories across languages to better support assessment of bilingual and multilingual clients.",
    votes: 126,
    comments: 12,
    status: FeedbackStatus.UNDER_REVIEW,
  },
  {
    id: 4,
    title: "API for integration with electronic health records",
    description:
      "Develop an API that allows SpeechCatcher to integrate with common electronic health record systems for seamless clinical documentation.",
    votes: 116,
    comments: 22,
    status: FeedbackStatus.IN_PROGRESS,
  },
  {
    id: 5,
    title: "Improved acoustic analysis for clinical markers",
    description:
      "Enhance acoustic analysis capabilities to detect clinical markers like voice onset time, formant transitions, and spectral characteristics relevant to speech disorders.",
    votes: 79,
    comments: 14,
    status: FeedbackStatus.PLANNED,
  },
  {
    id: 6,
    title: "Android version",
    description:
      "Expand SpeechCatcher availability to Android tablets to increase accessibility for more clinicians and researchers.",
    votes: 77,
    comments: 22,
    status: undefined,
  },
  {
    id: 7,
    title: "Support for custom IPA symbols and diacritics",
    description:
      "Add the ability to customize IPA symbols and diacritics for specialized phonetic transcription in less common languages and dialects.",
    votes: 68,
    comments: 15,
    status: FeedbackStatus.UNDER_REVIEW,
  },
  {
    id: 8,
    title: "Bulk export of assessment data",
    description:
      "Implement functionality to export multiple assessments at once in CSV or Excel format to improve research workflow for conducting large-scale studies.",
    votes: 63,
    comments: 11,
    status: FeedbackStatus.PLANNED,
  },
  {
    id: 9,
    title: "Offline mode for remote fieldwork",
    description:
      "Develop offline capability to conduct assessments in areas with limited internet connectivity, then sync data when connectivity is restored.",
    votes: 59,
    comments: 18,
    status: FeedbackStatus.CONSIDERING,
  },
  {
    id: 10,
    title: "Integration with Epic EHR system",
    description:
      "Create specific integration with Epic electronic health record system for seamless patient data management in hospital settings.",
    votes: 52,
    comments: 9,
    status: FeedbackStatus.PLANNED,
  },
  {
    id: 11,
    title: "Automatic speech milestone tracking for pediatric patients",
    description:
      "Add automatic tracking and visualization of speech development milestones for pediatric patients across multiple assessment sessions.",
    votes: 47,
    comments: 13,
    status: FeedbackStatus.IN_PROGRESS,
  },
  {
    id: 12,
    title: "Collaborative annotation for teaching purposes",
    description:
      "Enable multiple users to collaboratively annotate and discuss the same speech sample, ideal for supervision and teaching contexts.",
    votes: 42,
    comments: 6,
    status: FeedbackStatus.COMPLETED,
  },
];
