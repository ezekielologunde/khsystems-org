export const company = {
  name: "King Health Systems, Inc.",
  shortName: "King Health Systems",
  tagline: "Serving the Mental Health Needs",
  mission:
    "Our mission is to provide culturally sensitive, high-quality mental health services to children, adolescents, adults and their families in order to empower healthy people in a strong community.",
  phone: "410-578-4340",
  phoneHref: "tel:+14105784340",
  fax: "410-578-4342",
  email: "admin@kinghealthsystems.org",
  hours: "Monday - Friday, 9:00 AM - 5:00 PM",
  medicalDirector: {
    name: "Dr. Susana Nwosu",
    credentials: "DNP, CRNP-PMH",
    title: "Medical Director",
  },
} as const;

export type Office = {
  id: string;
  name: string;
  addressLines: string[];
  city: string;
  state: string;
  zip: string;
  mapQuery: string;
};

export const offices: Office[] = [
  {
    id: "baltimore",
    name: "Baltimore Office",
    addressLines: ["3502 West Rogers Avenue, Ste. 1"],
    city: "Baltimore",
    state: "MD",
    zip: "21215",
    mapQuery: "3502 West Rogers Avenue, Ste. 1, Baltimore, MD 21215",
  },
  {
    id: "laurel",
    name: "Laurel Office",
    addressLines: [
      "Greater Laurel Professional Building",
      "14201 Laurel Park Drive, Suite 206",
    ],
    city: "Laurel",
    state: "MD",
    zip: "20707",
    mapQuery: "14201 Laurel Park Drive, Suite 206, Laurel, MD 20707",
  },
];

export const managedCareOrganizations = [
  "Aetna Better Health",
  "CareFirst BlueCross BlueShield Community Health Plan Maryland",
  "Jai Medical Systems",
  "Kaiser Permanente",
  "Maryland Physicians Care",
  "MedStar Family Choice",
  "Priority Partners",
  "United Healthcare",
  "Community Plan Wellpoint Maryland",
];

export const medicationDisclaimer =
  "King Health Systems does not directly administer any medication through any of our programs. Our medication management program prescribes medication, but does not administer it.";

export const clinicianCredentials = [
  "LMSW",
  "LGPC",
  "LCSW-C",
  "LCPC",
] as const;
