'use strict';

/**
 * Service detail page: Spa & Wellness.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'spa-wellness',
  order: 2,
  name: 'Spa & Wellness',
  shortName: 'The Spa',
  icon: 'spa',
  image: '/img/svc-spa-wellness.webp',
  imageAlt: 'A candlelit treatment room at The Spa at Praivelle House with a massage table and stone wall',
  tagline: 'Ninety minutes that undo a month of Mondays.',
  metaTitle: 'Spa & Wellness in Kansas City | The Spa at Praivelle House',
  metaDescription:
    'A private Kansas City spa with massage, facials, couples treatments, a sauna, steam room and heated indoor pool. Treatments from $95, open 9:00 AM to 8:00 PM daily.',
  metaKeywords:
    'spa kansas city, couples massage kansas city mo, hotel spa country club plaza, prenatal massage kansas city, facial kansas city, sauna steam room kansas city',
  eyebrow: 'Massage, skin and stillness',
  heroIntro:
    'The Spa at Praivelle House has four treatment rooms, a sauna, a steam room and a heated indoor pool, and it never feels busy because it was never built to be. Here is what we offer and how to book it.',
  priceFrom: 'Treatments from $95',
  priceValue: 95,
  duration: '50–120 minutes',
  highlights: [
    'A private spa with four treatment rooms',
    'The 90-minute Prairie Reset, our signature',
    'Couples treatments in a double suite',
    'Sauna, steam room and heated indoor pool',
    'Pre-natal and sports therapy',
    'Products made in small batches in Lawrence, Kansas',
    'Open 9:00 AM to 8:00 PM, daily',
    'Guests and day visitors both welcome'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'the-spa',
      eyebrow: 'The Spa',
      h2: 'A spa with four rooms and no reason to rush',
      body: [
        'The Spa sits in the west wing, where the old milking parlour used to be. We kept the vaulted ceiling and the original limestone wall, added four treatment rooms, and let the rest stay quiet.',
        'The heart of the menu is the Prairie Reset, ninety minutes that begin with a foot soak in warm water and end with your shoulders finally dropping.',
        'Around the treatment rooms are the rooms you do not pay extra for: a cedar sauna, a eucalyptus steam room, a heated indoor pool under a skylight, and a fitness studio with free weights, two cardio machines and a mat area.',
        'Couples are looked after in a double suite with side-by-side tables, a private steam shower and a small lounge where you can stay as long as you like afterward.',
        'Pre-natal massage is offered after the first trimester with a therapist trained in side-lying technique. Sports and deep-tissue work is available for runners on the prairie trail and cyclists logging miles through the Flint Hills.',
        'Products come from a small producer in Lawrence, Kansas that makes everything in batches of a few hundred jars. The list is deliberately short: a cleansing balm, a hydrating serum, a body oil and a clay mask.'
      ]
    },
    {
      type: 'cards',
      id: 'treatment-menu',
      eyebrow: 'The menu',
      h2: 'Nine ways to spend an afternoon',
      intro:
        'You do not need to choose between relaxation and doing something useful. Every treatment below is offered every day, and every one of them can be booked by guests and visitors alike.',
      columns: 3,
      items: [
        {
          icon: 'hand-heart',
          title: 'Massage',
          text: 'Swedish, deep tissue or a blend of both, at the pressure you ask for rather than the pressure on the card.'
        },
        {
          icon: 'droplet',
          title: 'Facials',
          text: 'A skin read first, then a treatment built around what your face actually needs. No upselling, no twelve-step ceremony you did not ask for.'
        },
        {
          icon: 'leaf',
          title: 'The Prairie Reset',
          text: 'Our signature ninety minutes: a foot soak, a full-body massage, scalp work and a warm oil finish, with quiet at the end.'
        },
        {
          icon: 'heart',
          title: 'Couples treatments',
          text: 'Side-by-side tables in a private double suite, with a steam shower and a lounge to linger in for as long as you like.'
        },
        {
          icon: 'flower',
          title: 'Pre-natal massage',
          text: 'Side-lying technique for the second and third trimester, with pillows arranged so you can actually relax instead of balancing.'
        },
        {
          icon: 'dumbbell',
          title: 'Sports & deep tissue',
          text: 'Focused work for tight hips, sore calves and shoulders that have carried too much for too long. Tell us where it hurts.'
        },
        {
          icon: 'sparkles',
          title: 'Body treatments',
          text: 'A salt-and-oil scrub or a clay wrap, finished with a body oil warmed to skin temperature. Best before a massage.'
        },
        {
          icon: 'waves',
          title: 'Sauna & steam',
          text: 'A cedar sauna and a eucalyptus steam room, open to guests all day at no charge and to day visitors with a spa pass.'
        },
        {
          icon: 'activity',
          title: 'Pool & fitness studio',
          text: 'A heated indoor pool under a skylight and a studio with weights, cardio and mats, open from morning until night.'
        }
      ]
    },
    {
      type: 'split',
      id: 'prairie-reset',
      eyebrow: 'The signature',
      h2: 'The Prairie Reset, ninety minutes end to end',
      image: '/img/svc-spa-wellness.webp',
      imageAlt: 'A therapist preparing warm oil in the candlelit Prairie Reset treatment room',
      body: [
        'The Prairie Reset is the treatment we would book if we were staying here. It begins with a foot soak in warm water and Epsom salt while the therapist asks two questions: where does it hurt, and how much pressure do you want.',
        'The massage moves from shoulders to feet with slow, deep strokes, working the places that hold a desk job and a long drive. It finishes with warm oil through the scalp and a few minutes of quiet, because rushing the last five minutes ruins the first eighty-five.',
        'It costs $185 for ninety minutes, and it is the one appointment worth booking before you arrive, particularly on a Friday or Saturday. Couples can take it side by side in the double suite for $350.'
      ],
      list: [
        'A warm foot soak to begin',
        'Pressure set by you, not by a script',
        'Scalp and neck work included',
        'Ten minutes of quiet at the end'
      ],
      cta: { label: 'Book the Prairie Reset', path: '/contact#book' }
    },
    {
      type: 'steps',
      id: 'booking',
      eyebrow: 'How to book',
      h2: 'From reservation to the pool, in five steps',
      intro: 'The whole thing takes a phone call or a short email. Here is how a spa visit comes together.',
      items: [
        {
          title: 'Book before you arrive',
          text: 'Weekend slots go first. Reserve by phone, email or at check-in and we will confirm the therapist and the room.'
        },
        {
          title: 'Tell us what matters',
          text: 'Pressure, old injuries, allergies, pregnancy, a preference for a male or female therapist — all of it helps us match you well.'
        },
        {
          title: 'Arrive fifteen minutes early',
          text: 'Time to change, use the sauna and let your shoulders come down before the treatment even starts.'
        },
        {
          title: 'Choose your room',
          text: 'A single room, the double suite for two, or the poolside lounge if you would rather stay in the water.'
        },
        {
          title: 'Stay as long as you like',
          text: 'The sauna, steam room and pool are yours for the rest of the day, before or after your treatment.'
        }
      ]
    },
    {
      type: 'table',
      id: 'treatment-prices',
      eyebrow: 'Prices',
      h2: 'Treatments and what they cost',
      intro: 'Every price below is the full cost of the treatment. Nothing is added at the desk and gratuities are never automatic.',
      head: ['Treatment', 'Duration', 'From'],
      rows: [
        ['Prairie Reset (signature)', '90 min', '$185'],
        ['Swedish massage', '50 min', '$95'],
        ['Deep tissue massage', '80 min', '$145'],
        ['Custom facial', '60 min', '$120'],
        ['Pre-natal massage', '60 min', '$125'],
        ['Sports & deep tissue', '80 min', '$155'],
        ['Salt & oil body scrub', '45 min', '$110'],
        ['Couples massage, double suite', '50 min each', '$260']
      ],
      note: 'Spa access for day visitors is $45 and includes the sauna, steam room, pool and fitness studio. Hotel guests receive a ten percent credit on any treatment.'
    },
    {
      type: 'checklist',
      id: 'before-you-come',
      eyebrow: 'Before you come',
      h2: 'A few things worth knowing',
      intro: 'Small details that make the visit easier, whether you are staying with us or just coming for the afternoon.',
      columns: 2,
      items: [
        'The Spa is open 9:00 AM to 8:00 PM, daily',
        'Arrive fifteen minutes before your treatment',
        'Robes, slippers and lockers are provided',
        'Bring nothing but yourself; we have the rest',
        'Hotel guests receive a ten percent treatment credit',
        'Couples should book the double suite in advance',
        'Pre-natal massage available after the first trimester',
        'Tell us about allergies or injuries at booking'
      ]
    },
    {
      type: 'stats',
      id: 'the-spa-in-numbers',
      h2: 'The Spa at a glance',
      intro: 'Small, private and built around a handful of good therapists rather than a long list of treatments.',
      items: [
        { value: 4, label: 'Private treatment rooms' },
        { value: 90, suffix: ' min', label: 'The signature Prairie Reset' },
        { value: 12, label: 'Therapists, all state-licensed' },
        { value: 45, prefix: '$', label: 'Day-spa access with pool and sauna' }
      ]
    },
    {
      type: 'quote',
      id: 'guest-note',
      text: 'I booked a massage and ended up spending the whole afternoon by the pool with a book. Nobody hurried me along, and the therapist actually listened when I said where it hurt.',
      author: 'A guest from Denver',
      role: 'The Spa Suite, March'
    },
    {
      type: 'gallery',
      id: 'the-spa-gallery',
      eyebrow: 'A look inside',
      h2: 'Treatment rooms, the pool and the quiet in between',
      intro: 'Low light, warm water and a great deal of stone. A small tour of the west wing.',
      items: [
        { image: '/img/gallery-pool.webp', alt: 'The heated indoor pool under a skylight at The Spa', caption: 'The heated indoor pool, open year-round' },
        { image: '/img/svc-spa-wellness.webp', alt: 'A candlelit treatment room with a massage table', caption: 'One of four private treatment rooms' },
        { image: '/img/gallery-bath.webp', alt: 'A stone bathroom with a deep soaking tub', caption: 'The Spa Suite, tub and steam shower' },
        { image: '/img/gallery-terrace.webp', alt: 'A quiet terrace seating area outside the spa', caption: 'The terrace, for after the treatment' }
      ]
    },
    {
      type: 'prose',
      id: 'pool-sauna-fitness',
      eyebrow: 'Beyond the treatment table',
      h2: 'The pool, the sauna and the rest of the day',
      body: [
        'The heated indoor pool sits under a long skylight, so you can swim in daylight even in January. It is kept at 84 degrees, long enough for laps and warm enough to stand in, with a shallow step entry and a lift chair for guests who need one.',
        'The cedar sauna runs at 185 degrees and the eucalyptus steam room at 110, and both are open from nine in the morning until eight at night. We keep the ritual simple: shower, sit, cool off, repeat.',
        'The fitness studio is small and genuinely usable: a full rack of free weights, two cardio machines, kettlebells, mats, and a screen for guided sessions if you want them.',
        'Guests staying with us use the pool, sauna, steam room and studio at no charge for the whole of their stay.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions we hear about the spa',
      intro: 'Straight answers to the things guests ask before they book.',
      items: [
        {
          q: 'Do I have to be a hotel guest to use the spa?',
          a: 'No. The spa, pool and fitness studio are open to everyone, and day visitors can add spa access for $45. For guests staying with us, it is always included.'
        },
        {
          q: 'How far ahead should I book?',
          a: 'Weekday mornings are often same-day. Friday and Saturday afternoons fill a week or two out, so book those as early as you can, especially for the couples suite.'
        },
        {
          q: 'Is the pool heated?',
          a: 'Yes, held at 84 degrees year-round under a skylight, with a shallow step entry and a lift chair for guests who need one.'
        },
        {
          q: 'Can you accommodate pregnancy?',
          a: 'We offer pre-natal massage after the first trimester using side-lying technique. Tell us how far along you are and we will match you with a therapist trained for it.'
        },
        {
          q: 'What products do you use?',
          a: 'A short list made in small batches by a producer in Lawrence, Kansas: a cleansing balm, a serum, a body oil and a clay mask. All refillable, none tested on animals.'
        },
        {
          q: 'Are gratuities included?',
          a: 'No. Tips are never added to the bill automatically. You can leave one at the desk, and every dollar goes straight to the therapist who looked after you.'
        },
        {
          q: 'Can I book a treatment for a group?',
          a: 'Yes. We host bridal parties, birthdays and small corporate groups of up to ten, with a private lounge and a menu we can tailor. Call events on (816) 555-0149.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Book the ninety minutes you have been putting off',
      text: 'Tell us when you are coming and what needs work. Weekends go first, so reserve early, then spend the rest of the day in the pool and sauna.',
      primary: { label: 'Book a treatment', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0148', path: 'tel:+18165550148' }
    }
  ],
  faqs: [
    {
      q: 'Do I have to be a hotel guest to use the spa?',
      a: 'No. The spa, pool and fitness studio are open to everyone, and day visitors can add spa access for $45. For guests staying with us, it is always included.'
    },
    {
      q: 'How far ahead should I book?',
      a: 'Weekday mornings are often same-day. Friday and Saturday afternoons fill a week or two out, so book those as early as you can, especially for the couples suite.'
    },
    {
      q: 'Is the pool heated?',
      a: 'Yes, held at 84 degrees year-round under a skylight, with a shallow step entry and a lift chair for guests who need one.'
    },
    {
      q: 'Can you accommodate pregnancy?',
      a: 'We offer pre-natal massage after the first trimester using side-lying technique. Tell us how far along you are and we will match you with a therapist trained for it.'
    },
    {
      q: 'What products do you use?',
      a: 'A short list made in small batches by a producer in Lawrence, Kansas: a cleansing balm, a serum, a body oil and a clay mask. All refillable, none tested on animals.'
    },
    {
      q: 'Are gratuities included?',
      a: 'No. Tips are never added to the bill automatically. You can leave one at the desk, and every dollar goes straight to the therapist who looked after you.'
    },
    {
      q: 'Can I book a treatment for a group?',
      a: 'Yes. We host bridal parties, birthdays and small corporate groups of up to ten, with a private lounge and a menu we can tailor. Call events on (816) 555-0149.'
    }
  ],
  related: ['rooms-suites', 'experiences-concierge'],
  cta: {
    h2: 'One appointment, and the week gets easier',
    text: 'Book a treatment and the sauna, steam room and heated pool come with it for the rest of the day. Reserve early for weekends, then let us take it from there.',
    primary: { label: 'Book a treatment', path: '/contact#book' }
  }
};
