'use strict';

/**
 * Service detail page: Experiences & Concierge.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'experiences-concierge',
  order: 6,
  name: 'Experiences & Concierge',
  shortName: 'Experiences & Concierge',
  icon: 'bell',
  image: '/img/svc-experiences-concierge.webp',
  imageAlt: 'The concierge desk in the lobby at Praivelle House with a member of staff arranging a guest itinerary',
  tagline: 'A desk that never closes, and a city we have actually walked.',
  metaTitle: 'Experiences & Concierge in Kansas City | Praivelle House',
  metaDescription:
    'A 24-hour concierge, sommelier-led wine tastings, prairie trail walks, cooking classes and tested Kansas City itineraries. Experiences from $45.',
  metaKeywords:
    'kansas city concierge, hotel experiences kansas city, wine tasting kansas city, barbecue tour kansas city, cooking class kansas city mo, electric bike hire kansas city, airport transfer kansas city hotel',
  eyebrow: 'Experiences & concierge',
  heroIntro:
    'A concierge desk staffed around the clock, a sommelier at the Cellar Bar and a city we have walked ourselves. Tell us what you want and we will build the day.',
  priceFrom: 'Experiences from $45',
  priceValue: 45,
  duration: 'Two hours to a full day',
  highlights: [
    'Concierge desk staffed 24 hours',
    'Sommelier-led tastings in the Cellar Bar',
    'Prairie trail walks from the door',
    'Electric bicycles free for guests',
    'Cooking classes at the hearth',
    'Tested Kansas City art and barbecue days',
    'Airport transfers from $85',
    'Family and pet arrangements'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'the-desk',
      eyebrow: 'The concierge desk',
      h2: 'Someone who answers, at any hour',
      body: [
        'The concierge desk at Praivelle House is staffed twenty-four hours a day, every day of the year, and it is the part of the house guests remember longest. It is not a screen and it is not a call centre.',
        'Below The Dining Room is the Cellar Bar, and twice a week our sommelier runs a tasting at its long table. Six wines, poured blind to begin, with bread from the kitchen and a short explanation of why each one tastes the way it does.',
        'Twelve acres of restored prairie begin at the front door, and a mown trail runs from the terrace to the tree line and back through the orchard.',
        'On Saturdays, and by arrangement on any day for a group, Executive Chef Julien Baptiste teaches a cooking class at the hearth in The Dining Room.',
        'We keep a short list of days out that we have actually tested, not copied from a guidebook. The art day runs from the Nelson-Atkins to the Kemper and the Crossroads galleries, with a car and a driver who knows where to park.',
        'Children are welcome, and the desk keeps a list of what actually works for them: the picnic on the lawn, the pool, a cookie and a story at turndown, and a babysitter we have used for years.'
      ]
    },
    {
      type: 'cards',
      id: 'what-we-arrange',
      eyebrow: 'What we arrange',
      h2: 'The house, the city and the prairie',
      intro:
        'Some of this is inside the house, some of it is out in Kansas City, and all of it is arranged by the same desk.',
      columns: 3,
      items: [
        {
          icon: 'bell',
          title: 'The 24-hour concierge',
          text: 'Staffed every hour of every day. Tables, tickets, cars, chargers, late check-outs and the small problems that feel large at midnight.'
        },
        {
          icon: 'wine',
          title: 'Sommelier-led tastings',
          text: 'Six wines at the Cellar Bar long table, twice a week, with bread from the kitchen.'
        },
        {
          icon: 'leaf',
          title: 'Prairie trail walks',
          text: 'A mown trail from the terrace to the tree line and back through the orchard.'
        },
        {
          icon: 'zap',
          title: 'Electric bicycles',
          text: 'Four charged e-bikes in the barn for the longer loop to the creek.'
        },
        {
          icon: 'chef-hat',
          title: 'Cooking at the hearth',
          text: 'Three hours with Executive Chef Julien Baptiste: bread from the wood oven, fish over embers, then you eat what you made with a glass to match.'
        },
        {
          icon: 'image',
          title: 'Art and museum days',
          text: 'A tested route through the Nelson-Atkins, the Kemper and the Crossroads galleries, with a car and a driver who knows where to park.'
        },
        {
          icon: 'map-pin',
          title: 'Barbecue and the city',
          text: 'Three pits in one afternoon, ordered so you are still hungry at the last stop.'
        },
        {
          icon: 'car',
          title: 'Airport and city transfers',
          text: 'Door to door to Kansas City International in about thirty-five minutes, or a car on standby for the evening. One account, one bill.'
        },
        {
          icon: 'hand-heart',
          title: 'Families and pets',
          text: 'Picnics on the lawn, the pool, a cookie at turndown and a sitter we have used for years.'
        }
      ]
    },
    {
      type: 'split',
      id: 'cellar-bar',
      eyebrow: 'The Cellar Bar',
      h2: 'Six wines and one good question',
      image: '/img/split-cellar.webp',
      imageAlt: 'The Cellar Bar at Praivelle House set for a sommelier-led wine tasting with candles and bottles',
      body: [
        'The Cellar Bar sits below The Dining Room, brick and candlelight, with a long table and a wall of bottles from small producers. It is where the tastings happen, and it is the room guests ask about before they leave.',
        'Our sommelier pours six wines, starting blind, and talks less about scores than about why a wine tastes the way it does: the soil, the vintage, the decision the winemaker made.'
      ],
      list: [
        'Tastings twice a week, open to guests',
        'Private tastings for six or more',
        'Missouri producers on the list',
        'Bread and small plates from the kitchen'
      ],
      cta: { label: 'Reserve a tasting', path: '/contact' }
    },
    {
      type: 'steps',
      id: 'how-it-works',
      eyebrow: 'How it works',
      h2: 'How we build a day for you',
      intro: 'Most of what the concierge does starts with a question, not a booking form.',
      items: [
        {
          title: 'Tell us what you want',
          text: 'A table, a day out, a quiet afternoon, something for the children. A sentence is enough to begin.'
        },
        {
          title: 'We ask the right questions',
          text: 'How far you want to travel, what time of day suits you, what you have already tried and disliked. Five minutes, usually.'
        },
        {
          title: 'We build a plan',
          text: 'A short itinerary with times, distances and costs, plus one or two alternatives in case the weather or the mood changes.'
        },
        {
          title: 'You approve it',
          text: 'Nothing is booked until you say yes. We hold provisional reservations while you decide and cancel anything you do not want.'
        },
        {
          title: 'We run it',
          text: 'Cars, tables, tickets and guides are confirmed. If something moves, we move it, and you hear about it from us first.'
        }
      ]
    },
    {
      type: 'table',
      id: 'experiences',
      eyebrow: 'Experiences',
      h2: 'What you can book',
      intro:
        'A sample of what the desk arranges most often. Prices are per person unless noted, and many can be made private for your group.',
      head: ['Experience', 'Duration', 'From'],
      rows: [
        ['Sommelier-led wine tasting in the Cellar Bar', '90 minutes', '$65'],
        ['Prairie trail walk with a guide', '2 hours', '$45'],
        ['Electric bicycle hire, half day', '4 hours', '$45'],
        ['Cooking class at the hearth', '3 hours', '$145'],
        ['Kansas City art day with car and guide', 'Full day', '$320'],
        ['Barbecue trail with car and guide', '5 hours', '$220'],
        ['Airport transfer to or from MCI', '35 minutes', '$85'],
        ['Family prairie picnic, set up and cleared', '2 hours', '$75']
      ],
      note: 'Guests staying at the house get the desk map, the e-bikes and the trail walks at no charge. Everything else can be booked from your room or before you arrive.'
    },
    {
      type: 'checklist',
      id: 'at-your-service',
      eyebrow: 'At your service',
      h2: 'What the concierge handles',
      intro:
        'The desk is staffed around the clock. These are the things guests ask for most, and none of them need advance notice.',
      columns: 2,
      items: [
        'Restaurant reservations across Kansas City',
        'Tickets for theatre, music and sport',
        'Airport transfers and cars on standby',
        'Private tastings in the Cellar Bar',
        'Cooking classes at the hearth',
        'Prairie trail walks and e-bike hire',
        'Art, museum and barbecue itineraries',
        'Babysitting and activities for children',
        'Pet beds, bowls and walking routes',
        'Late check-out and room changes',
        'Florists, gifts and celebration setup',
        'Anything else you can describe to us'
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      h2: 'The desk, by the numbers',
      intro: 'The concierge is the part of the house that never closes.',
      items: [
        { value: 24, suffix: ' hrs', label: 'The concierge desk is staffed, every day of the year' },
        { value: 45, prefix: '$', label: 'Experiences start at, per person' },
        { value: 35, suffix: ' min', label: 'Door to door to Kansas City International' },
        { value: 12, label: 'Acres of prairie to walk from the front door' }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Concierge questions we hear',
      intro: 'Straight answers to the things guests ask us most.',
      items: [
        {
          q: 'Is the concierge really available around the clock?',
          a: 'Yes. The desk is staffed twenty-four hours a day, every day of the year. You can reach it from your room, from the lobby or on the number in your welcome note, and someone will answer.'
        },
        {
          q: 'Can you get restaurant reservations and event tickets?',
          a: 'Constantly. We hold relationships with kitchens and box offices across the city and will tell you honestly what is worth your evening. We book on your behalf and confirm the details back to you.'
        },
        {
          q: 'What are the prairie trail walks like?',
          a: 'A mown trail runs from the terrace to the tree line and back through the orchard, about a mile and a half at an easy pace.'
        },
        {
          q: 'Do you have electric bicycles?',
          a: 'Four charged e-bikes live in the barn, free for guests, with helmets, a route map and water. They suit the longer loop toward the creek and the back lanes, and the desk will set the seat height before you go.'
        },
        {
          q: 'Can you arrange airport transfers?',
          a: 'Yes. Kansas City International is about thirty-five minutes away, and we run transfers to and from MCI from $85. For a group or an evening out we can keep a car on standby and put it all on one account.'
        },
        {
          q: 'Do you welcome children and pets?',
          a: 'Both. Children get the pool, the lawn, a cookie at turndown and a sitter we have used for years. Pets are welcome in the ground-floor rooms, with a bed, bowls and a map of the walking route.'
        },
        {
          q: 'What if what I want is not on the list?',
          a: 'That is the part of the job we like most. Describe it and we will build it, source it or arrange it, and if it genuinely cannot be done we will tell you straight away rather than waste your time.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Tell us what you have in mind',
      text: 'A sentence is enough to start. The concierge will build an itinerary with times, distances and costs, and nothing is booked until you approve it.',
      primary: { label: 'Ask the concierge', path: '/contact' },
      secondary: { label: 'Call (816) 555-0148', path: 'tel:+18165550148' }
    }
  ],
  faqs: [
    {
      q: 'Is the concierge really available around the clock?',
      a: 'Yes. The desk is staffed twenty-four hours a day, every day of the year. You can reach it from your room, from the lobby or on the number in your welcome note, and someone will answer.'
    },
    {
      q: 'Can you get restaurant reservations and event tickets?',
      a: 'Constantly. We hold relationships with kitchens and box offices across the city and will tell you honestly what is worth your evening. We book on your behalf and confirm the details back to you.'
    },
    {
      q: 'What are the prairie trail walks like?',
      a: 'A mown trail runs from the terrace to the tree line and back through the orchard, about a mile and a half at an easy pace.'
    },
    {
      q: 'Do you have electric bicycles?',
      a: 'Four charged e-bikes live in the barn, free for guests, with helmets, a route map and water. They suit the longer loop toward the creek and the back lanes, and the desk will set the seat height before you go.'
    },
    {
      q: 'Can you arrange airport transfers?',
      a: 'Yes. Kansas City International is about thirty-five minutes away, and we run transfers to and from MCI from $85. For a group or an evening out we can keep a car on standby and put it all on one account.'
    },
    {
      q: 'Do you welcome children and pets?',
      a: 'Both. Children get the pool, the lawn, a cookie at turndown and a sitter we have used for years. Pets are welcome in the ground-floor rooms, with a bed, bowls and a map of the walking route.'
    },
    {
      q: 'What if what I want is not on the list?',
      a: 'That is the part of the job we like most. Describe it and we will build it, source it or arrange it, and if it genuinely cannot be done we will tell you straight away rather than waste your time.'
    }
  ],
  related: ['spa-wellness', 'dining'],
  cta: {
    h2: 'The desk never closes',
    text: 'Experiences from $45 and airport transfers from $85, arranged around what you actually want. Reach the concierge from your room or before you arrive.',
    primary: { label: 'Plan your stay', path: '/contact' }
  }
};
