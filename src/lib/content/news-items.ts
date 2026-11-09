import type { NewsItem } from "@/lib/content/news";

// Policy items summarize official sources, fact-checked against them on 2026-11-09 (AI-assisted).
// Add real King Health Systems announcements with kind: "khs" and a real date.
export const newsItems: NewsItem[] = [
  {
    "slug": "carelon-behavioral-health-maryland-aso-transition",
    "title": "Carelon Now Runs Admin Work for Maryland's Public Behavioral Health System",
    "date": "2025-09-16",
    "summary": "The Maryland Department of Health reports Carelon replaced Optum as the behavioral health administrative services organization, starting claims work January 1, 2025.",
    "paragraphs": [
      "The Maryland Department of Health (MDH) sent a report to state lawmakers on September 16, 2025, about the change in the company that handles administrative work for the Public Behavioral Health System. The company is called an administrative services organization, or ASO.",
      "MDH says the ASO manages authorizations, utilization, claims processing, provider management, auditing, and provider compliance. It also pays providers for a range of behavioral health services. On February 14, 2024, the Board of Public Works unanimously approved Carelon Behavioral Health as the next ASO. Optum's contract ran from January 1, 2020 to December 31, 2024.",
      "According to the report, Carelon's website and Provider Digital Front Door, which serve both providers and participants, went live on December 21, 2024. Providers began sending claims to Carelon on December 22, 2024. Optum ran its last check run on December 29, 2024, and Carelon ran its first on January 6, 2025. Optum customer service phone lines moved to Carelon on January 1, 2025.",
      "The report gives numbers as of mid-2025. MDH says 18,795 providers were registered with the ASO as of July 31, 2025. It says Carelon processed 6,073,170 provider claims from January 1 to June 30, 2025, and had paid $1.5 billion to providers. As of July 31, 2025, 216,466 claims were still waiting to be processed.",
      "MDH also described early problems. An unexpectedly high volume of provider calls and emails left the call center understaffed, and Carelon added 36 staff on March 17."
    ],
    "whatItMeansForClients": "The report is mostly about provider claims and payments, so it may not change what members experience day to day. It says Carelon's website serves both providers and participants, and Carelon's role includes authorizations for services.",
    "source": {
      "title": "Update on the Behavioral Health Administrative Services Organization (BHASO) Transition (2025 Joint Chairmen's Report, p. 149)",
      "publisher": "Maryland Department of Health",
      "url": "https://health.maryland.gov/mmcp/Documents/ASOtransitionJCRfinal8-25.pdf"
    },
    "kind": "policy"
  },
  {
    "slug": "maryland-medicaid-telehealth-audio-only-made-permanent",
    "title": "Maryland Medicaid Keeps Phone-Only Telehealth Coverage Permanently",
    "date": "2025-06-27",
    "summary": "A Maryland Medicaid notice dated June 27, 2025 says telehealth rules, including audio-only phone visits, were extended on a permanent basis.",
    "paragraphs": [
      "On June 27, 2025, the Maryland Medical Assistance Program issued a notice to all providers about telehealth. The notice said that, under the Preserve Telehealth Access Act of 2025 (Chapters 481 and 482 of the Acts of 2025), telehealth flexibilities were extended on a permanent basis. These included coverage of audio-only phone conversations. The services had previously been set to sunset on June 30, 2025.",
      "The notice said Medicaid would continue to cover health care services delivered through telehealth regardless of where the participant is when services are provided. It also said Medicaid would continue to permit services to be delivered by audio-only telehealth.",
      "The notice also covered billing. For two-way audio and video visits, providers use the \"-GT\" modifier. For audio-only phone services, providers use the \"-UB\" modifier. It said telehealth services must be delivered in a HIPAA compliant manner.",
      "The notice described a federal clinic rule. Medicaid may not pay certain clinics if neither the practitioner nor the patient is physically in the clinic. It listed Outpatient Mental Health Clinics as an exception to that requirement and pointed to a separate notice, PT 86-25, for details.",
      "The Act also bars the Maryland Department of Health from paying facility, room, or board charges for telehealth visits unless a professional fee cannot be billed separately."
    ],
    "whatItMeansForClients": "Based on this notice, Maryland Medicaid coverage of audio-only telehealth was made permanent, so phone-only visits may remain a covered option. Coverage for a specific service can depend on the program's rules for that service.",
    "source": {
      "title": "PT 90-25: Delivery of Services through Telehealth (General Provider Transmittal No. 105)",
      "publisher": "Maryland Department of Health, Maryland Medical Assistance Program",
      "url": "https://health.maryland.gov/mmcp/provider/Documents/Transmittals_FY2025/PT90-25_Delivery_of_Services_through_Telehealth.pdf"
    },
    "kind": "policy"
  },
  {
    "slug": "maryland-medicaid-prp-referring-provider-enrollment-npi",
    "title": "Maryland Medicaid Corrects Rules for Providers Who Refer to PRPs",
    "date": "2025-10-27",
    "summary": "MDH transmittal PT 32-26 corrected PT 13-26: only fully licensed providers can enroll as referring providers, and the supervisor's NPI goes on PRP referral forms and in field 17b of CMS 1500 claims.",
    "paragraphs": [
      "On October 27, 2025, the Maryland Department of Health issued transmittal PT 32-26, also numbered Outpatient Mental Health Clinics Transmittal No. 3 and Behavioral Health Services Organization Transmittal No. 40. It corrects an earlier notice, PT 13-26, about providers who refer people to psychiatric rehabilitation programs (PRPs).",
      "PT 13-26 had said outpatient mental health clinics could enroll staff who are licensed graduate-level practitioners as Ordering, Referring, and Prescribing (ORP) providers. PT 32-26 says that was incorrect. Only providers who are fully licensed to practice independently, and who would otherwise be eligible to enroll as a participating Medicaid provider, may enroll as an ORP. Licensed master social workers (LMSW) and licensed graduate professional counselors (LGPC) are not eligible to enroll with Maryland Medicaid as an individual provider or as an ORP.",
      "The supervising licensed mental health practitioner must be an actively enrolled Medicaid provider to satisfy the requirements for referring people to PRP services. For a PRP referral, the supervisor's NPI should be used on the PRP referral form and in the Referring Provider field (17b) on CMS 1500 claims submitted by PRP providers.",
      "The transmittal says this guidance is limited to PRP referrals. It also says independent practitioners in a private or group practice are not permitted to submit claims for services rendered by LMSW or LGPC supervisees under their Medicaid provider number.",
      "PT 32-26 said that, effective January 1, 2026, Maryland Medicaid would deny all PRP claims if the referring provider is not actively enrolled. That date has passed. MDH's current provider page on ordering, referring, and prescribing providers gives a different date. It says that effective July 1, 2026, PRP claims are denied for dates of service when the referring practitioner is not actively enrolled. It also says claims are not reimbursable if the referring NPI belongs to a group or facility. The January 1, 2026 date does not appear on that page. By either date, the requirement is now in force."
    ],
    "whatItMeansForClients": "Based on these MDH documents, a PRP referral needs to come from a fully licensed provider who is actively enrolled in Maryland Medicaid, and PRP claims without an actively enrolled referring practitioner are now denied. Clients with questions about a referral can ask their clinic.",
    "source": {
      "title": "PT 32-26 Correction to PT 13-26 Requirements for Providers Referring to Psychiatric Rehabilitation Programs",
      "publisher": "Maryland Department of Health",
      "url": "https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT32-26_Correction_to_PT13-26_Requirements_for_Providers_Referring_to_Psychiatric_Rev.pdf"
    },
    "kind": "policy"
  },
  {
    "slug": "mdh-extends-behavioral-health-enrollment-pause-2026",
    "title": "MDH Extends Pause on New Behavioral Health Provider Enrollments",
    "date": "2026-06-24",
    "summary": "MDH extended its pause on new Medicaid enrollments for PRP, PRP Health Home, Level 2.5 PHP, and Level 2.1 IOP programs in ten Maryland jurisdictions for six months from July 1, 2026.",
    "paragraphs": [
      "On June 24, 2026, the Maryland Department of Health (MDH) announced that it was extending its pause on new Maryland Medicaid enrollments for certain behavioral health providers. MDH says the extension runs from July 1, 2026, for six months. Counted from that date, the pause runs to about the end of December 2026.",
      "The pause applies to four programs: Psychiatric Rehabilitation Programs (PRP), Psychiatric Rehabilitation Programs (Health Home), Level 2.5 Partial Hospital Programs (PHP), and Level 2.1 Intensive Outpatient Treatment Programs (IOP). MDH states that only these programs are affected.",
      "The pause covers ten jurisdictions: Anne Arundel County, Baltimore City, Baltimore County, Carroll County, Frederick County, Harford County, Howard County, Montgomery County, Prince George's County, and Washington County.",
      "MDH says it will keep processing licensure applications from providers who want to become licensed community behavioral health providers. Maryland Medicaid will also keep processing enrollment for existing providers who are revalidating, relocating, merging, or being acquired.",
      "MDH gave the reasons for the pause as fighting possible fraud, waste, and abuse and protecting provider quality. The release calls this an extension, but it does not say when the first pause began. An earlier MDH announcement, dated November 26, 2025, covered the same four programs and ten jurisdictions for January 1 through June 30, 2026."
    ],
    "whatItMeansForClients": "The pause concerns which new provider programs can enroll with Maryland Medicaid, and MDH's release describes it as limited to the listed programs and jurisdictions. Clients should not need to do anything based on this notice alone.",
    "source": {
      "title": "Maryland Department of Health extends pause for certain behavioral health providers",
      "publisher": "Maryland Department of Health",
      "url": "https://health.maryland.gov/newsroom/Pages/Maryland%20Department%20of%20Health%20extends%20pause%20for%20certain%20behavioral%20health%20providers.aspx"
    },
    "kind": "policy"
  },
  {
    "slug": "maryland-medicaid-hr1-work-requirements-renewals",
    "title": "Maryland Medicaid Changes From H.R. 1: Work Requirements and Twice-a-Year Renewals",
    "date": "2026-10-14",
    "summary": "The Maryland Department of Health says 4,500 people lost Medicaid on Oct. 1 based on immigration status, and work rules and twice-yearly renewals start Jan. 1, 2027.",
    "paragraphs": [
      "The Maryland Department of Health (MDH) shared an update on October 14, 2026, about changes to Medicaid under the federal law known as H.R. 1. MDH, the Department of Human Services, the Maryland Health Benefit Exchange, and the Maryland Insurance Administration held a roundtable in Prince George's County with community members. MDH described it as the third in a series of cross-agency H.R. 1 roundtables. The agencies talked about outreach and helping people keep coverage.",
      "MDH said 4,500 individuals lost Medicaid coverage on Oct. 1 based on immigration status under H.R. 1.",
      "MDH also said that beginning Jan. 1, 2027, 320,000 Marylanders will face work and community engagement requirements and twice-annual renewals to stay on Medicaid. Maryland estimates that as many as 152,000 individuals may lose Medicaid coverage due to the new requirements.",
      "MDH said it is working with state agencies and community partners to explain the federal changes. It runs a Medicaid Check-In campaign with toolkits for providers and employers, and outreach materials are available in 13 languages. MDH urged affected Medicaid members to update their contact information, read official notices, and complete renewals by the deadlines provided. The release also said Governor Moore recently mailed and emailed a letter to affected Marylanders about state resources for keeping Medicaid and SNAP coverage. Free help for Maryland Health Connection is listed at www.MarylandHealthConnection.gov/help."
    ],
    "whatItMeansForClients": "According to MDH, some Medicaid members will face work or community engagement requirements and renewals twice a year starting Jan. 1, 2027. MDH's release urges affected members to keep their contact information current, read official notices, and finish renewals by the deadlines given.",
    "source": {
      "title": "Maryland state agencies and partners collaborate to keep Marylanders covered amid H.R. 1 changes",
      "publisher": "Maryland Department of Health",
      "url": "https://health.maryland.gov/newsroom/Pages/Maryland%20state%20agencies%20and%20partners%20collaborate%20to%20keep%20Marylanders%20covered%20amid%20H.R.%201%20changes.aspx"
    },
    "kind": "policy"
  },
  {
    "slug": "hhs-awards-988-day-funding-2026",
    "title": "HHS Announces $383.4 Million in Grants on 988 Day, Including $252 Million for 988 and Crisis Response",
    "date": "2026-09-08",
    "summary": "On Sept. 8, 2026, HHS, through SAMHSA, announced $383.4 million in behavioral health grants, with $252 million for 988, suicide prevention and crisis services in four funding areas.",
    "paragraphs": [
      "On Tuesday, September 8, 2026, the U.S. Department of Health and Human Services (HHS), through the Substance Abuse and Mental Health Services Administration (SAMHSA), announced new grants for the nation's behavioral health system. The announcement was timed to 988 Day. The headline says \"more than $380 million,\" and the text gives the exact total as $383.4 million.",
      "The announcement says $383.4 million in grants will strengthen behavioral health treatment, prevention and crisis response. Of that amount, $252 million supports 988, suicide prevention and crisis services.",
      "The announcement lists four parts of the $252 million. First, 988 state and territory local capacity building cooperative agreements total $205.8 million. They are meant to improve how states and territories respond to all 988 calls, chats and texts. Second, support for 988 tribal response cooperative agreements totals $19.9 million, to improve response to 988 contacts from tribal communities or activated by American Indians and Alaska Natives. Third, tribal behavioral health suicide prevention totals $13.9 million, aimed at American Indian and Alaska Native youth and young adults through age 24. Fourth, behavioral health mobile crisis team partnerships total $12.4 million, to create or strengthen mobile crisis teams for children, youth and adults in crisis. Together these add up to $252 million.",
      "The announcement also described how people can reach the Lifeline. It says to call or text 988, or to chat at 988lifeline.org. It also points readers to FindTreatment.gov to find a treatment facility or provider.",
      "The announcement says that if you or someone you know is struggling or in crisis, help is available.",
      "The announcement did not include new 988 usage numbers."
    ],
    "whatItMeansForClients": "The announcement says federal money is going to 988 through states, territories and tribes, and to mobile crisis teams, which may help the Lifeline and crisis services keep operating. It lists calling, texting and chatting as ways to reach 988.",
    "source": {
      "title": "HHS Awards More Than $380 Million to Strengthen America's Behavioral Health System on 988 Day",
      "publisher": "SAMHSA (U.S. Department of Health and Human Services)",
      "url": "https://www.samhsa.gov/newsroom/press-announcements/20260908/hhs-awards-380-million-988-suicide-prevention-behavioral-health"
    },
    "kind": "policy"
  },
  {
    "slug": "maryland-medicaid-four-walls-waiver-outpatient-mental-health-telehealth",
    "title": "Maryland Medicaid lets outpatient mental health clinics bill for telehealth when the provider and client are both offsite",
    "date": "2025-06-09",
    "summary": "On June 9, 2025, Maryland Medicaid told Outpatient Mental Health Centers (OMHCs) that the \"Four Walls\" requirement is waived. As of June 1, 2025, participating clinics may provide and bill for telehealth services at clinic rates when both the practitioner and the patient are offsite.",
    "paragraphs": [
      "Maryland Medicaid sent a notice to Outpatient Mental Health Centers on June 9, 2025. It is called PT 86-25. It is from Tricia Roddy, Deputy Medicaid Director. It was addressed to OMHCs and to the Behavioral Health Administrative Services Organization (BHASO).",
      "The notice is about the \"Four Walls\" requirement. The notice does not explain the term in its text. It says the state received approval from the Centers for Medicare & Medicaid Services (CMS) on May 19, 2025 to update the Maryland State Plan to waive the Four Walls requirement for OMHCs.",
      "The notice says the state used the State Plan route because of CMS guidance.",
      "As of June 1, 2025, Maryland Medicaid participating OMHCs may provide services by telehealth and submit claims for them at clinic rates. This applies when both the practitioner and the patient are offsite.",
      "The notice replaces earlier guidance from July 15, 2024, titled PT 21-25 Policy Clarification, Four Walls Requirement Termination. It also says the state is still pursuing a separate 1115 Waiver Amendment for local health departments. The notice is written for clinics and billing staff. It does not describe how any one clinic will schedule visits. Questions go to mdh.mabehavioralhealth@maryland.gov."
    ],
    "whatItMeansForClients": "Based on this notice, Maryland Medicaid allows participating outpatient mental health centers to bill for telehealth visits when the clinician and the patient are both offsite. Whether telehealth is offered for your visits depends on your clinic and your care team, so ask them. If you are in crisis, call or text 988, or call 911 for an emergency.",
    "source": {
      "title": "PT 86-25: Waived Four Walls Requirement - Outpatient Mental Health Clinics (Outpatient Mental Health Clinics Transmittal No. 1)",
      "publisher": "Maryland Department of Health, Maryland Medical Assistance Program",
      "url": "https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT86-25_Waived_FourWalls_Requirement_OMHC.pdf"
    },
    "kind": "policy"
  },
  {
    "slug": "cms-new-state-option-ccbhc-medicaid-coverage",
    "title": "CMS Explains a New Medicaid Option for Community Behavioral Health Clinics",
    "date": "2026-10-06",
    "summary": "On October 6, 2026, CMS sent state Medicaid directors guidance (SMD 26-004) on a new, optional way for states to cover Certified Community Behavioral Health Clinic (CCBHC) services. The letter is written for states and does not name Maryland as a state.",
    "paragraphs": [
      "The Centers for Medicare & Medicaid Services (CMS) sent a letter to State Medicaid Directors on October 6, 2026. It is called SMD # 26-004. It explains a new state option to add Certified Community Behavioral Health Clinic services, called CCBHCs, to a state's Medicaid plan. The option was authorized by a federal law enacted on March 9, 2024.",
      "A CCBHC is a clinic that a state has certified as meeting set criteria. The letter says these clinics must serve anyone requesting mental health or substance use care, regardless of ability to pay or place of residence. The criteria also call for 24/7 access to crisis services. The new benefit is optional. States decide whether to use it.",
      "The letter lists nine required services. They include crisis mental health services, screening, assessment and diagnosis, treatment planning, outpatient mental health and substance use services, primary care screening and monitoring, intensive case management, psychiatric rehabilitation, and peer, counselor and family supports. The ninth covers intensive community-based mental health care for members of the armed forces and veterans. For psychiatric rehabilitation, the letter says states must cover supported employment, plus services that support supported education and finding and keeping housing.",
      "The letter also says CCBHCs must submit ongoing data on services and clinical outcomes to the state or the federal Secretary. It says services must be delivered directly by the clinic or by another provider with a formal relationship to it. It describes the new benefit as based on a demonstration program that was established in 2014.",
      "The letter is written for states. It does not name Maryland as a state, and it does not say whether any state will adopt the option. It also does not change how members get care today."
    ],
    "whatItMeansForClients": "Based on this letter, nothing changes for Maryland Medicaid members right now. It describes an option that each state chooses, and it does not say whether Maryland will use it. If Maryland adds this option later, you may hear about it from the Maryland Department of Health or your health plan.",
    "source": {
      "title": "SMD # 26-004, RE: New State Plan Option to Cover Certified Community Behavioral Health Clinic Services",
      "publisher": "Centers for Medicare & Medicaid Services (Medicaid.gov)",
      "url": "https://www.medicaid.gov/Federal-Policy-Guidance/Downloads/smd26004.pdf"
    },
    "kind": "policy"
  },
  {
    "slug": "maryland-medicaid-provider-enrollment-portal-transition-2026",
    "title": "Maryland Medicaid planned a new provider enrollment portal for October 2026",
    "date": "2026-01-29",
    "summary": "On January 29, 2026, Maryland Medicaid told providers it would replace its ePREP enrollment and revalidation system with a new portal, set to go live in October 2026. From July 1, 2026, ePREP applications could not be submitted for high and moderate risk provider types, which include outpatient mental health clinics and psychiatric rehabilitation facilities.",
    "paragraphs": [
      "On January 29, 2026, the Maryland Medical Assistance Program sent a notice to all providers. It is called PT 59-26, General Provider Transmittal No. 115. It is from Charles Crisp, Director of the Office of Medicaid Provider Services.",
      "The notice says Maryland Medicaid will move from ePREP to a new Medicaid Provider Enrollment portal system. ePREP is the current online system for provider enrollment and revalidation. The new system is set to go live in October 2026.",
      "To get ready, Medicaid is putting a phased hold on ePREP applications. Once a hold takes effect, providers must wait until the new system is available to make any enrollment updates. That includes new enrollments, revalidations, and changes to existing enrollment accounts.",
      "The first hold takes effect July 1, 2026, for high and moderate risk provider types. Attachment 1 of the notice lists Outpatient Mental Health Clinic, Psychiatric Rehab Services Facility, Mobile Treatment Program, and Behavioral Health Crisis Stabilization Center among them. The second hold takes effect August 1, 2026, for limited risk provider types. Attachment 2 lists Mobile Crisis Team, Certified Community Behavioral Health Clinic, and Mental Health Case Management among them.",
      "The notice tells providers to send questions to mdh.providerenrollment@maryland.gov. It is written for providers, not for people who get care. This summary covers only the January 29 notice. It does not confirm whether the new portal has launched, so check with the Maryland Department of Health for the current status."
    ],
    "whatItMeansForClients": "Based on this notice, the change is about how providers file enrollment paperwork with Medicaid, not about your benefits or how you get care. If you have questions about whether a provider is enrolled, ask the provider or call the number on your Medicaid card.",
    "source": {
      "title": "PT 59-26 Provider Enrollment Portal Transition (General Provider Transmittal No. 115)",
      "publisher": "Maryland Department of Health, Maryland Medical Assistance Program",
      "url": "https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT59-26_Provider_Enrollment_Portal_Transition.pdf"
    },
    "kind": "policy"
  },
];
