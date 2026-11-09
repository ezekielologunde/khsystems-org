// PHQ-9 and GAD-7 are in the public domain (developed by Drs. Spitzer, Williams, Kroenke
// and colleagues with an educational grant from Pfizer Inc.; no permission required).
// Screening tools only: they do not diagnose. Scores never leave the visitor's browser.

export type Screener = {
  id: "phq-9" | "gad-7";
  slug: string;
  name: string;
  shortName: string;
  description: string;
  questions: string[];
  /** Index of a question that needs an immediate safety response if answered above 0. */
  safetyQuestion?: number;
  bands: { max: number; label: string; message: string }[];
  source: { name: string; url: string };
};

export const answerOptions = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

export const screeners: Screener[] = [
  {
    id: "phq-9",
    slug: "depression-check-in",
    name: "Depression check-in (PHQ-9)",
    shortName: "Depression check-in",
    description:
      "Nine questions about the last 2 weeks. Takes about 2 minutes. For adults 18 and older.",
    questions: [
      "Little interest or pleasure in doing things",
      "Feeling down, depressed, or hopeless",
      "Trouble falling or staying asleep, or sleeping too much",
      "Feeling tired or having little energy",
      "Poor appetite or overeating",
      "Feeling bad about yourself, or that you are a failure or have let yourself or your family down",
      "Trouble concentrating on things, such as reading or watching television",
      "Moving or speaking so slowly that other people could have noticed, or the opposite: being so fidgety or restless that you have been moving around a lot more than usual",
      "Thoughts that you would be better off dead, or of hurting yourself in some way",
    ],
    safetyQuestion: 8,
    bands: [
      { max: 4, label: "Minimal", message: "Your answers suggest few or no depression symptoms right now." },
      { max: 9, label: "Mild", message: "Your answers suggest mild symptoms. Self-care, support from people you trust, and watching how you feel over time can help." },
      { max: 14, label: "Moderate", message: "Your answers suggest moderate symptoms. Talking with a mental health professional is a good next step." },
      { max: 19, label: "Moderately severe", message: "Your answers suggest symptoms that are likely affecting daily life. We encourage you to talk with a mental health professional soon." },
      { max: 27, label: "Severe", message: "Your answers suggest severe symptoms. Please reach out to a mental health professional soon. Support is available and treatment works." },
    ],
    source: {
      name: "Kroenke K, Spitzer RL, Williams JBW. The PHQ-9. J Gen Intern Med. 2001;16(9):606-613.",
      url: "https://pubmed.ncbi.nlm.nih.gov/11556941/",
    },
  },
  {
    id: "gad-7",
    slug: "anxiety-check-in",
    name: "Anxiety check-in (GAD-7)",
    shortName: "Anxiety check-in",
    description:
      "Seven questions about the last 2 weeks. Takes about 1 minute. For adults 18 and older.",
    questions: [
      "Feeling nervous, anxious, or on edge",
      "Not being able to stop or control worrying",
      "Worrying too much about different things",
      "Trouble relaxing",
      "Being so restless that it is hard to sit still",
      "Becoming easily annoyed or irritable",
      "Feeling afraid, as if something awful might happen",
    ],
    bands: [
      { max: 4, label: "Minimal", message: "Your answers suggest few or no anxiety symptoms right now." },
      { max: 9, label: "Mild", message: "Your answers suggest mild anxiety symptoms. Relaxation skills, sleep, movement and support from others can help." },
      { max: 14, label: "Moderate", message: "Your answers suggest moderate anxiety symptoms. Talking with a mental health professional is a good next step." },
      { max: 21, label: "Severe", message: "Your answers suggest severe anxiety symptoms. Please reach out to a mental health professional soon. Support is available and treatment works." },
    ],
    source: {
      name: "Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006;166(10):1092-1097.",
      url: "https://pubmed.ncbi.nlm.nih.gov/16717171/",
    },
  },
];

export function getScreener(slug: string) {
  return screeners.find((s) => s.slug === slug);
}

export function scoreBand(screener: Screener, total: number) {
  return screener.bands.find((b) => total <= b.max) ?? screener.bands[screener.bands.length - 1];
}
