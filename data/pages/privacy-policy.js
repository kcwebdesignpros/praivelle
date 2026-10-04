'use strict';
/**
 * Privacy Policy. Plain-English, numbered sections covering what we collect,
 * why, how long we keep it and the rights you hold over it.
 */

module.exports = {
  slug: 'privacy-policy',
  path: '/privacy-policy',
  name: 'Privacy Policy',
  metaTitle: 'Privacy Policy | Praivelle House',
  metaDescription:
    'How Praivelle House collects, uses, stores and protects your personal data, the rights you hold over it, and how to reach us with a question or a request.',
  metaKeywords:
    'praivelle house privacy policy, hotel privacy policy kansas city, guest data protection, hotel cctv policy, reservation data retention, your privacy rights missouri',
  eyebrow: 'Legal',
  h1: 'Privacy Policy',
  heroIntro:
    'This policy explains what personal data we collect when you stay with us, book a table or use this website, why we hold it, how long we keep it and the rights you have over it.',
  heroImage: '/img/about-lobby.webp',
  heroImageAlt: 'The front desk of Praivelle House in Kansas City, where guest data is handled',
  heroStats: [
    { value: 7, suffix: ' yrs', label: 'How long we keep reservation records' },
    { value: 30, suffix: ' days', label: 'How long we keep CCTV footage' },
    { value: 30, suffix: ' days', label: 'To answer a request about your data' },
    { value: 24, suffix: ' hrs', label: 'Reception, where you can always reach us' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'who-we-are',
      eyebrow: 'Section 1',
      h2: '1. Who We Are',
      body: [
        'Praivelle House is an independent twelve-suite boutique hotel at 1200 Prairie Ridge Road, Kansas City, MO 64112. The hotel is owned and operated by Praivelle House Hospitality LLC, which is the data controller responsible for the personal information described in this policy.',
        'This policy covers our website, our reservations and front desk systems, our dining, spa and events bookings, and the physical property itself, including its security cameras.',
        'We have tried to write this in plain English rather than legal boilerplate, because a policy you cannot understand is not much use to you.'
      ]
    },
    {
      type: 'prose',
      id: 'what-we-collect',
      eyebrow: 'Section 2',
      h2: '2. What Personal Data We Collect',
      body: [
        'When you make a reservation we collect your name, postal address, email address, telephone number, the dates of your stay, the number of guests, and any preferences or requests you tell us about, such as an accessible room or a dietary requirement.',
        'When you pay, we collect the payment details needed to take and refund payment, along with the billing address and, where you have booked a package, the components of that package. We do not store full card numbers on our own systems.',
        'If you join our mailing list or ask to hear about offers, we collect your name and email address and a record of when and how you consented.',
        'Our property is covered by closed-circuit television in the entrances, corridors and car park for the safety of guests and staff. Those cameras record images only; they do not record audio.'
      ]
    },
    {
      type: 'table',
      id: 'data-categories',
      eyebrow: 'At a glance',
      h2: 'The Categories We Hold, and Why',
      intro: 'The main kinds of personal data we collect, with a plain description of each.',
      head: ['Category', 'What it includes', 'Why we hold it'],
      rows: [
        ['Reservation details', 'Name, address, contact details, stay dates, guest numbers, requests', 'To hold your booking, prepare your room and welcome you'],
        ['Guest register', 'Identity document details recorded at check-in', 'To meet Missouri lodging law and keep an accurate register'],
        ['Payment data', 'Card type, last four digits, billing address, transaction references', 'To take payment, issue refunds and prevent fraud'],
        ['Dining, spa and events', 'Guest names, table and treatment times, allergies, event requirements', 'To deliver the service you have booked and to keep you safe'],
        ['Marketing preferences', 'Name, email address, consent record and date', 'To send you news and offers you have asked for'],
        ['CCTV footage', 'Images recorded in entrances, corridors and the car park', 'To protect guests, staff and property and to investigate incidents'],
        ['Website analytics', 'Pages viewed, approximate location, device, browser, timestamps', 'To understand how the site is used and improve it']
      ],
      note: 'We collect only what each purpose genuinely needs. Optional fields on our forms can be left blank.'
    },
    {
      type: 'prose',
      id: 'why-and-basis',
      eyebrow: 'Section 3',
      h2: '3. Why We Collect It, and Our Lawful Basis',
      body: [
        'We use your reservation and payment details to perform the contract you make with us when you book a room, a table, a treatment or an event. Without them we could not hold your booking, take payment, or provide the service you have asked for.',
        'We keep a guest register and retain financial records because the law requires it. Missouri lodging rules oblige us to record who is staying, and tax and accounting law obliges us to keep records of what was paid.',
        'We use CCTV and certain security measures because we have a legitimate interest in protecting our guests, our team and the property, and in investigating theft, damage or accidents.',
        'We send marketing only where you have given us clear consent, and you can withdraw it at any time.'
      ]
    },
    {
      type: 'prose',
      id: 'cookies',
      eyebrow: 'Section 4',
      h2: '4. Cookies, and Why This Site Uses No Third-Party Trackers',
      body: [
        'This website uses a small number of first-party cookies and similar technologies that are needed to make it work. These keep your session secure, remember choices such as whether you dismissed a notice, and let our forms function.',
        'What we deliberately do not do is place advertising cookies, social media pixels or third-party analytics trackers on your device. There is no Facebook pixel on this site, no advertising retargeting tag and no cross-site tracking script watching what you read here and then following you elsewhere.',
        'We measure how the site is used in aggregate using privacy-respecting statistics that do not identify you and do not follow you to other websites. You can block or delete cookies through your browser settings at any time, and the site will continue to work.'
      ]
    },
    {
      type: 'prose',
      id: 'sharing',
      eyebrow: 'Section 5',
      h2: '5. Who We Share Your Data With',
      body: [
        'We share personal data only with the processors who help us run the hotel, and only to the extent each one needs it.',
        'Our property management system holds guest records, and our CCTV system is maintained by a security contractor who may access footage only at our instruction and only to repair or retrieve it. Our website is hosted by a provider that stores the technical logs described in section 2.',
        'We may disclose information where the law requires it, for example to a licensing authority, a health department inspector, a court order or the police investigating a serious offence.'
      ]
    },
    {
      type: 'prose',
      id: 'transfers',
      eyebrow: 'Section 6',
      h2: '6. International Transfers',
      body: [
        'Praivelle House is based in Missouri and holds your data primarily in the United States. A few of the service providers we rely on, such as our email and website hosting partners, may store data on servers located in other countries.',
        'Those steps include using providers that offer standard contractual protections and, where relevant, transferring data only to countries that are recognised as providing adequate safeguards. We review these arrangements when we change providers and at least once a year, and we keep the list of processors under review.',
        'If you would like to know which of our processors operate outside the United States and what safeguards apply, contact us using the details in section 12 and we will explain it for your particular situation.'
      ]
    },
    {
      type: 'prose',
      id: 'retention',
      eyebrow: 'Section 7',
      h2: '7. How Long We Keep Your Data',
      body: [
        'We keep reservation and financial records for seven years, because tax and accounting rules in Missouri require us to be able to account for income and payments over that period. After seven years the records are securely destroyed. This is the longest we hold most guest data.',
        'CCTV footage is kept for thirty days and then automatically overwritten, unless it is needed for an investigation, an insurance claim or a legal matter, in which case the relevant clip is preserved until that matter is closed.',
        'Guest registers are retained for the period lodging law requires and then destroyed. Website analytics data is kept in aggregate form and does not identify you.'
      ]
    },
    {
      type: 'table',
      id: 'retention-table',
      eyebrow: 'Retention',
      h2: 'How Long We Keep Each Kind of Data',
      intro: 'The standard retention periods we apply, and why.',
      head: ['Type of data', 'How long we keep it', 'Why'],
      rows: [
        ['Reservation and billing records', 'Seven years from the end of the tax year', 'Required by tax and accounting law'],
        ['Guest register entries', 'As required by Missouri lodging rules', 'Required by lodging law'],
        ['CCTV footage', 'Thirty days, then overwritten', 'Security, unless preserved for an incident'],
        ['Marketing details', 'Until you withdraw consent or the list is tidied', 'We keep marketing only while it is wanted'],
        ['Event and dietary records', 'Seven years alongside the billing record', 'Accounting and, where relevant, food safety'],
        ['Website analytics', 'Aggregate and non-identifying', 'Improving the site without profiling you']
      ],
      note: 'If you would like a specific record deleted earlier, ask us. Where the law allows, we will do it.'
    },
    {
      type: 'prose',
      id: 'your-rights',
      eyebrow: 'Section 8',
      h2: '8. Your Rights',
      body: [
        'You have the right to ask what personal data we hold about you and to receive a copy of it. You have the right to ask us to correct anything that is inaccurate, and to complete anything that is incomplete.',
        'You have the right to receive the data you gave us in a portable, machine-readable format, and the right to object to processing we carry out on the basis of a legitimate interest, including the use of your details for marketing.',
        'To exercise any of these rights, contact us using the details in section 12. We will respond within thirty days and will not charge you for a reasonable request.',
        'If you are not satisfied with how we have handled a request or a concern, you may complain to the Missouri Attorney General\u2019s Office, which oversees consumer protection in our state.'
      ]
    },
    {
      type: 'checklist',
      id: 'rights-list',
      eyebrow: 'Your rights',
      h2: 'The Rights You Can Use',
      intro: 'Contact us to use any of these. There is no charge for a reasonable request.',
      columns: 2,
      items: [
        'Ask what personal data we hold about you',
        'Receive a copy of the data we hold',
        'Have inaccurate information corrected',
        'Have incomplete information completed',
        'Ask us to delete data we no longer need',
        'Ask us to restrict how we use your data',
        'Receive your data in a portable format',
        'Object to marketing or to a legitimate-interest use',
        'Withdraw a consent you have given',
        'Complain to us, or to the Missouri Attorney General'
      ]
    },
    {
      type: 'prose',
      id: 'children',
      eyebrow: 'Section 9',
      h2: '9. Children',
      body: [
        'We welcome families, and we hold personal data about children only where it is needed to look after them during a stay. That usually means a child\u2019s name, age and any allergy or dietary need recorded on a parent or guardian\u2019s reservation.',
        'This website is not directed at children, and we ask that anyone under eighteen does not submit a form or make a booking without a parent or guardian.',
        'If you believe we have collected information about a child without proper consent, tell us and we will remove it promptly. A parent or guardian can ask to see, correct or delete the information we hold about their child using the same rights described in section 8.'
      ]
    },
    {
      type: 'prose',
      id: 'security',
      eyebrow: 'Section 10',
      h2: '10. Security',
      body: [
        'We protect your information with a combination of technical and organisational measures. Our systems use encryption in transit, access is limited to the team members who need it for their role, and each person has their own account rather than sharing passwords.',
        'Paper records such as signed registration cards are kept in a locked office, and our team receives data protection training when they join and refreshes it each year.',
        'If a breach ever occurs that is likely to put you at real risk, we will tell you without undue delay and explain what happened, what we are doing about it and what you can do.'
      ]
    },
    {
      type: 'prose',
      id: 'changes',
      eyebrow: 'Section 11',
      h2: '11. Changes to This Policy',
      body: [
        'We update this policy when our practices change, when we adopt a new system, or when the law requires it.',
        'This policy was last updated on 18 September 2026 and replaces all earlier versions. The version published on this page is always the current one, and we do not keep hidden versions in circulation.'
      ]
    },
    {
      type: 'prose',
      id: 'contact',
      eyebrow: 'Section 12',
      h2: '12. How to Contact Us',
      body: [
        'For any question about this policy, or to exercise a right over your data, contact us at Praivelle House, 1200 Prairie Ridge Road, Kansas City, MO 64112. You can call the front desk on (816) 555-0147, email stay@praivellehouse. com, or write to us at the address above.',
        'We will acknowledge your request promptly and aim to answer it fully within thirty days.',
        'Our reception is staffed twenty-four hours a day, so there is always someone who can take your call and pass your message to the right person.'
      ]
    }
  ],
  faqs: [
    {
      q: 'What personal data does Praivelle House collect?',
      a: 'Your reservation details, the identity document recorded at check-in, the payment information needed to take and refund payment, any dining, spa or event details, marketing preferences if you opt in, CCTV images from shared and outdoor areas, and limited website analytics.'
    },
    {
      q: 'Do you sell my data or use advertising trackers?',
      a: 'No. We never sell personal data and we do not place advertising cookies, social media pixels or third-party trackers on this website. Our analytics are aggregate and do not identify you or follow you to other sites.'
    },
    {
      q: 'How long do you keep my information?',
      a: 'Reservation and billing records are kept for seven years for tax and accounting reasons, CCTV footage for thirty days, and marketing details until you withdraw consent. Guest registers are kept as long as lodging law requires.'
    },
    {
      q: 'How do I ask for a copy of my data, or ask you to delete it?',
      a: 'Contact us at 1200 Prairie Ridge Road, by phone on (816) 555-0147 or by email at stay@praivellehouse.com. We respond within thirty days, will not charge for a reasonable request, and may ask you to prove your identity first.'
    },
    {
      q: 'How do I complain about how my data was handled?',
      a: 'Tell us first, and we will investigate and reply. If you are not satisfied, you can complain to the Missouri Attorney General’s Office, which oversees consumer protection in our state.'
    }
  ],
  cta: {
    h2: 'A Question About Your Data',
    text: 'If anything in this policy is unclear, or you would like to use one of your rights, call the front desk or send us a note. We answer within thirty days, and often the same week.',
    primary: { label: 'Contact the house', path: '/contact' }
  }
};
