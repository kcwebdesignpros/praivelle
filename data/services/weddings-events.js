'use strict';

/**
 * Service detail page: Weddings & Celebrations.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'weddings-events',
  order: 4,
  name: 'Weddings & Celebrations',
  shortName: 'Weddings & Events',
  icon: 'rings',
  image: '/img/svc-weddings-events.webp',
  imageAlt: 'A long table set for a wedding dinner beneath the oaks on the south lawn at Praivelle House',
  tagline: 'A prairie wedding, from a twelve-guest elopement to two hundred and forty under the orchard.',
  metaTitle: 'Weddings & Celebrations in Kansas City | Praivelle House',
  metaDescription:
    'Weddings and private celebrations for 12 to 240 guests on twelve acres of restored prairie in Kansas City. All-inclusive packages from $8,500.',
  metaKeywords:
    'kansas city wedding venue, boutique hotel wedding, prairie wedding missouri, small wedding kansas city, wedding reception venue kansas city mo, elopement kansas city, destination wedding kansas city',
  eyebrow: 'Weddings & celebrations',
  heroIntro:
    'Four spaces, twelve acres of prairie and one director who has run more than four hundred weddings here. We plan the day so it feels like yours, not ours.',
  priceFrom: 'Weddings from $8,500',
  priceValue: 8500,
  duration: 'Full day, ceremony to last dance',
  highlights: [
    'Ceremonies for 12 to 240 guests',
    'The Orchard, the Ballroom and the terrace',
    'All-inclusive packages from $8,500',
    'Catering by Executive Chef Julien Baptiste',
    'A rain plan held for every outdoor booking',
    'Twelve suites for the wedding party',
    'Planning led by Clara Whitfield, CMP',
    'A dedicated coordinator on the day'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'the-property',
      eyebrow: 'The property',
      h2: 'Twelve acres, and the light you actually get',
      body: [
        'Most couples choose a venue from photographs. We would rather you stood on the south lawn at the exact hour your ceremony will begin and watched the light cross the bluestem.',
        'You have four places to gather, and each one asks for a different kind of day. The Orchard holds up to two hundred and forty on the south lawn, ceremony at one end and dinner at the other, with the oaks doing most of the decorating.',
        'Dinner is cooked by Julien Baptiste, our Executive Chef, over the same live-oak hearth that runs The Dining Room.',
        'Our packages are built to remove the small anxieties. The Essential covers the ceremony site, the reception space, tables, chairs, linens, glassware, service staff, a bar package and a menu tasting for four.',
        'Missouri weather is not sentimental, so we plan for it twice. Every outdoor ceremony is booked with a matching indoor room held on standby, and Clara keeps a laminated rain plan that has been executed eleven times since 2016.',
        'The house holds twelve suites, and wedding parties usually take the whole property for the weekend. The couple gets the Prairie Suite, the party fills the rest, and everyone eats breakfast together the morning after.'
      ]
    },
    {
      type: 'cards',
      id: 'what-we-do',
      eyebrow: 'What we host',
      h2: 'The whole celebration, in one place',
      intro:
        'Ceremony, dinner, dancing and the morning after, all on the same twelve acres. These are the pieces we look after for you.',
      columns: 3,
      items: [
        {
          icon: 'rings',
          title: 'Ceremonies',
          text: 'An outdoor ceremony under the oaks, a candlelit exchange in the Ballroom, or a quiet elopement for two in the orchard.'
        },
        {
          icon: 'glass',
          title: 'Receptions',
          text: 'Round tables for a seated dinner or long tables for a feast.'
        },
        {
          icon: 'cake',
          title: 'Rehearsal dinners',
          text: 'The night before, in the Hearth Room or the Cellar Bar.'
        },
        {
          icon: 'flower',
          title: 'Design and florals',
          text: 'We work with a grower in Lawrence who cuts for the season, not the catalogue.'
        },
        {
          icon: 'utensils',
          title: 'Catering by the hearth',
          text: 'Executive Chef Julien Baptiste builds every menu around live oak and what the farms within ninety miles are actually harvesting that week.'
        },
        {
          icon: 'bed',
          title: 'Accommodation for the party',
          text: 'Twelve suites, yours for the weekend.'
        },
        {
          icon: 'calendar-check',
          title: 'Planning and timeline',
          text: 'Clara and her team build the run sheet in fifteen-minute blocks, brief every vendor and share the final version a month before the day.'
        },
        {
          icon: 'users',
          title: 'Vendor curation',
          text: 'We keep a short list of photographers, bands and officiants we have worked with for years.'
        },
        {
          icon: 'car',
          title: 'Arrival and parking',
          text: 'Complimentary valet from the porte-cochère, a gated courtyard behind the house and a shuttle we can arrange to and from the Plaza hotels.'
        }
      ]
    },
    {
      type: 'split',
      id: 'orchard-terrace',
      eyebrow: 'The Orchard and the terrace',
      h2: 'Where the day actually happens',
      image: '/img/gallery-terrace.webp',
      imageAlt: 'The walled terrace at Praivelle House dressed with string lights for an evening reception',
      body: [
        'The Orchard is the south lawn, and it is where most couples say their vows. Ceremony at the western end facing the sunset, dinner beneath a clear-span tent or open to the sky, dancing on a floor laid over the grass.',
        'The walled terrace is the quieter room outdoors, with its own fireplace, the string lights and a view back to the house.'
      ],
      list: [
        'Ceremony and reception in one place',
        'Clear-span tents with oak poles',
        'A fire in the terrace hearth',
        'Lighting until midnight'
      ],
      cta: { label: 'Arrange a tour', path: '/contact' }
    },
    {
      type: 'steps',
      id: 'planning-timeline',
      eyebrow: 'How it comes together',
      h2: 'The planning timeline',
      intro: 'Most couples book twelve to eighteen months ahead. This is the shape of that year.',
      items: [
        {
          title: 'Enquiry and a tour',
          text: 'Tell us your date and rough guest count. Clara walks you through the property at your ceremony hour, then sends a written proposal within three days.'
        },
        {
          title: 'Hold the date',
          text: 'A signed agreement and a deposit hold your date and spaces. No other couple is offered the day while it is held for you.'
        },
        {
          title: 'Design and tasting',
          text: 'Six months out you meet the chef, taste the menu, choose the bar and settle the layout with our florist and planner.'
        },
        {
          title: 'Final count and run sheet',
          text: 'A month before, we confirm numbers, build the fifteen-minute run sheet and brief every vendor by phone or in person.'
        },
        {
          title: 'The day itself',
          text: 'You arrive to a set room and a printed timeline. Clara and two coordinators run the day from the first guest to the last dance.'
        }
      ]
    },
    {
      type: 'table',
      id: 'spaces',
      eyebrow: 'Spaces',
      h2: 'Capacity at a glance',
      intro:
        'Every space can host a ceremony, a dinner or both. The figures below are the maximums we are licensed to seat and stand.',
      head: ['Space', 'Seated capacity', 'Standing capacity'],
      rows: [
        ['The Orchard (south lawn)', '240', '320'],
        ['The Ballroom', '160', '220'],
        ['The Terrace', '90', '140'],
        ['The Hearth Room', '40', '55'],
        ['The Library', '18', '24']
      ],
      note: 'Seated capacity assumes round tables of ten with a dance floor. Combining spaces raises the total, and many couples use the Orchard for the ceremony and the Ballroom for dinner.'
    },
    {
      type: 'checklist',
      id: 'included',
      eyebrow: 'What is included',
      h2: 'In every wedding package',
      intro:
        'The list below is standard. Anything not on it can be added, and anything you do not want can be taken out.',
      columns: 2,
      items: [
        'Exclusive use of your chosen spaces for the day',
        'A ceremony rehearsal the evening before',
        'Tables, chairs, linens, glassware and flatware',
        'Service staff and a dedicated event coordinator',
        'A menu tasting for four people',
        'A bar package with beer, wine and a signature cocktail',
        'Setup and breakdown of all furniture',
        'Complimentary valet parking for your guests',
        'A suite for the couple on the wedding night',
        'A rain plan, held and approved in advance',
        'Vendor recommendations and a full vendor briefing',
        'A printed run sheet shared a month before the day'
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'Weddings at Praivelle, by the numbers',
      intro: 'Eighteen years of celebrations on the same twelve acres.',
      items: [
        { value: 240, label: 'Guests at our largest south-lawn celebration' },
        { value: 400, suffix: '+', label: 'Weddings and private events run by Clara and her team' },
        { value: 12, label: 'Suites the wedding party takes for the weekend' },
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 3,520 guest reviews' }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Wedding questions we hear',
      intro: 'Straight answers to the things couples ask us most.',
      items: [
        {
          q: 'How many guests can you host?',
          a: 'Up to two hundred and forty seated on the south lawn and one hundred and sixty in the Ballroom. Smaller weddings are just as welcome, and we run elopements for twelve and dinners for thirty as often as large receptions.'
        },
        {
          q: 'What is included in the all-inclusive packages?',
          a: 'Ceremony and reception spaces, furniture, linens, service staff, a coordinator, a menu tasting, a bar package and parking. The Signature and Prairie Collection packages add florals, music, a suite and a welcome dinner.'
        },
        {
          q: 'What happens if it rains?',
          a: 'Every outdoor booking holds an indoor room on standby. Clara makes the call by noon on the day, moves the ceremony inside, re-dresses the space with your florist and tells you the plan you already approved. We have never cancelled a wedding.'
        },
        {
          q: 'Can we bring our own caterer or alcohol?',
          a: 'Catering is handled in-house by Executive Chef Julien Baptiste, and we hold the liquor licence, so alcohol is served by our bar team.'
        },
        {
          q: 'Do you have accommodation for the wedding party?',
          a: 'Yes. The house has twelve suites and most wedding parties take all of them for the weekend. The couple stays in the Prairie Suite, and everyone who stays gets breakfast in The Dining Room the next morning.'
        },
        {
          q: 'How far in advance should we book?',
          a: 'Most couples book twelve to eighteen months ahead, and Saturdays in May, June, September and October go first. Shorter lead times are often possible for Fridays, Sundays and winter dates, so ask us.'
        },
        {
          q: 'Do you host elopements and smaller weddings?',
          a: 'Constantly. A twelve-guest elopement in the orchard is one of our favourite kinds of day, and it comes with the same coordinator, the same kitchen and the same attention as a two-hundred-guest reception.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Come and see the light for yourself',
      text: 'Tell us your date and rough guest count and Clara will walk you through the property at your ceremony hour. A written proposal follows within three days.',
      primary: { label: 'Arrange a tour', path: '/contact' },
      secondary: { label: 'Call (816) 555-0149', path: 'tel:+18165550149' }
    }
  ],
  faqs: [
    {
      q: 'How many guests can you host?',
      a: 'Up to two hundred and forty seated on the south lawn and one hundred and sixty in the Ballroom. Smaller weddings are just as welcome, and we run elopements for twelve and dinners for thirty as often as large receptions.'
    },
    {
      q: 'What is included in the all-inclusive packages?',
      a: 'Ceremony and reception spaces, furniture, linens, service staff, a coordinator, a menu tasting, a bar package and parking. The Signature and Prairie Collection packages add florals, music, a suite and a welcome dinner.'
    },
    {
      q: 'What happens if it rains?',
      a: 'Every outdoor booking holds an indoor room on standby. Clara makes the call by noon on the day, moves the ceremony inside, re-dresses the space with your florist and tells you the plan you already approved. We have never cancelled a wedding.'
    },
    {
      q: 'Can we bring our own caterer or alcohol?',
      a: 'Catering is handled in-house by Executive Chef Julien Baptiste, and we hold the liquor licence, so alcohol is served by our bar team.'
    },
    {
      q: 'Do you have accommodation for the wedding party?',
      a: 'Yes. The house has twelve suites and most wedding parties take all of them for the weekend. The couple stays in the Prairie Suite, and everyone who stays gets breakfast in The Dining Room the next morning.'
    },
    {
      q: 'How far in advance should we book?',
      a: 'Most couples book twelve to eighteen months ahead, and Saturdays in May, June, September and October go first. Shorter lead times are often possible for Fridays, Sundays and winter dates, so ask us.'
    },
    {
      q: 'Do you host elopements and smaller weddings?',
      a: 'Constantly. A twelve-guest elopement in the orchard is one of our favourite kinds of day, and it comes with the same coordinator, the same kitchen and the same attention as a two-hundred-guest reception.'
    }
  ],
  related: ['dining', 'rooms-suites'],
  cta: {
    h2: 'Let us hold your date',
    text: 'Weddings from $8,500, quoted in writing in a single number. Talk to Clara and her team about the day you have in mind, and we will tell you honestly what is possible.',
    primary: { label: 'Enquire about a wedding', path: '/contact' }
  }
};
