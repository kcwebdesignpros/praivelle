'use strict';
/**
 * Services index — the hub for the six things the house does. Renders the
 * service catalogue from data/services via the services-grid block, then
 * explains how the pieces fit together and how to book.
 */

module.exports = {
  slug: 'services-index',
  path: '/services',
  name: 'Stay & Services',
  metaTitle: 'Stay & Services | Praivelle House Boutique Hotel Kansas City',
  metaDescription:
    'Twelve suites, a private spa, a wood-fired dining room, a cellar bar, weddings and meetings — everything Praivelle House does, under one prairie roof in Kansas City.',
  metaKeywords:
    'boutique hotel kansas city services, hotel suites kansas city, spa kansas city, fine dining kansas city, wedding venue kansas city, corporate retreat kansas city',
  eyebrow: 'Stay & services',
  h1: 'Everything Under One Prairie Roof',
  heroIntro:
    'Twelve suites, a spa, a wood-fired dining room, a cellar bar, a wedding lawn and a boardroom. One house, six things done properly, and no reason to leave the property unless you want to.',
  heroImage: '/img/hero.webp',
  heroImageAlt: 'Praivelle House at dusk, an independent boutique hotel on the Kansas City prairie',
  heroStats: [
    { value: 6, label: 'Things the house does, all in one place' },
    { value: 12, label: 'Suites and rooms, each a different shape' },
    { value: 24, suffix: ' hr', label: 'Reception, every day of the year' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'From 3,520 guest reviews' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-17',
  blocks: [
    {
      type: 'prose',
      id: 'intro',
      eyebrow: 'Start here',
      h2: 'Six Things, One House, and Why That Matters',
      body: [
        'Most hotels are one thing. A city hotel is a bed and a lobby. A resort is a pool and a buffet. A restaurant with rooms is a restaurant with rooms.',
        'That is unusual, and it is the whole point.',
        'We think of the six services as one experience with six doors, and guests move between them freely. A room rate includes breakfast. A spa booking includes pool and sauna access for the day. A dinner reservation can be paired with a cellar bar flight.',
        'There is a practical reason for the arrangement as well. A house that runs six things can afford to do each of them properly, because the kitchen feeds the events, the events fill the rooms, and the rooms bring people to the spa.',
        'This page is the map.'
      ]
    },
    {
      type: 'services-grid',
      id: 'the-six',
      eyebrow: 'The six services',
      h2: 'Where Would You Like to Start?',
      intro: 'Each one is run by its own department and its own director, and every one of them is available to every guest in the house.',
      cta: { label: 'Talk to the front desk', path: '/contact' }
    },
    /* ------------------------------------------------- room listing cards */
    {
      type: 'rooms',
      id: 'rooms',
      eyebrow: 'Rooms & suites',
      h2: 'Somewhere to Sleep It Off',
      intro:
        'Twelve rooms across six room types, from a quiet library room to an 800-square-foot loft under the rafters. Every rate includes breakfast for two, valet parking and the spa.',
      limit: 3,
      cta: { label: 'All rooms and rates', path: '/services/rooms-suites' }
    },
    {
      type: 'cards',
      id: 'why',
      eyebrow: 'Why one house',
      h2: 'What You Get From a Place That Does Six Things',
      intro: 'A single team across every part of the property changes what a stay feels like.',
      columns: 3,
      items: [
        {
          icon: 'key',
          title: 'One team, start to finish',
          text: 'The people who check you in are the people who know your dinner reservation, your spa time and your late check-out.'
        },
        {
          icon: 'wallet',
          title: 'One bill, no surprises',
          text: 'Rooms, dining, spa and experiences all post to a single folio.'
        },
        {
          icon: 'leaf',
          title: 'One property, walkable',
          text: 'Everything is a two-minute walk across a garden.'
        }
      ]
    },
    {
      type: 'split',
      id: 'how-it-works',
      eyebrow: 'How it fits together',
      h2: 'A Stay, a Treatment and a Dinner Are Not Three Errands',
      image: '/img/svc-spa-wellness.webp',
      imageAlt: 'A treatment room at The Spa at Praivelle House',
      body: [
        'The reason we run six services under one roof is that a good stay is not a checklist of purchases. It is a sequence, and the sequence matters. You arrive, you settle, you eat, you sleep, you do something restorative, you eat again.',
        'So when you book a spa treatment, the therapist knows whether you arrived late the night before and whether you have a long drive ahead, because the front desk told them.',
        'None of this is clever technology. It is a small team in a small house, paying attention, with a shared system and a shared set of standards.',
        'If you are planning something that spans more than one service \u2014 a wedding weekend, a company retreat, a milestone birthday \u2014 tell us once and we will coordinate all of it. One point of contact, one plan, one bill.'
      ],
      list: [
        'One point of contact for a stay that spans several services',
        'Departments that talk to each other, not just to the guest',
        'A single folio for rooms, dining, spa and experiences',
        'No resort fee and no service charge, ever'
      ],
      cta: { label: 'Plan with the concierge', path: '/contact' }
    },
    {
      type: 'steps',
      id: 'how-to-book',
      eyebrow: 'How to book',
      h2: 'Booking a Stay, Step by Step',
      intro: 'It takes about five minutes, and a person answers the phone at any hour.',
      items: [
        {
          title: 'Choose what you want the stay to be',
          text: 'A quiet night, a spa weekend, a dinner you have been looking forward to, or a full event. You do not need to have it worked out.'
        },
        {
          title: 'Call, email or book online',
          text: 'Reception is staffed twenty-four hours on (816) 555-0147, or email stay@praivellehouse.com. For events, call (816) 555-0149 and ask for Clara. Online booking shows live availability for all twelve rooms.'
        },
        {
          title: 'Tell us the details that matter',
          text: 'Allergies, mobility needs, a dog, an anniversary, a preference for a firm mattress or a quiet corner. The more we know before you arrive, the less you have to ask for once you are here.'
        },
        {
          title: 'We confirm everything in one message',
          text: 'Your room, your dinner, your treatment, your parking and anything else you have asked for, in a single confirmation. No separate vouchers, no codes to remember.'
        },
        {
          title: 'Arrive and let us handle it',
          text: 'Check-in is from 3:00 PM. Valet is complimentary from the porte-cochère. If you are running late, tell us and we will hold everything, including the kitchen.'
        }
      ]
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'At a glance',
      h2: 'The Six Services, Compared',
      intro: 'A plain comparison to help you decide where to start. Prices are the typical entry point and vary by season, room and party size.',
      head: ['Service', 'Best for', 'From'],
      rows: [
        ['Rooms & Suites', 'A quiet night, a long weekend or a whole-house buyout', '$389 per night'],
        ['Spa & Wellness', 'Rest, recovery, slow mornings and treatments for two', '$95 per treatment'],
        ['Dining & Culinary', 'A celebration or an ordinary Tuesday done properly', '$65 per person'],
        ['Weddings & Celebrations', 'The whole day, from a twelve-guest elopement to two hundred', '$4,500'],
        ['Meetings & Corporate Events', 'Boards, retreats and offsites that need to be quiet', '$1,200 per day'],
        ['Experiences & Concierge', 'Seeing Kansas City properly, without planning it yourself', '$150 per experience']
      ],
      note: 'Rates exclude tax and are quoted in US dollars. The Prairie Escape package bundles a room, breakfast, treatments and late check-out from $279 a night.'
    },
    {
      type: 'checklist',
      id: 'included',
      eyebrow: 'Always included',
      h2: 'What Every Stay Includes, Whichever Door You Came Through',
      intro: 'These are not extras and they are not a package. They are simply how the house works.',
      columns: 2,
      items: [
        'Breakfast for two in The Dining Room, 7:00 AM to 10:00 AM',
        'Complimentary valet from the porte-cochère, and gated self-parking',
        'Fibre Wi-Fi throughout the house and grounds',
        'Access to the heated indoor pool, sauna and steam room',
        'Evening turndown with fresh water and a local chocolate',
        'In-room dining available twenty-four hours',
        'Filtered still and sparkling water, restocked daily',
        'Local and domestic calls at no charge',
        'Access to the prairie trail and the restored north field',
        'A welcome note from Geneviève, written by hand'
      ]
    },
    {
      type: 'trust-bar',
      id: 'trust'
    },
    {
      type: 'stats',
      id: 'numbers',
      eyebrow: 'By the numbers',
      h2: 'The House in Figures',
      intro: 'The numbers we would want to know if we were booking.',
      items: [
        { value: 12, label: 'Suites and rooms, all different' },
        { value: 10, suffix: ' min', label: 'To the Country Club Plaza by car' },
        { value: 24, suffix: ' min', label: 'To Kansas City International (MCI)' },
        { value: 62, suffix: '%', label: 'Of guests who book a return stay within a year' }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions Before You Book',
      intro: 'The things guests most often want cleared up before they commit.',
      items: [
        {
          q: 'Do I have to be a hotel guest to use the spa or the dining room?',
          a: 'No. The Dining Room, the cellar bar and The Spa are all open to non-residents, subject to availability. Residents get booking priority and pool access is included with any treatment or room stay.'
        },
        {
          q: 'Can I book just one service, or do I have to take a package?',
          a: 'You can book anything on its own. A dinner reservation, a single treatment or a meeting room are all perfectly normal bookings. Packages exist because they are good value and simple, not because we require them.'
        },
        {
          q: 'What time is check-in and check-out?',
          a: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Reception is staffed twenty-four hours, so late arrivals are no trouble. Late check-out is often possible and is included in some packages.'
        },
        {
          q: 'Is there parking, and does it cost anything?',
          a: 'Valet from the porte-cochère on Prairie Ridge Road is complimentary for all guests, as is self-parking in the gated courtyard behind the house. EV charging points are available on request.'
        },
        {
          q: 'How far are you from the airport and downtown?',
          a: 'Kansas City International is about twenty-four minutes north by car, and the Country Club Plaza is about ten minutes. We can arrange an airport transfer in advance if you would rather not drive.'
        },
        {
          q: 'Can you host a wedding and put up the guests?',
          a: 'Yes, and it is one of the nicest things the house does. With twelve rooms we can host intimate weddings entirely on site, and for larger celebrations we work with two nearby hotels for overflow.'
        },
        {
          q: 'Do you take group and corporate bookings?',
          a: 'We do. The library seats fourteen and the dining room can be taken privately for up to sixty. For retreats that use rooms, meeting space and meals together, ask for a single proposal and one bill.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Tell Us What You Have in Mind',
      text: 'A quiet night, a spa weekend, a wedding or a board retreat — the front desk is staffed around the clock and happy to talk it through before you commit to anything.',
      primary: { label: 'Check availability', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'Do I have to be a hotel guest to use the spa or the dining room?',
      a: 'No. The Dining Room, the cellar bar and The Spa are all open to non-residents, subject to availability. Residents get booking priority and pool access is included with any treatment or room stay.'
    },
    {
      q: 'Can I book just one service, or do I have to take a package?',
      a: 'You can book anything on its own. A dinner reservation, a single treatment or a meeting room are all perfectly normal bookings.'
    },
    {
      q: 'What time is check-in and check-out?',
      a: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Reception is staffed twenty-four hours, so late arrivals are no trouble.'
    },
    {
      q: 'Is there parking, and does it cost anything?',
      a: 'Valet from the porte-cochère is complimentary for all guests, as is self-parking in the gated courtyard behind the house. EV charging points are available on request.'
    },
    {
      q: 'How far are you from the airport and downtown?',
      a: 'Kansas City International is about twenty-four minutes north by car, and the Country Club Plaza is about ten minutes.'
    },
    {
      q: 'Can you host a wedding and put up the guests?',
      a: 'Yes. With twelve rooms we can host intimate weddings entirely on site, and for larger celebrations we work with two nearby hotels for overflow.'
    },
    {
      q: 'Do you take group and corporate bookings?',
      a: 'We do. The library seats fourteen and the dining room can be taken privately for up to sixty. For retreats that use rooms, meeting space and meals, ask for a single proposal and one bill.'
    }
  ],
  cta: {
    h2: 'Tell Us What You Have in Mind',
    text: 'A quiet night, a spa weekend, a wedding or a board retreat — the front desk is staffed around the clock and happy to talk it through before you commit to anything.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
