'use strict';
/**
 * Accessibility Statement. Our commitment, the physical property, service
 * levels, the website and the honest limits of a 1940s building.
 */

module.exports = {
  slug: 'accessibility',
  path: '/accessibility',
  name: 'Accessibility Statement',
  metaTitle: 'Accessibility Statement | Praivelle House',
  metaDescription:
    'How Praivelle House makes the hotel and this website accessible, from step-free rooms and hearing loops to WCAG 2.2 AA, and how to tell us what would help.',
  metaKeywords:
    'accessible hotel kansas city, wheelchair accessible hotel kansas city mo, accessible accommodation missouri, wcag 2.2 aa hotel website, assistance dogs hotel, roll-in shower hotel kansas city',
  eyebrow: 'Commitment',
  h1: 'Accessibility at Praivelle House',
  heroIntro:
    'Everyone should be able to stay somewhere lovely without fighting the building to do it. This statement explains what we offer, what we are still improving, and how to ask for what you need.',
  heroImage: '/img/gallery-terrace.webp',
  heroImageAlt: 'The step-free terrace and garden path at Praivelle House in Kansas City',
  heroStats: [
    { value: 2, label: 'Fully accessible suites with roll-in showers' },
    { value: 2, suffix: '.2 AA', label: 'The WCAG level we target' },
    { value: 5, suffix: ' days', label: 'To acknowledge accessibility feedback' },
    { value: 24, suffix: ' hrs', label: 'Reception, staffed around the clock' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'commitment',
      eyebrow: 'Our commitment',
      h2: 'Our Commitment',
      body: [
        'Praivelle House is committed to welcoming every guest, and to making our website and our building usable by people with disabilities.',
        'On the web, we aim to meet the Web Content Accessibility Guidelines version 2. 2 at Level AA, which is the recognised standard for accessible websites.',
        'Accessibility is not a project with an end date. We review this statement and the property at least once a year, we act on feedback as it comes in, and we would genuinely like to hear from you if something does not work.'
      ]
    },
    {
      type: 'checklist',
      id: 'features',
      eyebrow: 'In place today',
      h2: 'Accessibility Features in Place Today',
      intro: 'Live now in the building and on this website.',
      columns: 2,
      items: [
        'A step-free entrance from the porte-cochère and car park',
        'A lift serving all guest floors and the dining room',
        'Two fully accessible suites with roll-in showers',
        'Grab rails and non-slip flooring in accessible bathrooms',
        'Lowered peepholes and lever handles on accessible suite doors',
        'Visual fire alarms and vibrating pillow alerts on request',
        'A hearing loop at the reception desk',
        'Accessible parking spaces close to the step-free entrance',
        'Valet assistance on arrival and departure',
        'Large-print menus and accessible formats on request',
        'Semantic HTML with a logical heading structure',
        'Keyboard-navigable menus, forms and booking flow'
      ]
    },
    {
      type: 'prose',
      id: 'physical-property',
      eyebrow: 'The building',
      h2: 'The Physical Property',
      body: [
        'The main entrance is step-free. You can arrive under the porte-coch\u00e8re on Prairie Ridge Road, where the surface is level and the doors open automatically, and reach reception without encountering a step.',
        'A lift serves every guest floor, the dining room, the cellar bar and the spa, so no part of the guest experience requires you to manage stairs. Two of our suites, The Cottonwood and The Bluestem, are fully accessible.',
        'The accessible suites also have lowered peepholes and light switches, lever handles rather than round knobs, and a clear route to the bed and the desk.',
        'The house is a 1940s farmhouse, so the doorways in some of the older rooms are narrower than a modern hotel standard, and the floors are not always perfectly level.'
      ]
    },
    {
      type: 'prose',
      id: 'spa-pool-dining',
      eyebrow: 'The spa, pool and dining room',
      h2: 'The Spa, the Pool and The Dining Room',
      body: [
        'The Dining Room, the cellar bar and the spa are all reached by lift and have step-free access once you arrive. The dining room has tables at a height that suits a wheelchair, chairs with and without arms, and space to move between tables.',
        'The spa has a treatment room that is wheelchair accessible, with a height-adjustable couch and space for a carer or support person to stay in the room.',
        'The heated indoor pool has a step-free route to the water, a pool hoist and a changing area with a bench and grab rails.',
        'Dietary needs are part of accessibility, and our kitchen takes allergies and intolerances seriously. Tell us when you book or when you arrive, and the kitchen will prepare something safe and genuinely good rather than an afterthought.'
      ]
    },
    {
      type: 'prose',
      id: 'assistance-dogs',
      eyebrow: 'Assistance dogs',
      h2: 'Assistance Dogs',
      body: [
        'Assistance dogs are always welcome at Praivelle House, in every part of the house, and they are never charged. This includes guide dogs, hearing dogs, medical alert dogs and any other dog trained to support a person with a disability.',
        'We can provide a water bowl and a mat in your suite, and we will point you to the best places on the grounds for a walk and to relieve the dog. Our team is trained not to distract or touch a working dog without your permission.',
        'Our pet-friendly policy for ordinary pets is separate and carries a charge, but it never applies to assistance dogs.'
      ]
    },
    {
      type: 'prose',
      id: 'service-levels',
      eyebrow: 'How we help',
      h2: 'Service Levels and How to Ask for Help',
      body: [
        'We would rather plan ahead than improvise. If you tell us what you need when you book, we will call you before you arrive to go through the details, confirm the room, and make sure everything is ready.',
        'We can provide large-print and high-contrast documents, menus in larger type, written summaries of anything explained verbally, and assistance with forms at check-in. If you use Missouri Relay or another relay service, we are happy to take your call that way.',
        'You do not have to give a diagnosis to ask for help, and you will never be charged for a reasonable adjustment.',
        'Our team receives accessibility and disability-awareness training as part of their induction, and it is refreshed regularly.'
      ]
    },
    {
      type: 'table',
      id: 'accommodations',
      eyebrow: 'Options',
      h2: 'Adjustments We Can Arrange',
      intro: 'A starting point, not a limit. Ask if you need something that is not listed.',
      head: ['Area', 'What we can provide', 'How to ask'],
      rows: [
        ['Mobility', 'Accessible suites, roll-in showers, shower chairs, raised toilet seats, bed rails, step-free routes', 'Tell us when you book so we can prepare the room'],
        ['Hearing', 'Hearing loop at reception, visual fire alarms, vibrating pillow alerts, written summaries', 'Ask at booking or on arrival'],
        ['Vision', 'Large-print menus and documents, high-contrast formats, staff assistance with forms', 'Ask at the desk or when you book'],
        ['Sensory', 'A quieter room, reduced lighting, advance notice of events, a scent-free treatment room', 'Mention your preferences when you book'],
        ['Communication', 'Relay calls, sign language interpreters with notice, plain-language explanations', 'Contact us at least a week ahead where possible'],
        ['Dietary', 'Coeliac, dairy-free, vegan, nut-free and other diets, recorded against your booking', 'Tell the kitchen when you book or arrive'],
        ['Assistance dogs', 'Welcome everywhere, water bowl and mat provided, no charge', 'Simply tell us you are bringing one']
      ],
      note: 'Adjustments are provided at no cost. You will never be charged for asking for one.'
    },
    {
      type: 'prose',
      id: 'website',
      eyebrow: 'The website',
      h2: 'The Website',
      body: [
        'This website targets the Web Content Accessibility Guidelines version 2. 2 at Level AA. We use semantic HTML with a logical heading structure, so screen readers can move through a page in a sensible order, and every meaningful image carries descriptive alternative text.',
        'Everything on the site can be reached and operated with a keyboard alone, including the menus, the booking flow and the contact forms. Every interactive element has a visible focus indicator, so you can always see where you are.',
        'We support reduced-motion preferences, so if you have asked your operating system to minimise animation, the site respects that and stops the moving elements. Body text meets a contrast ratio of at least 4.',
        'We do not use third-party tracking, and we do not add advertising that flashes or moves. If you find a page where something does not work, please tell us, because a barrier you report is one we can fix for the next person as well.'
      ]
    },
    {
      type: 'prose',
      id: 'known-limitations',
      eyebrow: 'Still working on it',
      h2: 'Known Limitations',
      body: [
        'We would rather be honest than claim a perfection we do not have. The clearest limitation is in the west wing, where the original 1940s staircase serves two upper suites and has no lift.',
        'Some of the older doors in the original part of the house are narrower than a modern standard, and a small number of thresholds have a lip of an inch or two.',
        'On the website, a few documents that predate this statement are not yet fully tagged for screen readers. Where a document is not accessible, we will provide the same information in another format on request, and we are working through the backlog.',
        'The spa pool hoist is available but must be booked in advance so a trained member of staff can be present to help. The prairie trails are mown grass and are not surfaced, so they are firm in dry weather but softer after rain.'
      ]
    },
    {
      type: 'prose',
      id: 'feedback',
      eyebrow: 'Feedback',
      h2: 'Giving Us Feedback',
      body: [
        'If you find a barrier, whether in the building or on the website, please tell us. Email stay@praivellehouse. com, call the front desk on (816) 555-0147, or ask for the duty manager when you are here.',
        'We commit to acknowledging your feedback within five working days and to giving you a considered reply within twenty-eight days. Where something can be fixed quickly, we will fix it and tell you we have.',
        'We keep a record of accessibility feedback so that themes are visible over time, and we review that record as part of our annual accessibility review. If several guests raise the same point, that tells us where to spend next.'
      ]
    },
    {
      type: 'prose',
      id: 'complaints',
      eyebrow: 'Formal complaints',
      h2: 'Formal Complaints',
      body: [
        'If you are not satisfied with how we have responded to an access concern, you can escalate it in writing to the General Manager, Genevi\u00e8ve Marchand, CHA, at Praivelle House, 1200 Prairie Ridge Road, Kansas City, MO 64112.',
        'We will investigate, respond in writing, and tell you what we found and what we intend to change. If we cannot resolve the matter between us, you may also contact the Missouri Commission on Human Rights or the U. S.',
        'This statement was last updated on 18 September 2026. We review it at least once a year, or sooner if the building, the website or the law changes. If you would like a copy in another format, ask and we will send one.'
      ]
    }
  ],
  faqs: [
    {
      q: 'Are there wheelchair-accessible rooms at Praivelle House?',
      a: 'Yes. Two suites, The Cottonwood and The Bluestem, are fully accessible, with level access from the lift, a wide doorway, turning space and a bathroom with a roll-in shower, a fold-down seat, grab rails and a handheld shower head.'
    },
    {
      q: 'Can I bring an assistance dog?',
      a: 'Always. Assistance dogs are welcome in every part of the house and are never charged. We can provide a water bowl and a mat, and our team is trained not to distract a working dog.'
    },
    {
      q: 'Is the spa and pool accessible?',
      a: 'Yes. The spa and pool are reached by lift, and the spa has a wheelchair-accessible treatment room with a height-adjustable couch. The pool has a step-free route and a pool hoist, which must be booked in advance so a trained team member can be present.'
    },
    {
      q: 'Does the website meet accessibility standards?',
      a: 'This website targets WCAG 2.2 Level AA, with semantic HTML, keyboard navigation, visible focus indicators, reduced-motion support, sufficient colour contrast and screen-reader testing. Tell us if you find a barrier and we will fix it.'
    },
    {
      q: 'How do I report an accessibility problem?',
      a: 'Email stay@praivellehouse.com, call (816) 555-0147 or ask for the duty manager. We acknowledge feedback within five working days and give a considered reply within twenty-eight days.'
    }
  ],
  cta: {
    h2: 'Tell Us What Would Help',
    text: 'If you have an access requirement, or something on this website or in the house is difficult for you, call the front desk or send us a note. We will plan around you rather than ask you to adapt.',
    primary: { label: 'Contact the house', path: '/contact' },
    secondary: { label: 'Call (816) 555-0148', path: 'tel:+18165550148' }
  }
};
