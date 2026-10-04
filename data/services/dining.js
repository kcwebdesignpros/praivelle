'use strict';

/**
 * Service detail page: Dining & Culinary.
 * Data only — the template decides markup, spacing and colour.
 */

module.exports = {
  slug: 'dining',
  order: 3,
  name: 'Dining & Culinary',
  shortName: 'The Dining Room',
  icon: 'chef-hat',
  image: '/img/svc-dining.webp',
  imageAlt: 'The wood-fired hearth in The Dining Room at Praivelle House, with chefs at work over the fire',
  tagline: 'A wood fire, a ninety-mile shopping list, and a chef who knows the farmers by name.',
  metaTitle: 'Dining & Culinary in Kansas City | The Dining Room at Praivelle House',
  metaDescription:
    'Wood-fired seasonal cooking from Executive Chef Julien Baptiste, a ninety-mile sourcing rule, breakfast, afternoon tea and a cellar bar with a 400-label wine library.',
  metaKeywords:
    'fine dining kansas city, wood fired restaurant kansas city mo, farm to table kansas city, chef tasting menu kansas city, cellar bar kansas city, afternoon tea kansas city',
  eyebrow: 'A wood fire and a ninety-mile list',
  heroIntro:
    'The Dining Room cooks over a live oak fire with almost everything sourced inside ninety miles. Chef Julien Baptiste writes the menu four times a year, and the Cellar Bar pours from a library of four hundred labels. Here is how it all works.',
  priceFrom: 'Dinner from $68',
  priceValue: 68,
  duration: 'Two to three hours',
  highlights: [
    'A wood-fired hearth at the centre of the room',
    'Chef Julien Baptiste, with us since 2011',
    'A ninety-mile sourcing rule, with the farms named',
    'A menu rewritten four times a year',
    'A four-seat kitchen counter for the full show',
    'Breakfast for guests, afternoon tea for anyone',
    'The Cellar Bar and its 400-label wine library',
    'Private dining for up to forty'
  ],
  blocks: [
    {
      type: 'prose',
      id: 'the-dining-room',
      eyebrow: 'The Dining Room',
      h2: 'A threshing barn, a live fire and a short shopping list',
      body: [
        'The Dining Room is the oldest part of the house, a former threshing barn with a limestone wall at one end and a wood-fired hearth at the other. The fire is lit at seven each morning and burns until the last table leaves. Almost everything you eat is cooked over it, beside it or finished in the embers.',
        'Executive Chef Julien Baptiste arrived in 2011 from a bistro in Lyon and never left. His rule is simple: if he cannot find it within ninety miles, it needs a very good reason to be on the plate. The pork comes from a farm in Lawson, the vegetables from a market garden outside Lawrence, the flour from a mill in McPherson, and the cheese from a creamery in Weston.',
        'The menu changes four times a year, with the seasons rather than the calendar. Spring is asparagus and morels from the Missouri woods; summer is tomatoes still warm from the field; autumn is squash, game and the last of the orchard apples; winter is braises, root vegetables and the fire doing most of the work. Between the four main menus, a short list of dishes comes and goes every week depending on what the growers bring.',
        'Dinner runs from 5:00 to 10:00 PM and most people take two to three hours over it, which is exactly how it is meant to be eaten. There is a three-course prix fixe at $68 and a seven-course tasting at $135, plus a kitchen counter for four where you watch the fire and the plating up close. Wines can be matched by the glass to either menu.',
        'Mornings belong to guests. Breakfast is served from 7:00 AM, included in every rate, and moves from a full cooked plate early in the week to a lighter table of yogurt, fruit and house granola as the weekend arrives. Afternoon tea runs from 2:00 to 4:30 PM, open to anyone, with scones from the morning bake and a pot of tea blended in Kansas City.',
        'Below the dining room is the Cellar Bar, open from 4:00 PM to midnight, with low stone arches, a fireplace in winter and a library of four hundred wines. The list leans French and Missouri, with a dozen by the glass and a handful kept back for guests who ask. Cocktails are built on the same fire and garden: smoked old fashioneds, prairie bitters, and a non-alcoholic list that gets as much attention as the rest.'
      ]
    },
    {
      type: 'cards',
      id: 'the-kitchen-and-room',
      eyebrow: 'In the kitchen and the room',
      h2: 'Nine things that make the table what it is',
      intro:
        'A restaurant is more than a menu. These are the parts of The Dining Room you will notice whether or not you ever read the menu properly.',
      columns: 3,
      items: [
        {
          icon: 'zap',
          title: 'The wood-fired hearth',
          text: 'A live oak fire lit at seven and kept burning all day. Most dishes pass through it, beside it or into the embers.'
        },
        {
          icon: 'map-pin',
          title: 'The ninety-mile rule',
          text: 'Everything within ninety miles or it needs a reason. The farms are named on the menu, one by one.'
        },
        {
          icon: 'chef-hat',
          title: 'Chef Julien Baptiste',
          text: 'Executive Chef since 2011, trained in Lyon, and still on the line for every service rather than watching from an office.'
        },
        {
          icon: 'leaf',
          title: 'Seasonal menus',
          text: 'The menu is rewritten four times a year with the seasons, and a little more every week with what the growers bring.'
        },
        {
          icon: 'utensils',
          title: 'The kitchen counter',
          text: 'Four seats at the pass, where you watch the fire and the plating at close range and the chefs talk you through each course.'
        },
        {
          icon: 'coffee',
          title: 'Breakfast',
          text: 'Cooked to order from 7:00 AM and included in every room rate. No buffet line and no surcharge for the good coffee.'
        },
        {
          icon: 'cake',
          title: 'Afternoon tea',
          text: 'Served 2:00 to 4:30 PM, open to the public, with scones from the morning bake and sandwiches cut to order.'
        },
        {
          icon: 'wine',
          title: 'The Cellar Bar',
          text: 'A stone-vaulted bar with four hundred labels, a dozen by the glass, and a fireplace that runs all winter.'
        },
        {
          icon: 'presentation',
          title: 'Private dining',
          text: 'The Orchard Room seats twenty-four at a table, or up to forty standing, with a menu written for the occasion.'
        }
      ]
    },
    {
      type: 'split',
      id: 'the-hearth',
      eyebrow: 'At the fire',
      h2: 'Cooking the way this building was built for',
      image: '/img/svc-dining.webp',
      imageAlt: 'Whole fish grilling over oak embers in the wood-fired hearth at The Dining Room',
      body: [
        'When we restored the barn, we could have put in a modern range and been done with it. Instead we rebuilt the original hearth and hung a grill over it, because a wood fire does something no gas burner can: it seasons as it cooks, and it makes everyone slow down, cooks and guests alike.',
        'Whole fish are grilled over oak embers. Vegetables are buried in the coals and dug out blackened and sweet. The pork from Lawson is smoked over applewood for fourteen hours, then finished over the fire, and the crackling is the thing regulars order before they even sit down.',
        'You can watch all of it from the kitchen counter, four seats at the pass where the chefs talk you through each course and hand things across before they reach the dining room. It books out first, and it is worth the planning.'
      ],
      list: [
        'Whole fish grilled over oak embers',
        'Vegetables roasted directly in the coals',
        'Fourteen-hour applewood pork from Lawson',
        'Four seats at the pass, booked first'
      ],
      cta: { label: 'Reserve the counter', path: '/contact#book' }
    },
    {
      type: 'steps',
      id: 'the-evening',
      eyebrow: 'The evening',
      h2: 'How dinner unfolds, in five steps',
      intro: 'There is no wrong way to spend an evening here, but this is the order most guests find works best.',
      items: [
        {
          title: 'Arrive for a drink',
          text: 'Come at 4:30 for the Cellar Bar, where a glass and the fireplace start the evening properly.'
        },
        {
          title: 'Sit down at five or later',
          text: 'Dinner is served from 5:00 PM. Tables are held for fifteen minutes, then released to the waiting list.'
        },
        {
          title: 'Choose three courses or seven',
          text: 'The prix fixe is $68; the tasting is $135. Both can be matched with wine by the glass.'
        },
        {
          title: 'Watch, or do not',
          text: 'The kitchen counter is for the curious. The corner tables are for people who would rather not be.'
        },
        {
          title: 'Stay for the cellar',
          text: 'Most guests move downstairs after dessert, where the bar runs until midnight and the fire stays lit.'
        }
      ]
    },
    {
      type: 'table',
      id: 'venues',
      eyebrow: 'Where and when',
      h2: 'The dining venues',
      intro: 'Six ways to eat and drink under one roof, from a cooked breakfast to a last glass in the cellar.',
      head: ['Venue', 'Hours', 'Style'],
      rows: [
        ['The Dining Room', '7:00 AM – 10:00 PM', 'Wood-fired seasonal cooking'],
        ['Breakfast', '7:00 – 10:30 AM', 'Cooked to order, included for guests'],
        ['Afternoon Tea', '2:00 – 4:30 PM', 'Scones, sandwiches and a pot of tea'],
        ['The Kitchen Counter', '5:00 – 10:00 PM', 'Four seats at the pass'],
        ['The Cellar Bar', '4:00 PM – Midnight', 'Wine library and cocktails'],
        ['The Orchard Room', 'On request', 'Private dining for 24 to 40']
      ],
      note: 'Dinner is served 5:00 to 10:00 PM. The full menu is available for in-room dining around the clock. Vegetarian, vegan and gluten-free versions are offered for every course.'
    },
    {
      type: 'checklist',
      id: 'dietary-needs',
      eyebrow: 'Dietary needs',
      h2: 'Tell us, and the kitchen will cook for you',
      intro: 'Nothing here is an afterthought. The kitchen plans for diets in advance, so tell us when you book rather than when you sit down.',
      columns: 2,
      items: [
        'Vegetarian and vegan menus, not side dishes',
        'Gluten-free bread and pasta made in-house',
        'Nut-free preparation on request',
        'Shellfish and dairy noted at booking',
        'Children’s portions at half the prix fixe',
        'A full allergen list available for every dish',
        'Kosher-style and halal menus with notice',
        'The sourcing of every ingredient, named on the menu'
      ]
    },
    {
      type: 'stats',
      id: 'the-dining-room-in-numbers',
      h2: 'The Dining Room in numbers',
      intro: 'One kitchen, one fire, and a list of farms short enough to fit on the back of a menu.',
      items: [
        { value: 90, suffix: ' mi', label: 'The sourcing rule for nearly everything' },
        { value: 4, suffix: 'x', label: 'Menus written each year, with the seasons' },
        { value: 400, label: 'Labels in the Cellar Bar library' },
        { value: 14, suffix: ' h', label: 'Applewood smoke on the Lawson pork' }
      ]
    },
    {
      type: 'quote',
      id: 'guest-note',
      text: 'We booked the counter on a whim and ended up talking to the chef about the farm the pork came from for twenty minutes. The crackling is worth the trip on its own.',
      author: 'A guest from St. Louis',
      role: 'Dinner at the counter, June'
    },
    {
      type: 'gallery',
      id: 'the-table-gallery',
      eyebrow: 'A look inside',
      h2: 'The room, the fire and the cellar below',
      intro: 'A short tour of the parts of the house that smell of woodsmoke.',
      items: [
        { image: '/img/svc-dining.webp', alt: 'The wood-fired hearth at work in The Dining Room', caption: 'The hearth, lit at seven each morning' },
        { image: '/img/split-cellar.webp', alt: 'The stone-vaulted Cellar Bar with its wine library', caption: 'The Cellar Bar and its wine library' },
        { image: '/img/gallery-bar.webp', alt: 'Cocktails on the bar at the Cellar Bar', caption: 'Cocktails built on fire and garden' },
        { image: '/img/gallery-terrace.webp', alt: 'A table set on the terrace for outdoor dining', caption: 'The terrace, open from May to October' }
      ]
    },
    {
      type: 'prose',
      id: 'private-dining-and-cellar',
      eyebrow: 'Private dining and the cellar',
      h2: 'A room of your own, and four hundred bottles below',
      body: [
        'The Orchard Room is a private dining room off the main floor, with a long oak table that seats twenty-four and glass doors onto the garden. It can be set for a birthday, a board dinner, a rehearsal supper or a tasting, and up to forty guests fit standing for a reception. Menus are written for the occasion rather than chosen from the main list, and the chef will meet you beforehand to plan the courses.',
        'The Cellar Bar holds the wine library, four hundred labels deep, stored in the stone arches that once held the farm cider. The list leans French and Missouri, because those are the two places our chef trusts most, with a dozen poured by the glass and a short reserve list kept back for guests who ask. The bar team will open anything on the list by the bottle, and they will tell you honestly when the cheaper bottle is the better one.',
        'Cocktails are built on the same fire and the same garden. The old fashioned is smoked over oak chips, the prairie bitters are made in-house from local herbs, and the non-alcoholic list gets equal care, from smoked shrubs to a house kombucha brewed a few miles away. In winter the fireplace runs all evening, and in summer the doors open onto the terrace.',
        'Private events can extend into the Cellar Bar after dinner, and the kitchen will keep serving until midnight for a booked party. For anything from a table of ten to a full buy-out of the dining room, call events on (816) 555-0149 and we will build the evening around what you actually want, rather than a package we happen to sell.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions we hear about dining',
      intro: 'The things guests ask most before they book a table.',
      items: [
        {
          q: 'Do I need to be a guest to eat here?',
          a: 'No. The Dining Room, afternoon tea and the Cellar Bar are open to everyone. Guests get first refusal on the kitchen counter and priority on busy weekends.'
        },
        {
          q: 'What does dinner cost?',
          a: 'The three-course prix fixe is $68 and the seven-course tasting is $135. Wine pairings start at $45, and the same dishes can be sent to your room.'
        },
        {
          q: 'Can you cater for allergies and diets?',
          a: 'Every course has a vegetarian and vegan version, and the kitchen makes gluten-free bread and pasta in-house. Note allergies at booking and the chef will plan around them.'
        },
        {
          q: 'What is the ninety-mile rule?',
          a: 'Almost everything we cook is grown, raised or made within ninety miles of the house. The farms are named on the menu, and the pork comes from Lawson, twenty-eight miles away.'
        },
        {
          q: 'Is there a dress code?',
          a: 'None. Come as you are. Most guests dress for dinner, but a jacket is never required and the fire keeps the room warm on the coldest nights.'
        },
        {
          q: 'Can you host a private dinner?',
          a: 'The Orchard Room seats twenty-four at a table, or up to forty standing, with a menu written for the occasion. Call events on (816) 555-0149.'
        },
        {
          q: 'Is there a bar for non-drinkers?',
          a: 'A full non-alcoholic list, from smoked shrubs to house kombucha and a proper zero-proof old fashioned. It gets the same care as the wine.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Book a table by the fire',
      text: 'Dinner runs from five and the counter seats four. Tell us the date and any dietary needs, and the kitchen will take it from there.',
      primary: { label: 'Reserve a table', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'Do I need to be a guest to eat here?',
      a: 'No. The Dining Room, afternoon tea and the Cellar Bar are open to everyone. Guests get first refusal on the kitchen counter and priority on busy weekends.'
    },
    {
      q: 'What does dinner cost?',
      a: 'The three-course prix fixe is $68 and the seven-course tasting is $135. Wine pairings start at $45, and the same dishes can be sent to your room.'
    },
    {
      q: 'Can you cater for allergies and diets?',
      a: 'Every course has a vegetarian and vegan version, and the kitchen makes gluten-free bread and pasta in-house. Note allergies at booking and the chef will plan around them.'
    },
    {
      q: 'What is the ninety-mile rule?',
      a: 'Almost everything we cook is grown, raised or made within ninety miles of the house. The farms are named on the menu, and the pork comes from Lawson, twenty-eight miles away.'
    },
    {
      q: 'Is there a dress code?',
      a: 'None. Come as you are. Most guests dress for dinner, but a jacket is never required and the fire keeps the room warm on the coldest nights.'
    },
    {
      q: 'Can you host a private dinner?',
      a: 'The Orchard Room seats twenty-four at a table, or up to forty standing, with a menu written for the occasion. Call events on (816) 555-0149.'
    },
    {
      q: 'Is there a bar for non-drinkers?',
      a: 'A full non-alcoholic list, from smoked shrubs to house kombucha and a proper zero-proof old fashioned. It gets the same care as the wine.'
    }
  ],
  related: ['weddings-events', 'experiences-concierge'],
  cta: {
    h2: 'Come for dinner, stay for the cellar',
    text: 'Book a table in The Dining Room or one of four seats at the counter, and let the kitchen cook over the fire for you. Tell us about any diet and we will handle it.',
    primary: { label: 'Reserve a table', path: '/contact#book' }
  }
};
