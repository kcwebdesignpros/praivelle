'use strict';

/**
 * Service detail page: Rooms & Suites.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'rooms-suites',
  order: 1,
  name: 'Rooms & Suites',
  shortName: 'Rooms & Suites',
  icon: 'bed',
  image: '/img/svc-rooms-suites.webp',
  imageAlt: 'A Garden King room at Praivelle House with linen bedding and French doors onto the courtyard',
  tagline: 'Twelve rooms, no two alike, and a bed you will think about on the drive home.',
  metaTitle: 'Rooms & Suites in Kansas City | Praivelle House Boutique Hotel',
  metaDescription:
    'Twelve individually designed rooms and suites at Praivelle House, from the Garden King to The Loft. Breakfast for two, valet parking and spa access included.',
  metaKeywords:
    'boutique hotel kansas city, hotel suites kansas city mo, luxury inn country club plaza, spa hotel kansas city, pet friendly hotel kansas city, romantic hotel kansas city',
  eyebrow: 'Twelve rooms, no two alike',
  heroIntro:
    'Every room at Praivelle House was shaped around the light that reaches it and the view it earns. Here is what each one gives you, and what is included whichever you choose.',
  priceFrom: 'From $279',
  priceValue: 279,
  duration: 'One night or longer',
  highlights: [
    'A twelve-room house, never a corridor of identical doors',
    '400-thread-count cotton, changed daily',
    'Breakfast for two included in every rate',
    'Complimentary valet parking and fibre Wi-Fi',
    'Two step-free, fully accessible rooms',
    'Pet-friendly rooms from $40 a night',
    'In-room dining around the clock',
    'Free cancellation up to 48 hours before arrival'
  ],
  blocks: [
    /* ------------------------------------------------- room listing cards */
    {
      type: 'rooms',
      id: 'rooms',
      eyebrow: 'Rooms & suites',
      h2: 'Choose Your Room',
      intro:
        'Six room types, twelve rooms in total, and no two laid out the same. Every rate includes breakfast for two, valet parking and the run of the spa, the pool and the gym.',
      limit: 6
    },
    {
      type: 'prose',
      id: 'the-house',
      eyebrow: 'The house',
      h2: 'Twelve rooms built around a farmhouse, not carved out of one',
      body: [
        'The original 1940s farmhouse had five rooms and a summer kitchen. When Genevi\u00e8ve and Michael Marchand bought the land in 2008, they kept the shell and rebuilt around it, adding two wings that follow the ridge rather than fighting it.',
        'Because we are twelve rooms and not a hundred and twelve, the front desk knows your name before you reach it. There is no queue at check-in, no convoy of luggage carts in the lobby, and no room that was chosen for you by an algorithm.',
        'Every room faces either the courtyard garden or the prairie beyond it. The Garden rooms open onto the terrace, where breakfast is served under the pergola from May to October. The upper rooms have dormer windows and window seats deep enough to fall asleep in.',
        'Beds are made with 400-thread-count cotton, changed daily, over mattresses built by hand in Council Grove, Kansas, by a family workshop that has been doing it since 1948. Pillows come in three weights and you can swap them without asking.',
        'We do not do turndown theatre. What we do is leave the room the way you like it: a carafe of water, the lamps you left on, the curtains set how you set them.',
        'Rates start at $279 for a Garden King and rise with space and view. Every rate includes breakfast for two, valet parking, fibre Wi-Fi and access to the spa, pool and fitness studio.'
      ]
    },
    {
      type: 'cards',
      id: 'room-types',
      eyebrow: 'Choose your room',
      h2: 'Six rooms to know, and the details that set them apart',
      intro:
        'Every room is photographed exactly as it is, so the room you book is the room you walk into. These are the six shapes the house comes in, and the three things that matter whatever you pick.',
      columns: 3,
      items: [
        {
          icon: 'bed',
          title: 'The Garden King',
          text: 'Our entry room at 340 square feet, with a king bed and French doors onto the courtyard.'
        },
        {
          icon: 'bed',
          title: 'The Garden Twin',
          text: 'Two full beds across 360 square feet, made for friends travelling together or a parent and a child. Same courtyard doors, same step-free access.'
        },
        {
          icon: 'leaf',
          title: 'The Orchard Suite',
          text: 'A 480-square-foot suite overlooking the old apple trees, with a sitting room, a wood-burning fireplace and a deep soaking tub.'
        },
        {
          icon: 'sunrise',
          title: 'The Prairie Suite',
          text: 'A corner suite of 560 square feet with windows on two walls, a separate sitting room and a private balcony facing the prairie at sunset.'
        },
        {
          icon: 'spa',
          title: 'The Spa Suite',
          text: 'A 520-square-foot suite adjoining The Spa, with a Japanese soaking tub, a steam shower and a treatment table for in-room massage.'
        },
        {
          icon: 'building',
          title: 'The Loft',
          text: 'The top of the house at 980 square feet, sleeping four, with a full kitchen, a reading mezzanine and a skylight set directly over the bed.'
        },
        {
          icon: 'flower',
          title: 'The linen programme',
          text: '400-thread-count cotton changed daily, three pillow weights, linen or wool duvets, and towels heavy enough to actually dry you.'
        },
        {
          icon: 'utensils',
          title: 'In-room dining',
          text: 'The full Dining Room menu, not a pared-back room-service card, delivered around the clock and set on a proper tray.'
        },
        {
          icon: 'accessibility',
          title: 'Accessible rooms',
          text: 'Two ground-floor rooms with step-free entry, roll-in showers, grab rails, lowered pegs and a visual alarm.'
        }
      ]
    },
    {
      type: 'split',
      id: 'beds-and-baths',
      eyebrow: 'The bed and the bath',
      h2: 'The part of a hotel you actually remember',
      image: '/img/gallery-bath.webp',
      imageAlt: 'A deep soaking tub and stone vanity in a Praivelle House suite bathroom',
      body: [
        'Ask guests what they remember about a hotel and almost none of them describe the lobby. They describe the bed.',
        'The bathrooms got the same attention. The Garden rooms have walk-in showers with a bench; the suites add deep tubs and, in the Spa Suite, a Japanese soaking tub deep enough to stand in. Water is filtered, held at 120 degrees and tested every morning.',
        'Robes are waffle cotton from a mill in Portugal, slippers are yours to keep, and the bath products are made in small batches in Lawrence, Kansas — a short list of four, refilled in glass rather than thrown away in plastic.'
      ],
      list: [
        'Pillow menu in three weights',
        'Filtered water, tested daily',
        'Waffle cotton robes and slippers to keep',
        'Bath products refilled in glass, never plastic'
      ]
    },
    {
      type: 'steps',
      id: 'booking',
      eyebrow: 'Booking',
      h2: 'How to reserve a room, in five steps',
      intro: 'Booking direct takes a few minutes and always costs less than a booking site, because there is no commission folded into the rate.',
      items: [
        {
          title: 'Check the calendar',
          text: 'Live availability, no request forms. If a room shows open, it is open, and the price is the price.'
        },
        {
          title: 'Pick the room, not just the rate',
          text: 'Choose the Garden King, a named suite or The Loft. The photograph you see is the room you get.'
        },
        {
          title: 'Confirm with one night',
          text: 'A single night holds the reservation. The balance is settled whenever you like before check-out.'
        },
        {
          title: 'Tell us what you need',
          text: 'Pets, allergies, a cot, an early arrival, a quiet floor — add it at booking and it is handled before you arrive.'
        },
        {
          title: 'Arrive to a made room',
          text: 'Check-in opens at 3:00 PM and reception never closes. Early check-in from noon when the room allows.'
        }
      ]
    },
    {
      type: 'table',
      id: 'rates',
      eyebrow: 'Rates at a glance',
      h2: 'Compare the rooms',
      intro: 'Rates below are the starting price for the room. Breakfast for two, valet parking, Wi-Fi and spa access are already inside every one of them.',
      head: ['Room', 'Sleeps', 'From per night'],
      rows: [
        ['The Garden King', '2', '$279'],
        ['The Garden Twin', '2', '$289'],
        ['The Orchard Suite', '2', '$349'],
        ['The Prairie Suite', '3', '$429'],
        ['The Spa Suite', '2', '$459'],
        ['The Loft', '4', '$529']
      ],
      note: 'Rates are per night, exclude tax and are quoted in US dollars. A two-night minimum applies on holiday weekends and during the Prairie Escape package.'
    },
    {
      type: 'checklist',
      id: 'included',
      eyebrow: 'In every rate',
      h2: 'What is included, whichever room you choose',
      intro: 'The list below is standard, not an upgrade. Nothing on it costs extra and nothing on it is a surprise at check-out.',
      columns: 2,
      items: [
        'Breakfast for two in The Dining Room',
        'Complimentary valet parking',
        'Fibre Wi-Fi throughout the house',
        'Access to the spa, pool and fitness studio',
        'In-room dining, 24 hours a day',
        'Evening turndown on request',
        'Filtered water and a coffee service in every room',
        'Local and domestic long-distance calls',
        'Electric bicycles for the prairie trail',
        'Airport transfers arranged on request'
      ]
    },
    {
      type: 'stats',
      id: 'the-house-in-numbers',
      h2: 'The house in numbers',
      intro: 'Independent, family-run, and small on purpose since 2008.',
      items: [
        { value: 12, label: 'Rooms and suites, each one different' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average guest rating from 3,520 reviews' },
        { value: 62, suffix: '%', label: 'Of guests who book a return stay within a year' },
        { value: 24, suffix: 'h', label: 'Reception, in-room dining and concierge' }
      ]
    },
    {
      type: 'quote',
      id: 'guest-note',
      text: 'We came for one night on the way to the airport and stayed three. The bed was the best either of us has slept in, and nobody once tried to sell us anything.',
      author: 'A guest from Chicago',
      role: 'The Prairie Suite, October'
    },
    {
      type: 'gallery',
      id: 'a-look-inside',
      eyebrow: 'A look inside',
      h2: 'Rooms, baths and the corners between',
      intro: 'A small house shows its character in the details. These are a few of ours.',
      items: [
        { image: '/img/svc-rooms-suites.webp', alt: 'The Garden King room with French doors onto the courtyard', caption: 'The Garden King, opening onto the courtyard' },
        { image: '/img/gallery-bath.webp', alt: 'A suite bathroom with a deep soaking tub', caption: 'A suite bathroom, tub and all' },
        { image: '/img/gallery-library.webp', alt: 'The reading library on the landing', caption: 'The reading library on the landing' },
        { image: '/img/gallery-terrace.webp', alt: 'Breakfast served on the courtyard terrace', caption: 'Breakfast on the terrace, May to October' }
      ]
    },
    {
      type: 'prose',
      id: 'accessibility-and-pets',
      eyebrow: 'Accessibility, pets and the small print',
      h2: 'The details that decide whether a stay actually works',
      body: [
        'Two of our ground-floor rooms are fully accessible, with step-free entry from the courtyard, roll-in showers with a fold-down bench, grab rails beside every fixture, lowered pegs and light switches, and a visual alarm for guests who are deaf or hard of hearing.',
        'Dogs are genuinely welcome here, not merely tolerated. Two dogs of up to fifty pounds each can stay in our pet-friendly rooms for $40 a night, and we provide bowls, a washable bed and a map of the prairie trail that starts at the back gate.',
        'In-room dining runs around the clock from the full kitchen, not a reduced night menu. At two in the morning you can order the same pork from Lawson that was on the dinner menu, or a bowl of soup and a pot of tea.',
        'The small print is short. Rates exclude the Missouri lodging tax. A single night holds a reservation and the balance is settled at check-out. Cots and rollaway beds are free for children under twelve, and they fit in every room except the Garden Twin.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions we hear about staying',
      intro: 'The things guests ask most, answered plainly.',
      items: [
        {
          q: 'What time is check-in and check-out?',
          a: 'Check-in opens at 3:00 PM and reception is staffed around the clock, so a late arrival is never a problem. Check-out is 11:00 AM, and we hold rooms until 2:00 PM for a small charge when the calendar allows.'
        },
        {
          q: 'What is the cancellation policy?',
          a: 'Cancel free of charge until 48 hours before arrival and your deposit is returned in full. Inside 48 hours, one night is charged. Holiday weekends and the Prairie Escape package carry a seven-day window, noted when you book.'
        },
        {
          q: 'Is breakfast included?',
          a: 'Yes. Breakfast for two in The Dining Room is part of every rate, served from 7:00 to 10:30 AM, and you can take it in your room at no extra charge.'
        },
        {
          q: 'Do you allow pets?',
          a: 'Two dogs up to fifty pounds each are welcome in our pet-friendly rooms for $40 a night. We provide bowls, a bed and a walking map of the prairie trail behind the house.'
        },
        {
          q: 'Are the rooms accessible?',
          a: 'Two ground-floor rooms are step-free with roll-in showers, grab rails and visual alarms. Call the concierge on (816) 555-0148 and we will talk through exactly what you need before you book.'
        },
        {
          q: 'Can children share a room?',
          a: 'The Prairie Suite sleeps three and The Loft sleeps four. Cots and rollaway beds are free for children under twelve, and we keep a small cupboard of games for rainy afternoons.'
        },
        {
          q: 'Is parking really included?',
          a: 'Valet parking is complimentary for every guest, with self-parking in the gated courtyard behind the house and EV charging at no extra cost.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Pick the room, and we will do the rest',
      text: 'Tell us which room suits and when you want it. A single night holds it, breakfast is already in the rate, and reception is awake whenever you arrive.',
      primary: { label: 'Check availability', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'What time is check-in and check-out?',
      a: 'Check-in opens at 3:00 PM and reception is staffed around the clock, so a late arrival is never a problem. Check-out is 11:00 AM, and we hold rooms until 2:00 PM for a small charge when the calendar allows.'
    },
    {
      q: 'What is the cancellation policy?',
      a: 'Cancel free of charge until 48 hours before arrival and your deposit is returned in full. Inside 48 hours, one night is charged. Holiday weekends and the Prairie Escape package carry a seven-day window, noted when you book.'
    },
    {
      q: 'Is breakfast included?',
      a: 'Yes. Breakfast for two in The Dining Room is part of every rate, served from 7:00 to 10:30 AM, and you can take it in your room at no extra charge.'
    },
    {
      q: 'Do you allow pets?',
      a: 'Two dogs up to fifty pounds each are welcome in our pet-friendly rooms for $40 a night. We provide bowls, a bed and a walking map of the prairie trail behind the house.'
    },
    {
      q: 'Are the rooms accessible?',
      a: 'Two ground-floor rooms are step-free with roll-in showers, grab rails and visual alarms. Call the concierge on (816) 555-0148 and we will talk through exactly what you need before you book.'
    },
    {
      q: 'Can children share a room?',
      a: 'The Prairie Suite sleeps three and The Loft sleeps four. Cots and rollaway beds are free for children under twelve, and we keep a small cupboard of games for rainy afternoons.'
    },
    {
      q: 'Is parking really included?',
      a: 'Valet parking is complimentary for every guest, with self-parking in the gated courtyard behind the house and EV charging at no extra cost.'
    }
  ],
  related: ['spa-wellness', 'experiences-concierge'],
  cta: {
    h2: 'Twelve rooms, and one of them has your name on it',
    text: 'Book direct for the best rate, breakfast for two and free cancellation up to 48 hours before you arrive. Reception answers at any hour.',
    primary: { label: 'Book your stay', path: '/contact#book' }
  }
};
