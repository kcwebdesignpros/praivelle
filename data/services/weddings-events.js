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
        'Most couples choose a venue from photographs. We would rather you stood on the south lawn at the exact hour your ceremony will begin and watched the light cross the bluestem. That is why Clara Whitfield, our Director of Weddings & Events, walks every couple across the property twice — once before lunch and once in the late afternoon — so you can feel how the same field changes between four and seven. The house sits on twelve acres of restored prairie south of the Country Club Plaza, built around a 1940s farmhouse, with three mature oaks, a walled terrace and a tree line that has not moved in eighty years. The farmhouse itself still has the original oak floors, a wraparound porch and a front door repainted four times, most recently in a soft green that photographs beautifully at golden hour.',
        'You have four places to gather, and each one asks for a different kind of day. The Orchard holds up to two hundred and forty on the south lawn, ceremony at one end and dinner at the other, with the oaks doing most of the decorating. The Ballroom seats a hundred and sixty at round tables beneath the original timber ceiling, which is the right room for a winter wedding or a long dinner. The Library takes eighteen around one table, and the Hearth Room forty beside the fire. Most couples use two of them: a ceremony outdoors, dinner inside, then back out to the terrace for the last hour. The terrace sits between the two, so a couple can move from vows to drinks to dinner without anyone getting into a car or losing the view.',
        'Dinner is cooked by Julien Baptiste, our Executive Chef, over the same live-oak hearth that runs The Dining Room. He sources almost everything within ninety miles — heritage pork from a farm forty minutes north, heirloom tomatoes from a grower in Lawrence, greens cut on the morning of the wedding — and he will sit down with you to build a menu rather than hand you a list. Couples usually choose a three- or four-course seated dinner, or a long-table feast of whole roasted fish, charred vegetables and bread baked that afternoon. Dietary requirements are handled as proper dishes, not afterthoughts. He will also tell you, kindly, which of your ideas will not work in August, which is worth more than a menu that promises everything.',
        'Our packages are built to remove the small anxieties. The Essential covers the ceremony site, the reception space, tables, chairs, linens, glassware, service staff, a bar package and a menu tasting for four. The Signature adds florals through our grower, a string trio for the ceremony, a two-night suite for the couple and a welcome dinner for the wedding party on the Friday. The Prairie Collection is the full weekend: exclusive use of the house, all twelve suites for two nights, a rehearsal dinner, the wedding itself and a farewell brunch. Prices start at $8,500 and rise with the guest count and the season. Everything is itemised before you sign, so the number on the proposal is the number on the final invoice, less anything you choose to remove.',
        'Missouri weather is not sentimental, so we plan for it twice. Every outdoor ceremony is booked with a matching indoor room held on standby, and Clara keeps a laminated rain plan that has been executed eleven times since 2016. If the forecast turns, we move the ceremony into the Ballroom or the Hearth Room, the florist re-dresses the space, and the bar moves to the covered terrace. You will be told by noon on the day and you will not be asked to make the call. In eighteen years we have never cancelled a wedding, and we have never moved one without a plan the couple had already approved. The standby room is not a lesser space; it is the room we would have chosen for the ceremony if the forecast had been kind.',
        'The house holds twelve suites, and wedding parties usually take the whole property for the weekend. The couple gets the Prairie Suite, the party fills the rest, and everyone eats breakfast together the morning after. Guests who stay elsewhere are ten minutes from the Plaza and twenty-four from Kansas City International. Clara and her team of four run the timeline in fifteen-minute blocks and share it with every vendor a month out. They will meet your photographer, brief your band and hold your rings. On the day itself you should be doing one thing only, and it is not logistics. On the morning of the wedding, breakfast is brought to the couple’s suite and the party gathers downstairs at their own pace.'
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
          text: 'An outdoor ceremony under the oaks, a candlelit exchange in the Ballroom, or a quiet elopement for two in the orchard. We hold an indoor room for every outdoor booking.'
        },
        {
          icon: 'glass',
          title: 'Receptions',
          text: 'Round tables for a seated dinner or long tables for a feast. Capacity runs from twelve to two hundred and forty across the lawn, the Ballroom and the terrace.'
        },
        {
          icon: 'cake',
          title: 'Rehearsal dinners',
          text: 'The night before, in the Hearth Room or the Cellar Bar. Smaller, louder and less formal than the wedding itself, with a short menu and one long table.'
        },
        {
          icon: 'flower',
          title: 'Design and florals',
          text: 'We work with a grower in Lawrence who cuts for the season, not the catalogue. Peonies in June, dahlias in September, dried grasses through the winter.'
        },
        {
          icon: 'utensils',
          title: 'Catering by the hearth',
          text: 'Executive Chef Julien Baptiste builds every menu around live oak and what the farms within ninety miles are actually harvesting that week.'
        },
        {
          icon: 'bed',
          title: 'Accommodation for the party',
          text: 'Twelve suites, yours for the weekend. The couple takes the Prairie Suite and the wedding party fills the rest, with breakfast included for everyone staying.'
        },
        {
          icon: 'calendar-check',
          title: 'Planning and timeline',
          text: 'Clara and her team build the run sheet in fifteen-minute blocks, brief every vendor and share the final version a month before the day.'
        },
        {
          icon: 'users',
          title: 'Vendor curation',
          text: 'We keep a short list of photographers, bands and officiants we have worked with for years. Bring your own if you prefer, and we will brief them properly.'
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
        'The Orchard is the south lawn, and it is where most couples say their vows. Ceremony at the western end facing the sunset, dinner beneath a clear-span tent or open to the sky, dancing on a floor laid over the grass. It seats two hundred and forty and stands three hundred and twenty, and it is yours from the morning.',
        'The walled terrace is the quieter room outdoors, with its own fireplace, the string lights and a view back to the house. It is where guests drift after dinner, where the last drinks are poured, and where a wedding of thirty can feel as though the whole property belongs to them.'
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
          a: 'Catering is handled in-house by Executive Chef Julien Baptiste, and we hold the liquor licence, so alcohol is served by our bar team. You are welcome to bring your own wine for a corkage fee, and we will decant and serve it properly.'
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
      a: 'Catering is handled in-house by Executive Chef Julien Baptiste, and we hold the liquor licence, so alcohol is served by our bar team. You are welcome to bring your own wine for a corkage fee, and we will decant and serve it properly.'
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
