export type ResourceItem = {
  name: string;
  phone?: string;
  phoneAlt?: string;
  url?: string;
  description?: string;
};

export type ResourceCategory = {
  key: string;
  title: string;
  items: ResourceItem[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    key: "crisis",
    title: "Crisis Lines",
    items: [
      {
        name: "Baltimore Crisis Response, Inc. (BCRI) - In-Home Support",
        phone: "410-433-5175",
      },
      {
        name: "Baltimore Child and Adolescent Response System (BCARS)",
        phone: "410-433-5174",
      },
      {
        name: "Grassroots Crisis Intervention, Inc. - 24 Hour Crisis Line",
        phone: "410-531-6677",
      },
      {
        name: "Grassroots Crisis Intervention, Inc. - Youth Crisis Line",
        phone: "1-800-442-HOPE",
      },
      {
        name: "National Suicide Prevention Lifeline",
        phone: "1-800-273-TALK",
      },
      {
        name: "Maryland Youth Crisis Hotline",
        phone: "800-422-0009",
      },
      {
        name: "Family Crisis Center of Baltimore County - Main Line",
        phone: "410-285-4357",
      },
      {
        name: "Family Crisis Center of Baltimore County - Emergency Shelter",
        phone: "410-285-7496",
      },
      {
        name: "Family Crisis Center of Baltimore County - 24 Hour Hotline",
        phone: "410-828-6390",
      },
    ],
  },
  {
    key: "mental-health-orgs",
    title: "Mental Health Organizations & Training",
    items: [
      {
        name: "Behavioral Health System Baltimore",
        phone: "410-637-1900",
        phoneAlt: "Fax: 410-637-1911",
      },
      {
        name: "Maryland Department of Health and Mental Hygiene",
        url: "https://health.maryland.gov/",
      },
      {
        name: "American Foundation for Suicide Prevention (AFSP)",
        url: "https://afsp.org/",
      },
      {
        name: "American Foundation for Suicide Prevention - Maryland Chapter",
        url: "https://afsp.org/chapter/afsp-maryland",
      },
      {
        name: "Mental Health First Aid Training",
        url: "https://www.mentalhealthfirstaid.org/",
      },
      {
        name: "ASIST (Applied Suicide Intervention Skills Training)",
      },
      {
        name: "Training Institute for Suicide Assessment and Clinical Interviewing",
      },
      {
        name: "Suicide Prevention Resource Center",
        url: "https://sprc.org/",
      },
      {
        name: "SPAN USA (Suicide Prevention Action Network)",
      },
      {
        name: 'Harvard "Means Matter" Suicide Prevention Program',
      },
      {
        name: "National Alliance on Mental Illness (NAMI) Metro Baltimore",
        phone: "410-435-2600",
      },
      {
        name: "NAMI of Maryland",
        url: "https://namimd.org/",
      },
      {
        name: "Mental Health America",
        url: "https://www.mhanational.org/",
      },
      {
        name: "National Institute of Mental Health (NIMH)",
        url: "https://www.nimh.nih.gov/",
      },
      {
        name: "On Our Own of Maryland",
        url: "https://onourownmd.org/",
      },
      {
        name: "SMART Recovery",
        url: "https://www.smartrecovery.org/",
      },
      {
        name: "WRAP (Wellness Recovery Action Plan)",
      },
      {
        name: "SNAP",
      },
    ],
  },
  {
    key: "social-services",
    title: "Other Hotlines & Social Services",
    items: [
      { name: "AIDS Hotline", phone: "800-638-6252", phoneAlt: "TTY: 800-553-3140" },
      {
        name: "Alcohol & Drug Abuse Administration",
        phone: "410-402-8600",
      },
      { name: "Baltimore Needle Exchange", phone: "410-396-3733", phoneAlt: "410-396-3731" },
      { name: "Compulsive Gambling Hotline", phone: "800-332-0402" },
      { name: "Maryland Center on Problem Gambling", phone: "1-800-522-4700" },
      { name: "DRADA (Depression and Related Affective Disorders Association)", phone: "410-955-4647" },
      { name: "Family Crisis Shelter for Domestic Violence", phone: "410-285-7496" },
      { name: "Fellowship of Lights", phone: "410-285-7496" },
      { name: "First Call for Help", phone: "410-685-0525" },
      {
        name: "Hearing Impaired Family Service",
        phone: "800-492-0618",
        phoneAlt: "TDD: 410-889-8040",
      },
      { name: "Seasons (Suicide Bereavement Support)", phone: "410-882-2937" },
      { name: "Survivors of Incest Anonymous", phone: "410-243-5232" },
      { name: "SAMHSA National Helpline", phone: "877-SAMHSA-7" },
      { name: "Social Security Administration", url: "https://www.ssa.gov/" },
      {
        name: "Department of Social Services (Baltimore City)",
        url: "https://dhs.maryland.gov/",
      },
      { name: "VitalChek / MVA", url: "https://www.mva.maryland.gov/" },
      { name: "What A Difference", url: "https://whatadifference.org/" },
      { name: "Addiction Center", url: "https://www.addictioncenter.com/" },
      { name: "Expect Recovery" },
    ],
  },
];

export type PrpResourceItem = {
  name: string;
  contact?: string;
  phone?: string;
  email?: string;
  address?: string;
  url?: string;
};

export const prpResourceCategories: { key: string; title: string; items: PrpResourceItem[] }[] = [
  {
    key: "benefits",
    title: "Benefits & Assistance Programs",
    items: [
      {
        name: "Food Supplement Program (FSP)",
        phone: "800-332-6347",
        url: "https://dhs.maryland.gov/",
      },
      { name: "Temporary Cash Assistance (TCA)", phone: "1-800-332-6347" },
      { name: "Medical Assistance", url: "https://dhs.maryland.gov/" },
      {
        name: "Temporary Disability Assistance Program (TDAP)",
        url: "https://dhs.maryland.gov/",
      },
      {
        name: "Office of Home Energy Programs (OHEP)",
        url: "https://dhs.maryland.gov/",
      },
      {
        name: "Emergency Assistance to Families with Children (EAFC)",
        url: "https://dhs.maryland.gov/",
      },
      { name: "Total Health Care Find Help", url: "https://c2c.findhelp.com/" },
      {
        name: "Maryland Health Connection",
        url: "https://www.marylandhealthconnection.gov/",
      },
    ],
  },
  {
    key: "employment",
    title: "Youth Services & Employment",
    items: [
      {
        name: "America Works of Maryland - Food Stamps / Full-Time Job Help",
        contact: "Kelly Meier",
        email: "kmeier@americaworks.com",
        phone: "410-625-9675 ext. 1016",
        address: "1 N Charles St, Suite 500, Baltimore, MD",
      },
      {
        name: "America Works of Maryland - Job Readiness Training",
        contact: "Orlyn Aaron",
        phone: "410-625-9675 ext. 1028",
        email: "oaaron@americaworks.com",
      },
      {
        name: "Division of Rehabilitation Services",
        phone: "410-557-9442 / 888-554-0334",
        contact: "Videophone: 443-798-2840",
        email: "dors@maryland.gov",
      },
      { name: "Freestate ChalleNGe Academy" },
      { name: "Goodwill Certified Training Opportunity" },
    ],
  },
];
