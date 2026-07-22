// IMPORTANT: These summaries were authored independently for this rebuild and
// are NOT sourced from King Health Systems' original patient handouts (those
// PDFs live on the old WordPress install and were not available during this
// migration). They are general, publicly-known side-effect information only.
// Clinical staff (see company.medicalDirector) must review and approve every
// entry below before this page is treated as an authoritative patient resource.

export type MedicationInfo = {
  slug: string;
  genericName: string;
  brandName: string;
  drugClass: string;
  commonSideEffects: string[];
};

export const medications: MedicationInfo[] = [
  {
    slug: "alprazolam",
    genericName: "Alprazolam",
    brandName: "Xanax",
    drugClass: "Benzodiazepine",
    commonSideEffects: ["Drowsiness", "Dizziness", "Memory problems", "Risk of dependence with long-term use"],
  },
  {
    slug: "aripiprazole",
    genericName: "Aripiprazole",
    brandName: "Abilify",
    drugClass: "Atypical antipsychotic",
    commonSideEffects: ["Restlessness (akathisia)", "Nausea", "Headache", "Weight changes"],
  },
  {
    slug: "atomoxetine",
    genericName: "Atomoxetine",
    brandName: "Strattera",
    drugClass: "Non-stimulant ADHD medication",
    commonSideEffects: ["Upset stomach", "Decreased appetite", "Fatigue", "Mood changes"],
  },
  {
    slug: "bupropion-xr",
    genericName: "Bupropion XR",
    brandName: "Wellbutrin XL",
    drugClass: "Atypical antidepressant",
    commonSideEffects: ["Dry mouth", "Insomnia", "Headache", "Increased anxiety"],
  },
  {
    slug: "buspirone",
    genericName: "Buspirone",
    brandName: "Buspar",
    drugClass: "Anti-anxiety medication",
    commonSideEffects: ["Dizziness", "Nausea", "Headache", "Nervousness"],
  },
  {
    slug: "carbamazepine",
    genericName: "Carbamazepine",
    brandName: "Tegretol",
    drugClass: "Mood stabilizer / anticonvulsant",
    commonSideEffects: ["Drowsiness", "Dizziness", "Nausea", "Requires periodic blood level monitoring"],
  },
  {
    slug: "citalopram",
    genericName: "Citalopram",
    brandName: "Celexa",
    drugClass: "SSRI antidepressant",
    commonSideEffects: ["Nausea", "Dry mouth", "Drowsiness", "Sexual side effects"],
  },
  {
    slug: "clonazepam",
    genericName: "Clonazepam",
    brandName: "Klonopin",
    drugClass: "Benzodiazepine",
    commonSideEffects: ["Drowsiness", "Dizziness", "Coordination problems", "Risk of dependence with long-term use"],
  },
  {
    slug: "clozapine",
    genericName: "Clozapine",
    brandName: "Clozaril",
    drugClass: "Atypical antipsychotic",
    commonSideEffects: ["Sedation", "Weight gain", "Drooling", "Requires regular blood count monitoring"],
  },
  {
    slug: "desvenlafaxine",
    genericName: "Desvenlafaxine",
    brandName: "Pristiq",
    drugClass: "SNRI antidepressant",
    commonSideEffects: ["Nausea", "Dizziness", "Sweating", "Increased blood pressure"],
  },
  {
    slug: "divalproex-sodium",
    genericName: "Divalproex Sodium",
    brandName: "Depakote ER",
    drugClass: "Mood stabilizer / anticonvulsant",
    commonSideEffects: ["Nausea", "Tremor", "Weight gain", "Requires periodic blood level monitoring"],
  },
  {
    slug: "duloxetine",
    genericName: "Duloxetine",
    brandName: "Cymbalta",
    drugClass: "SNRI antidepressant",
    commonSideEffects: ["Nausea", "Dry mouth", "Fatigue", "Increased blood pressure"],
  },
  {
    slug: "escitalopram",
    genericName: "Escitalopram",
    brandName: "Lexapro",
    drugClass: "SSRI antidepressant",
    commonSideEffects: ["Nausea", "Insomnia", "Fatigue", "Sexual side effects"],
  },
  {
    slug: "fluoxetine",
    genericName: "Fluoxetine",
    brandName: "Prozac",
    drugClass: "SSRI antidepressant",
    commonSideEffects: ["Nausea", "Insomnia", "Anxiety", "Decreased appetite"],
  },
  {
    slug: "gabapentin",
    genericName: "Gabapentin",
    brandName: "Neurontin",
    drugClass: "Anticonvulsant / anxiety adjunct",
    commonSideEffects: ["Drowsiness", "Dizziness", "Fatigue", "Coordination problems"],
  },
  {
    slug: "guanfacine-er",
    genericName: "Guanfacine ER",
    brandName: "Intuniv",
    drugClass: "Non-stimulant ADHD medication",
    commonSideEffects: ["Drowsiness", "Fatigue", "Low blood pressure", "Dizziness"],
  },
  {
    slug: "lamotrigine",
    genericName: "Lamotrigine",
    brandName: "Lamictal",
    drugClass: "Mood stabilizer / anticonvulsant",
    commonSideEffects: ["Headache", "Dizziness", "Nausea", "Rash (report immediately - can signal a serious reaction)"],
  },
  {
    slug: "lisdexamfetamine",
    genericName: "Lisdexamfetamine",
    brandName: "Vyvanse",
    drugClass: "Stimulant (ADHD medication)",
    commonSideEffects: ["Decreased appetite", "Insomnia", "Increased heart rate", "Irritability"],
  },
  {
    slug: "lithium-carbonate",
    genericName: "Lithium Carbonate",
    brandName: "Lithobid",
    drugClass: "Mood stabilizer",
    commonSideEffects: ["Tremor", "Increased thirst", "Nausea", "Requires regular blood level monitoring"],
  },
  {
    slug: "lorazepam",
    genericName: "Lorazepam",
    brandName: "Ativan",
    drugClass: "Benzodiazepine",
    commonSideEffects: ["Drowsiness", "Dizziness", "Weakness", "Risk of dependence with long-term use"],
  },
  {
    slug: "lurasidone",
    genericName: "Lurasidone",
    brandName: "Latuda",
    drugClass: "Atypical antipsychotic",
    commonSideEffects: ["Nausea", "Restlessness (akathisia)", "Drowsiness", "Should be taken with food"],
  },
  {
    slug: "methylphenidate-sr",
    genericName: "Methylphenidate SR",
    brandName: "Ritalin SR",
    drugClass: "Stimulant (ADHD medication)",
    commonSideEffects: ["Decreased appetite", "Insomnia", "Increased heart rate", "Irritability"],
  },
  {
    slug: "mirtazapine",
    genericName: "Mirtazapine",
    brandName: "Remeron",
    drugClass: "Atypical antidepressant",
    commonSideEffects: ["Drowsiness", "Increased appetite", "Weight gain", "Dry mouth"],
  },
  {
    slug: "mixed-amphetamine-salts",
    genericName: "Mixed Amphetamine Salts",
    brandName: "Adderall XR",
    drugClass: "Stimulant (ADHD medication)",
    commonSideEffects: ["Decreased appetite", "Insomnia", "Increased heart rate", "Irritability"],
  },
  {
    slug: "olanzapine",
    genericName: "Olanzapine",
    brandName: "Zyprexa",
    drugClass: "Atypical antipsychotic",
    commonSideEffects: ["Weight gain", "Drowsiness", "Increased appetite", "Metabolic changes"],
  },
  {
    slug: "quetiapine",
    genericName: "Quetiapine",
    brandName: "Seroquel",
    drugClass: "Atypical antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Weight gain", "Dry mouth"],
  },
  {
    slug: "risperidone",
    genericName: "Risperidone",
    brandName: "Risperdal",
    drugClass: "Atypical antipsychotic",
    commonSideEffects: ["Drowsiness", "Weight gain", "Restlessness", "Elevated prolactin levels"],
  },
  {
    slug: "ziprasidone",
    genericName: "Ziprasidone",
    brandName: "Geodon",
    drugClass: "Atypical antipsychotic",
    commonSideEffects: ["Drowsiness", "Dizziness", "Nausea", "Should be taken with food"],
  },
  {
    slug: "zolpidem",
    genericName: "Zolpidem",
    brandName: "Ambien CR",
    drugClass: "Sedative-hypnotic (sleep aid)",
    commonSideEffects: ["Drowsiness", "Dizziness", "Headache", "Risk of dependence with long-term use"],
  },
];
