'use strict';
/**
 * Offers page. The Prairie Escape flagship, the seasonal and themed packages,
 * gift vouchers, the best-rate guarantee and the plain-English terms — rendered
 * by views/page.ejs from blocks.
 */

module.exports = {
  slug: 'offers',
  path: '/offers',
  name: 'Offers & Packages',
  metaTitle: 'Offers & Packages | Praivelle House, Kansas City',
  metaDescription:
    'The Prairie Escape from $279, midweek rates, the Wellness Weekend, the Dining Journey, romance and festive packages, and gift vouchers at Praivelle House in Kansas City.',
  metaKeywords:
    'kansas city hotel offers, boutique hotel packages kansas city, spa weekend kansas city, romantic getaway kansas city, hotel gift voucher kansas city, midweek hotel deal',
  eyebrow: 'Offers & packages',
  h1: 'Reasons to Come and Stay a Little Longer',
  heroIntro:
    'Seven ways to stay with us, from a midweek night at the best rate we publish to a full festive weekend. All of them bundle the things we would choose ourselves, and none of them hide a fee.',
  heroImage: '/img/gallery-terrace.webp',
  heroImageAlt: 'The terrace at Praivelle House set for dinner at golden hour',
  heroStats: [
    { value: 279, label: 'The Prairie Escape, per night for two' },
    { value: 7, label: 'Packages and seasonal rates' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'From 3,520 guest reviews' },
    { value: 62, suffix: '%', label: 'Of guests who rebook within a year' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-19',
  blocks: [
    {
      type: 'prose',
      id: 'intro',
      eyebrow: 'How our offers work',
      h2: 'Packages That Are Actually Good Value',
      body: [
        'A hotel package is usually a room with a small discount attached to something you were going to buy anyway, wrapped in a name that sounds better than it is. We have tried to do the opposite.',
        'The flagship is The Prairie Escape, which is the package we would book ourselves if we were coming for a night. A Garden King room, breakfast for two, a fifty-minute treatment each at The Spa, a bottle of sparkling wine on arrival and a late 2:00 PM check-out.',
        'The other packages exist because guests kept asking for them. People wanted a version built around the spa, so we made the Wellness Weekend. They wanted the full dining experience with a room attached, so we made the Dining Journey.',
        'One thing that is true across all of them: the price you see is the price you pay, plus tax. There is no resort fee, no service charge and no mandatory gratuity added at checkout.'
      ]
    },
    {
      type: 'offer',
      id: 'prairie-escape',
      eyebrow: 'Our flagship offer',
      h2: 'The Prairie Escape',
      intro: 'The package we would book ourselves. A Garden King room, breakfast for two, a fifty-minute treatment each, a bottle of sparkling wine on arrival and a late 2:00 PM check-out. Available Sunday to Thursday, subject to availability.'
    },
    {
      type: 'cards',
      id: 'packages',
      eyebrow: 'More ways to stay',
      h2: 'The Other Packages',
      intro: 'Six more reasons to come, each one built around a different kind of trip.',
      columns: 3,
      items: [
        {
          icon: 'calendar-check',
          title: 'The Midweek Rate',
          text: 'Sunday to Thursday, any room, from $249 a night, breakfast for two included and a late check-out where the house allows.'
        },
        {
          icon: 'spa',
          title: 'The Wellness Weekend',
          text: 'Two nights, daily breakfast, three treatments, a wellness lunch and full use of the pool, sauna and steam room.'
        },
        {
          icon: 'utensils',
          title: 'The Dining Journey',
          text: 'A suite, a five-course tasting menu for two at the hearth, a cellar bar flight of three wines and breakfast the next morning.'
        },
        {
          icon: 'heart',
          title: 'The Romance Package',
          text: 'A suite, roses and chocolates waiting on arrival, dinner for two in The Dining Room and sparkling wine with breakfast. From $469 for two.'
        },
        {
          icon: 'sunrise',
          title: 'Prairie Christmas & New Year',
          text: 'Two nights over the holidays, a festive dinner, a mulled wine reception by the fire and, for New Year, a black-tie dinner and midnight toast.'
        },
        {
          icon: 'gift',
          title: 'Gift Vouchers',
          text: 'Any amount from $100, redeemable against rooms, dining, spa and experiences.'
        }
      ]
    },
    {
      type: 'table',
      id: 'compare',
      eyebrow: 'At a glance',
      h2: 'Every Package, Compared',
      intro: 'The full list, with what is included and the entry price. All prices are for two people and exclude tax.',
      head: ['Package', 'Includes', 'From'],
      rows: [
        ['The Prairie Escape', 'Garden King room, breakfast for two, two 50-minute treatments, sparkling wine, 2:00 PM check-out', '$279 per night'],
        ['The Midweek Rate', 'Any room Sunday to Thursday, breakfast for two, late check-out where available', '$249 per night'],
        ['The Wellness Weekend', 'Two nights, daily breakfast, three treatments, wellness lunch, pool and sauna access', '$689 for two'],
        ['The Dining Journey', 'Suite, five-course tasting menu for two, cellar bar wine flight, breakfast', '$549 for two'],
        ['The Romance Package', 'Suite, roses and chocolates, dinner for two, sparkling wine at breakfast', '$469 for two'],
        ['Prairie Christmas & New Year', 'Two nights, festive dinner, mulled wine reception, New Year dinner and midnight toast', '$1,180 for two'],
        ['Gift Voucher', 'Redeemable against rooms, dining, spa and experiences, valid for two years', '$100 and up']
      ],
      note: 'Rates exclude state and local tax and are quoted in US dollars. Availability is limited and packages cannot be combined with other offers unless stated.'
    },
    {
      type: 'steps',
      id: 'how-to-book',
      eyebrow: 'How to book',
      h2: 'Redeeming an Offer, Step by Step',
      intro: 'The packages are not hidden behind a code. You can book them the same way as a normal room.',
      items: [
        {
          title: 'Pick the package and your dates',
          text: 'Check the availability calendar online or call the front desk on (816) 555-0147. Most packages have a minimum night stay, noted on each offer.'
        },
        {
          title: 'Book online, by phone or by email',
          text: 'Online booking shows live availability for all twelve rooms and applies the package rate automatically. If you would rather talk it through, email reservations@praivellehouse.com or call any time, day or night.'
        },
        {
          title: 'Tell us who it is for',
          text: 'An anniversary, a birthday, a proposal, a quiet weekend away from the children. It costs nothing to say, and it changes what we put in the room before you arrive.'
        },
        {
          title: 'We confirm everything together',
          text: 'Room, breakfast, treatments, dinner and check-out time, in one confirmation. If the package includes a spa treatment, we will offer you time slots before you arrive so nothing clashes.'
        },
        {
          title: 'Change your mind if you need to',
          text: 'Most packages can be moved or cancelled up to seventy-two hours before arrival at no charge. The exact terms are on your confirmation, in plain English rather than a wall of small print.'
        }
      ]
    },
    {
      type: 'split',
      id: 'best-rate',
      eyebrow: 'Our guarantee',
      h2: 'The Best Rate You Will Find, Direct',
      image: '/img/svc-rooms-suites.webp',
      imageAlt: 'A Garden King suite at Praivelle House with views over the prairie',
      body: [
        'Book with us directly and you will not find the same room cheaper anywhere else. That is the whole of our best-rate guarantee, and we keep it simple on purpose.',
        'The reason we can promise this is that we do not pay commission to online travel agencies, so there is no middleman taking fifteen per cent out of your room rate.',
        'Booking direct has other, quieter advantages. We see your whole reservation in one place, so if you call to move a dinner reservation or add a treatment, we already know who you are.',
        'If you have found a rate elsewhere and want us to match it, call (816) 555-0147 or email reservations@praivellehouse.com with the details. We will look at it honestly and tell you straight away whether it qualifies. We would rather have the conversation than lose you to a website.'
      ],
      list: [
        'Book direct and we match any lower public rate, then take 10% off',
        'No commission paid to online travel agencies, so more of your rate stays in the house',
        'Front desk flexibility on late check-out and upgrades that booking sites cannot offer',
        'One reservation, one team, one point of contact if plans change'
      ],
      cta: { label: 'Book direct', path: '/contact#book' }
    },
    {
      type: 'prose',
      id: 'terms',
      eyebrow: 'The fine print, in plain English',
      h2: 'Terms, Without the Small Print',
      body: [
        'Most hotel terms are written to protect the hotel and confuse the guest. We have tried to write ours the other way round. Here is everything that matters, in language you can read once and understand.',
        'Rates are quoted per night, for two people, and exclude state and local tax, which is added at checkout. Packages with a minimum stay are noted on the offer itself; most are one or two nights.',
        'You can cancel or move most bookings free of charge up to seventy-two hours before arrival. Inside seventy-two hours, the first night is charged, which is what it costs us to hold a room we could have sold.',
        'Children are welcome in all packages, and we do not charge for children under twelve sharing a room with two adults.',
        'Gift vouchers are valid for two years from the date of purchase, are redeemable against any part of the house, and can be transferred to anyone you like.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About Our Offers',
      intro: 'What guests ask before they book a package with us.',
      items: [
        {
          q: 'What exactly is included in The Prairie Escape?',
          a: 'A night in a Garden King room, breakfast for two in The Dining Room, a fifty-minute treatment each at The Spa, a bottle of sparkling wine on arrival and a 2:00 PM late check-out.'
        },
        {
          q: 'Can I use an offer on a Friday or Saturday?',
          a: 'The Prairie Escape and the Midweek Rate are Sunday to Thursday. The Wellness Weekend, the Dining Journey, the Romance Package and the festive packages all include weekends, subject to availability.'
        },
        {
          q: 'Do I need a code to book a package?',
          a: 'No. Packages are bookable directly online or over the phone, and the rate applies automatically. There is no promo code to hunt for and nothing to enter at checkout.'
        },
        {
          q: 'Can I combine two offers?',
          a: 'Generally no, because each package is already priced below the sum of its parts. If you want something that spans two packages, tell the front desk what you are trying to build and we will price it as a single arrangement.'
        },
        {
          q: 'How do gift vouchers work?',
          a: 'Vouchers start at $100, can be for any amount, and are redeemable against rooms, dining, spa and experiences. They are valid for two years, transferable, and delivered by email the same day or posted on heavy card if you prefer.'
        },
        {
          q: 'What is your cancellation policy?',
          a: 'Most bookings can be moved or cancelled free of charge up to seventy-two hours before arrival. Inside that window the first night is charged. Spa treatments cancelled within twenty-four hours are charged in full.'
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No. The price you see is the price you pay, plus tax. There is no resort fee, no service charge and no mandatory gratuity. We think that should be standard, and it is not.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Pick a Reason and Come',
      text: 'Whether it is a midweek night at the best rate we publish or the full festive weekend, the front desk is staffed around the clock and can build the stay you actually want.',
      primary: { label: 'Check availability', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'What exactly is included in The Prairie Escape?',
      a: 'A night in a Garden King room, breakfast for two, a fifty-minute treatment each at The Spa, a bottle of sparkling wine on arrival and a 2:00 PM late check-out. It is $279 a night against a regular rate of $389.'
    },
    {
      q: 'Can I use an offer on a Friday or Saturday?',
      a: 'The Prairie Escape and the Midweek Rate are Sunday to Thursday. The Wellness Weekend, the Dining Journey, the Romance Package and the festive packages all include weekends, subject to availability.'
    },
    {
      q: 'Do I need a code to book a package?',
      a: 'No. Packages are bookable directly online or over the phone, and the rate applies automatically. There is no promo code to hunt for.'
    },
    {
      q: 'Can I combine two offers?',
      a: 'Generally no, because each package is already priced below the sum of its parts. Tell the front desk what you are trying to build and we will price it as a single arrangement.'
    },
    {
      q: 'How do gift vouchers work?',
      a: 'Vouchers start at $100, can be for any amount, and are redeemable against rooms, dining, spa and experiences. They are valid for two years and transferable.'
    },
    {
      q: 'What is your cancellation policy?',
      a: 'Most bookings can be moved or cancelled free of charge up to seventy-two hours before arrival. Inside that window the first night is charged.'
    },
    {
      q: 'Are there any hidden fees?',
      a: 'No. The price you see is the price you pay, plus tax. There is no resort fee, no service charge and no mandatory gratuity.'
    }
  ],
  cta: {
    h2: 'Pick a Reason and Come',
    text: 'Whether it is a midweek night at the best rate we publish or the full festive weekend, the front desk is staffed around the clock and can build the stay you actually want.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
