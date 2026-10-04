'use strict';

/**
 * Service detail page: Meetings & Corporate Events.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'meetings-corporate',
  order: 5,
  name: 'Meetings & Corporate Events',
  shortName: 'Meetings & Corporate',
  icon: 'presentation',
  image: '/img/svc-meetings-corporate.webp',
  imageAlt: 'The Library boardroom at Praivelle House set with a long oak table for a corporate meeting',
  tagline: 'Board meetings, offsites and retreats in a room with nothing else in it.',
  metaTitle: 'Meetings & Corporate Events in Kansas City | Praivelle House',
  metaDescription:
    'Board meetings, executive offsites and residential retreats for up to 240 delegates in Kansas City. Day delegate rates from $89 per person.',
  metaKeywords:
    'kansas city meeting rooms, corporate retreat kansas city, boardroom hire kansas city, executive offsite missouri, day delegate rate kansas city, conference venue kansas city mo, team away day kansas city',
  eyebrow: 'Meetings & corporate events',
  heroIntro:
    'A panelled boardroom, a hearth room for twenty-four and a ballroom for a hundred and sixty. Fibre, hybrid AV and one event manager who answers the phone.',
  priceFrom: 'Day delegate from $89',
  priceValue: 89,
  duration: 'Half day, full day or residential',
  highlights: [
    'Day delegate rates from $89 per person',
    'The Library boardroom for 18 delegates',
    'Hybrid-ready AV and fibre Wi-Fi',
    'Residential retreats for up to 24',
    'Private dining for client entertaining',
    'Ballroom for up to 160 theatre-style',
    'A dedicated event manager on the day',
    'Complimentary valet parking for delegates'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'why-here',
      eyebrow: 'Why meet here',
      h2: 'A room that stops the day feeling like a Tuesday',
      body: [
        'Off-site meetings work when the room does some of the work for you. The Library at Praivelle House is a panelled room with one long oak table, eighteen chairs and a door that closes properly.',
        'You have two principal meeting rooms and two larger spaces for bigger groups. The Library is our boardroom: eighteen around the table, a wall screen, a glass wall onto the garden and a private door to the terrace for breaks.',
        'Every meeting room is fitted with a 4K screen, an HDMI and USB-C connection at the table, a wireless presentation puck and a ceiling microphone for hybrid calls.',
        'Our day delegate rate starts at $89 per person and covers the room from eight in the morning until six, unlimited tea, coffee and water, a mid-morning break with pastries from our kitchen, a working lunch and the AV above.',
        'Board retreats usually take the Library for the working day and the Hearth Room for dinner, with a facilitator we can recommend if you do not have one.',
        'A dedicated event manager is assigned to your booking from the first enquiry to the final invoice, and you will have their mobile number, not a switchboard.'
      ]
    },
    {
      type: 'cards',
      id: 'what-we-host',
      eyebrow: 'What we host',
      h2: 'From a board table to a full delegation',
      intro:
        'Meetings come in many shapes. These are the ones we run most often, and each can be half-day, full-day or residential.',
      columns: 3,
      items: [
        {
          icon: 'presentation',
          title: 'Boardroom meetings',
          text: 'The Library seats eighteen around one oak table, with a screen, hybrid audio and a door that closes. Half-day and full-day rates available.'
        },
        {
          icon: 'clipboard-check',
          title: 'Board retreats',
          text: 'A working day in the Library, dinner in the Hearth Room and a facilitator if you need one.'
        },
        {
          icon: 'briefcase',
          title: 'Executive offsites',
          text: 'Strategy days that use the prairie trail, the hearth and the Cellar Bar.'
        },
        {
          icon: 'users',
          title: 'Team away-days',
          text: 'Up to two hundred and forty on the lawn for a looser programme: cooking sessions, tastings, a walk to the tree line and a long lunch at one table.'
        },
        {
          icon: 'utensils',
          title: 'Private dining for clients',
          text: 'A private table in The Dining Room with a chef menu and a room where a conversation stays in the room. Sommelier pairing available.'
        },
        {
          icon: 'wifi',
          title: 'AV and connectivity',
          text: 'A 4K screen, USB-C and HDMI at the table, wireless presentation, a ceiling microphone for hybrid calls and fibre on a dedicated meeting VLAN.'
        },
        {
          icon: 'coffee',
          title: 'Day delegate packages',
          text: 'From $89 per person: the room, unlimited refreshments, a mid-morning break, a working lunch and all the AV. Half days available.'
        },
        {
          icon: 'bed',
          title: 'Residential retreats',
          text: 'From $329 per person, with a suite, dinner and breakfast.'
        },
        {
          icon: 'car',
          title: 'Transfers and parking',
          text: 'Complimentary valet and a gated courtyard. Airport transfers to and from MCI can be arranged for a whole delegation on one account.'
        }
      ]
    },
    {
      type: 'split',
      id: 'the-library',
      eyebrow: 'The Library',
      h2: 'A room built for one conversation',
      image: '/img/gallery-library.webp',
      imageAlt: 'The Library boardroom at Praivelle House with bookshelves and a long oak meeting table',
      body: [
        'The Library was the farmhouse study before it was a meeting room, and it still feels like one: dark panelling, a single long table, shelves that hold real books and a window that looks onto the garden rather than a car park.',
        'It seats eighteen comfortably, which is the number at which a board can still have one conversation.'
      ],
      list: [
        'Eighteen around a single table',
        'Hybrid-ready with ceiling microphones',
        'Private terrace for breaks',
        'Fibre on a dedicated meeting VLAN'
      ],
      cta: { label: 'Book a site visit', path: '/contact' }
    },
    {
      type: 'steps',
      id: 'how-it-works',
      eyebrow: 'How it works',
      h2: 'From enquiry to agenda',
      intro: 'Meetings move faster than weddings, so we move faster too.',
      items: [
        {
          title: 'Enquiry',
          text: 'Send us your date, delegate numbers and the shape of the day. We reply the same working day with availability and a rate.'
        },
        {
          title: 'Proposal and site visit',
          text: 'A written proposal within two days. Come and see the rooms, test the AV with your own laptop and meet your event manager.'
        },
        {
          title: 'Programme design',
          text: 'We build the run sheet around your agenda: breaks, lunch, dinner and any activity on the trail or at the hearth.'
        },
        {
          title: 'Confirm and pre-event',
          text: 'A deposit confirms the booking. A week out we lock numbers, dietary needs and the final invoice so there are no surprises.'
        },
        {
          title: 'The day itself',
          text: 'Your event manager runs the room, the kitchen and the AV. You walk in to a set room and leave to a cleared one.'
        }
      ]
    },
    {
      type: 'table',
      id: 'meeting-spaces',
      eyebrow: 'Meeting spaces',
      h2: 'Rooms and capacities',
      intro:
        'Boardroom style seats delegates around a single table. Theatre style seats them in rows facing a screen.',
      head: ['Room', 'Boardroom style', 'Theatre style'],
      rows: [
        ['The Library', '18', '30'],
        ['The Hearth Room', '24', '40'],
        ['The Ballroom', '—', '160'],
        ['The Orchard (south lawn)', '—', '240'],
        ['The Cellar Bar', '12', '20']
      ],
      note: 'The Library and Hearth Room can be combined for up to forty-two boardroom-style. The Ballroom and the Orchard suit larger conferences, launches and town halls.'
    },
    {
      type: 'checklist',
      id: 'included',
      eyebrow: 'What is included',
      h2: 'In the day delegate rate',
      intro:
        'One number per person, covering the room, the refreshments and the technology. No per-item charges for the things every meeting needs.',
      columns: 2,
      items: [
        'The meeting room from 8:00 AM to 6:00 PM',
        'Unlimited tea, coffee and still water',
        'A mid-morning break with pastries from our kitchen',
        'A working lunch with a hot dish, salads and dessert',
        'A 4K screen with HDMI and USB-C at the table',
        'Wireless presentation and a ceiling microphone',
        'Fibre Wi-Fi on a dedicated meeting VLAN',
        'Flip charts, pens and a portable speaker',
        'An event manager on site all day',
        'Setup and breakdown of the room',
        'Complimentary valet parking for delegates',
        'Filtered still and sparkling water throughout'
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Meetings at Praivelle, by the numbers',
      intro: 'A small house that takes corporate days as seriously as it takes weddings.',
      items: [
        { value: 89, prefix: '$', label: 'Day delegate rate, per person' },
        { value: 18, label: 'Delegates around the Library boardroom table' },
        { value: 240, label: 'Delegates on the south lawn under a tent' },
        { value: 24, suffix: ' hrs', label: 'Reception and IT support while you are on site' }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Corporate questions we hear',
      intro: 'Straight answers for the person who has to make the day run.',
      items: [
        {
          q: 'What does the day delegate rate include?',
          a: 'From $89 per person: the room from eight until six, unlimited tea, coffee and water, a mid-morning break, a working lunch, all the AV and an event manager on site. Half-day rates are available for morning or afternoon sessions.'
        },
        {
          q: 'What AV and connectivity do you provide?',
          a: 'A 4K screen, HDMI and USB-C at the table, wireless presentation, a ceiling microphone for hybrid calls and fibre Wi-Fi on a dedicated meeting VLAN. We test your platform the evening before if you send us the link.'
        },
        {
          q: 'Can you host a residential retreat?',
          a: 'Yes. Residential packages start at $329 per person and include a suite, dinner in The Dining Room and breakfast. With twelve suites, a retreat of up to twenty-four people can take the whole property.'
        },
        {
          q: 'Do you offer private dining for client entertaining?',
          a: 'We do. A private table in The Dining Room or the Hearth Room, with a chef menu from Julien Baptiste and a sommelier pairing if you want one. The room stays private for the evening.'
        },
        {
          q: 'How many delegates can you seat?',
          a: 'Eighteen boardroom-style in the Library and twenty-four in the Hearth Room. Theatre-style, the Ballroom holds one hundred and sixty and a tented south lawn holds two hundred and forty.'
        },
        {
          q: 'Is there parking, and how do delegates get here?',
          a: 'Complimentary valet from the porte-cochère, with a gated courtyard behind the house. We are ten minutes from the Country Club Plaza and twenty-four minutes from Kansas City International, and can arrange transfers for a whole delegation.'
        },
        {
          q: 'How far ahead should we book?',
          a: 'For a board meeting or small offsite, a few weeks is usually enough. For a residential retreat or a conference in the Ballroom, book two to three months ahead. Ask us about short-notice dates.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Send us the date and the agenda',
      text: 'Tell us your delegate numbers and the shape of the day. We reply the same working day with availability and a rate, and a written proposal follows within two days.',
      primary: { label: 'Enquire about a meeting', path: '/contact' },
      secondary: { label: 'Call (816) 555-0149', path: 'tel:+18165550149' }
    }
  ],
  faqs: [
    {
      q: 'What does the day delegate rate include?',
      a: 'From $89 per person: the room from eight until six, unlimited tea, coffee and water, a mid-morning break, a working lunch, all the AV and an event manager on site. Half-day rates are available for morning or afternoon sessions.'
    },
    {
      q: 'What AV and connectivity do you provide?',
      a: 'A 4K screen, HDMI and USB-C at the table, wireless presentation, a ceiling microphone for hybrid calls and fibre Wi-Fi on a dedicated meeting VLAN. We test your platform the evening before if you send us the link.'
    },
    {
      q: 'Can you host a residential retreat?',
      a: 'Yes. Residential packages start at $329 per person and include a suite, dinner in The Dining Room and breakfast. With twelve suites, a retreat of up to twenty-four people can take the whole property.'
    },
    {
      q: 'Do you offer private dining for client entertaining?',
      a: 'We do. A private table in The Dining Room or the Hearth Room, with a chef menu from Julien Baptiste and a sommelier pairing if you want one. The room stays private for the evening.'
    },
    {
      q: 'How many delegates can you seat?',
      a: 'Eighteen boardroom-style in the Library and twenty-four in the Hearth Room. Theatre-style, the Ballroom holds one hundred and sixty and a tented south lawn holds two hundred and forty.'
    },
    {
      q: 'Is there parking, and how do delegates get here?',
      a: 'Complimentary valet from the porte-cochère, with a gated courtyard behind the house. We are ten minutes from the Country Club Plaza and twenty-four minutes from Kansas City International, and can arrange transfers for a whole delegation.'
    },
    {
      q: 'How far ahead should we book?',
      a: 'For a board meeting or small offsite, a few weeks is usually enough. For a residential retreat or a conference in the Ballroom, book two to three months ahead. Ask us about short-notice dates.'
    }
  ],
  related: ['experiences-concierge', 'dining'],
  cta: {
    h2: 'A meeting room with nothing else in it',
    text: 'Day delegate rates from $89 per person and residential retreats from $329, quoted in writing with no per-item charges. Talk to our events team about the day you need to run.',
    primary: { label: 'Plan a corporate event', path: '/contact' }
  }
};
