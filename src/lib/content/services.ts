export type ServiceCategory = "omhc" | "prp" | "medication";

export type ServicePageContent = {
  slug: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  body: string[];
  bullets?: string[];
  facts?: { label: string; value: string }[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const programs = [
  {
    key: "omhc",
    title: "Outpatient Mental Health Clinic (OMHC)",
    description:
      "Individual, family, and group therapy for children, adolescents, and adults dealing with anxiety, depression, trauma, grief, and relationship, school, or work challenges.",
  },
  {
    key: "prp",
    title: "Psychiatric Rehabilitation Program (PRP)",
    description:
      "Hands-on rehabilitation counseling that builds independent living, self-care, and community-integration skills for clients who need support beyond standard therapy.",
  },
  {
    key: "medication",
    title: "Medication Management",
    description:
      "Psychiatric evaluations and ongoing medication management provided by licensed Psychiatric Nurse Practitioners, in person or via telehealth.",
  },
] as const;

export const services: ServicePageContent[] = [
  {
    slug: "individual-therapy",
    title: "Individual Therapy",
    category: "omhc",
    summary:
      "One-on-one therapy for children, adolescents, and adults working through anxiety, depression, trauma, grief, and life transitions.",
    body: [
      "Individual therapy is the core service of our Outpatient Mental Health Clinic (OMHC). We also offer family and couples therapy when appropriate to a client's treatment goals.",
      "We serve clients across Baltimore City, Baltimore County, and Prince George's County through our office locations, with sessions typically available Monday through Friday, 9:00 AM to 5:00 PM. Sessions can be scheduled weekly, with more frequent sessions available when clinically appropriate.",
      "Both telehealth and in-person sessions are available, so clients can choose the format that works best for their circumstances.",
    ],
    facts: [
      { label: "Format", value: "In-person or telehealth" },
      { label: "Availability", value: "Monday - Friday, 9:00 AM - 5:00 PM" },
      {
        label: "Clinician licensure",
        value: "LMSW, LGPC, LCSW-C, or LCPC",
      },
    ],
    heroImage: "/images/about-conversation-sunset.jpg",
    heroImageAlt: "Two people in a warm conversation at sunset",
  },
  {
    slug: "family-therapy",
    title: "Family Therapy",
    category: "omhc",
    summary:
      "Structured sessions that help family members improve communication and resolve conflict together.",
    body: [
      "Family therapy helps improve communication and resolve conflicts among family members. Depending on the situation, sessions may include the entire family or select members whose participation is most relevant to the client's treatment goals.",
      "Our therapists tailor each session to the family's specific dynamics and the goals outlined in the client's Individualized Treatment Plan.",
    ],
    heroImage: "/images/bento-family-therapy.jpg",
    heroImageAlt: "A family silhouette together at sunset",
  },
  {
    slug: "group-therapy",
    title: "Group Therapy",
    category: "omhc",
    summary:
      "Guided group sessions that connect clients with others facing similar challenges.",
    body: [
      "Group therapy is offered to clients who share similar diagnoses, such as depression or anxiety. Working alongside peers facing comparable challenges helps clients realize they are not alone, while building coping skills in a supportive, guided setting.",
    ],
    heroImage: "/images/bento-community-support.jpg",
    heroImageAlt: "A diverse group of people stacking hands together in support",
  },
  {
    slug: "psychiatric-evaluation",
    title: "Psychiatric Evaluation",
    category: "medication",
    summary:
      "A comprehensive medical and psychiatric history plus mental status exam to guide treatment planning.",
    body: [
      "A psychiatric evaluation includes a general medical and psychiatric history along with a mental status exam. Depending on a client's medication needs, lab work may also be required.",
      "Our evaluations are overseen by our Medical Director, Dr. Susana Nwosu, DNP, CRNP-PMH, and are the starting point for any client entering our Medication Management program.",
    ],
  },
  {
    slug: "medication-management",
    title: "Medication Management",
    category: "medication",
    summary:
      "Ongoing psychiatric medication management from licensed Psychiatric Nurse Practitioners.",
    body: [
      "Our licensed Psychiatric Nurse Practitioners (CRNP-PMH) determine medication needs at a client's initial evaluation, followed by monthly follow-up appointments to monitor progress and adjust treatment as needed.",
      "Telehealth appointments are available Monday through Friday, 9:00 AM to 5:00 PM, with in-person appointments offered on select days each month at both our Baltimore City and Laurel (Prince George's County) offices.",
    ],
    bullets: [],
    heroImage: "/images/telehealth-video-call.jpg",
    heroImageAlt: "A person having a telehealth video call from home",
  },
  {
    slug: "psychosocial-assessment",
    title: "Psychosocial Assessment",
    category: "prp",
    summary:
      "An evaluation of a client's mental health, social status, and functional capacity within their community.",
    body: [
      "A psychosocial assessment is conducted by a licensed clinical social worker or counselor to evaluate a client's mental health, social status, and functional capacity within the community.",
      "The assessment builds a comprehensive picture of the client's needs and strengths, which is used to map out treatment goals in their Individualized Treatment Plan.",
    ],
  },
  {
    slug: "individualized-treatment-plan",
    title: "Individualized Treatment Plan",
    category: "prp",
    summary:
      "A comprehensive, personalized plan defining each client's goals, objectives, and the resources needed to reach them.",
    body: [
      "Every client's Individualized Treatment Plan (ITP) is a comprehensive, holistic plan that defines specific goals, objectives, resources, and the key participants involved in the client's care.",
      "Goals may address family relationships, education, substance use, health issues, and daily living skills. Every goal is written to be achievable and measurable, so progress can be tracked over time.",
    ],
  },
  {
    slug: "psychiatric-rehabilitation",
    title: "Psychiatric Rehabilitation Services (PRP)",
    category: "prp",
    summary:
      "Up to six visits a month with a Rehabilitation Counselor for clients who need support beyond standard therapy.",
    body: [
      "Psychiatric Rehabilitation Services (PRP) are designed for clients who need care beyond what standard therapy alone provides. Clients receive up to six visits per month with a dedicated Rehabilitation Counselor.",
      "Counselors help develop and implement each client's Individualized Treatment Plan, delivering services in person - at our office, in the client's home, or out in the community - across Baltimore City, Baltimore County, and Prince George's County.",
      "All Rehabilitation Counselors complete a minimum of 40 hours of training and hold at least a high school diploma or equivalent.",
    ],
    bullets: [
      "Crisis intervention",
      "Self-care skills",
      "Independent living skills",
      "Symptom management skills",
      "Referrals for mobility services",
      "Budgeting and money management coaching",
      "Help applying for entitlements",
      "Conflict resolution",
      "Anger management",
      "Social skills training",
      "Assistance maintaining a personal living space",
      "Referrals to housing",
      "Time management",
      "Assistance with hygiene and grooming skills",
    ],
    facts: [
      { label: "Visit frequency", value: "Up to 6 visits per month" },
      {
        label: "Counselor training",
        value: "Minimum 40 hours, high school diploma or equivalent",
      },
      {
        label: "Service locations",
        value: "Office, client's home, or in the community",
      },
    ],
    heroImage: "/images/cta-support-team.jpg",
    heroImageAlt: "A support team member wearing a headset, ready to help",
  },
  {
    slug: "community-resource-linkages",
    title: "Linkages to Community Resources",
    category: "prp",
    summary:
      "Connecting clients to the community resources and support programs they need alongside clinical care.",
    body: [
      "Our therapists and counselors connect clients to community resources and support beyond our own programs - including PRP services, medical assistance transportation, transitional housing, and other social services relevant to each client's goals.",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}
