'use strict';
/**
 * Home page content.
 *
 * Data only. The template decides markup, spacing and colour, and it pulls the
 * six services, the review carousel, the team cards, the amenity marquee and
 * the latest journal articles straight from the live data files.
 */

module.exports = {
  slug: 'home',
  path: '/',
  metaTitle: 'Praivelle House | Boutique Hotel, Spa & Dining in Kansas City',
  metaDescription:
    'An independent twelve-suite boutique hotel on the Kansas City prairie. Wood-fired dining, a candlelit spa, a cellar bar and a front desk that never closes.',
  metaKeywords:
    'boutique hotel kansas city, luxury hotel kansas city mo, spa hotel kansas city, fine dining hotel kansas city, wedding venue kansas city, romantic hotel near country club plaza, prairie ridge hotel',

  hero: {
    eyebrow: 'A boutique hotel on the Kansas City prairie',
    h1: 'Stay somewhere that remembers your name',
    intro:
      'An independent twelve-suite hotel on twelve acres of restored prairie, ten minutes from the Plaza. A wood-fired dining room, a candlelit spa, a cellar bar worth staying in for, and a front desk that answers at three in the morning.',
    image: '/img/hero.webp',
    imageAlt:
      'The limestone and oak entrance of Praivelle House lit at dusk, with olive trees and a stone path',
    primaryCta: { label: 'Check availability', path: '/contact#book' },
    secondaryCta: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' },
    quickCards: [
      {
        icon: 'calendar-check',
        title: 'Reservations',
        text: 'Twelve rooms and suites, all different, booked direct or by phone.',
        meta: 'Reception open 24 hours',
        path: '/contact#book'
      },
      {
        icon: 'utensils',
        title: 'The Dining Room',
        text: 'Wood-fired cooking, ninety miles of sourcing, one long table at the hearth.',
        meta: '7:00 AM – 10:00 PM daily',
        path: '/services/dining'
      },
      {
        icon: 'spa',
        title: 'The Spa',
        text: 'Five treatment rooms, a sauna, a heated pool and a very good gym.',
        meta: '9:00 AM – 8:00 PM daily',
        path: '/services/spa-wellness'
      }
    ]
  },

  blocks: [
    /* ------------------------------------------------- category icon cards */
    {
      type: 'services-grid',
      id: 'explore',
      eyebrow: 'What we do',
      h2: 'Explore the House',
      intro:
        'Rooms and suites, a spa, a wood-fired dining room, weddings, corporate meetings and a concierge desk that will build you a day out. You book once and never leave the property unless you want to.',
      cta: { label: 'See all six services', path: '/services' }
    },

    /* ---------------------------------------------- featured room listings */
    {
      type: 'rooms',
      id: 'rooms',
      eyebrow: 'Rooms & suites',
      h2: 'Featured Rooms and Suites',
      intro:
        'Twelve rooms, no two laid out the same, from a quiet library room to an 800-square-foot loft under the rafters. Every rate includes breakfast for two, valet parking and the run of the spa, the pool and the gym.',
      limit: 6,
      cta: { label: 'See all rooms and rates', path: '/services/rooms-suites' }
    },
    /* ------------------------------------------------------------ who we are */
    {
      type: 'split',
      id: 'who-we-are',
      eyebrow: 'Who we are',
      h2: 'A farmhouse that became a hotel, and never stopped being a house',
      body: [
        'In 2008 Genevi\u00e8ve and Michael Marchand bought a tired 1940s farmhouse on twelve acres of prairie south of the Plaza. It had a leaking roof, three very good oak trees and a view that sold it on the spot. The plan was a six-room inn.',
        'What we did not do is demolish it. The original oak floors are still underfoot in the hall, the 1940s footprint still decides where the corridors run, and the room numbers are painted on the doors the way they were when this was somebody\u2019s home.',
        'It is also why there is no corporate script here. The team is hired for temperament first and trained for skill second, because you can teach someone to carry a tray but you cannot teach them to care.'
      ],
      list: [
        'Twelve rooms and suites, no two laid out the same',
        'A restored 1940s farmhouse, original oak floors and footprint',
        'Twelve acres of prairie with a walking trail to the creek',
        'Owned and run by the same family since 2008'
      ],
      image: '/img/about-lobby.webp',
      imageAlt:
        'The marble and brass lobby of Praivelle House with navy velvet armchairs and a large floral arrangement',
      reverse: false,
      cta: { label: 'Read our story', path: '/about' }
    },


    /* ------------------------------------------------------------ trust bar */
    { type: 'trust-bar' },

    /* --------------------------------------------------------------- numbers */
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Eighteen years on the same twelve acres',
      intro: 'An independent house, measured in the things guests actually care about.',
      items: [
        { value: 12, label: 'Suites and rooms, no two the same' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 3,520 reviews' },
        { value: 62, suffix: '%', label: 'Of guests who book a return stay within a year' },
        { value: 18, suffix: ' yrs', label: 'Owned and run by the same family' }
      ]
    },

    /* ------------------------------------------------------- signature offer */
    {
      type: 'offer',
      eyebrow: 'Signature package',
      h2: 'The Prairie Escape, from $279 a night',
      intro:
        'Our most-booked package, and the simplest way to understand what this house is for. One night in a Garden King room, breakfast for two in The Dining Room, a fifty-minute treatment each at The Spa, a bottle of something cold waiting on arrival, and a late two o\u2019clock check-out so the last morning is not spent looking at a clock. Available Sunday to Thursday, subject to availability.',
      cta: { label: 'Book The Prairie Escape', path: '/contact#book' }
    },

    /* ------------------------------------------------------------------ journey */
    {
      type: 'steps',
      id: 'your-stay',
      eyebrow: 'How it works',
      h2: 'From the first enquiry to the drive home',
      intro:
        'Booking a hotel should not be a project. Here is exactly what happens, in order, from the moment you get in touch.',
      items: [
        {
          title: 'Tell us why you are coming',
          text: 'Book online in about ninety seconds, or call the front desk on (816) 555-0147.'
        },
        {
          title: 'We confirm the details before you arrive',
          text: 'You will get a confirmation the same day with your room, your rate and a short note about the property. If you have booked a package with a treatment or a table, we will have already reserved both.'
        },
        {
          title: 'Arrive and hand over the car',
          text: 'Pull into the porte-coch\u00e8re on Prairie Ridge Road and leave the keys with us. Valet is complimentary and there is no queue, because there are only twelve rooms.'
        },
        {
          title: 'Settle in and eat well',
          text: 'Your room will have a hand-written welcome note, a carafe of water and the day\u2019s menu.'
        },
        {
          title: 'Leave later than you meant to',
          text: 'Check-out is eleven o\u2019clock, but ask and we will usually push it to two if the room is free the next night. Breakfast runs until ten.'
        }
      ]
    },

    /* --------------------------------------------------------- why guests choose */
    {
      type: 'cards',
      id: 'why-guests-stay',
      eyebrow: 'Why guests choose us',
      h2: 'Six things guests mention in almost every review',
      intro:
        'We read every review and we ask every departing guest the same question. These six come up again and again, in roughly this order.',
      columns: 3,
      items: [
        {
          icon: 'bell',
          title: 'Someone answers, always',
          text: 'The front desk is staffed twenty-four hours by people who work here permanently. No call centre, no hold music, no script.'
        },
        {
          icon: 'chef-hat',
          title: 'Food worth staying in for',
          text: 'Chef Julien Baptiste cooks over a live oak hearth and sources almost everything within ninety miles.'
        },
        {
          icon: 'spa',
          title: 'A spa that actually helps',
          text: 'Amara Osei trained as a physical therapist before she ever touched a massage table.'
        },
        {
          icon: 'bed',
          title: 'Rooms that are genuinely quiet',
          text: 'Twelve rooms on twelve acres means no corridor noise, no lift chiming outside your door and no wedding party in the next room.'
        },
        {
          icon: 'map-pin',
          title: 'Ten minutes from everything',
          text: 'The Plaza is ten minutes south, downtown is fifteen, the airport is twenty-four.'
        },
        {
          icon: 'hand-heart',
          title: 'Independently owned, on purpose',
          text: 'No chain, no franchise agreement, no monthly sales target.'
        }
      ]
    },

    /* ------------------------------------------------------------ testimonials */
    {
      type: 'testimonials',
      eyebrow: 'Guest reviews',
      h2: 'Rated 4.9 out of 5 by more than 3,500 guests',
      intro:
        'Most of our bookings come from people who were sent here by someone else. These are a few of the reasons why, in the guests\u2019 own words.',
      cta: { label: 'Read all guest reviews', path: '/reviews' },
      limit: 8
    },

    /* ------------------------------------------------------------ team preview */
    {
      type: 'team-preview',
      eyebrow: 'Meet the team',
      h2: 'The people who will look after you',
      intro:
        'Four department heads, all of whom still work the floor. Between them they have spent more than seventy years in hospitality, and every one of them will talk to you directly if you ask. The same faces are here visit after visit.',
      cta: { label: 'Meet the whole team', path: '/team' },
      limit: 3
    },

    /* ---------------------------------------------------------- amenity strip */
    {
      type: 'marquee',
      id: 'included',
      h2: 'Included with every stay, at no extra charge',
      items: [
        'Breakfast for two',
        'Complimentary valet parking',
        'Fibre Wi-Fi throughout',
        'Pool, sauna and steam room',
        '24-hour fitness studio',
        'Evening turndown',
        'Electric bicycles',
        'Local calls',
        'EV charging',
        'In-room dining, 24 hours',
        'Daily housekeeping',
        'Airport transfers on request'
      ]
    },

    /* ------------------------------------------------------------- blog preview */
    {
      type: 'blog-preview',
      eyebrow: 'From the Journal',
      h2: 'Notes from the house, and from the city',
      intro:
        'The team writes about the things guests ask us most: how to spend a weekend in Kansas City, what to pack for a wedding on the lawn, why the kitchen counter is the best seat in the dining room, and how a leaking farmhouse became a hotel. No press releases.',
      cta: { label: 'Read the Journal', path: '/blog' },
      limit: 3
    },

  ],

  faqs: [
    {
      q: 'Where exactly are you, and how do I get there?',
      a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, on twelve acres just south of the Country Club Plaza. The Plaza is about ten minutes by car, downtown is fifteen and Kansas City International is twenty-four.'
    },
    {
      q: 'What time is check-in and check-out?',
      a: 'Check-in opens at 3:00 PM and check-out is 11:00 AM. If you arrive early the lobby, the Cellar Bar from four o\u2019clock and the pool are all yours, and we will take your bags.'
    },
    {
      q: 'Is breakfast included?',
      a: 'Yes. Breakfast for two in The Dining Room is included in every rate, served from 7:00 to 10:00 AM.'
    },
    {
      q: 'Do you allow children and pets?',
      a: 'Children are very welcome, and cots are free of charge. We can also arrange a connecting pair of rooms if you are travelling as a family, and the kitchen will happily cook something simpler for a young guest.'
    },
    {
      q: 'What is your cancellation policy?',
      a: 'You can cancel or move your dates without charge up to 72 hours before arrival. Inside 72 hours we charge one night, and a no-show is charged in full.'
    },
    {
      q: 'Do you host weddings and private events?',
      a: 'We do, from twelve-guest elopements in the orchard to receptions for 240 on the south lawn. Clara Whitfield runs every event personally and has done so since 2016.'
    },
    {
      q: 'Is the property accessible?',
      a: 'Yes. There is step-free access from the car park to the lobby, a lift to all floors, and two ground-floor accessible rooms with roll-in showers, grab rails, lowered peepholes and visual alarms. Reception has a hearing loop.'
    },
    {
      q: 'Can I book the spa or the dining room without staying?',
      a: 'The Dining Room and the Cellar Bar are open to non-residents, and the spa takes day bookings when there is availability, though residents get priority on the treatment diary.'
    },
    {
      q: 'What is there to do nearby?',
      a: 'The Nelson-Atkins Museum and the Kemper are fifteen minutes away, the Crossroads and the River Market are twenty, and the Kauffman Center is downtown. The National WWI Museum, the Negro Leagues Baseball Museum and the streetcar are all within half an hour.'
    }
  ],

  cta: {
    h2: 'Twelve rooms. One of them is free this weekend.',
    text: 'Book direct for the lowest rate we publish, free valet parking, breakfast for two and a front desk that answers at any hour. If you would rather talk it through, call and we will find the right room for the trip you are actually taking.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
