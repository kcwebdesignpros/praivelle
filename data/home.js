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
    /* ------------------------------------------------------------ trust bar */
    { type: 'trust-bar' },

    /* ------------------------------------------------------------ who we are */
    {
      type: 'split',
      id: 'who-we-are',
      eyebrow: 'Who we are',
      h2: 'A farmhouse that became a hotel, and never stopped being a house',
      body: [
        'In 2008 Geneviève and Michael Marchand bought a tired 1940s farmhouse on twelve acres of prairie south of the Plaza. It had a leaking roof, three very good oak trees and a view that sold it on the spot. The plan was a six-room inn. The plan lasted about a year, and eighteen years later Praivelle House is twelve suites, a spa, a wood-fired dining room and a cellar bar.',
        'What we did not do is demolish it. The original oak floors are still underfoot in the hall, the 1940s footprint still decides where the corridors run, and the room numbers are painted on the doors the way they were when this was somebody\u2019s home. Guests notice within about ten minutes. It is why the place feels like a house rather than a hotel that has been styled to look like one.',
        'It is also why there is no corporate script here. The team is hired for temperament first and trained for skill second, because you can teach someone to carry a tray but you cannot teach them to care. Geneviève still writes the welcome note that goes into every room by hand, and she still remembers the names of guests who stayed with her in the first year. Book a room and you will meet the people who own the place, not a management company.'
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

    /* ---------------------------------------------------------- services grid */
    {
      type: 'services-grid',
      eyebrow: 'What we do',
      h2: 'Six reasons to stay, all under one prairie roof',
      intro:
        'Rooms and suites, a spa, a wood-fired dining room, weddings, corporate meetings and a concierge desk that will build you a day out. You book once and never leave the property unless you want to — which, on a good weekend, you will not.',
      cta: { label: 'See all six services', path: '/services' }
    },

    /* ----------------------------------------------------------- why book direct */
    {
      type: 'prose',
      id: 'why-book-direct',
      eyebrow: 'Why book direct',
      h2: 'The reasons guests book with us rather than through a platform',
      body: [
        'When you book directly you are talking to the house, not to a screen in another time zone. That matters more than it sounds. It means we can put you in the right room for what you actually want — the quiet one at the back if you are working, the one with the soaking tub and the morning sun if you are not. It means we can note that it is your anniversary, or that you need a cot, or that you would rather not be near the terrace when a wedding is on.',
        'It also means the rate is the lowest one available. We hold our best prices for direct bookings and we will match any published rate you find elsewhere, provided the room type and dates are identical. There is no booking fee, no resort fee and no charge for the things that should never have been chargeable in the first place: valet parking, fibre Wi-Fi, breakfast for two, the pool, the spa\u2019s sauna and steam room, and the electric bicycles.',
        'The third reason is flexibility. Direct guests can move a date without a fee up to seventy-two hours before arrival, add a spa treatment the morning of, or ask for a late check-out that we will usually grant if the room is free. None of that is possible through a third-party platform, where we are contractually forbidden from touching your booking at all. Booking direct is simply the version of this hotel that has a person in it.',
        'We are not precious about it. Plenty of guests arrive through a platform on their first stay and book direct on their second. All we ask is that you give us a reason to be useful. Tell us why you are coming, and we will almost always find something to make the trip better — a table by the window, a bottle of something cold in the room, a route to the trailhead that avoids the road.',
        'And if something goes wrong, you have one number to call and a person who already knows your name. That is the whole proposition. Not a loyalty scheme, not points, not a tier. Just a small house where the staff are paid well enough to stay, and therefore know what they are doing.'
      ],
      listTitle: 'What booking direct gets you',
      list: [
        'The lowest rate we publish, matched if you find better',
        'The right room for how you actually plan to spend the weekend',
        'Free valet parking, breakfast for two and fibre Wi-Fi',
        'Date changes free up to 72 hours before arrival',
        'One telephone number and a person who knows your booking'
      ]
    },

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
          text: 'Book online in about ninety seconds, or call the front desk on (816) 555-0147. If you tell us what the trip is for — a birthday, a quiet week of work, a first visit to Kansas City — we will match the room to it and note anything you would rather avoid. Reception is staffed around the clock, so there is no wrong hour to call.'
        },
        {
          title: 'We confirm the details before you arrive',
          text: 'You will get a confirmation the same day with your room, your rate and a short note about the property. If you have booked a package with a treatment or a table, we will have already reserved both. Add your arrival time and we will have the room ready and the fire lit in the lobby if it is cold.'
        },
        {
          title: 'Arrive and hand over the car',
          text: 'Pull into the porte-cochère on Prairie Ridge Road and leave the keys with us. Valet is complimentary and there is no queue, because there are only twelve rooms. Check-in opens at three o\u2019clock and the front desk will already know your name. If you are early, the Cellar Bar opens at four and the trail to the creek takes about twenty minutes.'
        },
        {
          title: 'Settle in and eat well',
          text: 'Your room will have a hand-written welcome note, a carafe of water and the day\u2019s menu. Dinner in The Dining Room runs from half past five, the four-seat kitchen counter is the best seat in the house, and in-room dining is available at any hour if you would rather not move. The spa stays open until eight.'
        },
        {
          title: 'Leave later than you meant to',
          text: 'Check-out is eleven o\u2019clock, but ask and we will usually push it to two if the room is free the next night. Breakfast runs until ten. Most guests end up on the terrace with a second coffee, which is exactly the point. Before you go, the front desk will ask one question: what would you change? We write the answers down.'
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
          text: 'The front desk is staffed twenty-four hours by people who work here permanently. No call centre, no hold music, no script. Ask for a restaurant recommendation at eleven at night and you will get a real one.'
        },
        {
          icon: 'chef-hat',
          title: 'Food worth staying in for',
          text: 'Chef Julien Baptiste cooks over a live oak hearth and sources almost everything within ninety miles. Guests regularly tell us the dining room was the best meal of their trip, which for a hotel restaurant is a compliment we do not take lightly.'
        },
        {
          icon: 'spa',
          title: 'A spa that actually helps',
          text: 'Amara Osei trained as a physical therapist before she ever touched a massage table. Treatments start with a conversation about sleep and posture rather than a list of oils, and the signature Prairie Reset is the most requested booking in the building.'
        },
        {
          icon: 'bed',
          title: 'Rooms that are genuinely quiet',
          text: 'Twelve rooms on twelve acres means no corridor noise, no lift chiming outside your door and no wedding party in the next room. The beds are king, the linen is changed daily, and the blackout curtains actually black out.'
        },
        {
          icon: 'map-pin',
          title: 'Ten minutes from everything',
          text: 'The Plaza is ten minutes south, downtown is fifteen, the airport is twenty-four. You get the prairie quiet and the city when you want it, without spending the weekend in a car park on the edge of a freeway.'
        },
        {
          icon: 'hand-heart',
          title: 'Independently owned, on purpose',
          text: 'No chain, no franchise agreement, no monthly sales target. The family who bought the land in 2008 still runs the house, which is why we can say no to things and why the staff tend to stay for years.'
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

    /* ---------------------------------------------------------------------- FAQ */
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions guests ask before they book',
      intro: 'Straight answers to the things people most want to know before their first stay.',
      items: [
        {
          q: 'Where exactly are you, and how do I get there?',
          a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, on twelve acres just south of the Country Club Plaza. The Plaza is about ten minutes by car, downtown is fifteen and Kansas City International is twenty-four. Valet parking from the porte-cochère is complimentary, and there is self-parking in the gated courtyard behind the house if you would rather keep the keys.'
        },
        {
          q: 'What time is check-in and check-out?',
          a: 'Check-in opens at 3:00 PM and check-out is 11:00 AM. If you arrive early the lobby, the Cellar Bar from four o\u2019clock and the pool are all yours, and we will take your bags. Late check-out to 2:00 PM is usually available on request if the room is not booked the following night, and it is included in The Prairie Escape package.'
        },
        {
          q: 'Is breakfast included?',
          a: 'Yes. Breakfast for two in The Dining Room is included in every rate, served from 7:00 to 10:00 AM. It is a proper breakfast rather than a buffet of pastries: eggs however you like them, the kitchen\u2019s own granola, cured meats from a producer in Lawrence, fruit from whichever orchard is in season and as much coffee as you want. Room service breakfast is available for a small tray charge.'
        },
        {
          q: 'Do you allow children and pets?',
          a: 'Children are very welcome, and cots are free of charge. We can also arrange a connecting pair of rooms if you are travelling as a family, and the kitchen will happily cook something simpler for a young guest. Well-behaved dogs are welcome in the Garden rooms and the Orchard Suite for $75 per stay, up to two dogs, with bowls, beds and a map of the walking trail provided.'
        },
        {
          q: 'What is your cancellation policy?',
          a: 'You can cancel or move your dates without charge up to 72 hours before arrival. Inside 72 hours we charge one night, and a no-show is charged in full. Packages including a spa treatment or a tasting menu have the same window, though we will always try to move the treatment rather than cancel it. Everything is confirmed in writing when you book.'
        },
        {
          q: 'Do you host weddings and private events?',
          a: 'We do, from twelve-guest elopements in the orchard to receptions for 240 on the south lawn. Clara Whitfield runs every event personally and has done so since 2016. Because there are only twelve rooms, a wedding here usually takes over the whole house, which is precisely why couples choose it. Start with our Weddings & Celebrations page or call the events line on (816) 555-0149.'
        },
        {
          q: 'Is the property accessible?',
          a: 'Yes. There is step-free access from the car park to the lobby, a lift to all floors, and two ground-floor accessible rooms with roll-in showers, grab rails, lowered peepholes and visual alarms. Reception has a hearing loop. One stair in the west wing of the 1940s building has no lift, and we will always place guests who need step-free access away from it. Full detail is on our accessibility page.'
        },
        {
          q: 'Can I book the spa or the dining room without staying?',
          a: 'The Dining Room and the Cellar Bar are open to non-residents, and the spa takes day bookings when there is availability, though residents get priority on the treatment diary. Book the spa at least a week ahead for a weekend, and the dining room two to three weeks ahead for a Friday or Saturday. Guests staying in the house can always be fitted in.'
        },
        {
          q: 'What is there to do nearby?',
          a: 'The Nelson-Atkins Museum and the Kemper are fifteen minutes away, the Crossroads and the River Market are twenty, and the Kauffman Center is downtown. The National WWI Museum, the Negro Leagues Baseball Museum and the streetcar are all within half an hour. Closer to home there is a prairie trail from the property to the creek, and the concierge will build you an itinerary if you would rather not plan it yourself.'
        }
      ]
    }
  ],

  faqs: [
    {
      q: 'Where exactly are you, and how do I get there?',
      a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, on twelve acres just south of the Country Club Plaza. The Plaza is about ten minutes by car, downtown is fifteen and Kansas City International is twenty-four. Valet parking from the porte-cochère is complimentary, and there is self-parking in the gated courtyard behind the house if you would rather keep the keys.'
    },
    {
      q: 'What time is check-in and check-out?',
      a: 'Check-in opens at 3:00 PM and check-out is 11:00 AM. If you arrive early the lobby, the Cellar Bar from four o\u2019clock and the pool are all yours, and we will take your bags. Late check-out to 2:00 PM is usually available on request if the room is not booked the following night, and it is included in The Prairie Escape package.'
    },
    {
      q: 'Is breakfast included?',
      a: 'Yes. Breakfast for two in The Dining Room is included in every rate, served from 7:00 to 10:00 AM. It is a proper breakfast rather than a buffet of pastries: eggs however you like them, the kitchen\u2019s own granola, cured meats from a producer in Lawrence, fruit from whichever orchard is in season and as much coffee as you want. Room service breakfast is available for a small tray charge.'
    },
    {
      q: 'Do you allow children and pets?',
      a: 'Children are very welcome, and cots are free of charge. We can also arrange a connecting pair of rooms if you are travelling as a family, and the kitchen will happily cook something simpler for a young guest. Well-behaved dogs are welcome in the Garden rooms and the Orchard Suite for $75 per stay, up to two dogs, with bowls, beds and a map of the walking trail provided.'
    },
    {
      q: 'What is your cancellation policy?',
      a: 'You can cancel or move your dates without charge up to 72 hours before arrival. Inside 72 hours we charge one night, and a no-show is charged in full. Packages including a spa treatment or a tasting menu have the same window, though we will always try to move the treatment rather than cancel it. Everything is confirmed in writing when you book.'
    },
    {
      q: 'Do you host weddings and private events?',
      a: 'We do, from twelve-guest elopements in the orchard to receptions for 240 on the south lawn. Clara Whitfield runs every event personally and has done so since 2016. Because there are only twelve rooms, a wedding here usually takes over the whole house, which is precisely why couples choose it. Start with our Weddings & Celebrations page or call the events line on (816) 555-0149.'
    },
    {
      q: 'Is the property accessible?',
      a: 'Yes. There is step-free access from the car park to the lobby, a lift to all floors, and two ground-floor accessible rooms with roll-in showers, grab rails, lowered peepholes and visual alarms. Reception has a hearing loop. One stair in the west wing of the 1940s building has no lift, and we will always place guests who need step-free access away from it. Full detail is on our accessibility page.'
    },
    {
      q: 'Can I book the spa or the dining room without staying?',
      a: 'The Dining Room and the Cellar Bar are open to non-residents, and the spa takes day bookings when there is availability, though residents get priority on the treatment diary. Book the spa at least a week ahead for a weekend, and the dining room two to three weeks ahead for a Friday or Saturday. Guests staying in the house can always be fitted in.'
    },
    {
      q: 'What is there to do nearby?',
      a: 'The Nelson-Atkins Museum and the Kemper are fifteen minutes away, the Crossroads and the River Market are twenty, and the Kauffman Center is downtown. The National WWI Museum, the Negro Leagues Baseball Museum and the streetcar are all within half an hour. Closer to home there is a prairie trail from the property to the creek, and the concierge will build you an itinerary if you would rather not plan it yourself.'
    }
  ],

  cta: {
    h2: 'Twelve rooms. One of them is free this weekend.',
    text: 'Book direct for the lowest rate we publish, free valet parking, breakfast for two and a front desk that answers at any hour. If you would rather talk it through, call and we will find the right room for the trip you are actually taking.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
