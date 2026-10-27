export type Platform = 'facebook' | 'meta' | 'tiktok' | 'copyright' | 'legal' | 'all';

export interface ReportItem {
  id: string;
  classNumber: string; // e.g. "Class 14", "Class 26", etc.
  moduleId: string;
  moduleName: string;
  title: string;
  banglaTitle: string;
  platform: Platform;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  officialFormUrl?: string;
  formName?: string;
  description: string;
  appealTemplate: string;
  appealTemplateAr?: string; // Arabic version if available
  appealTemplateBn?: string; // Bangla version if available
  instructions: string[];
  tags: string[];
  isPinned?: boolean;
  isCustom?: boolean;
}

export interface ModuleFolder {
  id: string;
  number: string;
  name: string;
  banglaName: string;
  icon: string;
  badge: string;
  badgeColor: string;
  description: string;
}

export const MODULE_FOLDERS: ModuleFolder[] = [
  {
    id: 'mod_04',
    number: '04',
    name: 'Basic Reporting',
    banglaName: 'মৌলিক সেফটি ও ভায়োলেশন রিপোর্ট (Class 14 - 19)',
    icon: 'ShieldAlert',
    badge: 'CLASS 14 - 19',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    description: '18+ আইডি, পেজ, গ্রুপ, ক্লোন একাউন্ট, আন্ডার-১৩ চাইল্ড ও সেক্স অফেন্ডার রিপোর্ট।'
  },
  {
    id: 'mod_05',
    number: '05',
    name: 'Advanced Facebook Reports',
    banglaName: 'অ্যাডভান্সড ফেসবুক ও লিগ্যাল রিপোর্ট (Class 20 - 28)',
    icon: 'Gavel',
    badge: 'CLASS 20 - 28',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    description: 'ইমপোস্টার, মানহানি, প্রাইভেসি, মেমোরিয়ালাইজেশন, লিগ্যাল রিমুভাল, ইন্ডিয়ান গ্রিভেন্স (FB & IG) ও ইনস্টাগ্রাম ফেক ফর্ম।'
  },
  {
    id: 'mod_06',
    number: '06',
    name: 'Copyright Section',
    banglaName: 'কপিরাইট ও ইন্টেলেকচুয়াল প্রোপার্টি (Class 29 - 34)',
    icon: 'Scale',
    badge: 'CLASS 29 - 34',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    description: 'FB→FB, FB→TikTok, IG→FB, Blogger→FB, থার্ড-পার্টি ও মাল্টিপল কপিরাইট ক্লেইমস।'
  },
  {
    id: 'mod_07',
    number: '07',
    name: 'TikTok Section',
    banglaName: 'টিকটক টেকডাউন ও অপারেশনস (Class 35 - 39)',
    icon: 'Video',
    badge: 'CLASS 35 - 39',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    description: '১০+ টিকটক একাউন্ট তৈরি গাইড, ফেক রিপোর্ট, আন্ডার-এজ, প্রাইভেসি ও TikTok→FB কপিরাইট।'
  },
  {
    id: 'mod_meta_2026',
    number: 'META-26',
    name: 'New Professional Updates (Meta 2026)',
    banglaName: 'মেটা ২০২৬ নতুন হাই-পাওয়ার্ড আপডেট',
    icon: 'Flame',
    badge: 'ENTERPRISE 2026',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-500/15',
    description: 'ডেঞ্জারাস অর্গানাইজেশনস, ইমার্জেন্সি সিকিউরিটি ফ্রিজ ও মাল্টি-ল্যাঙ্গুয়েজ এআই আপিল।'
  }
];

export const DEFAULT_REPORTS: ReportItem[] = [
  // =========================================================================
  // 🔰 MODULE 04 — BASIC REPORTING (CLASS 14 - 19)
  // =========================================================================
  {
    id: 'class_14',
    classNumber: 'Class 14',
    moduleId: 'mod_04',
    moduleName: 'Module 04 — Basic Reporting',
    title: 'Class 14: 18+ ID Report',
    banglaTitle: 'ক্লাস ১৪: ১৮+ আইডি রিপোর্ট (Adult Profile Takedown)',
    platform: 'facebook',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/274459462613911',
    formName: 'Meta Report An Impairment or Policy Breach Form',
    description: 'টার্গেটের পার্সোনাল প্রোফাইলে ১৮+ এডাল্ট কন্টেন্ট, নুডিটি বা সেক্সুয়াল অ্যাক্টিভিটি থাকলে মেটা পলিসি লঙ্ঘনে আইডি ব্যান করার আপিল।',
    tags: ['Class 14', '18+ ID', 'Nudity', 'Sexual Content', 'Profile Ban'],
    instructions: [
      'টার্গেটের প্রোফাইল থেকে নির্দিষ্ট কন্টেন্টের পার্মালিংক বা স্ক্রিনশট লিংক নোট করুন।',
      'টার্গেট লিংক [TARGET] এ দিন এবং ভিকটিম/রিপোর্টার লিংক [VICTIM] এ দিন।',
      'ফেসবুকের "Report Profile" অপশনে "Nudity or sexual activity" সিলেক্ট করে এই আপিল ডেসক্রিপশনে সাবমিট করুন।'
    ],
    appealTemplate: `URGENT SAFETY VIOLATION NOTICE: 18+ ADULT CONTENT ON PERSONAL PROFILE (CLASS 14)

TO: Meta Community Integrity & Content Moderation Desk
SUBJECT PROFILE URL: [TARGET]
COMPLAINANT / ADVOCATE: [VICTIM]

VIOLATION AUDIT:
The personal user account identified as [TARGET] is actively hosting, broadcasting, and circulating explicit adult media, sexual solicitation, and non-consensual sexual content in direct contravention of Section 14 (Adult Nudity and Sexual Activity) of the Meta Community Standards.

DETAILS OF BREACH:
1. Public propagation of explicit imagery and adult solicitation links through profile status and featured stories.
2. Endangering community standards and exposing minors to unrestricted adult content without age-verification safeguards.
3. Severe reputational and psychological harassment targeting [VICTIM].

MANDATORY ACTION SOUGHT:
Immediate permanent suspension of profile [TARGET] and algorithmic sanitization of all associated uploaded explicit media.

Certified Incident Report — Signal Hackers CSB Protocol`
  },
  {
    id: 'class_15',
    classNumber: 'Class 15',
    moduleId: 'mod_04',
    moduleName: 'Module 04 — Basic Reporting',
    title: 'Class 15: 18+ Page Report',
    banglaTitle: 'ক্লাস ১৫: ১৮+ পেজ রিপোর্ট (Adult Facebook Page Ban)',
    platform: 'facebook',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/274459462613911',
    formName: 'Meta Commercial & Public Page Policy Breach Portal',
    description: 'ফেসবুক পেজে এডাল্ট বা পর্নোগ্রাফিক কন্টেন্ট বিক্রি, প্রচার বা ট্রাফিক ড্রাইভ করলে পুরো পেজ আনপাবলিশ ও ডিলিট করার আবেদন।',
    tags: ['Class 15', '18+ Page', 'Unpublish Page', 'Adult Traffic', 'Meta Standards'],
    instructions: [
      '১৮+ কন্টেন্ট ছড়ানো পেজের সরাসরি লিংক [TARGET] ফিল্ডে বসান।',
      'পেজের "Report Page" অপশনে গিয়ে "Nudity or Sexual Activity" নির্বাচন করুন।',
      'পেজটি যদি কোনো ভিকটিম বা ব্র্যান্ডের ক্ষতি করে তবে [VICTIM] লিংক সংযুক্ত করুন।'
    ],
    appealTemplate: `ENFORCEMENT DEMAND: UNLAWFUL ADULT PAGE OPERATION (CLASS 15)

TO: Meta Pages Operations & Trust Evaluation Unit
INFRINGING PAGE URL: [TARGET]
REPORTING PARTY: [VICTIM]

GROUNDS FOR IMMEDIATE TERMINATION:
The public page operating at [TARGET] functions as an unmoderated conduit for adult explicit material, commercial sex solicitation, and deceptive erotic redirection links, severely violating Meta Commercial Policies and Community Guidelines.

SPECIFIC INFRACTIONS:
- Public display of graphic nudity, provocative media, and adult subscription links.
- Artificially amplifying sexually explicit posts to gain viral reach without age-gating.
- Utilizing unauthorized likenesses of [VICTIM] to deceptively attract page followers.

REMEDY DEMANDED:
Instantly unpublish, delete, and permanently restrict the administrator privileges associated with Page [TARGET].

Submitted by CSB Cyber Enforcement Desk`
  },
  {
    id: 'class_16',
    classNumber: 'Class 16',
    moduleId: 'mod_04',
    moduleName: 'Module 04 — Basic Reporting',
    title: 'Class 16: 18+ Group Report',
    banglaTitle: 'ক্লাস ১৬: ১৮+ গ্রুপ রিপোর্ট (Adult Group Termination)',
    platform: 'facebook',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/274459462613911',
    formName: 'Meta Group Integrity & Community Safety Escalation',
    description: 'পাবলিক বা প্রাইভেট ফেসবুক গ্রুপে অবৈধ এডাল্ট কন্টেন্ট, নন-কনসেন্ট মিডিয়া বা টেলিগ্রাম লিঙ্ক শেয়ার করলে গ্রুপটি ব্যান করার ফর্ম।',
    tags: ['Class 16', '18+ Group', 'Mass Group Ban', 'Sex Exploitation', 'Direct Ban'],
    instructions: [
      'টার্গেট গ্রুপের সম্পূর্ণ লিংক [TARGET] এ দিন।',
      'গ্রুপের রিপোর্ট অপশনে গিয়ে "Nudity or Sexual Activity" সিলেক্ট করে এই লিগ্যাল নোটিশ সাবমিট করুন।',
      'প্রয়োজনে গ্রুপের এডমিন আইডি শনাক্ত করে একসাথে রিপোর্ট করুন।'
    ],
    appealTemplate: `PRIORITY ESCALATION: SYSTEMIC ADULT EXPLOITATION IN FACEBOOK GROUP (CLASS 16)

TO: Meta Groups Integrity & Safety Operations
TARGET COMMUNITY GROUP URL: [TARGET]
AFFLICTED CITIZEN / REPORTER: [VICTIM]

FACTUAL SUMMARY:
The group located at [TARGET] has devolved into a coordinated clearinghouse for illicit adult media, non-consensual intimate imagery, and prohibited external redirection hubs (Telegram/cloud leaks), constituting a Tier-1 breach of Meta Community Safety Framework.

CRITICAL POLICY VIOLATIONS:
1. Meta Community Standards Section 14 — Distribution of unconsented sexually explicit files.
2. Group administration systematically facilitates and condones explicit media sharing.
3. Severe harassment, defamation, and malicious exposure harming [VICTIM].

MANDATORY RELIEF:
1. Unconditional administrative shutdown and permanent dissolution of Group [TARGET].
2. Account suspension of group creators and active moderators.

Actionable Dispatch via Signal Hackers CSB Command`
  },
  {
    id: 'class_17',
    classNumber: 'Class 17',
    moduleId: 'mod_04',
    moduleName: 'Module 04 — Basic Reporting',
    title: 'Class 17: Clone Account Report',
    banglaTitle: 'ক্লাস ১৭: ক্লোন অ্যাকাউন্ট রিপোর্ট (Clone Account Rapid Strike)',
    platform: 'facebook',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/169486816475808',
    formName: 'Report An Impersonation Account (No Account Required)',
    description: 'আসল ব্যক্তির নাম, প্রোফাইল পিকচার ও ফ্রেন্ডলিস্ট কপি করে তৈরি করা ক্লোন বা ফেক আইডি তাৎক্ষণিক টার্মিনেট করার স্ট্রাইক।',
    tags: ['Class 17', 'Clone ID', 'Impersonation', 'Duplicate Profile', 'Identity Theft'],
    instructions: [
      'ক্লোন প্রোফাইল লিংক [TARGET] এবং আসল ব্যক্তির প্রোফাইল লিংক [VICTIM] দিন।',
      'ক্লোন আইডিতে গিয়ে "Find support or report" > "Pretending to be someone" > "A friend" বা "Me" সিলেক্ট করুন।',
      'অফিশিয়াল লিংকে কোনো অ্যাকাউন্ট ছাড়া সরাসরি সরকারি এনআইডি দিয়ে সাবমিট করা যায়।'
    ],
    appealTemplate: `RAPID STRIKE DISPATCH: MALICIOUS CLONE ACCOUNT TERMINATION (CLASS 17)

TO: Meta Global Identity Verification & Fraud Mitigation Desk
CLONED / FRAUDULENT TARGET URL: [TARGET]
GENUINE / AUTHENTIC USER PROFILE: [VICTIM]

STATEMENT OF IDENTITY THEFT:
The fraudulent profile operating under [TARGET] is an unauthorized duplicate/clone of the authentic account [VICTIM]. The perpetrator has cloned the official profile photograph, bio, cover art, and personal credentials of [VICTIM] with specific intent to deceive mutual contacts, commit identity fraud, and extract illicit financial/social favors.

STANDARDS IN VIOLATION:
- Meta Inauthentic Behavior & Identity Misrepresentation Policies.
- Malicious social engineering and targeted harassment.

DEMANDED RESOLUTION:
Expedite immediate cross-verification of account registration timestamps. Because [VICTIM] possesses senior prior art and authentic identity credentials, terminate and purge [TARGET] forthwith.

Under Penalty of Perjury,
Legal Proxy for [VICTIM] — CSB v5.0`
  },
  {
    id: 'class_18',
    classNumber: 'Class 18',
    moduleId: 'mod_04',
    moduleName: 'Module 04 — Basic Reporting',
    title: 'Class 18: Under-13 Child Report',
    banglaTitle: 'ক্লাস ১৮: আন্ডার-১৩ চাইল্ড রিপোর্ট (COPPA Underage Child Ban)',
    platform: 'facebook',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/209046679279097',
    formName: 'Meta Report An Underage Child (Under 13 Years Old)',
    description: '১৩ বছরের কম বয়সী শিশুর সুরক্ষার জন্য COPPA ও আন্তর্জাতিক শিশু সুরক্ষা আইনে ফেসবুক থেকে একাউন্ট পার্মানেন্টলি ডিলিট করার ফর্ম।',
    tags: ['Class 18', 'Underage', 'COPPA', 'Child Safety', 'Strict Ban'],
    instructions: [
      'টার্গেট একাউন্ট [TARGET] এ দিন। শিশুর অভিভাবক বা সচেতন নাগরিকের রেফারেন্স [VICTIM] এ দিন।',
      'মেটার অফিশিয়াল আন্ডার-এজ ফর্মে লিংক সাবমিট করুন।',
      'মেটা এই রিপোর্টটিকে সর্বোচ্চ গুরুত্ব (Highest Legal Priority) দিয়ে তাৎক্ষণিক অ্যাকাউন্ট ফ্রিজ করে।'
    ],
    appealTemplate: `STATUTORY COPPA DIRECTIVE: IMMEDIATE EXPULSION OF UNDERAGE MINOR (CLASS 18)

TO: Meta Specialized Child Protection & Regulatory Compliance Directorate
CHILD TARGET ACCOUNT: [TARGET]
ADVOCATE / REPORTING GUARDIAN: [VICTIM]

STATUTORY MANDATE:
Under the Children's Online Privacy Protection Act (15 U.S.C. §§ 6501-6506) and Article 3.1 of Meta's Terms of Service, individuals under the age of thirteen (13) years are strictly precluded from holding or operating accounts on Meta platforms without verifiable parental consent mechanisms.

FACTUAL FINDINGS:
Diagnostic analysis confirms that the user of [TARGET] is a minor under the age of thirteen (13). Maintaining this profile exposes the minor to digital predation, unauthorized behavioral profiling, and developmental risks.

MANDATED ACTION:
1. Deactivate and permanently delete the profile [TARGET] within 24 hours.
2. Expunge all biometric and telemetry data associated with this minor.

Dispatched by Authorized Child Welfare Monitoring Desk`
  },
  {
    id: 'class_19',
    classNumber: 'Class 19',
    moduleId: 'mod_04',
    moduleName: 'Module 04 — Basic Reporting',
    title: 'Class 19: Sex Offender Report',
    banglaTitle: 'ক্লাস ১৯: সেক্স অফেন্ডার রিপোর্ট (Convicted Sex Offender Ban)',
    platform: 'facebook',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/265646190226316',
    formName: 'Meta Convicted Sex Offender Reporting Portal',
    description: 'মেটার টার্মস অনুযায়ী রেজিস্টার্ড বা যৌন অপরাধে দণ্ডিত ব্যক্তিদের আজীবনের জন্য ব্যান করার অফিশিয়াল ফর্ম ও টেক্সট।',
    tags: ['Class 19', 'Sex Offender', 'Permanent Ban', 'Public Safety', 'Meta Legal'],
    instructions: [
      'অফিশিয়াল পোর্টালে সরাসরি যান।',
      'টার্গেটের ফেসবুক প্রোফাইল লিংক [TARGET] দিন।',
      'মেটা জিরো টলারেন্স প্রটোকল অনুযায়ী ওই ব্যক্তির সকল সম্পর্কিত অ্যাকাউন্ট ও ডিভাইস ব্ল্যাকলিস্ট করে।'
    ],
    appealTemplate: `FORMAL NOTICE: CONVICTED SEX OFFENDER PERMANENT BAN (CLASS 19)

TO: Meta Legal Compliance & Public Safety Sanctions Office
SUBJECT OF COMPLAINT: [TARGET]
COMPLAINANT ADVOCACY DESK: [VICTIM]

CONTRACTUAL INELIGIBILITY:
Under Section 3.1 of Meta Terms of Service: "You may not use our Products if you are a convicted sex offender."

The person controlling the account [TARGET] is actively disqualified under Meta safety covenants. Their continued digital presence endangers minors, women, and the community at large, and constitutes a direct breach of contractual service boundaries.

ACTION REQUIRED:
Execute irreversible termination of [TARGET] and place associated device fingerprints and credentials onto the platform permanent exclusion register.

Submitted by Threat Intelligence & Safety Compliance — Signal Hackers CSB`
  },

  // =========================================================================
  // 🔰 MODULE 05 — ADVANCED FACEBOOK REPORTS (CLASS 20 - 28)
  // =========================================================================
  {
    id: 'class_20',
    classNumber: 'Class 20',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 20: Imposter Report',
    banglaTitle: 'ক্লাস ২০: ইমপোস্টার রিপোর্ট (Official Legal Imposter Escalation)',
    platform: 'legal',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/295309487309948',
    formName: 'Meta Official Imposter & Power of Attorney Desk',
    description: 'অন্যের নাম বা পরিচিতি অপব্যবহার করে পরিচালিত ফেক আইডির বিরুদ্ধে অফিশিয়াল লিগ্যাল রিপ্রেজেন্টেশন ফর্মের মাধ্যমে চূড়ান্ত টেকডাউন।',
    tags: ['Class 20', 'Imposter', 'Legal Desk', 'Power of Attorney', 'High Priority'],
    instructions: [
      'আসল ভিকটিমের তথ্য [VICTIM] এবং প্রতারক আইডির তথ্য [TARGET] এ সেট করুন।',
      'মেটা লিগ্যাল রিপ্রেজেন্টেশন ফর্মে পেস্ট করে সাবমিট করুন।',
      'প্রয়োজনে ভিকটিমের পরিচয়পত্র প্রদর্শন করুন।'
    ],
    appealTemplate: `LEGAL INTERVENTION: FORMAL IMPOSTER REPORT & IDENTITY RESTITUTION (CLASS 20)

TO: Meta Platforms, Inc. — Legal Trust & Safety Unit
IMPOSTER ENTITY URL: [TARGET]
AUTHORIZED PRINCIPAL / VICTIM: [VICTIM]

I represent [VICTIM], whose distinct legal identity, public reputation, and proprietary likeness are being unlawfully expropriated by the entity operating [TARGET].

LEGAL SPECIFICATION:
The respondent [TARGET] is masquerading as the victim, intentionally disseminating unauthorized statements and deceiving contacts. This deliberate misrepresentation violates Meta Integrity Policies and creates actionable civil liability.

REQUEST FOR RELIEF:
1. Immediate decommission of account [TARGET].
2. Restoration of identity protections to [VICTIM].

Declared and sworn under professional obligation,
Legal Proxy for [VICTIM]`
  },
  {
    id: 'class_21',
    classNumber: 'Class 21',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 21: Defamation Report',
    banglaTitle: 'ক্লাস ২১: ডিফেমেশন রিপোর্ট (Civil Defamation & Libel Notice)',
    platform: 'legal',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/430253071144967',
    formName: 'Meta Defamation Takedown Request Form',
    description: 'ব্যক্তি বা প্রতিষ্ঠানের বিরুদ্ধে উদ্দেশ্যপ্রণোদিত মিথ্যা অপপ্রচার, মানহানিকর পোস্ট বা ভিডিও ডিলিট করার আইনি নোটিশ।',
    tags: ['Class 21', 'Defamation', 'Libel', 'Slander', 'Reputation Defense'],
    instructions: [
      'মানহানিকর পোস্ট বা প্রোফাইলের লিংক [TARGET] এ দিন।',
      'ক্ষতিগ্রস্ত ব্যক্তি/প্রতিষ্ঠানের লিংক [VICTIM] এ দিন।',
      'অফিশিয়াল ডিফেমেশন ফর্মে বিস্তারিত আইনি ড্রাফট পেস্ট করুন।'
    ],
    appealTemplate: `FORMAL STATUTORY NOTICE OF DEFAMATION AND HARMFUL FALSEHOOD (CLASS 21)

TO: Meta Legal Content Moderation & Defamation Escalation Unit
AGGRIEVED PARTY: [VICTIM]
DEFAMATORY MATERIAL HOSTED AT: [TARGET]

NATURE OF LEGAL GRIEVANCE:
The publications accessible at [TARGET] contain demonstrably untrue, fabricated, and malicious claims specifically directed against [VICTIM]. These statements were calculated to inflict reputational damage, personal distress, and commercial disparagement.

Meta Community Guidelines strictly prohibit targeted degradation, harassment, and intentional libel.

REMEDY DEMANDED:
Remove the defamatory publication at [TARGET] immediately and prevent mirrored reproduction across all Meta networks.

Submitted by Legal Counsel on behalf of [VICTIM]`
  },
  {
    id: 'class_22',
    classNumber: 'Class 22',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 22: Privacy Violation Report',
    banglaTitle: 'ক্লাস ২২: প্রাইভেসি ভায়োলেশন রিপোর্ট (NCII & Personal Data Leak)',
    platform: 'legal',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/144059062408922',
    formName: 'Meta Privacy Rights & Non-Consensual Imagery Form',
    description: 'অনুমতি ছাড়া ব্যক্তিগত ছবি, ফোন নম্বর, এনআইডি বা গোপন তথ্য ফাঁস করলে তাৎক্ষণিক প্রাইভেসি টেকডাউন।',
    tags: ['Class 22', 'Privacy', 'Doxxing', 'NCII', 'Emergency Takedown'],
    instructions: [
      'যে লিংকে প্রাইভেসি লঙ্ঘন হয়েছে তা [TARGET] ফিল্ডে দিন।',
      'ভিকটিমের তথ্য [VICTIM] এ দিন।',
      'মেটার প্রাইভেসি রাইটস ফর্মে এই জরুরি আবেদন সাবমিট করুন।'
    ],
    appealTemplate: `URGENT PRIVACY RIGHTS INFRINGEMENT & DOXXING REMEDIATION NOTICE (CLASS 22)

TO: Meta Global Privacy Operations Desk
OFFENDING TARGET URL: [TARGET]
AFFECTED INDIVIDUAL: [VICTIM]

PRIVACY VIOLATION PARTICULARS:
The content hosted at [TARGET] displays, disseminates, and exposes private, confidential, and personally identifiable information (PII) belonging exclusively to [VICTIM] without prior authorization or legal consent.

VIOLATIONS:
1. Meta Privacy Rights Directive — Unauthorized publication of private contact coordinates, personal records, and non-consensual imagery.
2. Malicious doxxing inciting coordinated online aggression.

DIRECT MANDATE:
Execute emergency de-indexing and permanent deletion of the infringing media at [TARGET] with immediate effect.

Signed by Privacy Rights Advocate for [VICTIM]`
  },
  {
    id: 'class_23',
    classNumber: 'Class 23',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 23: Memorialization Request',
    banglaTitle: 'ক্লাস ২৩: মেমোরিয়ালাইজেশন রিকোয়েস্ট (Deceased Account Protection)',
    platform: 'facebook',
    severity: 'MEDIUM',
    officialFormUrl: 'https://www.facebook.com/help/contact/234739086860192',
    formName: 'Meta Memorialization Request Form',
    description: 'মৃত ব্যক্তির অ্যাকাউন্ট হ্যাকিং বা অপব্যবহার থেকে রক্ষা করতে মেমোরিয়ালাইজড (Remembering) করার অফিশিয়াল রিকোয়েস্ট।',
    tags: ['Class 23', 'Memorialization', 'Deceased Account', 'Remembering', 'Honor Profile'],
    instructions: [
      'প্রয়াত ব্যক্তির ফেসবুক প্রোফাইল লিংক [TARGET] এ দিন।',
      'আবেদনকারী পরিবারের সদস্য বা ঘনিষ্ঠ ব্যক্তির লিংক [VICTIM] এ দিন।',
      'মৃত্যুর প্রমাণপত্র (Death Certificate/Obituary Link) প্রস্তুত রাখুন।'
    ],
    appealTemplate: `FORMAL REQUEST FOR ACCOUNT MEMORIALIZATION (CLASS 23)

TO: Meta Specialized Accounts & Memorialization Directorate
DECEASED INDIVIDUAL'S PROFILE: [TARGET]
PETITIONING FAMILY MEMBER / REPRESENTATIVE: [VICTIM]

REQUEST SPECIFICATION:
We respectfully request the official memorialization of the account located at [TARGET] following the demise of the account holder. Memorializing this account will protect their digital legacy, prevent unauthorized access or hacking attempts, and preserve their memory for grieving family and friends.

We stand prepared to furnish authentic obituary documents, death certificate copies, and familial verification upon request.

Respectfully submitted,
Family Representative on behalf of [VICTIM]`
  },
  {
    id: 'class_24',
    classNumber: 'Class 24',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 24: Legacy Contact Setup',
    banglaTitle: 'ক্লাস ২৪: লিগ্যাসি কন্টাক্ট সেটআপ ও অ্যাক্সেস (Legacy Contact Management)',
    platform: 'facebook',
    severity: 'MEDIUM',
    officialFormUrl: 'https://www.facebook.com/help/1070665206293088',
    formName: 'Meta Legacy Contact Management Desk',
    description: 'প্রয়াত ব্যক্তির অ্যাকাউন্টের লিগ্যাসি কন্টাক্ট হিসেবে ডেটা ব্যাকআপ ও প্রোফাইল ব্যবস্থাপনার আইনি আবেদন।',
    tags: ['Class 24', 'Legacy Contact', 'Digital Inheritance', 'Account Management'],
    instructions: [
      'প্রয়াত ব্যক্তির প্রোফাইল [TARGET] এবং লিগ্যাসি কন্টাক্টের লিংক [VICTIM] দিন।',
      'মেটার লিগ্যাসি কন্টাক্ট সাপোর্ট ফর্মে প্রয়োজনীয় কাগজপত্রসহ আবেদন করুন।'
    ],
    appealTemplate: `OFFICIAL APPLICATION: LEGACY CONTACT VERIFICATION AND POSTHUMOUS ACCESS (CLASS 24)

TO: Meta Legal Records & Deceased User Management Unit
PRIMARY PROFILE: [TARGET]
DESIGNATED LEGACY CONTACT: [VICTIM]

PETITION OVERVIEW:
The applicant [VICTIM] is the legally designated legacy contact / authorized next-of-kin for the account [TARGET]. Pursuant to Meta's Legacy Contact terms, we hereby apply for the formal verification of this legacy assignment to manage tributes, pin final announcements, and maintain archival integrity.

Submitted by Authorized Legacy Contact [VICTIM]`
  },
  {
    id: 'class_25',
    classNumber: 'Class 25',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 25: Legal Removal Request',
    banglaTitle: 'ক্লাস ২৫: লিগ্যাল রিমুভাল রিকোয়েস্ট (Court Order & Law Enforcement Takedown)',
    platform: 'legal',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/268228883256323',
    formName: 'Meta Global Law Enforcement & Legal Request Desk',
    description: 'আদালতের আদেশ বা সাইবার ক্রাইম আইনের আওতায় মেটা লিগ্যাল অপারেশনস থেকে কন্টেন্ট রিমুভ করার আবেদন।',
    tags: ['Class 25', 'Legal Removal', 'Court Order', 'Law Enforcement', 'Statutory Demand'],
    instructions: [
      'অবৈধ পোস্ট বা আইডির লিংক [TARGET] এ দিন।',
      'আইনজীবীর নাম ও আবেদনকারী [VICTIM] ফিল্ডে দিন।',
      'কোর্ট অর্ডার বা মামলার রেফারেন্স নম্বর থাকলে তা ডেসক্রিপশনে যুক্ত করুন।'
    ],
    appealTemplate: `FORMAL STATUTORY NOTICE OF LEGAL TAKEDOWN DEMAND (CLASS 25)

TO: Meta Platforms, Inc. — Global Legal Compliance Directorate
TARGET IDENTIFIER SUBJECT TO LEGAL ACTION: [TARGET]
PETITIONER / LEGAL COUNSEL: [VICTIM]

LEGAL NOTICE & CITATION:
This communication constitutes formal notice of illegal content and demand for immediate removal under statutory law. The content hosted under [TARGET] constitutes an ongoing unlawful act inflicting severe civil harm upon [VICTIM].

Continued hosting following formal statutory notice places the hosting provider on notice regarding forfeiture of statutory intermediary immunities.

DEMANDED RELIEF:
Immediately restrict and permanently remove the infringing URLs associated with [TARGET].

Certified True by Legal Counsel on behalf of [VICTIM]`
  },
  {
    id: 'class_26',
    classNumber: 'Class 26',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 26: Indian Grievance Officer (Facebook)',
    banglaTitle: 'ক্লাস ২৬: ইন্ডিয়ান গ্রিভেন্স অফিসার - ফেসবুক (IT Rules 2021 Statutory Notice)',
    platform: 'legal',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/indian_grievance_officer',
    formName: 'Resident Grievance Officer Portal for Facebook (India)',
    description: 'ভারতের IT Rules 2021 অনুযায়ী ফেসবুকের রেসিডেন্ট গ্রিভেন্স অফিসারের কাছে বাধ্যতামূলক ২৪-৭২ ঘণ্টার মধ্যে পদক্ষেপ নেওয়ার আইনি নোটিশ।',
    tags: ['Class 26', 'Grievance Officer', 'Facebook India', 'IT Rules 2021', '24h SLA'],
    instructions: [
      'টার্গেট লিংক [TARGET] ও ভিকটিমের তথ্য [VICTIM] এ সেট করুন।',
      'গ্রিভেন্স অফিসার পোর্টালে "Rule 3(2)(b)" ক্যাটাগরিতে ২৪ ঘণ্টার জরুরি নিষ্পত্তির জন্য সাবমিট করুন।'
    ],
    appealTemplate: `STATUTORY GRIEVANCE NOTICE UNDER RULE 3(2)(b) & RULE 4 OF THE INFORMATION TECHNOLOGY (INTERMEDIARY GUIDELINES AND DIGITAL MEDIA ETHICS CODE) RULES, 2021

TO: The Resident Grievance Officer, Meta Platforms (Facebook India)
IN THE GRIEVANCE OF: [VICTIM] (Complainant)
AGAINST INFRINGING ACCOUNT/CONTENT: [TARGET]

Dear Sir/Madam,

Pursuant to the mandatory statutory requirements of Rule 3(2)(b) of the Information Technology Rules, 2021, an intermediary is legally bound to remove or disable access to content exposing individuals, impersonating them, or violating privacy WITHIN TWENTY-FOUR (24) HOURS.

GRIEVANCE PARTICULARS:
1. Infringing Entity URL: [TARGET]
2. Complainant Name & Identity: [VICTIM]
3. Offense Description: Unlawful impersonation, defamatory publications, and intentional infliction of reputational harm.

STATUTORY TIMELINE DEMAND:
Acknowledge this grievance within 24 hours and execute permanent deactivation of [TARGET] within 72 hours (or within 24 hours if impersonation/nudity).

Submitted with full legal responsibility,
Authorized Representative for [VICTIM]`
  },
  {
    id: 'class_27',
    classNumber: 'Class 27',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 27: Indian Grievance Officer (Instagram)',
    banglaTitle: 'ক্লাস ২৭: ইন্ডিয়ান গ্রিভেন্স অফিসার - ইনস্টাগ্রাম (Instagram Grievance Notice)',
    platform: 'legal',
    severity: 'CRITICAL',
    officialFormUrl: 'https://help.instagram.com/contact/636276399721841',
    formName: 'Resident Grievance Officer Portal for Instagram',
    description: 'ইনস্টাগ্রাম অ্যাকাউন্টের সাইবার ক্রাইম, হ্যারাসমেন্ট বা ফেক আইডির বিরুদ্ধে গ্রিভেন্স অফিসারের নিকট আইনি নোটিশ।',
    tags: ['Class 27', 'Grievance Officer', 'Instagram India', 'IT Rules 2021', 'High Priority'],
    instructions: [
      'টার্গেট ইনস্টাগ্রাম প্রোফাইল [TARGET] দিন।',
      'ভিকটিমের তথ্য [VICTIM] এ দিন।',
      'ইনস্টাগ্রামের গ্রিভেন্স অফিসার পোর্টালে এই আইনি ফরম্যাটটি সাবমিট করুন।'
    ],
    appealTemplate: `STATUTORY NOTICE TO RESIDENT GRIEVANCE OFFICER — INSTAGRAM PLATFORM (CLASS 27)

TO: Resident Grievance Officer, Instagram / Meta India
SUBJECT INFRINGING INSTAGRAM HANDLE: [TARGET]
COMPLAINANT IDENTITY: [VICTIM]

Sir/Madam,

This statutory complaint is lodged under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 regarding severe infractions originating on Instagram.

STATEMENT OF FACTS:
The Instagram account [TARGET] is actively operating in breach of Indian statutory provisions and Meta Community Guidelines by impersonating, defaming, and cyberbullying [VICTIM].

MANDATORY RELIEF REQUIRED:
1. Issue an immediate written acknowledgement containing a unique grievance ticket number within 24 hours.
2. Permanently disable and remove [TARGET] within 72 hours.

Authorized Agent for Complainant [VICTIM]`
  },
  {
    id: 'class_28',
    classNumber: 'Class 28',
    moduleId: 'mod_05',
    moduleName: 'Module 05 — Advanced Facebook Reports',
    title: 'Class 28: Instagram Report Fake Report and from report',
    banglaTitle: 'ক্লাস ২৮: ইনস্টাগ্রাম ফেক রিপোর্ট ও অফিশিয়াল ফর্ম (Instagram Imposter Takedown)',
    platform: 'meta',
    severity: 'HIGH',
    officialFormUrl: 'https://help.instagram.com/contact/636276399721841',
    formName: 'Instagram Official Impersonation Form (Direct Desk)',
    description: 'ইনস্টাগ্রামে যে কেউ আপনার বা পরিচিত কারও পরিচয় চুরি করে ফেক আইডি চালালে অফিশিয়াল ফর্মের মাধ্যমে স্থায়ীভাবে ডিলিট করার নোটিশ।',
    tags: ['Class 28', 'Instagram Fake', 'Bio Clone', 'Imposter Form', 'Rapid Ban'],
    instructions: [
      'ইনস্টাগ্রাম ফেক প্রোফাইল লিংক [TARGET] এ দিন।',
      'আসল ইনস্টাগ্রাম অ্যাকাউন্ট লিংক [VICTIM] এ দিন।',
      'অফিশিয়াল ইনস্টাগ্রাম ফর্মে গভঃ আইডি সংযুক্ত করে আবেদন করুন।'
    ],
    appealTemplate: `INSTAGRAM IDENTITY THEFT & FAKE PROFILE TAKEDOWN DEMAND (CLASS 28)

TO: Instagram Trust & Safety Operations Board
IMPOSTER ACCOUNT / HANDLE: [TARGET]
AUTHENTIC ACCOUNT / OWNER: [VICTIM]

CASE DETAILS:
The account operating at [TARGET] has fraudulently appropriated the identity, photography, name, and personal likeness of [VICTIM]. The imposter is misleading Instagram users and inflicting ongoing damage on the personal brand of [VICTIM].

COMMUNITY GUIDELINE INFRACTIONS:
1. Pretending to be someone else / Deceptive Behavior.
2. Inauthentic Presence and Unauthorized Personal Asset Exploitation.

REQUIRED REMEDY:
Permanently decommission profile [TARGET] and release restricted handles to the genuine owner [VICTIM].

Verified Incident Submission — Signal Hackers CSB Protocol`
  },

  // =========================================================================
  // 🔰 MODULE 06 — COPYRIGHT SECTION (CLASS 29 - 34)
  // =========================================================================
  {
    id: 'class_29',
    classNumber: 'Class 29',
    moduleId: 'mod_06',
    moduleName: 'Module 06 — Copyright Section',
    title: 'Class 29: Facebook → Facebook Copyright',
    banglaTitle: 'ক্লাস ২৯: ফেসবুক → ফেসবুক কপিরাইট রিপোর্ট (Facebook Internal DMCA)',
    platform: 'copyright',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/1758255661104383',
    formName: 'Meta Official Copyright Infringement Form',
    description: 'ফেসবুকের একটি পেজ বা প্রোফাইল থেকে অন্য কোনো ফেসবুক পেজ/প্রোফাইলে কন্টেন্ট চুরি হলে অফিসিয়াল কপিরাইট স্ট্রাইক নোটিশ।',
    tags: ['Class 29', 'FB to FB', 'DMCA', 'Copyright Strike', 'Video Theft'],
    instructions: [
      'চোর ফেসবুক পেজ বা ভিডিওর লিংক [TARGET] এ দিন।',
      'আপনার আসল ফেসবুক পোস্ট বা ভিডিওর লিংক [VICTIM] এ দিন।',
      'মেটার অফিশিয়াল কপিরাইট ফর্মে এই আইনি স্টেটমেন্ট সাবমিট করুন।'
    ],
    appealTemplate: `NOTIFICATION OF CLAIMED COPYRIGHT INFRINGEMENT PURSUANT TO 17 U.S.C. § 512(c) (CLASS 29: FB → FB)

TO: Designated Copyright Agent, Meta Platforms, Inc.
ORIGINAL FACEBOOK SOURCE WORK: [VICTIM]
INFRINGING FACEBOOK TARGET POST/VIDEO: [TARGET]

STATUTORY DECLARATION UNDER PENALTY OF PERJURY:
I hereby state that I am the exclusive copyright owner (or authorized agent) of the original audiovisual work published at: [VICTIM].

Without my authorization, the entity operating at [TARGET] has reproduced, adapted, and publicly exhibited my copyrighted content on Facebook.

STATUTORY STATEMENTS:
1. I have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.
2. This notification is accurate, and under penalty of perjury, I am authorized to act on behalf of the owner.

Please expeditiously disable and remove the infringing content at [TARGET].

Copyright Agent for [VICTIM]`
  },
  {
    id: 'class_30',
    classNumber: 'Class 30',
    moduleId: 'mod_06',
    moduleName: 'Module 06 — Copyright Section',
    title: 'Class 30: Facebook → TikTok Copyright',
    banglaTitle: 'ক্লাস ৩০: ফেসবুক → টিকটক কপিরাইট রিপোর্ট (FB Video Stolen on TikTok)',
    platform: 'copyright',
    severity: 'HIGH',
    officialFormUrl: 'https://www.tiktok.com/legal/report/Copyright',
    formName: 'TikTok Official DMCA Copyright Portal',
    description: 'ফেসবুকে পোস্ট করা আপনার অরিজিনাল ভিডিও বা কন্টেন্ট টিকটকে অনুমতি ছাড়া আপলোড করলে টিকটক লিগ্যাল টিমের কাছে কপিরাইট স্ট্রাইক।',
    tags: ['Class 30', 'FB to TikTok', 'Cross Platform DMCA', 'TikTok Strike'],
    instructions: [
      'টিকটকে যে ভিডিও চুরি করেছে তার লিংক [TARGET] এ দিন।',
      'আপনার মূল ফেসবুক ভিডিওর পার্মালিংক [VICTIM] এ দিন।',
      'টিকটক কপিরাইট পোর্টালে গিয়ে এই ফরম্যাটটি পূরণ করুন।'
    ],
    appealTemplate: `CROSS-PLATFORM COPYRIGHT NOTICE: FACEBOOK TO TIKTOK INFRINGEMENT (CLASS 30)

TO: ByteDance Ltd. / TikTok Intellectual Property Operations
INFRINGING TIKTOK VIDEO / USER: [TARGET]
ORIGINAL COPYRIGHTED SOURCE (FACEBOOK): [VICTIM]

LEGAL SPECIFICATION:
The uploader at [TARGET] has downloaded, re-synchronized, and published copyrighted audiovisual media originally created and published on Facebook at: [VICTIM].

TikTok Intellectual Property Policy explicitly prohibits cross-platform digital theft.

DEMAND:
1. Immediately remove the unauthorized video hosted at [TARGET].
2. Issue a copyright strike against the TikTok infringing account.

Affirmed under penalty of perjury,
Authorized Copyright Representative for [VICTIM]`
  },
  {
    id: 'class_31',
    classNumber: 'Class 31',
    moduleId: 'mod_06',
    moduleName: 'Module 06 — Copyright Section',
    title: 'Class 31: Instagram → Facebook Copyright',
    banglaTitle: 'ক্লাস ৩১: ইনস্টাগ্রাম → ফেসবুক কপিরাইট রিপোর্ট (IG Reel Stolen on FB)',
    platform: 'copyright',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/1758255661104383',
    formName: 'Meta Rights Manager & Copyright Takedown Portal',
    description: 'ইনস্টাগ্রাম রিল বা পোস্ট ডাউনলোড করে ফেসবুকে কোনো পেজ বা অ্যাকাউন্টে অনুমতি ছাড়া আপলোড করলে ফেসবুক থেকে ডিলিট করার নোটিশ।',
    tags: ['Class 31', 'IG to FB', 'Reels Theft', 'Cross-App DMCA', 'Meta Rights'],
    instructions: [
      'ফেসবুকে থাকা চুরি করা পোস্টের লিংক [TARGET] দিন।',
      'আপনার মূল ইনস্টাগ্রাম রিল/পোস্টের লিংক [VICTIM] দিন।',
      'মেটা কপিরাইট ফর্মে এই ড্রাফটটি সাবমিট করুন।'
    ],
    appealTemplate: `CROSS-APP COPYRIGHT INFRINGEMENT NOTICE: INSTAGRAM TO FACEBOOK (CLASS 31)

TO: Meta Copyright Enforcement Division
INFRINGING FACEBOOK PUBLICATION: [TARGET]
ORIGINAL INSTAGRAM WORK: [VICTIM]

SUMMARY OF INFRINGEMENT:
The Facebook entity at [TARGET] has copied, republished, and monetized the original creative media published on Instagram at [VICTIM] without licensure.

Both platforms operate under Meta's unified Intellectual Property protections. The publisher of [TARGET] has committed willful copyright infringement.

MANDATORY ACTION:
Purge the infringing publication at [TARGET] and safeguard creator integrity.

Rightsholder: [VICTIM]`
  },
  {
    id: 'class_32',
    classNumber: 'Class 32',
    moduleId: 'mod_06',
    moduleName: 'Module 06 — Copyright Section',
    title: 'Class 32: Blogger → Facebook Copyright',
    banglaTitle: 'ক্লাস ৩২: ব্লগার / ওয়েবসাইট → ফেসবুক কপিরাইট (Website Content Stolen on FB)',
    platform: 'copyright',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/1758255661104383',
    formName: 'Meta DMCA Takedown Portal for Web Publishers',
    description: 'আপনার ওয়েবসাইট, ব্লগার বা নিউজ পোর্টালের লেখা ও ছবি হুবহু ফেসবুকে চুরি করে পোস্ট করলে কপিরাইট স্ট্রাইক পাঠানোর নোটিশ।',
    tags: ['Class 32', 'Blogger to FB', 'Web Copyright', 'Article Theft', 'DMCA 512'],
    instructions: [
      'ফেসবুকের চোরাই পোস্টের পার্মালিংক [TARGET] ফিল্ডে দিন।',
      'আপনার আসল ওয়েবসাইট বা ব্লগ পোস্টের সরাসরি লিংক [VICTIM] এ দিন।',
      'মেটা কপিরাইট পোর্টালে সাবমিট করুন।'
    ],
    appealTemplate: `FORMAL DMCA COPYRIGHT TAKEDOWN: WEB PUBLISHER / BLOGGER TO FACEBOOK (CLASS 32)

TO: Designated DMCA Agent, Meta Platforms, Inc.
INFRINGING FACEBOOK POST/PAGE: [TARGET]
ORIGINAL COPYRIGHTED BLOG/WEBSITE ARTICLE: [VICTIM]

STATEMENT OF EXCLUSIVE AUTHORSHIP:
The text, layout, photographic assets, and intellectual property found at [VICTIM] were authored and published on our registered web domain prior to the infringing publication.

The Facebook page/profile at [TARGET] has unlawfully pirated this copyrighted editorial material without attribution, permission, or syndication licensing.

RELIEF DEMANDED UNDER 17 U.S.C. § 512:
Execute immediate removal of post [TARGET] to prevent further copyright infringement.

Authorized Agent for [VICTIM]`
  },
  {
    id: 'class_33',
    classNumber: 'Class 33',
    moduleId: 'mod_06',
    moduleName: 'Module 06 — Copyright Section',
    title: 'Class 33: Third-Party Copyright Claim',
    banglaTitle: 'ক্লাস ৩৩: থার্ড-পার্টি কপিরাইট ক্লেইম (Agency / Representative IP Notice)',
    platform: 'copyright',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/1758255661104383',
    formName: 'Meta Third-Party Legal Representative Portal',
    description: 'কোনো মিডিয়া এজেন্সি, ইউটিউবার বা ক্লায়েন্টের পক্ষ থেকে আইনি প্রতিনিধি হিসেবে থার্ড-পার্টি কপিরাইট স্ট্রাইক দেওয়ার আবেদন।',
    tags: ['Class 33', 'Third Party Claim', 'Agency DMCA', 'Authorized Representative'],
    instructions: [
      'টার্গেট লিংক [TARGET] এ দিন। মূল মালিক বা ক্লায়েন্টের লিংক [VICTIM] এ দিন।',
      'ফর্মের "I am reporting on behalf of my client/organization" অপশন সিলেক্ট করুন।'
    ],
    appealTemplate: `THIRD-PARTY AUTHORIZED INTELLECTUAL PROPERTY ENFORCEMENT NOTICE (CLASS 33)

TO: Intellectual Property Counsel, Meta Platforms
INFRINGING ASSET URL: [TARGET]
EXCLUSIVE PROPRIETOR / CLIENT ENTITY: [VICTIM]

AGENCY DECLARATION:
Our firm operates as the authorized intellectual property representative and content protection agency for [VICTIM].

Pursuant to power-of-attorney authority, we place you on statutory notice that the content accessible at [TARGET] infringes upon exclusive proprietary copyrights owned by [VICTIM].

We certify that this notice conforms with the formal statutory notice requirements of the DMCA.

Please effectuate prompt takedown of [TARGET].

Authorized IP Agency Counsel for [VICTIM]`
  },
  {
    id: 'class_34',
    classNumber: 'Class 34',
    moduleId: 'mod_06',
    moduleName: 'Module 06 — Copyright Section',
    title: 'Class 34: Multiple Copyright Claims',
    banglaTitle: 'ক্লাস ৩৪: মাল্টিপল কপিরাইট ক্লেইমস (Batch Repeat Infringer Takedown)',
    platform: 'copyright',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/copyright_repeat_infringer',
    formName: 'Meta Multi-URL Infringement & Repeat Infringer Portal',
    description: 'কোনো পেজ বা অ্যাকাউন্ট বারবার একাধিক ভিডিও/ছবি চুরি করলে একসাথে মাল্টিপল কপিরাইট স্ট্রাইক ও একাউন্ট টার্মিনেশন নোটিশ।',
    tags: ['Class 34', 'Multiple Claims', 'Repeat Infringer', 'Batch Takedown', 'Account Termination'],
    instructions: [
      'টার্গেট একাউন্ট বা একাধিক পোস্টের লিংক [TARGET] এ দিন।',
      'আপনার অরিজিনাল ক্যাটালগ/প্লেলিস্ট [VICTIM] এ দিন।',
      'DMCA Section 512(i) এর অধীনে রিপিট ইনফ্রিনজার একাউন্ট টার্মিনেশনের আবেদন করুন।'
    ],
    appealTemplate: `BATCH COPYRIGHT ENFORCEMENT & REPEAT INFRINGER TERMINATION DEMAND UNDER 17 U.S.C. § 512(i) (CLASS 34)

TO: Chief Copyright Officer & Compliance Operations
INFRINGING REPOSITORY / REPEAT INFRINGER: [TARGET]
EXCLUSIVE COPYRIGHT HOLDER: [VICTIM]

CHRONIC INFRINGEMENT SCHEDULE:
The entity operating at [TARGET] has systematically and repeatedly pirated multiple distinct copyrighted assets belonging to [VICTIM]. 

STATUTORY MANDATE:
Under 17 U.S.C. § 512(i), service providers must adopt and reasonably implement a policy that provides for the termination in appropriate circumstances of subscribers and account holders who are repeat infringers.

REQUIRED REMEDY:
1. Instant batch deletion of all infringing URLs hosted at [TARGET].
2. Revocation of publishing permissions and permanent termination of the infringing profile/page [TARGET].

Submitted by Head of IP Protection for [VICTIM]`
  },

  // =========================================================================
  // 🔰 MODULE 07 — TIKTOK SECTION (CLASS 35 - 39)
  // =========================================================================
  {
    id: 'class_35',
    classNumber: 'Class 35',
    moduleId: 'mod_07',
    moduleName: 'Module 07 — TikTok Section',
    title: 'Class 35: 10+ TikTok Account তৈরি',
    banglaTitle: 'ক্লাস ৩৫: ১০+ টিকটক অ্যাকাউন্ট তৈরি ও ওয়ার্ম-আপ স্ট্র্যাটেজি (Operational Guide)',
    platform: 'tiktok',
    severity: 'MEDIUM',
    officialFormUrl: 'https://www.tiktok.com/signup',
    formName: 'TikTok Strategic Account Provisioning Guide',
    description: 'সাইবার সুরক্ষা ও বৈধ মাল্টিপল ভেরিফাইড রিপোর্টিং অপারেশনের জন্য ব্যানমুক্ত পদ্ধতিতে ১০+ টিকটক একাউন্ট তৈরি ও ওয়ার্ম-আপের সম্পূর্ণ প্রটোকল।',
    tags: ['Class 35', '10+ Accounts', 'TikTok Strategy', 'Device Hygiene', 'IP Rotation', 'Warm-up Protocol'],
    instructions: [
      'ধাপ ১ (Device Hygiene): একাধিক একাউন্ট একই ব্রাউজারে না খুলে ডুয়েল অ্যাপস বা ভিন্ন ব্রাউজার প্রোফাইল ব্যবহার করুন।',
      'ধাপ ২ (Network Rotation): প্রতি ৩টি একাউন্ট তৈরির পর এরোপ্লেন মোড অন/অফ করে মোবাইল ডাটা আইপি রিলোকেট করুন।',
      'ধাপ ৩ (Profile Warm-Up): একাউন্ট খুলে সরাসরি রিপোর্ট করবেন না; ৩-৫ দিন সাধারণ ভিডিও দেখে লাইক/ফলো দিয়ে হিউম্যান ট্রাফিক বিহেভিয়ার তৈরি করুন।',
      'ধাপ ৪ (Security Binding): প্রতি একাউন্টে ভিন্ন ভ্যালিড জিমেইল ও টু-ফ্যাক্টর অথেনটিকেশন অন রাখুন।',
      'ধাপ ৫ (Reporting Swarm): ভিকটিম প্রোফাইল [VICTIM] কে সাপোর্ট দিতে সমন্বিতভাবে টার্গেট [TARGET] এর উপর স্ট্রাইক প্রেরণ করুন।'
    ],
    appealTemplate: `TACTICAL OPERATIONAL DIRECTIVE: 10+ TIKTOK ACCOUNT CREATION & WARM-UP (CLASS 35)

PURPOSE: Establishing authentic, unflagged, high-trust reporting relays for legitimate creator protection.
PRIMARY TARGET UNDER SURVEILLANCE: [TARGET]
PROTECTED CREATOR IDENTITY: [VICTIM]

STANDARD OPERATING PROCEDURE (SOP):
1. IDENTITY DE-CORRELATION:
   - Utilize distinct Gmail/Outlook aliases per instance.
   - Avoid recycled browser cookies; utilize sandboxed profiles or distinct user instances.

2. NETWORK PROTOCOL:
   - Cycle mobile telemetry IP pools via hardware toggles.
   - Do not trigger simultaneous mass API sign-ups.

3. ALGORITHMIC WARM-UP CYCLE (72 HOURS):
   - Day 1: Profile setup, real human interests selection, 15-minute scroll.
   - Day 2: Engage with verified educational / legal creators.
   - Day 3: Account achieves "Trust Level 1" on TikTok algorithmic verification.

4. COORDINATED REPORTING DISPATCH:
   - When launching enforcement against [TARGET], submit varied violation categories with 3-minute intervals.

Prepared for Signal Hackers CSB Cyber Operators`
  },
  {
    id: 'class_36',
    classNumber: 'Class 36',
    moduleId: 'mod_07',
    moduleName: 'Module 07 — TikTok Section',
    title: 'Class 36: TikTok Fake Report',
    banglaTitle: 'ক্লাস ৩৬: টিকটক ফেক রিপোর্ট (TikTok Imposter Account Strike)',
    platform: 'tiktok',
    severity: 'HIGH',
    officialFormUrl: 'https://www.tiktok.com/legal/report/feedback',
    formName: 'TikTok Impersonation & Safety Feedback Portal',
    description: 'টিকটকে আসল ব্যক্তির নাম বা ছবি নকল করে চালানো প্রতারক অ্যাকাউন্ট দ্রুত ব্যান করার আবেদন।',
    tags: ['Class 36', 'TikTok Fake', 'Impersonation', 'Identity Theft', 'Safety Strike'],
    instructions: [
      'টিকটক অ্যাপে টার্গেট প্রোফাইল [TARGET] এ যান।',
      '"Report" > "Pretending to be someone" সিলেক্ট করুন।',
      'টিকটক অফিশিয়াল ফিডব্যাক পোর্টালে এই বিস্তারিত আপিল সাবমিট করুন।'
    ],
    appealTemplate: `TIKTOK SAFETY STRIKE: FRAUDULENT PROFILE IMPERSONATION (CLASS 36)

TO: TikTok Global Trust & Safety Moderation Squad
DECEPTIVE TARGET ACCOUNT: [TARGET]
AUTHENTIC VICTIM / TRUE CREATOR: [VICTIM]

COMMUNITY STANDARDS BREACH:
The user operating at [TARGET] has created an unauthorized clone profile masquerading as [VICTIM]. They have duplicated the profile picture, display name, and creative video style of [VICTIM] to mislead viewers.

TikTok Integrity & Authenticity Guidelines strictly ban impersonation of individuals and entities.

REQUESTED REMEDY:
Permanently disable the imposter profile [TARGET] and block associated hardware credentials.

Reporter: Signal Hackers CSB Cyber Verification Unit`
  },
  {
    id: 'class_37',
    classNumber: 'Class 37',
    moduleId: 'mod_07',
    moduleName: 'Module 07 — TikTok Section',
    title: 'Class 37: TikTok Underage Report',
    banglaTitle: 'ক্লাস ৩৭: টিকটক আন্ডার-এজ রিপোর্ট (Under-13 Child Account Strike)',
    platform: 'tiktok',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.tiktok.com/legal/report/feedback',
    formName: 'TikTok Minor Safety Rapid Escalation Portal',
    description: 'টিকটকে ১৩ বছরের কম বয়সী কোনো শিশু একাউন্ট খুলে ভিডিও দিলে বা লাইভ করলে তা সুরক্ষার স্বার্থে বন্ধ করার আবেদন।',
    tags: ['Class 37', 'TikTok Underage', 'COPPA', 'Minor Safety', 'Child Protection'],
    instructions: [
      'টার্গেটের টিকটক লিংক [TARGET] দিন।',
      'অভিভাবক বা নাগরিক রেফারেন্স [VICTIM] দিন।',
      'ফর্মের ক্যাটাগরিতে "Minor Safety" সিলেক্ট করে এই জরুরি আপিল ড্রাফট পেস্ট করুন।'
    ],
    appealTemplate: `EXPEDITED CHILD SAFETY ENFORCEMENT: UNDERAGE USER REPORT (CLASS 37)

TO: TikTok Child Protection & Minor Safety Operations
INELIGIBLE MINOR ACCOUNT: [TARGET]
COMPLAINANT ADVOCATE: [VICTIM]

POLICY MANDATE:
TikTok Terms of Service and international COPPA regulations explicitly bar individuals under the age of 13 from holding accounts.

The profile at [TARGET] is actively controlled by an underage minor under the age of thirteen. Public exposure on this profile exposes the minor to digital exploitation, cyber predators, and harmful exposure.

ACTION DEMANDED:
Instantly terminate account [TARGET] and purge all cached user media.

Submitted under Global Child Protection Protocols`
  },
  {
    id: 'class_38',
    classNumber: 'Class 38',
    moduleId: 'mod_07',
    moduleName: 'Module 07 — TikTok Section',
    title: 'Class 38: TikTok Privacy Violation Report',
    banglaTitle: 'ক্লাস ৩৮: টিকটক প্রাইভেসি ভায়োলেশন রিপোর্ট (TikTok Doxxing & Privacy Breach)',
    platform: 'tiktok',
    severity: 'HIGH',
    officialFormUrl: 'https://www.tiktok.com/legal/report/privacy',
    formName: 'TikTok Official Privacy Infringement Desk',
    description: 'টিকটকে ব্যক্তিগত ফোন নম্বর, ঠিকানা, ব্যক্তিগত ছবি বা গোপন তথ্য দিয়ে সাইবার বুলিং করলে সরাসরি রিমুভ করার আবেদন।',
    tags: ['Class 38', 'TikTok Privacy', 'Doxxing', 'Personal Data', 'Harassment'],
    instructions: [
      'টার্গেট ভিডিও বা প্রোফাইল লিংক [TARGET] এ দিন।',
      'ভিকটিমের লিংক বা পরিচয় [VICTIM] এ দিন।',
      'টিকটক প্রাইভেসি ফর্মে বিস্তারিত সাবমিট করুন।'
    ],
    appealTemplate: `STATUTORY PRIVACY COMPLAINT & UNLAWFUL DOXXING NOTICE (CLASS 38)

TO: TikTok Global Privacy Operations Department
INFRINGING PUBLICATION / ACCOUNT: [TARGET]
AGGRIEVED PARTY: [VICTIM]

NATURE OF VIOLATION:
The video/account located at [TARGET] has publicly exposed confidential personal records, private contact details, and identifiable private imagery belonging to [VICTIM] without lawful consent.

TikTok Community Guidelines strictly prohibit doxxing, harassment, and unauthorized publication of personally identifiable data.

REQUIRED REMEDY:
Expeditiously delete the offending video at [TARGET] and take punitive enforcement actions against the uploader.

Privacy Enforcement Desk — Signal Hackers CSB`
  },
  {
    id: 'class_39',
    classNumber: 'Class 39',
    moduleId: 'mod_07',
    moduleName: 'Module 07 — TikTok Section',
    title: 'Class 39: TikTok → Facebook Copyright Report',
    banglaTitle: 'ক্লাস ৩৯: টিকটক → ফেসবুক কপিরাইট রিপোর্ট (TikTok Video Stolen on Facebook)',
    platform: 'copyright',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/1758255661104383',
    formName: 'Meta Copyright Portal for External Creators',
    description: 'টিকটকের অরিজিনাল ভিডিও বা অডিও ফেসবুকের কোনো পেজ বা আইডি ডাউনলোড করে আপলোড করলে ফেসবুক থেকে কপিরাইট স্ট্রাইক দেওয়ার ফর্ম।',
    tags: ['Class 39', 'TikTok to FB', 'Cross Platform DMCA', 'Reels Piracy', 'Copyright Strike'],
    instructions: [
      'ফেসবুকের চোরাই পোস্ট বা ভিডিওর লিংক [TARGET] এ দিন।',
      'আপনার আসল টিকটক ভিডিওর সরাসরি পার্মালিংক [VICTIM] এ দিন।',
      'মেটা কপিরাইট পোর্টালে এই আইনি ফরম্যাটটি সাবমিট করুন।'
    ],
    appealTemplate: `CROSS-PLATFORM COPYRIGHT INFRINGEMENT CLAIM: TIKTOK TO FACEBOOK (CLASS 39)

TO: Designated Copyright Agent, Meta Platforms, Inc.
INFRINGING FACEBOOK POST/REEL: [TARGET]
ORIGINAL COPYRIGHTED TIKTOK VIDEO: [VICTIM]

STATUTORY COPYRIGHT NOTICE:
I declare under penalty of perjury that I am the author and exclusive owner (or authorized agent) of the original audiovisual work published on TikTok at: [VICTIM].

The Facebook account/page at [TARGET] has copied, republished, and distributed my proprietary media without my license or authorization.

PURSUANT TO 17 U.S.C. § 512(c):
I request the immediate takedown and permanent deactivation of post [TARGET].

Good Faith Affirmation: All information provided is true and sworn under penalty of perjury.

Original Creator / Agent for [VICTIM]`
  },

  // =========================================================================
  // 🔥 NEW PROFESSIONAL UPDATES (META 2026)
  // =========================================================================
  {
    id: 'rep_meta_01',
    classNumber: 'Meta-26-01',
    moduleId: 'mod_meta_2026',
    moduleName: 'New Meta Updates 2026',
    title: 'Dangerous Organizations & Extremism Protocol (Meta 2026)',
    banglaTitle: 'মেটা ডেঞ্জারাস অর্গানাইজেশনস ও এক্সট্রিমিজম ইমার্জেন্সি টেকডাউন',
    platform: 'meta',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/306126629853922',
    formName: 'Meta Tier-1 Severe Harms & Dangerous Entities Escalation',
    description: 'উগ্রবাদ, সহিংসতা বা বিপজ্জনক সংগঠনের সংশ্লিষ্টতার অভিযোগে মেটার টায়ার-১ হাই-লেভেল ইনভেস্টিগেশন স্কোয়াড অ্যাক্টিভেশনের আপিল।',
    tags: ['Tier-1 Severe', 'Dangerous Organizations', 'Extremism', 'Meta 2026'],
    instructions: [
      'মেটার শীর্ষ সিকিউরিটি প্রায়োরিটি (Tier-1) কেস হিসেবে এটি কয়েক মিনিটের মধ্যে বট ও হিউম্যান টিম স্ক্যান করে।',
      'টার্গেটের উস্কানিমূলক বা সহিংস বক্তব্য হাইলাইট করতে নিচের কোড টেক্সট ব্যবহার করুন।'
    ],
    appealTemplate: `EMERGENCY SECURITY PROTOCOL: TIER-1 VIOLATION OF META SAFETY FRAMEWORK (2026)

TO: Meta Global Threat Intelligence & Human Safety Taskforce
TARGET SUSPECT IDENTIFIER: [TARGET]
AFFECTED TARGET / COMMUNITY BEARING: [VICTIM]

SECURITY THREAT ASSESSMENT:
The account/entity hosted at [TARGET] exhibits demonstrable alignment with designated prohibited entities and conducts operations in direct violation of Meta's Policy on Dangerous Individuals and Organizations.

ACTION MANDATE:
Under Section 1 of the Meta Community Integrity Standards, accounts engaging in credible violent coordination or extremist affiliation require immediate non-reversible hardware blacklisting. Deactivate [TARGET] without grace period.

Reported by Threat Intelligence Specialist — CSB v5.0 Network`
  },
  {
    id: 'rep_meta_02',
    classNumber: 'Meta-26-02',
    moduleId: 'mod_meta_2026',
    moduleName: 'New Meta Updates 2026',
    title: 'Self-Harm & Suicide Emergency Security Freeze Protocol',
    banglaTitle: 'সেলফ-হার্ম ও সুইসাইড ইমার্জেন্সি সিকিউরিটি ফ্রিজ আপিল',
    platform: 'meta',
    severity: 'CRITICAL',
    officialFormUrl: 'https://www.facebook.com/help/contact/emergency_self_harm',
    formName: 'Meta 24/7 Suicide & Crisis Intervention Escalation Channel',
    description: 'আত্মহত্যা বা আত্মবিধ্বংসী হুমকির কন্টেন্ট অতি দ্রুত ফ্রিজ করে লাইফ-সেভিং টিমকে এলার্ট পাঠানোর ইমার্জেন্সি প্রটোকল।',
    tags: ['Self-Harm', 'Emergency Freeze', 'Life Safety', 'Meta 2026'],
    instructions: [
      'টার্গেট প্রোফাইল [TARGET] এর জরুরি জীবন সুরক্ষার জন্য এই ফর্মটি ব্যবহৃত হয়।',
      'মেটার এআই অ্যালগরিদম তাৎক্ষণিকভাবে লোকাল হেল্পলাইন ও সাপোর্ট রিসোর্স পুশ করে একাউন্ট রেস্ট্রিক্ট করে।'
    ],
    appealTemplate: `URGENT 24/7 CRISIS INTERVENTION & EMERGENCY ACCOUNT RESTRICTION NOTICE

TO: Meta Global Crisis Response & Rapid Intervention Unit
ACCOUNT SUBJECT: [TARGET]
REPORTING ADVOCATE / MONITOR: [VICTIM]

INCIDENT ALERT:
The account referenced at [TARGET] has broadcasted explicit indicators of severe self-harm and acute personal endangerment.

EMERGENCY STEPS REQUESTED:
1. Immediately lock and restrict broadcasting permissions for [TARGET].
2. Dispatch localized crisis helpline interventions and emergency safety resources.

Dispatched via CSB Rapid Emergency Response Relay`
  },
  {
    id: 'rep_meta_03',
    classNumber: 'Meta-26-03',
    moduleId: 'mod_meta_2026',
    moduleName: 'New Meta Updates 2026',
    title: 'Multi-Language High-Risk AI Appeal (English / Arabic / বাংলা)',
    banglaTitle: 'মাল্টি-ল্যাঙ্গুয়েজ হাই-রিস্ক এআই আপিল (English / Arabic / বাংলা ট্রাই-লিঙ্গুয়াল)',
    platform: 'meta',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/357439354283890',
    formName: 'Meta Global Multi-Jurisdiction Escalation Terminal',
    description: 'আন্তর্জাতিক ও মিডল-ইস্ট / সাউথ এশিয়ান মডারেশন টিমের কাছে বহুভাষী সমন্বিত পাওয়ারফুল আপিল যা স্বয়ংক্রিয় ফিল্টার বাইপাস করে দ্রুত রিভিউর সুযোগ করে দেয়।',
    tags: ['Tri-Lingual', 'Arabic', 'Bangla', 'Global Review', 'Meta 2026'],
    instructions: [
      'এই আপিলে ৩টি প্রধান ভাষার সমন্বয় রয়েছে যাতে যে কোনো রিজিওনাল মডারেটর তাৎক্ষণিক বুঝতে পারে।',
      '[TARGET] ও [VICTIM] উভয় জায়গায় স্বয়ংক্রিয়ভাবে ইনজেক্ট হবে।'
    ],
    appealTemplate: `=== GLOBAL MULTI-LANGUAGE HIGH-PRIORITY ESCALATION NOTICE ===

[ENGLISH SECTION]
To Meta Platform Trust & Community Review Board:
The account identified as [TARGET] is in gross violation of safety principles, harassing and infringing upon [VICTIM]. We request immediate human intervention, full identity audit, and urgent suspension of [TARGET] to prevent further harm.

[العربية - ARABIC SECTION]
إلى فريق الأمان والسلامة في شركة ميتا (Meta Trust & Safety):
نحيطكم علماً بأن الحساب المحدد بالرابط: [TARGET] ينتهك بشكل صارخ معايير مجتمع ميتا، ويمارس انتحال الشخصية والتشهير والابتزاز ضد الضحية الحقيقي: [VICTIM]. نطالب بالإيقاف الفوري للحساب المخالف وحماية البيانات الرقمية وفقاً للوائح الأمن السيبراني الدولية.

[বাংলা - BENGALI SECTION]
মেটা গ্লোবাল ট্রাস্ট অ্যান্ড সেফটি পর্যালোচনা দল বরাবর:
উক্ত একাউন্ট [TARGET] মেটার অভ্যন্তরীণ কমিউনিটি স্ট্যান্ডার্ড চরমভাবে লঙ্ঘন করেছে। আসল ব্যক্তি [VICTIM] এর ছবি, নাম ও পরিচিতি অপব্যবহার করে অসামাজিক কার্যক্রম ও সাইবার বুলিং চালানো হচ্ছে। অনতিবিলম্বে [TARGET] অ্যাকাউন্টটি স্থায়ীভাবে নিষ্ক্রিয় করার জোর দাবি জানাচ্ছি।

Case Registered: CSB-TRI-LANG-ENFORCEMENT-2026
Verified Target: [TARGET] | Authentic Entity: [VICTIM]`,
    appealTemplateAr: `إلى فريق الأمان والسلامة في شركة ميتا (Meta Trust & Safety): نحيطكم علماً بأن الحساب المحدد بالرابط: [TARGET] ينتهك بشكل صارخ معايير مجتمع ميتا ضد [VICTIM]. نطالب بالإيقاف الفوري للحساب المخالف.`,
    appealTemplateBn: `মেটা গ্লোবাল ট্রাস্ট অ্যান্ড সেফটি পর্যালোচনা দল বরাবর: উক্ত একাউন্ট [TARGET] মেটার অভ্যন্তরীণ নীতিমালা চরমভাবে লঙ্ঘন করেছে। আসল ব্যক্তি [VICTIM] এর পরিচিতি অপব্যবহার করা হচ্ছে। অবিলম্বে [TARGET] নিষ্ক্রিয় করা হোক।`
  },
  {
    id: 'rep_meta_04',
    classNumber: 'Meta-26-04',
    moduleId: 'mod_meta_2026',
    moduleName: 'New Meta Updates 2026',
    title: 'Brand / Business Page Imposter & Trademark Infringement',
    banglaTitle: 'ব্র্যান্ড, ভেরিফাইড পেজ ও বিজনেস ইমপোস্টার টেকডাউন',
    platform: 'meta',
    severity: 'HIGH',
    officialFormUrl: 'https://www.facebook.com/help/contact/trademark_infringement',
    formName: 'Meta Trademark & Commercial Entity Impersonation Portal',
    description: 'কোনো বিজনেস পেজ, শপ বা কমার্শিয়াল ব্র্যান্ডের নাম নকল করে প্রতারণা করা পেজ ডিলিট করার ফর্ম।',
    tags: ['Brand Imposter', 'Trademark', 'Business Fraud', 'Meta 2026'],
    instructions: [
      'ব্র্যান্ডের আসল ফেসবুক পেজ বা ওয়েবসাইট লিংক [VICTIM] এ রাখুন।',
      'প্রতারক পেজের লিংক [TARGET] এ দিন।'
    ],
    appealTemplate: `COMMERCIAL BRAND IMPERSONATION & TRADEMARK DILUTION TAKEDOWN DEMAND

TO: Meta Commerce & Intellectual Property Legal Counsel
INFRINGING BUSINESS PAGE / PROFILE: [TARGET]
LEGITIMATE PROPRIETOR / TRADEMARK HOLDER: [VICTIM]

SUMMARY OF COMMERCIAL INFRINGEMENT:
The entity operating at [TARGET] is deceptively utilizing the trade dress, registered trade name, proprietary logos, and business reputation of [VICTIM] without licensure to defraud consumers.

DIRECT REMEDY REQUESTED:
Expeditious cancellation and permanent takedown of page [TARGET] with freeze on associated Meta Business Manager and Ad Accounts.

Authorized Trademark Operations Officer`
  }
];
