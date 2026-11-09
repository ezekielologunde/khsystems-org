// Source: clinician directory at https://www.khsystems.org/team/ (checked 2026-11-09).
// Ages, focus areas and availability come from each clinician's published profile.
export type Clinician = {
  name: string;
  credentials: string;
  ages: string;
  focus: string;
  availability?: string;
};

export const clinicians: Clinician[] = [
  { name: "Angela Latney", credentials: "LCSW-C", ages: "Mental health therapy", focus: "Depression, OCD, grief, trauma, and more" },
  { name: "Angela Okororie", credentials: "LMSW", ages: "Ages 55 and older", focus: "Anxiety, depression, grief, and stress" },
  { name: "Brittany Jordan", credentials: "LCPC", ages: "Ages 16–45", focus: "Individual, family, and group therapy", availability: "Virtual & in person" },
  { name: "Charzetta Gaylord", credentials: "LMSW", ages: "Mental health therapy", focus: "Experience in family services" },
  { name: "Danielle Miller", credentials: "LMSW", ages: "Ages 12 and older", focus: "Individual, family, and group therapy" },
  { name: "Megan Bowman", credentials: "LMSW", ages: "Ages 10 and older", focus: "Individual and family therapy", availability: "Virtual & in person" },
  { name: "Paulan Lemley (Smith)", credentials: "LMSW", ages: "All ages", focus: "Individual and family therapy", availability: "Virtual only" },
  { name: "Rhonda Caton", credentials: "LCPC", ages: "Ages 17 and older", focus: "Depression, grief, PTSD, and addiction" },
  { name: "Salimatu Sillah", credentials: "M.S.Ed, LCPC", ages: "Mental health therapy", focus: "Depression, anxiety, adjustment disorders, family and adolescent care" },
  { name: "Shalisa Partee", credentials: "LCSW-C", ages: "Mental health therapy", focus: "Anxiety, depression, panic attacks, stress, and spirituality" },
  { name: "Will Strauss", credentials: "LGPC", ages: "Ages 18–25", focus: "Supporting athletes and young adults" },
];
