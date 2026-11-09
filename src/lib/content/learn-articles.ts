import type { LearnArticle } from "@/lib/content/learn";

// AI-drafted and fact-checked against cited sources (2026-11-09). Not clinician-reviewed.
// To mark one clinician-reviewed, set review to { type: "clinician", by: "<name>", date: "<YYYY-MM-DD>" }.
export const learnArticles: LearnArticle[] = [
  {
    "slug": "whats-new-in-outpatient-therapy-and-care",
    "title": "Recent Research on Outpatient Therapy and Care",
    "description": "A plain-language look at 2025 research on outpatient therapy: progress questionnaires, telehealth, team care, phone apps, and trauma-informed care.",
    "topic": "Outpatient mental health care trends",
    "readingMinutes": 5,
    "shortAnswer": "Several studies published in 2025 look at how outpatient mental health care is delivered, not just what is said in the room. Topics include short progress questionnaires, video and phone therapy, team-based care, a phone app used for anxiety, and trauma-informed services. The evidence ranges from descriptive to still emerging, so these are ideas to watch, not promises. The evidence labels in this article are plain-language judgments, not a formal grade.",
    "keyTakeaways": [
      "Measurement-based care means using short symptom questionnaires during treatment. A 2025 Swedish study found they were recorded in only about 28% of eligible depression episodes. It did not test whether questionnaires improve outcomes.",
      "A 2025 review of studies found that therapy by video, phone or online appeared to be a promising alternative for anxiety-related conditions. The authors caution against concluding it is equivalent, and the review has reporting inconsistencies, so treat its study count and ratings cautiously.",
      "Team-based care and a phone app for anxiety each have early results. The team-care study had no comparison group, and the app result comes from one trial funded by the app's maker.",
      "An American Family Physician editorial in 2025 summarized a systematic review that found the evidence on trauma-informed care too weak to draw conclusions. That is not the same as showing it does not work."
    ],
    "sections": [
      {
        "heading": "Tracking progress with short questionnaires",
        "paragraphs": [
          "One idea is called measurement-based care. It means using short symptom questionnaires during treatment. The goal is to help you and your clinician see whether things are getting better, staying the same, or getting harder.",
          "A 2025 study looked at five publicly funded adult psychiatric outpatient clinics in Stockholm, Sweden. It covered 2,431 depression treatment episodes between January 2020 and September 2023. Of the 2,242 episodes that lasted at least 30 days, about 28% (632) had a standard depression questionnaire (the PHQ-9 or a clinician-rated scale called MADRS) recorded within 60 days.",
          "The rate differed by type of care. It was about 80% (454 of 567) for internet-based cognitive behavioral therapy (iCBT), about 18% (16 of 89) for traditional psychotherapy, and about 10% (162 of 1,586) for antidepressant medication care. The authors wrote that policy guidelines alone are not enough. They linked the higher iCBT rate to automated, integrated digital workflows. However, the paper's own methods say iCBT scores are not transferred to the record automatically, so that explanation is the authors' interpretation, not something the study tested.",
          "This study has limits. It counted how often questionnaires were recorded. It did not test whether using them helps people get better. The iCBT and traditional therapy groups may differ in other ways, so the gap does not prove that built-in routines cause higher use. The authors note that electronic records may miss assessments made outside the standard templates, and that findings from Stockholm's public clinics may not apply in other places. Evidence label: descriptive only."
        ]
      },
      {
        "heading": "Therapy by video, phone or online",
        "paragraphs": [
          "If you want a general overview of telehealth options, the video below from HRSA explains types of telehealth services.",
          "A 2025 review in the journal Cureus summarized 10 studies (7 randomized trials and 3 non-randomized studies) that compared telemedicine and in-person therapy. The studies covered anxiety-related conditions, including social anxiety, generalized anxiety, panic disorder, obsessive-compulsive disorder (OCD), and depression with anxiety. Some included children or teens. The authors called telemedicine a promising and viable alternative and also said that conclusions about equivalence should be drawn with caution.",
          "The reviewers rated risk of bias but did not use those ratings to weight their conclusions, and they did not pool results statistically. The studies differed a lot in format and design, follow-up was mostly short, and most were from high-income countries. The review also has internal reporting inconsistencies, so treat its study count and summary ratings cautiously. One included study found that therapist-guided online therapy did better than a self-help email newsletter. That study did not compare online therapy with in-person care. Results may differ for other concerns. Evidence label: limited to emerging."
        ]
      },
      {
        "heading": "Team care and a phone app for anxiety",
        "paragraphs": [
          "Collaborative care is a team approach. In the program studied, the team was a primary care provider, a behavioral care manager and a psychiatric consultant. A 2025 study looked at records from one collaborative care program, Concert Health, across 52 health care organizations in 17 states. It focused on 3,599 patients who had been flagged for suicide risk and whose treatment period had ended.",
          "In this group, about 56% moved down at least one risk tier by the end of care. About 49% ended in the lowest tier, which the program calls risk remission. Here, remission means the program recorded no currently detected risk (a status it labels historical risk). It does not mean risk is gone, and the paper's remission criteria are described inconsistently. In the main model, more contacts and more days enrolled were each linked to higher odds of improving, although improvement rates across contact-count groups did not rise in a straight line. The paper has some internal inconsistencies in its tables and figures.",
          "Be careful with these numbers. The study was observational and had no comparison group, so it cannot show that the program caused the changes. The authors say people who stay longer may differ from people who leave early. Three of the authors are tied to the company, either employed by it or working for a firm it contracts, and the contracted authors conducted the analysis. This is one program, so results may not apply elsewhere. Evidence label: emerging.",
          "Phone apps are another area. A 2025 trial in JAMA Network Open tested a smartphone program called DaylightRx, a self-directed digital cognitive behavioral treatment. It enrolled 351 U.S. adults, age 22 or older, with generalized anxiety disorder and fairly high symptom scores. The study was run fully online. Among participants assessed at 10 weeks (145 in the app group, 156 in the comparison group), 71.0% of the app group and 34.6% of a group given an online educational program were rated as much or very much improved (a score of 2 or lower on a clinician rating scale) by blinded evaluators. At 24 weeks, the rates were 77.7% and 52.0%.",
          "This is one trial, and the app's maker funded it and helped design it. Several authors have financial ties to the company. Most participants were White women, and people with psychosis, bipolar disorder, OCD or elevated suicide risk were left out. In the trial, participants could continue any usual care, and the app was self-directed with no therapist component. It is described as an adjunct to usual care. If you are curious about a specific app, ask your clinician or plan whether it fits your care. Evidence label: emerging."
        ]
      },
      {
        "heading": "Trauma-informed care: popular, but thin on proof",
        "paragraphs": [
          "Trauma-informed care means services built to recognize the effects of trauma and to avoid causing more harm. An American Family Physician editorial in 2025 summarizes a systematic review that found 12 studies. All were rated at high risk of bias, and the studies were too different from one another to combine. The review concluded the evidence was insufficient to reach conclusions about the effects of trauma-informed care for any outcome.",
          "Weak evidence does not mean no benefit. The editorial says more rigorous studies are needed. It suggests clinicians weigh the likely benefit of each trauma-informed component in their own setting, and use team-based care and attention to social needs such as housing. The editorial also notes that definitions and models vary, with no universally consistent way of putting trauma-informed care into practice. Evidence label: insufficient to judge."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does this article tell me what treatment I should get?",
        "a": "No. It is general education about research. A licensed clinician who knows you can talk with you about what fits your needs."
      },
      {
        "q": "Is therapy by video or phone as good as in-person therapy?",
        "a": "A 2025 review found telehealth appeared to be a promising alternative for anxiety-related conditions, but the authors caution against concluding it is equivalent. The studies varied a lot, follow-up was short, and results may differ for other concerns."
      },
      {
        "q": "Can a phone app replace therapy?",
        "a": "In the DaylightRx trial, participants could continue any usual care, and the app was self-directed with no therapist component. It is described as an adjunct to usual care. It was one trial funded by the app's maker, so the evidence is still emerging."
      },
      {
        "q": "What do the evidence labels mean?",
        "a": "They are plain-language judgments for each topic, from descriptive, limited and emerging to insufficient. They are not a formal grade."
      }
    ],
    "whenToGetHelp": "If you or someone you know is in crisis or thinking about suicide, call or text 988 right away, any time of day. If it is an emergency, call 911. If you are looking for ongoing outpatient mental health care, King Health Systems accepts Maryland Medicaid only. You can call 410-578-4340 with questions. Offices are in Baltimore, Laurel and Cockeysville, open Monday to Friday, 9 a.m. to 5 p.m.",
    "sources": [
      {
        "title": "Guideline adherence in depression outcome measurement: a retrospective cohort study from Swedish psychiatric outpatient care",
        "publisher": "Frontiers in Psychiatry",
        "url": "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1667897/full",
        "year": "2025"
      },
      {
        "title": "Comparing Telemedicine and In-Person Psychological Interventions for Anxiety: A Systematic Review",
        "publisher": "Cureus, via PubMed Central",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12415301/",
        "year": "2025"
      },
      {
        "title": "Suicide risk remission in collaborative care: a large-scale observational study",
        "publisher": "Frontiers in Psychiatry",
        "url": "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1584753/full",
        "year": "2025"
      },
      {
        "title": "Digital Cognitive Behavioral Treatment for Generalized Anxiety Disorder: A Randomized Clinical Trial",
        "publisher": "JAMA Network Open, via PubMed Central",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12706682",
        "year": "2025"
      },
      {
        "title": "Trauma-Informed Care: Evidence and Pragmatic Approaches",
        "publisher": "American Family Physician",
        "url": "https://www.aafp.org/pubs/afp/issues/2025/1100/editorials-trauma-informed-care.html",
        "year": "2025"
      }
    ],
    "videos": [
      {
        "id": "3YVjvDTFqiI",
        "title": "Types of Telehealth Services",
        "channel": "HRSA"
      }
    ],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "children-and-teen-mental-health-trends",
    "title": "Children and Teen Mental Health Trends: What Recent Data and Research Show",
    "description": "What CDC survey data, polls, and reviews say about teen sadness, anxiety, social media, and school programs, and how to talk with your teen.",
    "topic": "Children and teen mental health trends",
    "readingMinutes": 4,
    "shortAnswer": "The CDC's 2025 Youth Risk Behavior Survey (released September 2026) found fewer U.S. high school students reporting persistent sadness and serious thoughts of suicide than the 2023 survey did. Even so, about one in three still reported persistent sadness or hopelessness. In its 2023 review, the National Academies found not enough evidence to say social media causes changes in teen health across the whole population. One 2026 review found modest benefits for school programs, mostly for students who already had symptoms. The American Academy of Pediatrics recommends ongoing check-ins with teens rather than a single big talk.",
    "keyTakeaways": [
      "In the CDC's 2025 Youth Risk Behavior Survey, 33% of U.S. high school students reported persistent sadness or hopelessness, down from 40% in 2023.",
      "The share who seriously considered suicide was 14% in 2025, down from 20% in 2023. This is a survey of self-reported feelings, so it shows trends but not causes.",
      "The National Academies found in 2023 that there was not enough evidence to say social media causes changes in adolescent health across the whole population. It said social media has potential to both harm and benefit.",
      "One 2026 review of school-based programs found modest benefits for sadness and worry, mostly in students who already had symptoms.",
      "The American Academy of Pediatrics recommends ongoing check-ins rather than a single big talk, and says suicidal thoughts or actions should never be ignored."
    ],
    "sections": [
      {
        "heading": "Teen sadness fell in 2025 but is still common",
        "paragraphs": [
          "The CDC's Youth Risk Behavior Survey is a national survey of U.S. high school students. In the 2025 results, released in September 2026, 33% of students said they felt persistently sad or hopeless, down from 40% in 2023. Poor mental health was reported by 23%, down from 29%. Seriously considering suicide was reported by 14%, down from 20%.",
          "These are good signs. Still, one in three students reporting persistent sadness is a large share. The survey only covers high school students and relies on what students report about themselves. It shows how numbers changed, not why. The CDC's release also says it highlights select statistically significant differences, so it does not cover every measure. If you or your teen is struggling right now, call or text 988, the Suicide & Crisis Lifeline."
        ]
      },
      {
        "heading": "How common are anxiety and depression diagnoses?",
        "paragraphs": [
          "The U.S. Department of Health and Human Services Office of Population Affairs reports that about 16% of 12-to-17-year-olds had a current anxiety diagnosis in 2023, and about 8% had a current depression diagnosis. A reported diagnosis is not the same as measuring how many teens have the condition.",
          "The same page reports National Institute of Mental Health data from 2024 showing that about 32% (31.9%) of teens, roughly one in three, will have an anxiety disorder at some point during their teen years."
        ]
      },
      {
        "heading": "Social media and teens: what is known and what is not",
        "paragraphs": [
          "A Pew Research Center survey of 1,391 U.S. teens ages 13 to 17, taken in fall 2024, found that 48% said social media mostly hurts people their age, up from 32% in 2022. Only 14% said it mostly hurts them personally. Among teen girls, 25% said social media had hurt their mental health, compared with 14% of boys. Pew also found that 74% of teens said social media makes them feel more connected to their friends. These are teens' opinions. They show what teens perceive, not what social media causes.",
          "The National Academies of Sciences, Engineering, and Medicine reviewed the research in 2023. It found there was not enough evidence to say social media causes changes in adolescent health across the whole population. It said social media has the potential to both harm and benefit young people. On the harm side, the report pointed to recommendation algorithms and persuasive design, which can keep teens on their phones even when they try to stop. It also said the effects of features such as likes and endless scrolling are not well understood. On the benefit side, it said social media can connect young people with friends and family and offer support, including for teens dealing with serious illness or mental health problems.",
          "The report also said studies often cannot tell whether social media affects health, whether health affects social media use, or both. The National Academies called for industry standards and stronger protections against online harassment. It did not recommend broad bans and called for a more judicious approach.",
          "The video below, from the American Psychological Association, gives tips for talking with teens about the videos they watch."
        ]
      },
      {
        "heading": "School programs and talking at home",
        "paragraphs": [
          "A 2026 review by SickKids researchers, published in JAACAP Open, looked at school-based mental health programs. It covered about 83,000 young people in 22 countries. For universal school programs, the review found modest benefits for internalizing symptoms, such as sadness and worry, and no clear benefit for behavior problems such as aggression. The benefits were mostly in students who already showed symptoms. Programs delivered by mental health professionals were more likely to help than those delivered by teachers, and CBT-based programs were more likely to help. This is one review, so its findings should be read with care.",
          "At home, the American Academy of Pediatrics recommends ongoing check-ins rather than a single big talk. Its advice includes making it safe for your teen to share without judgment, listening more than you speak, and starting with specific, fair observations instead of broad accusations. If your teen does not open up, the AAP suggests trying again in a few days.",
          "The AAP lists signs that deserve attention, including withdrawing from friends and family, losing interest in activities, big changes in sleep or eating, signs of substance use, refusing to talk about what is bothering them, and unexplained or hidden cuts, burns, or bruises. It notes that one sign alone does not mean a crisis. This article is for education only and cannot diagnose or replace an evaluation by a clinician."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Are teens doing better with their mental health now?",
        "a": "In the CDC's 2025 survey, fewer high school students reported persistent sadness (33%), poor mental health (23%), and seriously considering suicide (14%) than in 2023 (40%, 29%, and 20%). About one in three still reported persistent sadness. The survey shows trends, not the reasons behind them."
      },
      {
        "q": "Does social media cause depression and anxiety in teens?",
        "a": "This is not settled as of the National Academies' 2023 review. It found there was not enough evidence to say social media causes changes in adolescent health across the whole population. It said social media has potential to both harm and benefit, and that studies often cannot tell whether social media affects health, whether health affects social media use, or both."
      },
      {
        "q": "How should I talk with my teen about their mental health?",
        "a": "The American Academy of Pediatrics recommends ongoing check-ins instead of one big talk. It suggests making it safe to share without judgment, listening more than you speak, and starting with specific, fair observations rather than accusations. If your teen does not want to talk, it suggests trying again in a few days."
      }
    ],
    "whenToGetHelp": "If you or someone you know is thinking about suicide, call or text 988, the Suicide & Crisis Lifeline, at any hour. It is free and confidential. If your child or teen is in immediate danger, call 911 or go to the nearest emergency room. The American Academy of Pediatrics says suicidal thoughts or actions should never be ignored, and that a parent whose teen is thinking about suicide but is not in crisis should contact the teen's pediatrician or mental health provider right away. Any talk of suicide or self-harm should be taken seriously. For other concerns, such as withdrawal, substance use, or sadness or irritability that does not lift, talk with a doctor or mental health professional. King Health Systems accepts Maryland Medicaid only. You can call 410-578-4340, Monday to Friday, 9 a.m. to 5 p.m. Offices are in Baltimore, Laurel, and Cockeysville.",
    "sources": [
      {
        "title": "CDC Data Show Encouraging Progress in Youth Health",
        "publisher": "Centers for Disease Control and Prevention (CDC)",
        "url": "https://www.cdc.gov/media/releases/2026/cdc-data-show-encouraging-progress-in-youth-health.html",
        "year": "2026"
      },
      {
        "title": "Teens, Social Media and Mental Health",
        "publisher": "Pew Research Center",
        "url": "https://www.pewresearch.org/internet/2025/04/22/teens-social-media-and-mental-health/",
        "year": "2025"
      },
      {
        "title": "To minimize harms and maximize benefits of social media to adolescent health, new report recommends setting industrywide standards, new protections against harassment",
        "publisher": "National Academies of Sciences, Engineering, and Medicine",
        "url": "https://www.nationalacademies.org/news/to-minimize-harms-and-maximize-benefits-of-social-media-to-adolescent-health-new-report-recommends-setting-industrywide-standards-new-protections-against-harassment",
        "year": "2023"
      },
      {
        "title": "Are school-based mental health programs working as hoped?",
        "publisher": "The Hospital for Sick Children (SickKids)",
        "url": "https://www.sickkids.ca/en/news/archive/2026/are-school-based-mental-health-programs-working-as-hoped/",
        "year": "2026"
      },
      {
        "title": "Mental Health for Adolescents",
        "publisher": "U.S. Department of Health and Human Services, Office of Population Affairs",
        "url": "https://opa.hhs.gov/adolescent-health/mental-health-adolescents",
        "year": "2024"
      },
      {
        "title": "Mental Health and Teens: Watch for Danger Signs",
        "publisher": "American Academy of Pediatrics (HealthyChildren.org)",
        "url": "https://www.healthychildren.org/English/ages-stages/teen/Pages/Mental-Health-and-Teens-Watch-for-Danger-Signs.aspx"
      },
      {
        "title": "988 Suicide & Crisis Lifeline",
        "publisher": "988 Suicide & Crisis Lifeline",
        "url": "https://988lifeline.org/"
      },
      {
        "title": "World Mental Health Day resources for teens and parents",
        "publisher": "YouTube Official Blog",
        "url": "https://blog.youtube/news-and-events/world-mental-health-day-resources-for-teens-and-parents/",
        "year": "2025"
      }
    ],
    "videos": [
      {
        "id": "kQlkvh-bxxw",
        "title": "How to Talk to Teens About Videos They Watch Without Lecturing Them",
        "channel": "American Psychological Association"
      }
    ],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "loneliness-connection-and-community",
    "title": "Loneliness, Connection and Community: What the Research Shows",
    "description": "A plain-language look at what research says about loneliness, peer support, awareness of 988, and trust in mental health care.",
    "topic": "Loneliness, connection and community",
    "readingMinutes": 5,
    "shortAnswer": "The World Health Organization (WHO) says about 1 in 6 people worldwide are affected by loneliness. Research on peer support, including online peer support, shows some benefits, but the evidence is still developing. This article is for education only. It is not medical advice and cannot diagnose or treat anything.",
    "keyTakeaways": [
      "The WHO says about 1 in 6 people worldwide are affected by loneliness, with the highest rates among teenagers.",
      "A review of 29 studies found that online peer support was linked to improvements in depression, anxiety and social functioning. The authors say it may be considered as an add-on to usual care, and that longer-term benefits still need to be clarified.",
      "Surveys fielded in 2025 found many US adults know little about 988, the call-or-text crisis line. In one survey of adults 50 and older, 69% had never heard of it before taking the survey.",
      "In a national survey of Black parents and young adults, more than three-quarters had a positive overall view of mental health care. Some also reported stigma concerns, and 28% of parents and 42% of young adults said negative stereotypes keep them from seeking professional treatment."
    ],
    "sections": [
      {
        "heading": "Loneliness is a public health topic, not a personal failing",
        "paragraphs": [
          "Feeling lonely is a human experience, and it is common. In June 2025, a World Health Organization (WHO) commission reported that about 1 in 6 people around the world are affected by loneliness. Among people ages 13 to 29, 17 to 21 percent reported feeling lonely, with the highest rates among teenagers. Rates also differed by country income. About 24 percent of people in low-income countries reported loneliness, compared with about 11 percent in high-income countries.",
          "The WHO also estimated that loneliness is linked to more than 871,000 deaths each year, or about 100 deaths every hour. Read that number carefully. It describes a link, and it does not prove that loneliness caused those deaths. The WHO also said that data on social isolation, meaning having few social contacts, is more limited than data on loneliness.",
          "The WHO calls on all Member States, communities and individuals to make social connection a public health priority. Its roadmap covers policy, research, interventions, better measurement and public engagement. The WHO also lists everyday steps people can take, such as reaching out to a friend who needs support, greeting a neighbor, joining a local group, or volunteering.",
          "The video below is a TED talk about social health."
        ]
      },
      {
        "heading": "Peer support: some benefits, with limits",
        "paragraphs": [
          "Peer support means getting help from someone who has lived through similar mental health challenges. One growing form is digital peer support, such as online groups or app-based support.",
          "A systematic review and meta-analysis, funded in part by the NIHR School for Primary Care Research, combined 29 studies with 5,825 participants. It found improvements in depression, anxiety, social functioning, quality of life and personal recovery. The size of these effects ranged from small to moderate. There were no significant effects on how engaged people were in treatment or how satisfied they were. The authors say digital peer support may be considered as an add-on to usual care.",
          "The authors note that early evidence suggested the benefits for depression, anxiety and social functioning may last. They also list clarifying longer-term benefits as a research priority.",
          "The wider picture is mixed. A 2024 umbrella review looked at 35 reviews of paid peer support for mental health. It found mixed results, with some evidence that peer support may improve depression symptoms, self-efficacy (confidence in managing one's own health) and recovery. Nearly all of the reviews it examined (97%) were rated low or critically low quality, so the findings should be read with caution."
        ]
      },
      {
        "heading": "Knowing where to turn: awareness of 988",
        "paragraphs": [
          "Connection also means knowing help exists. In 2022, 988 became the three-digit number to call or text for the 988 Suicide and Crisis Lifeline. According to the University of Michigan National Poll on Healthy Aging report, the Lifeline offers free, confidential, 24/7 access to trained crisis counselors.",
          "A survey of 1,090 US adults, run by NORC at the University of Chicago on November 6 to 10, 2025, found that only 10 percent were very or extremely familiar with 988. About 60 percent had limited or no familiarity. Adults 18 to 29 were significantly more likely to know about 988 than adults 65 and older. Among people who were extremely or very familiar with 988, 62 percent said they would contact it for thoughts of suicide. Among people who were not very or not at all familiar, 39 percent said the same. This shows a connection between knowing about 988 and saying you would use it. It does not show that one causes the other. The survey has a margin of error of about 4 percentage points.",
          "A University of Michigan National Poll on Healthy Aging asked 2,379 adults ages 50 to 95 about 988 in September 2025, and the report was published in July 2026. About 7 in 10 (69%) had never heard of 988 before taking the survey. Among those who had heard of it, 4% had ever contacted it. These are poll results, and they show that awareness efforts may be missing many older adults."
        ]
      },
      {
        "heading": "Trust is part of connection",
        "paragraphs": [
          "Reaching out is easier when people feel safe and understood. In 2025, the Child Mind Institute and The Steve Fund released a study of Black families' views and experiences with mental health care. Ipsos surveyed 1,000 Black parents of children under 18 who had concerns about their child's emotional or behavioral well-being, and 500 Black young adults ages 18 to 24. The survey ran from July 30 to August 22, 2024.",
          "More than three-quarters of respondents had an overall positive view of mental health care and mental health professionals. There was a gap in trust, though: 75 percent of parents and 56 percent of young adults agreed that mental health professionals are trustworthy.",
          "Some respondents also reported concerns. Forty-six percent of both parents and young adults agreed that it would harm them or their child to be labeled as having a mental health problem. Thirty-five percent of parents and 28 percent of young adults agreed that they had experienced racial discrimination in the mental health care system. Fifty percent of parents and 48 percent of young adults agreed that white mental health professionals do not understand the effect racism has had on their or their child's mental health.",
          "Respondents were also asked whether stigma keeps them from care. Twenty-eight percent of parents and 42 percent of young adults agreed that negative stereotypes prevent them from seeking professional treatment. The report says stigma does not stop everyone from seeking care, and that parents were less deterred by it than young adults.",
          "These are self-reported attitudes. The survey did not observe actual care-seeking or measure the quality of care, and it covers Black families only, so it should not be applied to every group.",
          "These sources describe different parts of connection: how common loneliness is, what peer support may offer, awareness of 988 and trust in care. The WHO suggests small steps, such as reaching out to a friend, greeting a neighbor or joining a local group. Learning about 988 before you ever need it is another way to be prepared."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is loneliness the same as being alone?",
        "a": "Not exactly. The WHO describes loneliness as the painful feeling that comes from a gap between the social connections a person wants and the ones they have. Social isolation is the objective lack of enough social connections. The WHO noted that data on isolation is more limited than data on loneliness."
      },
      {
        "q": "Does the research prove loneliness causes early death?",
        "a": "No. The WHO estimate of more than 871,000 deaths a year describes deaths linked to loneliness. It shows an association, not proof that loneliness caused those deaths."
      },
      {
        "q": "Can online peer support replace therapy or other care?",
        "a": "The research does not say that. A review of 29 studies found improvements in several outcomes, and the authors say digital peer support may be considered as an add-on to usual care. Longer-term benefits still need to be clarified."
      }
    ],
    "whenToGetHelp": "If you or someone you know is thinking about suicide or is in emotional crisis, call or text 988 right away, any time of day. If there is immediate danger, call 911. If loneliness, low mood or worry is making daily life harder and you would like to talk with a professional, King Health Systems may be able to help. King Health Systems accepts Maryland Medicaid only. You can call 410-578-4340 to ask about getting started. Offices are in Baltimore, Laurel and Cockeysville, open Monday to Friday, 9 a.m. to 5 p.m.",
    "sources": [
      {
        "title": "Social connection linked to improved health and reduced risk of early death",
        "publisher": "World Health Organization",
        "url": "https://www.who.int/news/item/30-06-2025-social-connection-linked-to-improved-heath-and-reduced-risk-of-early-death",
        "year": "2025"
      },
      {
        "title": "After 3 Years, 988 Suicide & Crisis Lifeline Still Largely Unknown",
        "publisher": "NORC at the University of Chicago",
        "url": "https://www.norc.org/research/library/after-3-years-988-suicide-crisis-lifeline-still-largely-unknown.html",
        "year": "2025"
      },
      {
        "title": "National Poll on Healthy Aging: mental health and the 988 Suicide & Crisis Lifeline report",
        "publisher": "University of Michigan Institute for Healthcare Policy and Innovation",
        "url": "https://ihpi.umich.edu/sites/default/files/2026-07/0510_NPHA-988-report_FINAL_07122026_0.pdf",
        "year": "2026"
      },
      {
        "title": "Digital peer support interventions for people with mental health conditions (systematic review and meta-analysis)",
        "publisher": "NIHR School for Primary Care Research",
        "url": "https://spcr.nihr.ac.uk/publications/digital-peer-support-mental-health-effectiveness/"
      },
      {
        "title": "The effectiveness, implementation, and experiences of peer support approaches for mental health: a systematic umbrella review",
        "publisher": "BMC Medicine",
        "url": "https://doi.org/10.1186/s12916-024-03260-y",
        "year": "2024"
      },
      {
        "title": "Mental Health Support for Black Families 2025 Study Report",
        "publisher": "Child Mind Institute and The Steve Fund",
        "url": "https://childmind.org/wp-content/uploads/2025/05/CMI_MHSBF_Report.pdf",
        "year": "2025"
      }
    ],
    "videos": [
      {
        "id": "LpSDuDIaBGk",
        "title": "Why Social Health Is Key to Happiness and Longevity | Kasley Killam | TED",
        "channel": "TED"
      }
    ],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "recovery-rehabilitation-and-peer-support",
    "title": "Recovery, Rehabilitation and Peer Support: What Recent Research Shows",
    "description": "A plain-language look at recent research on mental health recovery, supported employment and peer support, and what the evidence can and cannot tell us.",
    "topic": "Recovery, rehabilitation and peer support",
    "readingMinutes": 5,
    "shortAnswer": "Recovery means building a meaningful life, whether or not symptoms fully go away. In group studies, job support (IPS) and online peer support were linked to better outcomes on average, but the reviews vary in quality and cannot predict what will happen for any one person.",
    "keyTakeaways": [
      "Personal recovery is about connection, hope, identity, meaning and empowerment, not only about symptoms.",
      "Individual Placement and Support (IPS) is the most studied job-support approach. The authors of a January 2026 umbrella review report that most of the 35 systematic reviews they examined were rated critically low or low in quality, so confidence in the evidence is limited.",
      "In a 2025 review, online peer support added to care was linked to improvements in depression and anxiety (small to moderate) and to small gains in social functioning, quality of life and personal recovery. The authors say it may be considered as an adjunct to usual care.",
      "Supported education for college students is still being described and defined, and the scoping review summarized here does not show how well it works."
    ],
    "sections": [
      {
        "heading": "What recovery means today",
        "paragraphs": [
          "In mental health care, recovery does not always mean that symptoms are gone. Personal recovery means building a satisfying life, with or without ongoing symptoms. A widely used framework called CHIME describes five parts: connectedness, hope, identity, meaning and empowerment.",
          "A UK discussion document prepared in August 2024 by the IMPACT Network at the University of Birmingham describes recovery-based approaches this way. It says recovery is not tied to making symptoms disappear, and that the person, not only the professional, defines what recovery means. The document says its evidence review pointed to positive implications for both people using services and practitioners. The authors state that it is not an exhaustive review.",
          "This document is not a new trial, and it is based in the UK. Recovery is personal, so each person defines what it looks like for them."
        ]
      },
      {
        "heading": "Help with work: supported employment",
        "paragraphs": [
          "Individual Placement and Support (IPS) is a job-support approach that helps people find regular jobs in the community and gives ongoing support. An umbrella review published in January 2026 (Radu, Feher-Gavra and Rusu) looked at 40 earlier reviews of what helps and what gets in the way of employment for people with serious mental illness. It describes IPS as the most studied job-support approach.",
          "In several of those reviews, people in supported employment were more likely to get competitive work. One review reported that people in IPS were 1.92 times more likely to be in competitive employment than people getting usual services (95% confidence interval 1.53 to 2.42). Another reported 2.4 times more likely. A third found that 51% of people in supported employment (including IPS) got work, compared with 18% in traditional vocational rehabilitation.",
          "Findings by diagnosis were mixed. One review found larger job gains for psychotic disorders than for mood disorders, and the comparison is uncertain. Findings by region were also not consistent across reviews. One review found IPS worked better in regions with higher economic status, but that result was borderline. The authors describe negative symptoms, such as low motivation, as a commonly identified barrier to working. This rests mainly on one meta-analysis that found small to moderate effects.",
          "There are important limits. The authors report that most of the 35 systematic reviews were rated critically low or low in quality on a standard checklist (AMSR 2 is the name of the tool: AMSTAR 2). The 5 scoping reviews were appraised in a different way. The paper's own text and table disagree about at least one review's rating. Because many of the reviews with the largest job-gain figures were rated critically low, treat those numbers with caution. These results describe groups, not what will happen for any one person.",
          "Supported education helps people start or finish school or training. A scoping review published in February 2026 looked at 17 articles about programs for students with mental health problems in universities and colleges. It found that definitions of supported education varied and were not consistent, and that programs were mostly built on psychosocial rehabilitation and personal recovery ideas. That review described how programs are designed. It did not measure how well they work."
        ]
      },
      {
        "heading": "Peer support: what people report and what studies measure",
        "paragraphs": [
          "Peer support means people with lived experience of mental health challenges supporting others. A 2025 synthesis of qualitative studies proposed a framework called APPEAR. It describes peer support relationships as most helpful when they are Accepting, offer personalised practice, are Empowering, Available and Reciprocal. The authors link these conditions to improved personal recovery in six areas: self-acceptance, confidence, hopefulness, self-expression, relationships, and knowledge and skills. This is a summary of what people described, not proof that peer support causes improvement.",
          "Online peer support has also been studied. A systematic review and meta-analysis of 29 studies with 5,825 people receiving outpatient care looked at digital peer support, such as apps and online groups. On average it was linked to small-to-moderate improvements in depression (effect size -0.28) and anxiety (-0.47). It was also linked to small gains in social functioning, quality of life and personal recovery, and to higher patient activation, meaning more confidence and skill in managing one's own health. It found no significant effect on treatment engagement or satisfaction. The authors report preliminary evidence that some benefits last, and say digital peer support may be considered as an adjunct to usual care, offering accessible support between clinical contacts. These results may not carry over to in-person peer specialists.",
          "A separate review published in February 2025 combined 73 studies of mental health outcomes and 47 studies of physical health outcomes. It was aimed at general populations, and some samples included people with existing health conditions. On average, informal, naturally occurring online support had larger mental health effects than formal support from trained peers. Apps, social networking sites and video calls tended to show larger effects than forums, websites or email, but these platform comparisons are uncertain. The mental health benefit was smaller at follow-up than right after the programs. The studies differed greatly from one another, and many combined peer support with other parts such as education. This review does not show how online peer support works for people in treatment."
        ]
      },
      {
        "heading": "What this means for you",
        "paragraphs": [
          "The research reviewed here looks at recovery in terms of work, relationships and purpose as well as symptoms. Job support and peer support were both linked to better outcomes in group studies, but the evidence quality is limited, and none of these studies can tell you what will happen in your own life.",
          "If you are curious about rehabilitation or peer support, you can bring it up with a provider you trust. Questions about goals, such as work, school or connection with others, are a good place to start. The sources summarized here were published between 2024 and 2026. This article is for education only and is not medical advice or a diagnosis.",
          "The video below is from NAMI-NYC and discusses peer support in recovery. It is not research evidence."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does recovery mean my symptoms have to go away?",
        "a": "No. Personal recovery means building a meaningful life, including connection, hope, identity, meaning and empowerment, whether or not symptoms fully go away."
      },
      {
        "q": "Is online peer support as good as seeing a provider?",
        "a": "The research summarized here did not compare the two. The authors of the review suggest online peer support may be considered as an adjunct to usual care."
      },
      {
        "q": "Does supported employment work for everyone?",
        "a": "No. Research on supported employment, including IPS, describes results for groups. People in these programs were more likely to get regular jobs than people in other programs, but most of the systematic reviews were rated critically low or low in quality, and the results cannot predict one person's outcome."
      }
    ],
    "whenToGetHelp": "If you or someone you know is in crisis or thinking about suicide, call or text 988 right away. If there is immediate danger, call 911. For ongoing mental health support, King Health Systems accepts Maryland Medicaid only. You can call 410-578-4340, Monday to Friday, 9 a.m. to 5 p.m. Offices are in Baltimore, Laurel and Cockeysville.",
    "sources": [
      {
        "title": "Barriers and facilitators of employment in severe mental illness: an umbrella review",
        "publisher": "Frontiers in Rehabilitation Sciences (Radu, Feher-Gavra and Rusu), published 22 January 2026",
        "url": "https://www.frontiersin.org/journals/rehabilitation-sciences/articles/10.3389/fresc.2025.1731096/full",
        "year": "2026"
      },
      {
        "title": "Digital peer support interventions for people with mental health conditions in outpatient settings (Croke, Tyler et al.; DOI 10.1136/bmjment-2025-302275)",
        "publisher": "NIHR School for Primary Care Research (summary page for the BMJ Mental Health paper)",
        "url": "https://spcr.nihr.ac.uk/publications/digital-peer-support-mental-health-effectiveness/"
      },
      {
        "title": "The mental health peer support relationship: a realist informed qualitative meta synthesis",
        "publisher": "BMJ Open 15:e105211 (Hackman, Green, Pease, Clegg and Handley), via University of Hertfordshire Research Archive",
        "url": "https://uhra.herts.ac.uk/id/eprint/26673/",
        "year": "2025"
      },
      {
        "title": "The effects of digital peer support interventions on physical and mental health: a review and meta-analysis",
        "publisher": "Epidemiology and Psychiatric Sciences (Yeo, Fortuna, Lansford and Rudolph), published 13 February 2025",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11886969/",
        "year": "2025"
      },
      {
        "title": "Conceptual Frameworks and Practice Approaches to Supported Education Programmes in Higher Education Institutions: A Scoping Review",
        "publisher": "Journal of Psychosocial Rehabilitation and Mental Health (Springer Nature), published 16 February 2026",
        "url": "https://link.springer.com/article/10.1007/s40737-025-00512-9",
        "year": "2026"
      },
      {
        "title": "Recovery-based approaches to mental health: discussion material (prepared by Maria Teresa Ferazzoli, August 2024)",
        "publisher": "University of Birmingham, IMPACT Network",
        "url": "https://impact.bham.ac.uk/wp-content/uploads/2025/01/IMPACT-Network-Discussion-material-1_Recovery-Based.pdf",
        "year": "2024"
      }
    ],
    "videos": [
      {
        "id": "6o4cwCPUqLY",
        "title": "The Power of Peers in Recovery",
        "channel": "NAMI-NYC"
      }
    ],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "getting-care-with-maryland-medicaid",
    "title": "Getting Mental Health Care with Maryland Medicaid: What to Know",
    "description": "Plain-language guide to Maryland Medicaid mental health care: who runs it, telehealth, PRP referrals, 2026-2027 changes, and 988 help.",
    "topic": "Maryland Medicaid access to outpatient mental health care",
    "readingMinutes": 4,
    "shortAnswer": "Maryland Medicaid specialty mental health services are managed through a state-contracted company called Carelon Behavioral Health, according to the Maryland Department of Health (MDH) and its 2025 report to state lawmakers. Carelon took over from Optum when Optum's contract ended on December 31, 2024. MDH's May 2025 telehealth guide says video visits are covered and some services can be done by phone only, and the rules differ by service. Several federal Medicaid changes began on October 1, 2026 or are scheduled for 2027, so keeping your contact information current matters.",
    "keyTakeaways": [
      "According to MDH's behavioral health page and its 2025 report to lawmakers, Carelon Behavioral Health runs Maryland's public behavioral health system. Older pages that name Optum as the administrator may be out of date.",
      "MDH's May 2025 telehealth guide says Maryland Medicaid covers real-time video visits, and some services can also be done by phone only. Coverage depends on the program, so ask your clinic what your visit type allows.",
      "Psychiatric rehabilitation programs (PRPs) need a referral from a licensed mental health professional who is enrolled in Maryland Medicaid.",
      "An MDH slide deck dated September 2026 lists federal Medicaid changes that took effect October 1, 2026 or are scheduled for January 1, 2027 and July 2027. Keep your address and phone number current so notices reach you.",
      "If you are in crisis, call or text 988 at any time, including while you wait for a first appointment."
    ],
    "sections": [
      {
        "heading": "Who runs mental health coverage in Maryland",
        "paragraphs": [
          "Maryland Medicaid pays for specialty behavioral health services, such as clinic visits for mental health care, through a separate state system. A company called an administrative services organization helps run it. The MDH page says members and providers work with Carelon Behavioral Health to reach these covered services.",
          "Carelon took over from Optum. A 2025 MDH report to state lawmakers says Optum's contract ran from January 1, 2020 to December 31, 2024. Claims moved to Carelon in late December 2024, and Carelon was running the system from the start of 2025. Because of this change, older pages that name Optum as the administrator may be out of date.",
          "Carelon's website has a Find a Provider tool. MDH lists the HealthChoice Help Line at 800-284-4510. The pages used for this article do not describe a referral or authorization requirement for starting outpatient clinic care. To find out what applies to you, call the clinic you want to see or the HealthChoice Help Line."
        ]
      },
      {
        "heading": "Telehealth: care from home",
        "paragraphs": [
          "MDH's telehealth policy guide, last updated May 15, 2025, says Maryland Medicaid serves participants regardless of geographic location. It covers real-time video visits, and it says some services can be done audio-only, which includes phone calls. The guide says audio-only coverage depends on the program. You can take part from home or another secure place you and your provider agree on.",
          "The guide also says telehealth follows the same rules as in-person care, and services that need an in-person evaluation or cannot reasonably be done by telehealth are not billable that way. Policies can change after May 2025, so ask your clinic what your visit type allows."
        ]
      },
      {
        "heading": "Psychiatric rehabilitation programs and referrals",
        "paragraphs": [
          "Psychiatric rehabilitation programs, called PRPs, are a separate Medicaid service from outpatient mental health clinic care. State rules say a PRP referral must come from a licensed mental health professional who is enrolled with Maryland Medicaid. That person must currently provide inpatient, residential treatment center, or outpatient mental health services to you, and must help you make an informed choice of PRP provider.",
          "An MDH transmittal dated August 21, 2025 says that beginning January 1, 2026, PRPs must include the referring provider's NPI (a provider ID number) on claims, and Medicaid will deny PRP claims if the referring provider is not actively enrolled. This rule is written for providers, but it helps explain why a PRP may ask who referred you.",
          "MDH also extended a pause on new Medicaid enrollment for four kinds of programs: PRPs, PRPs (Health Home), Level 2.5 partial hospital programs, and Level 2.1 intensive outpatient programs. The pause covers ten areas, including Baltimore City, Baltimore County, Montgomery County, and Prince George's County. It was scheduled to run for six months from July 1, 2026. MDH says it continues to process revalidations for existing providers. The release does not describe changes for members. If you have questions about your own services, ask your provider."
        ]
      },
      {
        "heading": "Federal changes to Medicaid, and staying connected",
        "paragraphs": [
          "An MDH slide deck dated September 9, 2026 (per its file name) covers the federal law H.R. 1. It was made for community health workers, so it is not an official decision about your own eligibility. For adults, starting October 1, 2026, Medicaid eligibility is limited to U.S. citizens and certain groups of non-citizens, with exceptions for children and pregnant women. Emergency Medicaid is not affected.",
          "Starting January 1, 2027, adults aged 19 to 64 in the Affordable Care Act expansion group must meet work-related requirements, with a number of exemptions. The deck also lists shorter retroactive coverage starting January 1, 2027: one month for expansion adults and two months for others. For eligibility checks every six months instead of yearly for expansion adults, the deck gives two different dates, January 1, 2027 and July 2027. Check Maryland Health Connection for the current date.",
          "The deck lists medically frail people, including people with disabling mental disorders, among those who may be exempt from the work requirements. A June 2026 federal rule defines medical frailty, and KFF describes the definition as restrictive. Maryland's Attorney General is among 24 attorneys general and two governors who sued over the rule on June 29, 2026. Things may have changed since, so check MDH or Maryland Health Connection for current rules.",
          "What you can do now is practical. Keep your address, phone number, and email current with Medicaid. If you get a notice, read it and respond by the deadline. Ask your clinic or the state for help if you are unsure what to do.",
          "One more resource is the 988 Suicide & Crisis Lifeline. KFF reports that in March 2026, national 988 contact volume, counting calls, texts, and chats, was 15 percent higher than a year earlier. That shows more people are using it. It does not tell us about outcomes. You can call or text 988 at any time. The video below is from NAMI and is about mental health crisis response. It is not specific to Maryland Medicaid."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Do I need a referral to see an outpatient mental health clinic on Maryland Medicaid?",
        "a": "The pages used for this article do not describe a referral or authorization requirement for outpatient clinic care. Call the clinic or the HealthChoice Help Line (800-284-4510) to find out what applies to you. A referral from an enrolled licensed mental health professional is required for psychiatric rehabilitation programs (PRPs), which are a separate service."
      },
      {
        "q": "Can I get Maryland Medicaid mental health care by video or phone?",
        "a": "According to MDH's May 2025 telehealth guide, Maryland Medicaid covers real-time video visits, and some services can be done audio-only, depending on the program. Some services need an in-person evaluation, so ask your clinic what your visit type allows."
      },
      {
        "q": "What should I do about the Medicaid changes in 2026 and 2027?",
        "a": "Keep your address and contact information current so notices reach you, and respond to any notice by its deadline. Rules are still changing, so ask your clinic or the state, or check Maryland Health Connection, if you are unsure."
      },
      {
        "q": "Who runs Maryland's public behavioral health system now?",
        "a": "According to MDH's behavioral health page and its 2025 report to lawmakers, Carelon Behavioral Health does. It took over from Optum, whose contract ended December 31, 2024."
      }
    ],
    "whenToGetHelp": "If you or someone you know is in crisis or thinking about suicide, call or text 988 right away, any time of day. If there is immediate danger, call 911. 988 can help while you wait for a first appointment. About King Health Systems: King Health Systems accepts Maryland Medicaid only. It does not take self-pay or private insurance. You can call 410-578-4340 with questions about getting started. Offices are in Baltimore, Laurel, and Cockeysville, open Monday to Friday, 9 a.m. to 5 p.m.",
    "sources": [
      {
        "title": "Behavioral Health Coverage (HealthChoice)",
        "publisher": "Maryland Department of Health, Medicaid (HealthChoice)",
        "url": "https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx"
      },
      {
        "title": "Update on the Behavioral Health Administrative Services Organization (BHASO) Transition, 2025 Joint Chairmen's Report",
        "publisher": "Maryland Department of Health",
        "url": "https://health.maryland.gov/mmcp/Documents/ASOtransitionJCRfinal8-25.pdf",
        "year": "2025"
      },
      {
        "title": "Carelon Behavioral Health, Maryland forms and guides",
        "publisher": "Carelon Behavioral Health",
        "url": "https://www.carelonbehavioralhealth.com/providers/forms-and-guides/md"
      },
      {
        "title": "Maryland Medicaid Synchronous Telehealth Policy Guide (updated 2025-05-15)",
        "publisher": "Maryland Department of Health, Maryland Medicaid",
        "url": "https://health.maryland.gov/mmcp/provider/Documents/telehealth/Maryland-Medicaid-Telehealth-Program-Policy-Guide-May%202025.docx.pdf",
        "year": "2025"
      },
      {
        "title": "PT 13-26: Requirements for Providers Referring to Psychiatric Rehabilitation Programs",
        "publisher": "Maryland Department of Health",
        "url": "https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT13-26_Requirements_for_Providers_Referring_to_PRPs.pdf",
        "year": "2025"
      },
      {
        "title": "Maryland Department of Health extends pause for certain behavioral health providers",
        "publisher": "Maryland Department of Health",
        "url": "https://health.maryland.gov/newsroom/Pages/Maryland%20Department%20of%20Health%20extends%20pause%20for%20certain%20behavioral%20health%20providers.aspx",
        "year": "2026"
      },
      {
        "title": "Medicaid H.R. 1 Update (MDH slide deck, file dated 9.9.2026)",
        "publisher": "Maryland Department of Health, Maryland Medicaid",
        "url": "https://health.maryland.gov/pophealth/Community-Health-Workers/Documents/9.9.2026%20Medicaid%20H.R.%201%20Update.pptx.pdf",
        "year": "2026"
      },
      {
        "title": "The Medical Frailty Exemption from Medicaid Work Requirements: Key Takeaways from the CMS Interim Final Rule",
        "publisher": "KFF",
        "url": "https://www.kff.org/medicaid/the-medical-frailty-exemption-from-medicaid-work-requirements-key-takeaways-from-the-cms-interim-final-rule/",
        "year": "2026"
      },
      {
        "title": "Attorney General Brown Sues Trump Administration over Unlawful Implementation of Medicaid Work Requirements for Medically Frail",
        "publisher": "Maryland Office of the Attorney General",
        "url": "https://oag.maryland.gov/News/Pages/Attorney-General-Brown-Sues-Trump-Administration-over-Unlawful-Implementation-of-Medicaid-Work-Requirements-for-Medically-F.aspx",
        "year": "2026"
      },
      {
        "title": "988 Enters Its Fourth Year as Demand Grows and the Mental Health and Substance Use Landscape Shifts",
        "publisher": "KFF",
        "url": "https://www.kff.org/mental-health/988-enters-its-fourth-year-as-demand-grows-and-the-mental-health-and-substance-use-landscape-shifts/",
        "year": "2026"
      }
    ],
    "videos": [
      {
        "id": "mTI_MjHFWW4",
        "title": "A Mental Health Crisis Deserves a Mental Health Response",
        "channel": "NAMI"
      }
    ],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "how-psychiatric-rehabilitation-prp-works-in-maryland",
    "title": "How Psychiatric Rehabilitation (PRP) Works in Maryland",
    "description": "A plain guide to Maryland's Psychiatric Rehabilitation Program: what it is, who it helps, what services look like, and how referral and Medicaid work.",
    "topic": "Psychiatric rehabilitation",
    "readingMinutes": 6,
    "shortAnswer": "A Psychiatric Rehabilitation Program (PRP) is a community-based service that helps people with mental health conditions build daily living and social skills. In Maryland, PRP is almost exclusively funded by Medicaid, according to a state FAQ. You need a referral from a licensed mental health professional who is treating you and who is enrolled in Medicaid.",
    "keyTakeaways": [
      "PRP is skills-based support for daily life, such as managing a home, building social skills, and using community resources. It is not a replacement for therapy or medication care.",
      "A licensed mental health professional who currently treats you must refer you. That person must be enrolled in Maryland Medicaid and must be independent of the PRP.",
      "Maryland Medicaid pays for PRP. Claims are denied if the referring clinician is not actively enrolled in Medicaid. State notices give different start dates for this rule (January 1 or July 1, 2026), and both have passed.",
      "Maryland is rewriting its community behavioral health rules (COMAR 10.63). Details may change, so ask your provider what applies to you now."
    ],
    "sections": [
      {
        "heading": "What PRP is",
        "paragraphs": [
          "PRP stands for Psychiatric Rehabilitation Program. It helps people with mental health conditions do the things that make daily life work. That can mean cooking, budgeting, keeping a routine, getting along with others, or using services in your town.",
          "Maryland's rules for licensed programs describe PRP as community-based rehabilitation and recovery services. The current wording lists community living skills, activities of daily living, and family and peer support. The goal is to promote community integration and use of community resources. These rules are written for the programs, so they say what a program must offer, not what any one person will get.",
          "There are two kinds. One is for adults (PRP-A). The other is for minors, meaning people younger than 18 (PRP-M). The current rule text for the minors program lists self-care skills, getting along with peers, family and teachers, and semi-independent living skills."
        ]
      },
      {
        "heading": "Who it is for",
        "paragraphs": [
          "PRP is meant for people whose mental health condition affects how they function day to day. A program must show that the service is medically necessary. Maryland's PRP guidance says a person must be in mental health treatment for the condition PRP is addressing, and that the PRP must be coordinated with that treatment.",
          "That means PRP sits next to care such as therapy or psychiatric visits. It does not stand in for them. A Maryland FAQ for PRP providers also notes that this is an intensive service meant for the people who need it most. The FAQ is from October 2021, so some details may have changed. I did not find a plain-language state page that lists every eligibility rule. If you are unsure whether you qualify, your treating clinician is the best person to ask."
        ]
      },
      {
        "heading": "What services look like",
        "paragraphs": [
          "PRP happens in the community, not only in an office. A June 2024 draft of the state's rules from the Behavioral Health Administration proposed more detail. It describes teaching skills step by step, with instruction, demonstration, practice, and feedback. It also describes practice in real settings, and services at the times a person needs them, including evenings and weekends. Treat this as a draft. I could not confirm which parts took effect.",
          "The draft also describes a plan built with you. A rehabilitation assessment and individual plan would be completed with the person within the later of ten visits or 30 days of admission. The plan would be updated at least every six months. A rehabilitation specialist would provide clinical direction for each program site. For adults, the draft says programs should also keep asking about need and interest in supported employment and make referrals.",
          "The older FAQ also says the individual rehabilitation plan must be signed and dated by the person (or guardian) to show agreement. In plain terms, your goals should shape the work."
        ]
      },
      {
        "heading": "How referral and Medicaid work",
        "paragraphs": [
          "According to the state's PRP FAQ, PRPs are almost exclusively funded by Medical Assistance, which is Maryland's Medicaid program. Maryland's Medicaid rules (COMAR 10.09.59.05) say a person must be referred by a licensed mental health professional who does three things. The professional must be actively enrolled in Maryland Medicaid on the date of service, must facilitate an informed choice among PRP providers, and must currently provide inpatient, residential treatment center, or outpatient mental health services to you.",
          "The FAQ adds that the referring clinician must be independent of the PRP. It also says a referral should be dated within 60 days before services start, based on a face-to-face or telehealth assessment, and should explain why PRP is needed. It says a new referral, or documented teamwork between your therapist and the PRP, is needed about every six months. That FAQ is from 2021, so ask the program what it needs from you today.",
          "Two state notices dated August 21, 2025 changed the billing side. Beginning in 2026, PRP claims must list the referring clinician's National Provider Identifier (NPI), and Medicaid denies claims if that clinician is not actively enrolled. One 2025 notice gives the start as January 1, 2026; a later state page says July 1, 2026. Either date has now passed. The NPI must belong to an individual, not a group or facility. Licensed clinicians who do not bill Medicaid can enroll as referring-only providers. This rule is about enrollment paperwork. It is not a test of whether you need care. If a referral is delayed, you can ask your clinician whether their Medicaid enrollment is current."
        ]
      },
      {
        "heading": "What is changing, and what the evidence says",
        "paragraphs": [
          "Maryland is rewriting its community behavioral health rules, known as COMAR 10.63. A first proposal, published in May 2025, was withdrawn in August 2025. The state published a new proposal in the Maryland Register on August 21, 2026, and took comments through September 21, 2026. In that proposal, the adult and minors PRP rules would move to new chapters, 10.63.20 and 10.63.21. I do not know if the rules have been adopted. Program details could change.",
          "On results, the evidence has gaps. A 2019 review in Frontiers in Psychiatry lists skills-based practices such as social skills training, illness self-management training, and supported employment as having benefits for serious mental illness. The same authors say these practices are not widely available in real-world practice. They also say more research is needed on who is likely to respond, how long benefits last, and how intense and long treatment should be. The review is about psychiatric rehabilitation in general, not Maryland's PRP specifically. So skills-based support has research behind it, but it does not promise a specific result for any one person."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Do I need a referral to join a PRP in Maryland?",
        "a": "Yes. Maryland Medicaid rules say a licensed mental health professional who currently treats you must refer you. That clinician must be enrolled in Maryland Medicaid and must facilitate an informed choice among PRP providers."
      },
      {
        "q": "Does PRP replace therapy or medication care?",
        "a": "No. State guidance says a person must be in mental health treatment, and PRP must be coordinated with it. PRP adds skills support in daily life."
      },
      {
        "q": "Who pays for PRP?",
        "a": "According to the state's PRP FAQ, PRPs are almost exclusively funded by Medical Assistance, which is Maryland Medicaid. King Health Systems accepts Medicaid only."
      },
      {
        "q": "Is there a PRP for children and teens?",
        "a": "Yes. Maryland licenses a separate program for people younger than 18. It works on self-care, peer, family and school relationships, and semi-independent living skills."
      }
    ],
    "whenToGetHelp": "If you or someone you know is in crisis or thinking about suicide, call or text 988 to reach the 988 Lifeline. It is free, confidential, and open 24/7. If someone is in immediate danger, call 911. If you think PRP could help and are not sure how to start, talk with your current therapist or psychiatric provider about a referral. King Health Systems, which serves Medicaid members from offices in Baltimore, Laurel and Cockeysville, can also tell you what it needs.",
    "sources": [
      {
        "title": "PT 12-26 Psychiatric Rehabilitation Program Referring Provider Requirements",
        "publisher": "Maryland Department of Health, Medicaid and Behavioral Health Administration",
        "url": "https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT12-26_Psychiatric_Rehabilitation_PRP_Requirements.pdf",
        "year": "2025"
      },
      {
        "title": "PT 13-26 Requirements for Providers Referring to Psychiatric Rehabilitation Programs",
        "publisher": "Maryland Department of Health, Medicaid and Behavioral Health Administration",
        "url": "https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT13-26_Requirements_for_Providers_Referring_to_PRPs.pdf",
        "year": "2025"
      },
      {
        "title": "COMAR 10.63.03 proposed regulation publication forms (PRP-A and PRP-M text, current and draft)",
        "publisher": "Maryland Department of Health, Behavioral Health Administration",
        "url": "https://health.maryland.gov/bha/Documents/COMAR%20%2010.63.03%20Descriptions%20and%20Criteria%20for%20Programs%20and%20Services%20Required%20to%20Have%20an%20Accreditation-Based%20License.pdf",
        "year": "2024"
      },
      {
        "title": "COMAR 10.63 Regulatory Revisions",
        "publisher": "Maryland Department of Health, Behavioral Health Administration",
        "url": "https://health.maryland.gov/regs/Pages/BHA10.63Revisions.aspx",
        "year": "2026"
      },
      {
        "title": "COMAR 10.63 proposed regulation text, including chapters 10.63.20 (PRP-A) and 10.63.21 (PRP-M)",
        "publisher": "Maryland Department of Health, Behavioral Health Administration",
        "url": "https://health.maryland.gov/regs/SiteAssets/Pages/BHA10.63Revisions/10.63%20NOPA%20Reg%20Text%20-%20Final%20JFB%2005.26.2026%20Clean%20for%20Submission.pdf",
        "year": "2026"
      },
      {
        "title": "Frequently Asked Questions: Psychiatric Rehabilitation Programs (PRP)",
        "publisher": "Optum Maryland, for the Maryland Behavioral Health Administration",
        "url": "https://marylandbehavioralhealth.optum.com/content/dam/ops-maryland/documents/provider/providerresources/PRP%20FAQ%20-%20October%202021.pdf",
        "year": "2021"
      },
      {
        "title": "The Implementation of Evidence-Based Psychiatric Rehabilitation: Challenges and Opportunities for Mental Health Services (Vita and Barlati)",
        "publisher": "Frontiers in Psychiatry",
        "url": "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2019.00147/full",
        "year": "2019"
      },
      {
        "title": "988 Suicide and Crisis Lifeline",
        "publisher": "988lifeline.org",
        "url": "https://988lifeline.org/"
      }
    ],
    "videos": [],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "video-or-in-person-therapy-how-to-choose",
    "title": "Video, Phone or In-Person Therapy: How to Choose",
    "description": "Research says video therapy works about as well as in-person for many people. Learn what to weigh: privacy, tech, safety and when to meet face to face.",
    "topic": "Telehealth",
    "readingMinutes": 6,
    "shortAnswer": "For many common concerns, studies find video therapy works about as well as meeting in person. The best choice depends on your privacy at home, your tech, your safety needs and what feels right for you. If your symptoms are severe or complex, in-person care may be worth considering first, because research on those cases is thin.",
    "keyTakeaways": [
      "Reviews of research find video therapy and in-person therapy give similar results for conditions like depression and PTSD, and clients rate the bond with their therapist about the same.",
      "Phone and video both look effective, but few studies compare them head to head. Phone is easier to reach for many people. Video lets your therapist see more.",
      "Privacy at home and a steady connection matter. If you cannot get either, in-person may serve you better.",
      "There is little research on severe or complex conditions such as psychosis, bipolar disorder or personality disorder. Safety and your clinician's judgment should guide the choice."
    ],
    "sections": [
      {
        "heading": "What the research says about results",
        "paragraphs": [
          "The main question is simple: does therapy by video work as well as therapy in a room? For many people, the research says yes.",
          "A 2021 review of studies on individual therapy by video found that several well-studied treatments worked as well by video as in person. These were prolonged exposure, cognitive processing therapy and behavioural activation, used for PTSD and depression. Most large trials found no difference in client satisfaction, dropout, or the bond clients reported with the therapist, though therapists sometimes rated the bond lower. The National Institute of Mental Health (NIMH) says virtual care can be effective for anxiety, ADHD, bipolar disorder, depression and PTSD.",
          "A separate 2022 review looked at less common conditions. It included 12 trials with 931 people, covering conditions such as bulimia nervosa, addiction and childhood disorders. It found no significant difference between telehealth and face-to-face therapy. The authors were careful, though. They said they could not conclude that the two are equivalent, only that the evidence did not show a difference."
        ]
      },
      {
        "heading": "Video, phone or in person: how they compare",
        "paragraphs": [
          "A 2022 review of phone and video care found both appear about as effective as in-person care at reducing symptoms. It could not say whether phone or video is better. It pointed out that only four randomized trials compared them directly, and in those there was no difference in working alliance. Video gives your therapist visual cues, and patients in some studies said seeing each other helped build the relationship. Phone is easier to reach and tends to have fewer tech problems.",
          "Access matters here. The same review notes that phone is used more by older adults, rural patients, lower-income patients and some racial and ethnic minority groups. These groups often face barriers to video, such as the cost of a device or weak internet. The authors encouraged video, especially for psychotherapy, but favored a flexible approach that uses both, with the patient's clinical safety considered first.",
          "In-person care has its own strengths. NIMH lists the benefits of virtual care as no travel, flexible times, wider reach and a less intimidating feel. Going in person means giving up some of that convenience. But in a room, your therapist can see you fully, and you do not depend on a device or a signal."
        ]
      },
      {
        "heading": "Privacy and tech: what to check first",
        "paragraphs": [
          "Privacy is the biggest practical issue. NIMH notes that a visit can feel less private if someone nearby can see or hear it. Some people also feel uneasy using a camera at home, especially if a provider can see their surroundings. The 2021 review adds that home can bring distractions, and some clients treated sessions less formally.",
          "The American Psychological Association (APA) has a checklist for video sessions, written for psychologists. Its advice, in short, is to pick a private, reasonably quiet spot. Everyone present should be within view of the camera. No one should record without permission. Use a password-protected connection, not public Wi-Fi. Check the picture and sound, and make sure no one is muted.",
          "NIMH also suggests choosing a provider who uses a secure platform that protects your privacy and verifies your identity. You need an internet connection and a device such as a smartphone or computer. A poor connection or a malfunctioning device can disrupt a session, and navigating different devices or platforms can be confusing. If you do not have a private space or reliable tech, say so. Your care team can talk through other options."
        ]
      },
      {
        "heading": "When in-person may be the better choice",
        "paragraphs": [
          "Here the evidence has clear gaps. The 2021 review found no studies on video therapy for psychosis, bipolar disorder or personality disorder. It also said that severe and complex mental health problems have yet to be studied. The 2022 review of less common conditions found no eligible trials for schizophrenia, bipolar disorder or personality disorders, and says that limits how far its findings reach. A lack of studies does not mean video fails for these groups. It means we do not know.",
          "A federal brief from December 2024 (ASPE) looked at adults with serious mental illness and children with serious emotional disturbance. It drew on focus groups with providers, caregivers and patients, who weighed patient safety, access to care and how the mental health system is set up. That brief reflects opinions from focus groups, not test results, so treat it as a guide to the questions, not an answer. The APA checklist says your provider weighs safety, health and community risks when choosing between video and in-person care. It also says your provider should have a backup plan for technical difficulties and crises.",
          "In practice, in-person care may fit better when you have no private space, when video is hard for you to use, when symptoms are severe or changing fast, or when you simply connect better face to face. You can also change your mind later. NIMH says that if you have been in therapy a reasonable time and are not getting better, you should talk to your therapist, and you might explore other professionals or approaches."
        ]
      },
      {
        "heading": "How to decide, step by step",
        "paragraphs": [
          "Ask yourself four things. Can I talk freely where I live? Do I have a device and a steady connection, or at least a phone? Do I feel safe and supported between sessions? Do I feel more at ease at home or in an office?",
          "Then talk with your provider. NIMH's Psychotherapies page says a preliminary conversation helps you understand how treatment will proceed and whether you feel comfortable, and that rapport and trust are essential. Ask what options they offer, what happens if a call drops, and how they handle a crisis. The APA checklist asks the provider to have a backup plan for tech problems and crises, to know the local emergency resources near you, and to confirm your location and a phone number where you can be reached. Be ready to share both.",
          "Most of the strongest research is on adults and on a few types of therapy, so results may not apply to everyone. Many large trials used American veteran or military samples that were mostly male. If you are choosing for a child or teen, the APA checklist says parent or guardian permission may be required and that the provider should determine where the adult will be during the session."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is video therapy as good as in-person therapy?",
        "a": "For several common conditions, studies found similar results. Reviews also found similar ratings of the bond with the therapist in most large trials. But the research is strongest for PTSD and depression, and weaker for severe or complex conditions."
      },
      {
        "q": "Is a phone call as good as video?",
        "a": "A 2022 review found both appear to help, but it could not say which is better. Only four trials compared them directly. Phone is easier to reach and has fewer tech problems. Video lets the therapist see you."
      },
      {
        "q": "What if I do not have a private space at home?",
        "a": "Tell your care team. NIMH notes privacy is a real drawback of virtual visits. In-person visits may be a better fit, or you can look for a quiet spot at another time or place."
      },
      {
        "q": "Can I switch between formats?",
        "a": "Many care teams are open to it. If one format is not working, talk with your therapist about changing it. NIMH says to raise it with your therapist if you are not getting better."
      }
    ],
    "whenToGetHelp": "If you are thinking about hurting yourself or feel unsafe, call or text 988, the Suicide and Crisis Lifeline, or chat at 988lifeline.org. Call 911 for a life-threatening emergency. Do not wait for your next session. If a video call drops during a crisis, call 988 or 911 right away. King Health Systems serves people with Maryland Medicaid. If you are not sure which type of visit fits you, ask your care team to help you choose.",
    "sources": [
      {
        "title": "Getting Mental Health Support Virtually",
        "publisher": "National Institute of Mental Health (NIMH)",
        "url": "https://www.nimh.nih.gov/health/publications/what-is-telemental-health",
        "year": "2025"
      },
      {
        "title": "Psychotherapies",
        "publisher": "National Institute of Mental Health (NIMH)",
        "url": "https://www.nimh.nih.gov/health/topics/psychotherapies"
      },
      {
        "title": "Telepsychological services checklist",
        "publisher": "American Psychological Association (APA)",
        "url": "https://www.apa.org/topics/disasters-response/telepsychological-services-checklist"
      },
      {
        "title": "Telehealth Versus Face-to-face Psychotherapy for Less Common Mental Health Conditions: Systematic Review and Meta-analysis of Randomized Controlled Trials",
        "publisher": "JMIR Mental Health",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8956990",
        "year": "2022"
      },
      {
        "title": "Evidence of Phone vs Video-Conferencing for Mental Health Treatments: A Review of the Literature",
        "publisher": "Current Psychiatry Reports",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9437398",
        "year": "2022"
      },
      {
        "title": "Review of the current empirical literature on using videoconferencing to deliver individual psychotherapies to adults with mental health problems",
        "publisher": "Psychology and Psychotherapy: Theory, Research and Practice",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8451850",
        "year": "2021"
      },
      {
        "title": "Telehealth and in-person services for serious mental illness and serious emotional disturbance (issue brief)",
        "publisher": "ASPE, U.S. Department of Health and Human Services",
        "url": "https://aspe.hhs.gov/reports/telehealth-person-services-smi-sed",
        "year": "2024"
      }
    ],
    "videos": [],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "signs-a-teen-may-need-mental-health-support",
    "title": "Signs a Teen May Need Mental Health Support",
    "description": "How to tell normal teen moodiness from signs a teen needs support, how to start the talk, and when to get help, including 988.",
    "topic": "Teens and families",
    "readingMinutes": 5,
    "shortAnswer": "Teens have ups and downs. One bad week or one odd mood is usually not a red flag. But if warning signs last for weeks, or get in the way of home, school, or friends, it is time to talk with your teen and contact a health professional. If your teen talks about suicide, call or text 988 right away.",
    "keyTakeaways": [
      "One warning sign alone does not mean a crisis. Signs that keep showing up, or that affect daily life, are the reason to act.",
      "Watch for changes from your teen's usual self: sleep, eating, mood, friends, school, and things they used to enjoy.",
      "Start with calm, specific observations and plenty of listening. Expect to try more than once.",
      "Thoughts of suicide should never be ignored. 988 is open to everyone, by call or text, any time."
    ],
    "sections": [
      {
        "heading": "Normal moodiness or something more?",
        "paragraphs": [
          "Teens often get grumpy, tired, or private. That is part of growing up. The American Academy of Pediatrics (AAP) says that one warning sign alone does not necessarily mean a crisis. Consistent signs are what call for a conversation.",
          "The National Institute of Mental Health (NIMH) says it can be hard to tell whether a behavior is just part of growing up. Its advice is to look at how long the signs last and whether they get in the way of daily life. If they last for weeks or months and affect home, school, or friendships, it suggests contacting a health professional.",
          "A simple test: is this a change from how your teen usually is, and is it sticking around? That matters more than any single bad day."
        ]
      },
      {
        "heading": "Warning signs to watch for",
        "paragraphs": [
          "NIMH lists these signs for older children and teens: losing interest in things they used to enjoy, low energy, sleeping too much or too little, spending more and more time alone, avoiding friends or family, and dieting or exercising too much. It also lists self-harm, using alcohol or drugs, risky behavior, and thoughts of suicide.",
          "The AAP adds more signs parents may notice: mood swings, irritability, anger, or tearfulness, changes in sleep, weight or eating, schoolwork that suddenly gets harder, worries they cannot shake, canceling plans with friends, and hidden or unexplained injuries. A teen who refuses to talk about what is bothering them may also be struggling.",
          "NIMH also lists believing someone is controlling their mind, or hearing things other people do not hear, as signs that may warrant an evaluation. These lists describe reasons to check in. They do not diagnose anything. Only a trained professional can do that."
        ]
      },
      {
        "heading": "How common are these struggles?",
        "paragraphs": [
          "Many teens feel low. In the 2023 national Youth Risk Behavior Survey, run by the Centers for Disease Control and Prevention (CDC), 39.7% of high school students reported persistent feelings of sadness or hopelessness. The rate was 52.6% for girls and 27.7% for boys. About 20.4% said they had seriously considered attempting suicide in the past year.",
          "Those numbers show your teen is not alone. They also have limits. The CDC says the survey data are cross-sectional, so they cannot show cause or the direction of links. Different recall periods may add recall bias. The survey also did not measure the socioeconomic status of students' households. It describes high school students as a group. It cannot tell you about one teen."
        ]
      },
      {
        "heading": "How to start the conversation",
        "paragraphs": [
          "The AAP suggests making it clear that your teen can tell you anything without fear of judgment, lectures, or punishment. Listen more than you talk. Try to keep your own fears from shaping what you hear.",
          "Use specific things you have noticed, not accusations. For example, you might say you have seen them skipping dinner and staying in their room, and you are worried. Let silence happen. If your teen does not open up, try again in a few days. The AAP describes this as a series of ongoing conversations and check-ins, not one big talk.",
          "The AAP notes that stigma still exists, and that many people do not seek treatment because they fear what others will think. NIMH states that mental illnesses can be treated."
        ]
      },
      {
        "heading": "When to get help, and who to call",
        "paragraphs": [
          "If you keep seeing warning signs, contact your teen's pediatrician or a mental health provider. The AAP says a pediatrician can explain options, refer you to specialists, and help make a treatment plan and a crisis plan. NIMH also names school counselors as a place to start.",
          "Suicidal thoughts should never be ignored. If your teen has them but is not in immediate danger, the AAP says to contact their pediatrician or mental health provider right away. If your teen is in crisis, call or text 988. The 988 Lifeline says it is for everyone, and it is free, confidential, and open 24 hours a day. You can also reach out to 988 about a friend or loved one. A U.S. Department of Health and Human Services page on adolescent mental health says that in a crisis you can call or text 988 to reach trained counselors, in English or Spanish. In a life-threatening emergency, call 911.",
          "King Health Systems takes Medicaid only. We offer individual, family, and group therapy, psychiatric evaluation, and medication management at our Baltimore, Laurel, and Cockeysville offices. If you are not sure where to begin, a call to your teen's pediatrician is also a good first step."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long should a warning sign last before I act?",
        "a": "NIMH says to contact a health professional when signs last for weeks or months and interfere with daily life. No one number of days fits every teen, so trust your sense that something has changed. Suicidal thoughts or self-harm need attention right away."
      },
      {
        "q": "Will asking my teen about suicide put the idea in their head?",
        "a": "The sources we read did not address this directly, so we will not make a claim. The AAP says suicidal thoughts should never be ignored, and that trained 988 staff will help you figure out immediate steps. If you are unsure how to ask, call or text 988 for guidance."
      },
      {
        "q": "Can my teen use 988 on their own?",
        "a": "The 988 Lifeline says it is for everyone, by call, text, or chat. A federal health page says that in a crisis you can call or text 988 to reach trained counselors, in English or Spanish."
      },
      {
        "q": "What if my teen refuses to talk?",
        "a": "The AAP suggests allowing silence and trying again in a few days. You can also ask their pediatrician or school counselor for help. Many teens need more than one try before they open up."
      }
    ],
    "whenToGetHelp": "Call or text 988 any time if your teen talks about suicide, hurting themselves, or feels unsafe. You can also chat at 988lifeline.org. Call 911 for a life-threatening emergency. For warning signs that last for weeks or get in the way of home, school, or friends, contact your teen's pediatrician or a mental health provider. Contact King Health Systems to ask about services at our Baltimore, Laurel, or Cockeysville offices (Medicaid only).",
    "sources": [
      {
        "title": "Child and Adolescent Mental Health",
        "publisher": "National Institute of Mental Health (NIMH)",
        "url": "https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health",
        "year": "2024"
      },
      {
        "title": "Teen Mental Health: How to Know When Your Child Needs Help",
        "publisher": "HealthyChildren.org, American Academy of Pediatrics",
        "url": "https://www.healthychildren.org/English/ages-stages/teen/Pages/Mental-Health-and-Teens-Watch-for-Danger-Signs.aspx",
        "year": "2026"
      },
      {
        "title": "Youth Risk Behavior Survey 2023 report, MMWR Supplement 73(4)",
        "publisher": "Centers for Disease Control and Prevention",
        "url": "https://www.cdc.gov/mmwr/volumes/73/su/su7304a9.htm",
        "year": "2024"
      },
      {
        "title": "988 Suicide & Crisis Lifeline",
        "publisher": "988lifeline.org",
        "url": "https://988lifeline.org/"
      },
      {
        "title": "Mental Health for Adolescents",
        "publisher": "U.S. Department of Health and Human Services, Office of Population Affairs",
        "url": "https://www.opa.hhs.gov/adolescent-health/mental-health-adolescents"
      }
    ],
    "videos": [],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "sleep-and-mental-health",
    "title": "Sleep and Mental Health: How They Affect Each Other",
    "description": "Poor sleep and low mood or anxiety can feed each other. Learn what helps, including CBT-I and steady routines, and when to talk to a clinician.",
    "topic": "Everyday wellbeing",
    "readingMinutes": 6,
    "shortAnswer": "Sleep and mood affect each other. Poor sleep is linked to depression, and depression often disrupts sleep. A short course of cognitive behavioral therapy for insomnia (CBT-I) and a steady routine can help, and a clinician can guide you if sleep problems last.",
    "keyTakeaways": [
      "Sleep and mood seem to work in both directions, but researchers have not fully settled cause and effect.",
      "CBT-I is usually the first treatment recommended for long-term insomnia. It takes about 6 to 8 weeks and can be done in person, by phone, or online.",
      "In a review of 22 trials of digital CBT-I, depression and anxiety scores also improved by small to moderate amounts. Few of the trials included people with clinically significant symptoms.",
      "If poor sleep lasts for weeks, or you feel hopeless or unsafe, tell a clinician. For a crisis, call or text 988."
    ],
    "sections": [
      {
        "heading": "Why sleep and mood are linked",
        "paragraphs": [
          "The National Heart, Lung, and Blood Institute (NHLBI) says not getting enough sleep has been linked to depression, suicide, and risk-taking behavior. It also says lack of sleep changes activity in some parts of the brain. Adults who are short on sleep can have trouble with emotional control and coping with change. Children and teens who are short on sleep may feel angry, stressed, sad, or low on motivation.",
          "The link seems to run both ways. A 2019 review of the research found that sleep problems were once regarded as only a side effect of depression. Studies over time now suggest insomnia can also raise the risk of new or returning depression. The review calls the link a complex two-way one, not a simple cause and effect."
        ]
      },
      {
        "heading": "What the evidence does not tell us",
        "paragraphs": [
          "The same review says the evidence on insomnia and depression is conflicting in places. Scientists are still working out why the two are connected. The review does not describe a systematic search method, so it reads more as an overview than as a strict pooled analysis.",
          "The NHLBI health-effects page does not discuss anxiety. So we cannot say from that source how strongly sleep and anxiety are tied. Many people do notice that worry keeps them awake and that a bad night makes worry worse, but that is common experience, not a finding we are citing here."
        ]
      },
      {
        "heading": "What helps: CBT-I",
        "paragraphs": [
          "NHLBI says cognitive behavioral therapy for insomnia, called CBT-I, is usually recommended as the first treatment option for long-term insomnia. It is a plan of about 6 to 8 weeks. A doctor, nurse, or therapist can provide it in person, by phone, or online.",
          "CBT-I has several parts. Cognitive therapy helps reduce worry about not being able to sleep. Relaxation or meditation helps the body settle. Sleep education builds good habits. Sleep restriction gives you a set amount of time in bed, which can be increased as your sleep improves. Stimulus control means going to bed only when sleepy, getting out of bed if you cannot sleep, and using the bed only for sleep and sexual activity, so the bed becomes linked with sleep.",
          "CBT-I may help mood too. A 2023 review pooled 22 trials with 10,486 people who used digital CBT-I. After treatment, insomnia scores improved by a large amount. Depression and anxiety scores improved by small to moderate amounts. Fully automated programs with no therapist also showed benefits."
        ]
      },
      {
        "heading": "Limits of the CBT-I research",
        "paragraphs": [
          "The authors of that 2023 review list several limits. The trials differed a lot from one another, including in their comparison groups. Many results were self-rated on questionnaires. The authors say 12 of the 22 studies had fewer than 50 people, which could lead to overestimating the effects. They also say long-term outcomes were difficult to evaluate, so we know little about effects over time. Few studies included people with clinically significant depression or anxiety, so the results mostly speak to milder symptoms.",
          "In a subgroup of 12 studies, the review found larger benefits when more people finished the program. That suggests sticking with it may matter. The review supports benefits for milder symptoms. It does not show that CBT-I replaces care for depression or anxiety."
        ]
      },
      {
        "heading": "Routine steps you can try",
        "paragraphs": [
          "NHLBI suggests simple habits. Go to sleep and wake up at about the same time every day, including weekends. Keep the bedroom cool, quiet, and dark, and avoid TV and devices in bed. Avoid caffeine, nicotine, and alcohol close to bedtime. Exercise during the day, at least 5 to 6 hours before bed. Avoid naps, especially in the afternoon. Follow a routine that helps you wind down and relax before bed.",
          "The CDC says adults aged 18 to 60 need 7 or more hours of sleep. Teens aged 13 to 17 need 8 to 10 hours. These are general guides, not a test you pass or fail. If you have tried good habits and still cannot sleep, that is a reason to ask for help, not a personal failing."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does poor sleep cause depression?",
        "a": "Not simply. Research suggests the link runs both ways, and insomnia can raise the risk of depression. But a 2019 review calls the evidence conflicting in places and the link complex. Poor sleep is a sign worth taking seriously, not proof of a cause."
      },
      {
        "q": "Is CBT-I the same as sleeping pills?",
        "a": "No. CBT-I is a talk-based, skills-based program of about 6 to 8 weeks. NHLBI names it as the usual first treatment for long-term insomnia. Medicines are a separate topic. NHLBI says to talk with your doctor about the benefits and side effects of insomnia medicines."
      },
      {
        "q": "How long does insomnia need to last before I should get help?",
        "a": "NHLBI describes chronic insomnia as 3 or more nights a week for more than 3 months. You do not need to wait that long to ask for help, especially if sleep problems come with low mood, worry, or trouble getting through the day."
      },
      {
        "q": "Can melatonin or sleep aids fix this?",
        "a": "NHLBI says research has not proven that melatonin works for insomnia. It also warns that antihistamines can be unsafe for some people and that the FDA does not currently review dietary supplements for safety and effectiveness before they are sold. Check with a prescriber or pharmacist before starting one."
      }
    ],
    "whenToGetHelp": "Talk to a clinician if sleep trouble lasts more than a few weeks, if it is hurting your mood, work, school, or home life, or if low mood, worry, or hopelessness is growing. King Health Systems accepts Maryland Medicaid and offers individual, family, and group therapy, psychiatric evaluation, and medication management at our Baltimore, Laurel, and Cockeysville offices. If you are thinking about harming yourself or feel unsafe, call or text 988 any time, day or night. It is free and confidential. For a medical or life-threatening emergency, call 911.",
    "sources": [
      {
        "title": "Sleep Deprivation and Deficiency: Health Effects",
        "publisher": "National Heart, Lung, and Blood Institute (NIH)",
        "url": "https://www.nhlbi.nih.gov/health/sleep-deprivation/health-effects",
        "year": "2022"
      },
      {
        "title": "Insomnia: Treatment",
        "publisher": "National Heart, Lung, and Blood Institute (NIH)",
        "url": "https://www.nhlbi.nih.gov/health/insomnia/treatment",
        "year": "2022"
      },
      {
        "title": "Insomnia",
        "publisher": "National Heart, Lung, and Blood Institute (NIH)",
        "url": "https://www.nhlbi.nih.gov/health/insomnia",
        "year": "2022"
      },
      {
        "title": "About Sleep",
        "publisher": "Centers for Disease Control and Prevention",
        "url": "https://www.cdc.gov/sleep/about/index.html",
        "year": "2024"
      },
      {
        "title": "Digital cognitive behavioral therapy for insomnia on depression and anxiety: a systematic review and meta-analysis",
        "publisher": "npj Digital Medicine (Lee et al.)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10039857/",
        "year": "2023"
      },
      {
        "title": "Depression in sleep disturbance: A review on a bidirectional relationship, mechanisms and treatment",
        "publisher": "Journal of Cellular and Molecular Medicine (Fang et al.)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6433686/",
        "year": "2019"
      },
      {
        "title": "988 Suicide & Crisis Lifeline",
        "publisher": "988lifeline.org",
        "url": "https://988lifeline.org/"
      }
    ],
    "videos": [],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
  {
    "slug": "grief-vs-prolonged-grief-when-to-get-help",
    "title": "Grief or Prolonged Grief? When to Get Help",
    "description": "Grief is painful but usually eases. Learn common reactions, what helps, and signs that grief may need extra support from a professional.",
    "topic": "Grief and loss",
    "readingMinutes": 5,
    "shortAnswer": "Grief after a loss is normal, and it often comes in waves. For most people it slowly gets easier to carry. If intense grief lasts a year or more and keeps you from daily life, it may be prolonged grief disorder, and treatment can help.",
    "keyTakeaways": [
      "Grief has no fixed timeline. Sadness, numbness, poor sleep, and waves of pain are common.",
      "Most grieving people do not need treatment. Time and support from others help many people.",
      "Prolonged grief disorder is intense grief that lasts at least a year for adults and badly disrupts daily life. It was added to the DSM-5-TR in 2022.",
      "Talk therapy built for grief can help. If you have thoughts of suicide, call or text 988 right away."
    ],
    "sections": [
      {
        "heading": "What grief often looks like",
        "paragraphs": [
          "Grief is the natural response to losing someone close. It touches feelings, thoughts, the body, and spirit. The VA lists common signs such as waking too early, eating too much or too little, pulling away from others, feeling tired, and a tight throat.",
          "Grief often comes in waves. A song, a holiday, or an anniversary can bring the pain back. That does not mean you are going backward. The National Cancer Institute (NCI) notes that grief often arrives in brief, intense waves. Many people also have good memories mixed in with the pain.",
          "Sleep trouble is common, especially in the first few months. The VA says early waking is a common experience in the first few months of grief and usually improves on its own."
        ]
      },
      {
        "heading": "How long does normal grief last?",
        "paragraphs": [
          "There is no set schedule. The NCI says most bereaved people adapt over time, typically within the first 6 months to 2 years. The VA says many people reach a point around 6 to 12 months where the loss is integrated into life, but it also says there is no true timetable of grief.",
          "Pain can still return years later. That alone is not a sign that something is wrong. The question is whether the grief is so strong and constant that you cannot get through your days.",
          "One limit to know: the old idea of fixed stages of grief is not well supported. The NCI says stage models have limited research support. Your path may not look like anyone else's."
        ]
      },
      {
        "heading": "What is prolonged grief disorder?",
        "paragraphs": [
          "Prolonged grief disorder (PGD) is intense, lasting grief after a death that goes beyond what is expected in your culture or faith and seriously affects daily life. The American Psychiatric Association (APA) says it was added to the DSM-5-TR, released in March 2022. For adults, the death must have happened at least 1 year ago. For children and teens, at least 6 months ago.",
          "The APA says a person needs at least 3 symptoms nearly every day for at least the last month. These include feeling that part of yourself has died, disbelief about the death, avoiding reminders, intense emotional pain, trouble returning to life and relationships, emotional numbness, feeling life has no meaning without the person, and intense loneliness.",
          "How common is it? Estimates differ. The APA says about 4% to 15% of bereaved adults have lasting PGD symptoms. The NCI cites a higher estimate of 15% to 30% for chronic or complicated grief, and it says it does not give a separate number for the formal diagnosis. The numbers vary because researchers define and count it in different ways. Also, only a clinician can tell you whether you have PGD. This article cannot.",
          "Risk is higher after a sudden or traumatic death, when someone is isolated, uses drugs or alcohol, or had depression or grief symptoms before the loss, according to the VA. The APA also says risk is greater when a death happens very suddenly or under unnatural circumstances."
        ]
      },
      {
        "heading": "What helps",
        "paragraphs": [
          "For most people, simple things help. The VA lists regular physical activity, especially outdoors or with others, regular meals, good sleep habits, and limiting alcohol and non-prescribed drugs. Leaning on trusted family and friends helps. So can a grief support group, a personal ritual such as planting a tree, or writing a letter to the person who died.",
          "The APA says most grieving people do not usually need mental health treatment. For those with lasting symptoms, it says treatments using elements of cognitive behavioral therapy (CBT) can reduce symptoms. It describes Prolonged Grief Therapy as focusing on accepting the loss and working toward goals in a world without the person. Support groups and peer support can lessen isolation. The APA adds that CBT for insomnia can improve sleep problems that come with PGD.",
          "Medicine is a smaller part of the picture. The APA says there are currently no medications to treat specific symptoms of grief. The NCI reports that antidepressants helped depression after a loss but had limited effect on how intense grief felt. It adds that the studies were often small and some were open-label, so the evidence is not strong. Talk with your prescriber before changing any medicine.",
          "The evidence has other gaps. The NCI says experts disagree about whether normal grief needs professional care, and that evidence on the benefit of grief counseling is contested. Much of the research also focuses on spousal or partner loss, so results may not fit every kind of loss."
        ]
      },
      {
        "heading": "Grief, depression, and when to reach out",
        "paragraphs": [
          "Grief and depression can look alike, and they can happen together. The NCI says grief tends to come in waves, mixed with positive memories and a steady sense of self-esteem. Major depression more often involves a constant negative mood and feelings of worthlessness. The VA says grief usually involves preoccupation with the person who died, while depression more often involves negative rumination and self-critical thoughts.",
          "Consider talking with a mental health professional if intense grief lasts a year or more and gets in the way of life, if you feel your life has no meaning, or if sleep problems continue. You can also reach out sooner. You do not have to wait a year to ask for support.",
          "If you have thoughts of suicide, get help right away. The 988 Suicide and Crisis Lifeline is free, confidential, and open 24/7. You can call or text 988."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is it normal to still cry or feel sad a year after a loss?",
        "a": "Yes, it can be. Grief can return in waves, even years later, often around holidays or anniversaries. What matters is whether the pain stays so strong that it stops you from living your daily life. If it does, talk with a professional."
      },
      {
        "q": "Does grief always go through five stages?",
        "a": "No. The National Cancer Institute says stage models of grief have limited research support. People grieve in different ways and at different speeds."
      },
      {
        "q": "Do I need medicine for grief?",
        "a": "Most grieving people do not usually need treatment. The APA says there are currently no medications to treat specific symptoms of grief. If you also have depression, a prescriber can talk with you about options."
      },
      {
        "q": "How is prolonged grief disorder different from depression?",
        "a": "They can overlap, and a clinician can sort it out. Grief tends to come in waves with positive memories mixed in. Depression is more constant low mood with feelings of worthlessness."
      },
      {
        "q": "Can children have prolonged grief?",
        "a": "Yes. The APA says the time rule for children and teens is at least 6 months after the death. A child's preoccupation may focus on the circumstances of the death. A professional who works with children can help."
      }
    ],
    "whenToGetHelp": "Reach out to a mental health professional if intense grief lasts a year or more and disrupts your daily life, if you feel life has no meaning without the person, if sleep problems continue, or if you feel worthless or keep criticizing yourself. If you have thoughts of suicide or want to harm yourself, call or text 988 at any time. In an emergency, call 911. King Health Systems accepts Maryland Medicaid and offers individual, family, and group therapy, psychiatric evaluation, and medication management at our Baltimore, Laurel, and Cockeysville offices.",
    "sources": [
      {
        "title": "Prolonged Grief Disorder",
        "publisher": "American Psychiatric Association",
        "url": "https://www.psychiatry.org/patients-families/prolonged-grief-disorder",
        "year": "2022"
      },
      {
        "title": "Grief, Bereavement, and Coping With Loss (PDQ) Health Professional Version",
        "publisher": "National Cancer Institute",
        "url": "https://www.cancer.gov/about-cancer/advanced-cancer/caregivers/planning/bereavement-hp-pdq",
        "year": "2024"
      },
      {
        "title": "Coping with Grief",
        "publisher": "U.S. Department of Veterans Affairs, Whole Health Library",
        "url": "https://www.va.gov/WHOLEHEALTHLIBRARY/overviews/coping-with-grief.asp"
      },
      {
        "title": "988 Suicide and Crisis Lifeline",
        "publisher": "988lifeline.org",
        "url": "https://988lifeline.org/"
      }
    ],
    "videos": [],
    "review": {
      "type": "ai",
      "date": "2026-11-09"
    }
  },
];
