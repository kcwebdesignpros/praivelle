'use strict';
/**
 * About page. The 2008 purchase, the restoration, the growth from six rooms to
 * twelve, the kitchen, the team and the prairie — rendered by views/page.ejs
 * from blocks.
 */

module.exports = {
  slug: 'about',
  path: '/about',
  name: 'Our Story',
  metaTitle: 'About Praivelle House | Boutique Hotel in Kansas City',
  metaDescription:
    'Praivelle House is an independent twelve-suite boutique hotel on the Kansas City prairie, founded in 2008 by Geneviève and Michael Marchand in a restored 1940s farmhouse.',
  metaKeywords:
    'about praivelle house, boutique hotel kansas city, independent hotel kansas city mo, prairie hotel, farmhouse hotel kansas city, family run hotel',
  eyebrow: 'Our story',
  h1: 'Eighteen Years of Getting the Small Things Right',
  heroIntro:
    'We bought a tired 1940s farmhouse on twelve acres of prairie in 2008 and turned it into twelve suites, a spa, a wood-fired dining room and a cellar bar. We have been getting the small things right ever since.',
  heroImage: '/img/about-lobby.webp',
  heroImageAlt: 'The lobby of Praivelle House, a restored 1940s farmhouse hotel in Kansas City',
  heroStats: [
    { value: 12, label: 'Suites, no two quite alike' },
    { value: 18, suffix: ' yrs', label: 'Independent and family-run since 2008' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'From 3,520 guest reviews' },
    { value: 62, suffix: '%', label: 'Of guests who rebook within a year' }
  ],
  schemaType: 'AboutPage',
  dateModified: '2026-09-14',
  blocks: [
    {
      type: 'prose',
      id: 'the-purchase',
      eyebrow: 'How it started',
      h2: 'The House We Bought in 2008',
      body: [
        'The first thing you should know is that we did not buy a hotel.',
        'We had looked at eleven other properties. Most of them were sensible. This one was not, and that was the point.',
        'The plan, as written in a spiral notebook that still sits in the front office, was a six-room inn with breakfast. The plan lasted about a year. Six rooms became eight, then ten, then twelve.',
        'We were told more than once that we were doing it backwards. Hotels are supposed to be built to a model, priced to a spreadsheet and staffed to a script.'
      ]
    },
    {
      type: 'timeline',
      id: 'history',
      eyebrow: 'Milestones',
      h2: 'Eighteen Years, One Address',
      intro: 'A few dates that changed the shape of the house.',
      items: [
        {
          year: '2008',
          title: 'The farmhouse on twelve acres',
          text: 'Geneviève and Michael bought the property with a leaking roof and three good oak trees, and opened six rooms the following spring after a winter of restoration.'
        },
        {
          year: '2011',
          title: 'The kitchen found its fire',
          text: 'We built the wood-fired hearth into the old summer kitchen and hired our first full brigade. The Dining Room opened for dinner, and never quite closed again.'
        },
        {
          year: '2014',
          title: 'The potting shed became The Spa',
          text: 'Two treatment rooms, a sauna and a soaking tub, run by a director who had trained as a physical therapist and insisted on doing things properly.'
        },
        {
          year: '2017',
          title: 'Twelve suites and a cellar bar',
          text: 'The final four suites opened in the rebuilt east wing, and the old root cellar became a wine bar that holds fifty people and feels like it holds twenty.'
        },
        {
          year: '2021',
          title: 'The prairie comes back',
          text: 'We stopped mowing the north field and seeded it with native grasses and wildflowers. By the following summer the bobolinks had returned.'
        },
        {
          year: '2026',
          title: 'Eighteen years, same rule',
          text: 'Twelve suites, a spa, a dining room and a cellar bar later, every guest still gets the same thing: a house that knows their name.'
        }
      ]
    },
    {
      type: 'split',
      id: 'restoration',
      eyebrow: 'How we build',
      h2: 'We Restored the House Rather Than Rebuilt It',
      image: '/img/about-lobby.webp',
      imageAlt: 'Original oak floors and 1940s detailing in the Praivelle House lobby',
      body: [
        'When you walk into the lobby, you are standing on the original oak floor. We had it sanded back over four slow days in 2008 and finished with a hard wax oil rather than a lacquer, which is why it has a soft sheen and not a shine.',
        'The footprint is the 1940s footprint.',
        'What this means for your stay is practical as much as romantic. The rooms are shaped by the building rather than a template, so no two suites are the same size and each one catches the light differently. The walls are thick enough to be genuinely quiet.',
        'We are not purists. The beds are new and the plumbing is new and the Wi-Fi is fibre. But where the old house had something worth keeping, we kept it, and we have never once regretted the extra cost of doing that.'
      ],
      list: [
        'Original 1940s oak floors, sanded and waxed rather than replaced',
        'The original farmhouse footprint, room proportions and two brick chimneys',
        'Six-over-six sash windows, reglazed and draught-proofed',
        'A new east wing built to match the old roof pitch and brick'
      ]
    },
    {
      type: 'cards',
      id: 'the-people',
      eyebrow: 'The people',
      h2: 'The Family, and the Family We Hired',
      intro: 'A house is run by people, and ours have mostly been with us a long time.',
      columns: 4,
      items: [
        {
          icon: 'building',
          title: 'Geneviève Marchand, CHA',
          text: 'Co-founder and General Manager. She grew up above a twenty-two-seat bistro in Lyon and still writes the welcome note in every room by hand.'
        },
        {
          icon: 'chef-hat',
          title: 'Julien Baptiste',
          text: 'Executive Chef. He came to Kansas City by way of Marseille, Copenhagen and Chicago, and cooks almost everything over one live-oak hearth.'
        },
        {
          icon: 'spa',
          title: 'Amara Osei, LMT',
          text: 'Spa and Wellness Director. Trained as a physical therapist before she ever touched a massage table.'
        },
        {
          icon: 'rings',
          title: 'Clara Whitfield, CMP',
          text: 'Director of Weddings and Events.'
        }
      ]
    },
    {
      type: 'prose',
      id: 'the-kitchen',
      eyebrow: 'The food',
      h2: 'One Hearth, Ninety Miles, Four Menus a Year',
      body: [
        'Almost nothing leaves our kitchen without touching the wood-fired hearth, and almost nothing arrives from further than ninety miles away. Those are the two rules Julien set on his first day and has not moved since. The vegetables are grown by people we can name.',
        'The menu changes four or five times a year, not four or five times a week, because he would rather perfect a dish than chase novelty. That is a deliberate choice and it is not the fashionable one.',
        'The nightly market plate is the exception and the most honest thing on the menu. It is built entirely from whatever arrived that morning, which means it is never written down in advance and never the same twice. Regulars order it before they have seen it.',
        'We buy whole animals and use all of them. We make our own stocks, our own bread and our own cultured butter.'
      ]
    },
    {
      type: 'prose',
      id: 'no-script',
      eyebrow: 'How we work',
      h2: 'No Corporate Script, and What That Means',
      body: [
        'There is no script at Praivelle House. Nobody is trained to say a particular sentence at a particular moment, and nobody is measured on how many times they used a guest\u2019s name.',
        'In practice, it means the person who checks you in is allowed to tell you honestly that the fish is better than the chicken tonight.',
        'It also means we are slower to hire than a chain would be. A new member of the front desk spends their first two weeks following someone around rather than working a station.',
        'The result is a team that stays. More than half the people who work here have been here five years or longer, and two of them started as summer staff and now run departments.'
      ]
    },
    {
      type: 'stats',
      id: 'by-the-numbers',
      eyebrow: 'By the numbers',
      h2: 'Eighteen Years, Measured Honestly',
      intro: 'Numbers we actually track, because they tell us whether we are doing the job.',
      items: [
        { value: 12, label: 'Suites and rooms, each a different shape' },
        { value: 12, label: 'Acres of prairie, six of them restored to native grass' },
        { value: 90, suffix: ' mi', label: 'The radius our kitchen sources within' },
        { value: 62, suffix: '%', label: 'Of guests who book a return stay within a year' }
      ]
    },
    {
      type: 'split',
      id: 'prairie',
      reverse: true,
      eyebrow: 'The land',
      h2: 'We Gave Six Acres Back to the Prairie',
      image: '/img/gallery-terrace.webp',
      imageAlt: 'Native prairie grasses and wildflowers on the grounds of Praivelle House',
      body: [
        'In 2021 we stopped mowing the north field. It had been pasture for decades and lawn for the rest, and it was doing nothing for anyone.',
        'By the third summer it had found itself. The grasses came up chest-high.',
        'The rest of the property follows the same logic. We heat and cool with ground-source pumps buried under the west lawn. We collect rainwater from the roofs into two cisterns and use it on the kitchen garden, which supplies the herbs and most of the salad.',
        'We are not going to claim the house is carbon neutral, because it is not. A hotel with a heated pool and a dining room and twelve suites full of hot water has a footprint, and pretending otherwise would be dishonest.'
      ],
      list: [
        'Six acres seeded with native prairie grasses and wildflowers',
        'Ground-source heat pumps for heating and cooling',
        'Two rainwater cisterns feeding the kitchen garden',
        'Kitchen waste composted on site and returned to the beds',
        'LED lighting throughout since 2019'
      ]
    },
    {
      type: 'quote',
      id: 'quote',
      text: 'The house was never the point. The point was the ninety seconds after you walk in, when you decide whether you are going to relax. Everything we have built is aimed at those ninety seconds.',
      author: 'Geneviève Marchand',
      role: 'Co-founder and General Manager'
    },
    {
      type: 'prose',
      id: 'what-guests-notice',
      eyebrow: 'What you will notice',
      h2: 'The Small Things, and Why We Bother',
      body: [
        'Guests rarely comment on the things we spent the most money on. Nobody has ever written a review about the ground-source heat pump. What they notice is that the room was cool when they arrived on a hot afternoon.',
        'We keep a house file on every returning guest, and we use it.',
        'The house is quiet on purpose. We keep music out of the corridors. We do not run televisions in the lobby.',
        'What we are trying to build is not luxury in the sense of marble and brass. It is the feeling of being looked after by people who are good at their jobs and glad to be doing them.'
      ]
    },
    {
      type: 'checklist',
      id: 'promises',
      eyebrow: 'Our promises',
      h2: 'Six Things We Will Never Do',
      intro: 'A short list of rules that decide how the house runs every day.',
      columns: 2,
      items: [
        'We will never hand you a script instead of an answer',
        'We will never sell you a treatment or a dish we do not believe in',
        'We will never charge a resort fee or a hidden service charge',
        'We will never make you queue to ask a simple question',
        'We will never let a room go out that we would not sleep in ourselves',
        'We will never forget that you chose us over a hundred other places'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About the House',
      intro: 'A few things guests ask before they arrive, answered plainly.',
      items: [
        {
          q: 'Who owns Praivelle House?',
          a: 'It is independently owned and run by Genevi\u00e8ve and Michael Marchand, who bought the property in 2008. There is no chain, no management company and no investor group.'
        },
        {
          q: 'How many rooms do you have?',
          a: 'Twelve. Eleven suites and one garden room, no two the same size or shape, because they were fitted into a restored farmhouse rather than a template. That is also why we can tell you exactly which one gets the best morning light.'
        },
        {
          q: 'What time is check-in and check-out?',
          a: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Reception is staffed twenty-four hours, so late arrivals are no trouble at all. Late check-out is often possible for a small fee, and is included in some of our packages.'
        },
        {
          q: 'Is the house suitable for guests who do not want a big hotel?',
          a: 'That is exactly who we built it for. There is no lobby music, no television in the bar, no queue at the desk and no upselling.'
        },
        {
          q: 'Do you allow children and pets?',
          a: 'Children are welcome, and we keep a small number of rooms set up for families.'
        },
        {
          q: 'Where exactly are you, and how do I get there?',
          a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, about ten minutes from the Country Club Plaza and twenty-four minutes from Kansas City International. Valet is complimentary from the porte-cochère, with self-parking in the gated courtyard behind the house.'
        },
        {
          q: 'Can I book the whole house for a private event?',
          a: 'Yes. We take a small number of full-property buyouts each year for weddings, milestone birthdays and company retreats, usually in the quieter months.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Come and See Whether We Mean It',
      text: 'Words on a page are cheap. Book a night, sit by the fire, eat dinner and judge for yourself whether eighteen years of getting the small things right adds up to anything.',
      primary: { label: 'Check availability', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'Who owns Praivelle House?',
      a: 'It is independently owned and run by Geneviève and Michael Marchand, who bought the property in 2008. There is no chain, no management company and no investor group.'
    },
    {
      q: 'How many rooms do you have?',
      a: 'Twelve. Eleven suites and one garden room, no two the same size or shape, because they were fitted into a restored farmhouse rather than a template.'
    },
    {
      q: 'What time is check-in and check-out?',
      a: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Reception is staffed twenty-four hours, so late arrivals are no trouble at all.'
    },
    {
      q: 'Is the house suitable for guests who do not want a big hotel?',
      a: 'That is exactly who we built it for. No lobby music, no queue at the desk and no upselling. If you want a quiet room and someone who knows your name, you are in the right place.'
    },
    {
      q: 'Do you allow children and pets?',
      a: 'Children are welcome, and we keep a small number of rooms set up for families. Well-behaved dogs are welcome in the garden-level rooms and on the terrace.'
    },
    {
      q: 'Where exactly are you, and how do I get there?',
      a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, about ten minutes from the Country Club Plaza and twenty-four minutes from Kansas City International.'
    },
    {
      q: 'Can I book the whole house for a private event?',
      a: 'Yes. We take a small number of full-property buyouts each year for weddings, milestone birthdays and company retreats, usually in the quieter months.'
    }
  ],
  cta: {
    h2: 'Come and See Whether We Mean It',
    text: 'Words on a page are cheap. Book a night, sit by the fire, eat dinner and judge for yourself whether eighteen years of getting the small things right adds up to anything.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
