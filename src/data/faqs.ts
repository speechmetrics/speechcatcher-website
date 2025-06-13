export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Which devices support SpeechCatcher?",
    answer:
      "SpeechCatcher is an iPad app, optimized for the tablet interface to provide the best experience for speech assessment and analysis. Support for android tablets planned for sometime after launch.",
  },
  {
    question: "Is SpeechCatcher secure for medical use?",
    answer:
      "Yes, SpeechCatcher is fully compliant with industry-standard data privacy and security protocols for medical applications (RSA with OAEP-sha256 padding + AES-256-CGM), ensuring your data is protected.",
  },
];
