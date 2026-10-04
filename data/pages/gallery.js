'use strict';
/**
 * Gallery page. A long picture of the house — suites, spa, dining room, cellar,
 * gardens and prairie — plus the story behind the photographs and the things a
 * camera cannot carry home. Rendered by views/page.ejs from blocks.
 */

module.exports = {
  slug: 'gallery',
  path: '/gallery',
  name: 'Gallery',
  metaTitle: 'Gallery | Praivelle House Boutique Hotel, Kansas City',
  metaDescription:
    'Photographs of Praivelle House in Kansas City — twelve suites, the spa, the wood-fired dining room, the cellar bar, the terrace and twelve acres of restored prairie.',
  metaKeywords:
    'praivelle house gallery, boutique hotel kansas city photos, prairie hotel pictures, spa hotel kansas city, farmhouse hotel gallery, kansas city hotel rooms',
  eyebrow: 'Look around',
  h1: 'Look Around Before You Arrive',
  heroIntro:
    'Every photograph on this page was taken inside the house and on the grounds, in ordinary weather, on a camera with no stylist and no borrowed furniture. What you see is what is waiting for you.',
  heroImage: '/img/gallery-pool.webp',
  heroImageAlt: 'The heated indoor pool at Praivelle House in Kansas City, lit from below at dusk',
  heroStats: [
    { value: 12, label: 'Suites and rooms, each a different shape' },
    { value: 12, suffix: ' acres', label: 'Of prairie, orchard and kitchen garden' },
    { value: 6, label: 'Acres returned to native prairie grass' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'From 3,520 guest reviews' }
  ],
  schemaType: 'ImageGallery',
  dateModified: '2026-09-20',
  blocks: [
    {
      type: 'gallery',
      id: 'the-house',
      eyebrow: 'The house and the land',
      h2: 'Fifteen Rooms and a Field',
      intro:
        'Suites, the spa, the dining room, the cellar, the terrace, the pool and the prairie that surrounds all of it. These are the places guests write to us about, photographed the way we actually keep them.',
      items: [
        {
          image: '/img/hero.webp',
          alt: 'Praivelle House at golden hour, a restored 1940s farmhouse hotel in Kansas City',
          caption: 'The house at golden hour, seen from the drive. The front door is the original 1940s door, kept because it is the right size for the house.'
        },
        {
          image: '/img/about-lobby.webp',
          alt: 'The lobby of Praivelle House with original oak floors and a low fire',
          caption: 'The lobby, with the original oak floor and the paler rectangle where the old kitchen table stood for fifty years.'
        },
        {
          image: '/img/gallery-library.webp',
          alt: 'A library alcove at Praivelle House with a deep armchair and shelves of books',
          caption: 'The library, just off the lobby. Two hundred-odd books, most of them left behind by guests, all of them readable.'
        },
        {
          image: '/img/gallery-bar.webp',
          alt: 'The Cellar Bar at Praivelle House, lit low, with wine glasses on a zinc counter',
          caption: 'The Cellar Bar just after opening. It seats fifty and feels like it seats twenty, which is entirely deliberate.'
        },
        {
          image: '/img/split-cellar.webp',
          alt: 'The wine cellar beneath Praivelle House, bottles racked along a brick wall',
          caption: 'The old root cellar, now the wine store. Around four hundred labels, weighted toward small Missouri and French growers.'
        },
        {
          image: '/img/svc-dining.webp',
          alt: 'The Dining Room at Praivelle House with the wood-fired hearth glowing',
          caption: 'The Dining Room, with the hearth at the far end. Almost nothing leaves the kitchen without touching the fire.'
        },
        {
          image: '/img/gallery-terrace.webp',
          alt: 'The terrace at Praivelle House set for dinner at golden hour',
          caption: 'The terrace, set for dinner. In summer we serve out here until the light goes, which is later than most people expect.'
        },
        {
          image: '/img/svc-rooms-suites.webp',
          alt: 'A Garden King suite at Praivelle House with windows over the prairie',
          caption: 'A Garden King, one of the six rooms that look south over the prairie and the orchard.'
        },
        {
          image: '/img/gallery-bath.webp',
          alt: 'A deep soaking tub in a stone bathroom at Praivelle House',
          caption: 'A stone bathroom with a soaking tub. Every suite has one, and no two of them are the same shape.'
        },
        {
          image: '/img/gallery-pool.webp',
          alt: 'The heated indoor pool at Praivelle House lit from below at dusk',
          caption: 'The indoor pool at dusk. Heated to 84 degrees all year, and usually empty before seven in the morning.'
        },
        {
          image: '/img/svc-spa-wellness.webp',
          alt: 'A treatment room at The Spa at Praivelle House with a candlelit massage table',
          caption: 'A treatment room at The Spa. Five rooms, a sauna, a steam room and a couples suite, run by a director who trained as a physical therapist.'
        },
        {
          image: '/img/svc-weddings-events.webp',
          alt: 'A long table set for a wedding dinner under the orchard trees at Praivelle House',
          caption: 'A long table under the orchard trees. We run more than forty weddings a year and never two on the same day.'
        },
        {
          image: '/img/svc-meetings-corporate.webp',
          alt: 'A boardroom at Praivelle House with a long table and windows onto the prairie',
          caption: 'The boardroom, which seats eighteen and comes with a team that knows when to stay out of the room.'
        },
        {
          image: '/img/svc-experiences-concierge.webp',
          alt: 'A concierge at Praivelle House handing a guest a hand-drawn map of the prairie trail',
          caption: 'A hand-drawn map from the front desk. The concierge still draws them, because a printed map tells you less.'
        },
        {
          image: '/img/cta-band.webp',
          alt: 'The prairie at Praivelle House at dusk with tall native grasses catching the last light',
          caption: 'The restored prairie at dusk. Six acres we stopped mowing in 2021 and gave back to native grass.'
        }
      ]
    },
    {
      type: 'prose',
      id: 'about-the-photographs',
      eyebrow: 'About the photographs',
      h2: 'How These Pictures Were Made',
      body: [
        'We waited a long time to photograph the house properly.',
        'So every image on this page was taken over three ordinary days by someone who had already spent the night here. There was no stylist, no borrowed furniture, no lighting rig and no props brought in from a warehouse.',
        'That decision costs us something. A styled photograph flatters a room in ways the room itself cannot always match, and it is easier to sell a hotel with a picture of an imagined stay than a real one.',
        'The light did most of the work, as it usually does here. The house faces south across twelve acres of open ground, so there is nothing between the windows and the horizon, and the rooms fill with a soft, even light from mid-morning until late afternoon.',
        'We have deliberately kept the set small. There are fifty or sixty good photographs of this house, and you will see perhaps fifteen of them here.'
      ]
    },
    {
      type: 'split',
      id: 'one-room',
      eyebrow: 'A closer look',
      h2: 'What a Suite Actually Feels Like',
      image: '/img/svc-rooms-suites.webp',
      imageAlt: 'A Garden King suite at Praivelle House with a deep bed and windows onto the prairie',
      body: [
        'A photograph can show you a bed and a window.',
        'The Garden King is the room most guests book first and the one they ask for by name when they return. It is not our largest suite, and it is not the most dramatic.',
        'Everything in the room is there because someone would miss it if it were gone. The desk faces the window rather than the wall, because we noticed guests kept turning the chair around.',
        'The rooms differ more than the photographs let on. No two of the twelve are the same size, and each one catches the light differently depending on which side of the house it sits on.'
      ],
      list: [
        'Hand-made pocket-spring mattresses and a choice of three pillow firmnesses',
        'Blackout curtains heavy enough to hold back a summer sunrise',
        'A desk facing the window, two warm reading lights and a coffee tray by the door',
        'South-facing rooms for light, courtyard rooms for quiet — ask us which you prefer'
      ],
      cta: { label: 'See the rooms', path: '/services/rooms-suites' }
    },
    {
      type: 'cards',
      id: 'what-photos-miss',
      eyebrow: 'What a camera cannot carry',
      h2: 'Five Things the Photographs Do Not Show',
      intro:
        'A picture is a still thing, and a stay is not. Here is the part of the house that never makes it into the frame.',
      columns: 3,
      items: [
        {
          icon: 'sunrise',
          title: 'The quiet',
          text: 'We are on twelve acres with nothing between the house and the horizon, so the loudest thing at night is usually the wind in the native grass.'
        },
        {
          icon: 'coffee',
          title: 'The smell of the kitchen at seven',
          text: 'By the time the first guests come down, the hearth has been lit for an hour and the bread is already out of the oven.'
        },
        {
          icon: 'hand-heart',
          title: 'The welcome note',
          text: 'Genevi\u00e8ve still writes the note that goes into every room by hand, and it is not a template.'
        },
        {
          icon: 'users',
          title: 'The people who remember you',
          text: 'More than half the team has been here five years or longer.'
        },
        {
          icon: 'waves',
          title: 'The pool at seven in the morning',
          text: 'The photograph shows the pool at dusk, but the pool is at its best before anyone else is up.'
        },
        {
          icon: 'sparkles',
          title: 'The way the prairie changes',
          text: 'The same field looks like three different places across a year \u2014 green in May, chest-high and silver in August, burnt amber in November.'
        }
      ]
    },
    {
      type: 'stats',
      id: 'by-the-numbers',
      eyebrow: 'By the numbers',
      h2: 'The House, Counted',
      intro: 'A few figures that put the pictures in context.',
      items: [
        { value: 12, label: 'Suites and rooms, no two alike' },
        { value: 12, suffix: ' acres', label: 'Of prairie, orchard and garden' },
        { value: 6, label: 'Acres seeded back to native grass' },
        { value: 400, suffix: '+', label: 'Labels in the cellar wine store' }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About the Pictures',
      intro: 'The things guests ask us after they have looked through the gallery.',
      items: [
        {
          q: 'Are the photographs recent?',
          a: 'Yes. The set on this page was shot in September 2026, and we replace individual images whenever a room is refurbished. If a photograph is more than a couple of years old, it is because the room has not changed since.'
        },
        {
          q: 'Can I see the specific room I am booking?',
          a: 'Yes. Tell the front desk which room or suite you are considering and we will send you the photographs we have of it, including any that show a less flattering angle.'
        },
        {
          q: 'Do the rooms really look like this?',
          a: 'They do, because the pictures were taken in ordinary weather with no styling. Guests occasionally tell us the house looks better in person, which is the outcome we were aiming for when we decided not to stage the shoot.'
        },
        {
          q: 'Which room has the best view?',
          a: 'The six south-facing rooms look over the orchard and the prairie and get the most light. The courtyard rooms are quieter and darker in the morning, which guests who sleep late tend to prefer.'
        },
        {
          q: 'Can I take photographs during my stay?',
          a: 'Of course, and we would love to see them. Guests photograph the house constantly, and some of our favourite images have come from guests rather than professionals.'
        },
        {
          q: 'Do you allow professional photo shoots?',
          a: 'We take a small number of editorial and wedding shoots each year, arranged in advance through the events office. Commercial shoots are quoted individually. Call the events line on (816) 555-0149 and Clara will talk you through what is possible.'
        },
        {
          q: 'Are the gardens and prairie open to guests?',
          a: 'Always. The paths through the restored prairie are mown and walkable year-round, and the kitchen garden and orchard are open to guests during daylight. It is about a fifteen-minute loop at an easy pace.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'The Best View Is the One From the Room',
      text: 'Pictures are a poor substitute for waking up here. Check availability and come and see the house the way it is best seen, which is from inside it.',
      primary: { label: 'Check availability', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'Are the photographs recent?',
      a: 'Yes. The set on this page was shot in September 2026, and we replace individual images whenever a room is refurbished.'
    },
    {
      q: 'Can I see the specific room I am booking?',
      a: 'Yes. Tell the front desk which room you are considering and we will send you the photographs we have of it, including any that show a less flattering angle.'
    },
    {
      q: 'Do the rooms really look like this?',
      a: 'They do, because the pictures were taken in ordinary weather with no styling. Guests occasionally tell us the house looks better in person.'
    },
    {
      q: 'Which room has the best view?',
      a: 'The six south-facing rooms look over the orchard and the prairie and get the most light. The courtyard rooms are quieter and darker in the morning.'
    },
    {
      q: 'Can I take photographs during my stay?',
      a: 'Of course, and we would love to see them. Some of our favourite images of the house have come from guests rather than professionals.'
    },
    {
      q: 'Do you allow professional photo shoots?',
      a: 'We take a small number of editorial and wedding shoots each year, arranged in advance through the events office on (816) 555-0149.'
    },
    {
      q: 'Are the gardens and prairie open to guests?',
      a: 'Always. The paths through the restored prairie are mown and walkable year-round, and the kitchen garden and orchard are open to guests during daylight.'
    }
  ],
  cta: {
    h2: 'The Best View Is the One From the Room',
    text: 'Pictures are a poor substitute for waking up here. Check availability and come and see the house the way it is best seen, which is from inside it.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
