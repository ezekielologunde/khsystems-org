export type FaqItem = { question: string; answer: string };
export type FaqCategory = { key: string; title: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    key: "getting-started",
    title: "Getting Started",
    items: [
      {
        question: "How do I become a client?",
        answer:
          "Eligibility is determined through an evaluation or a referral from a physician or agency. You can request an appointment directly through our Set an Appointment form, or a provider/case manager can submit a referral on your behalf through our Referrals form.",
      },
      {
        question: "What's the difference between the Referrals form and the Appointment form?",
        answer:
          "Use Set an Appointment if you're the client (or a family member) requesting care directly. Use Referrals if you're a physician, case manager, or other professional recommending someone for our OMHC or PRP programs.",
      },
      {
        question: "Do I need a referral from my doctor to be seen?",
        answer:
          "No. You can request an appointment yourself - no PCP referral is required to begin services.",
      },
    ],
  },
  {
    key: "insurance",
    title: "Insurance & Payment",
    items: [
      {
        question: "What insurance do you accept?",
        answer:
          "We accept Maryland Medicaid only, at no cost to eligible clients, through all major managed care organizations. We do not currently accept any private insurance.",
      },
      {
        question: "What if I don't have Medicaid?",
        answer:
          "Clients without Medicaid may be seen on a self-pay basis. We accept cash, money order, or check for self-pay services - we do not accept debit or credit cards.",
      },
      {
        question: "Do you handle billing paperwork for me?",
        answer:
          "Yes. For Medicaid clients, we bill Medicaid directly on your behalf and handle all prior authorization and billing paperwork.",
      },
    ],
  },
  {
    key: "services",
    title: "Services",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "Three core programs: an Outpatient Mental Health Clinic (individual, family, and group therapy), a Psychiatric Rehabilitation Program (PRP) for clients needing support beyond standard therapy, and Medication Management with licensed Psychiatric Nurse Practitioners.",
      },
      {
        question: "Do you offer telehealth?",
        answer:
          "Yes. Most services, including therapy and medication management, are available via telehealth Monday through Friday, 9:00 AM to 5:00 PM, in addition to in-person appointments at both our Baltimore and Laurel offices.",
      },
      {
        question: "Does King Health Systems administer medication?",
        answer:
          "No. Our medication management program prescribes medication but does not directly administer it through any of our programs.",
      },
    ],
  },
  {
    key: "logistics",
    title: "Locations & Logistics",
    items: [
      {
        question: "Where are your offices located?",
        answer:
          "We have two offices: 3502 West Rogers Avenue, Ste. 1, Baltimore, MD 21215, and 14201 Laurel Park Drive, Suite 206, Laurel, MD 20707 (Greater Laurel Professional Building).",
      },
      {
        question: "What are your hours?",
        answer: "Monday through Friday, 9:00 AM to 5:00 PM.",
      },
      {
        question: "Do you offer transportation assistance?",
        answer:
          "We offer a limited number of free transportation slots to and from our clinic for therapy sessions, for clients located in the 21215 zip code. See our Community Engagement page for details.",
      },
    ],
  },
];
