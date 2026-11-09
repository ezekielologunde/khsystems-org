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
  }
];
