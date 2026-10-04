'use strict';
/**
 * The Journal — editorial hub. Renders every article with a topic filter, plus
 * the ideas and standards behind the writing.
 */

module.exports = {
  slug: 'blog-index',
  path: '/blog',
  name: 'The Journal',
  metaTitle: 'The Journal | Praivelle House, Kansas City',
  metaDescription:
    'Notes from Praivelle House on Kansas City, prairie seasons, the kitchen, the spa and the slow work of running an independent hotel. Written by the people who do it.',
  metaKeywords:
    'praivelle house journal, kansas city hotel blog, kansas city travel guide, prairie house notes, boutique hotel blog kansas city, what to do in kansas city',
  eyebrow: 'Notes from the house',
  h1: 'Notes From the House',
  heroIntro:
    'The Journal is where we write down what we know: the seasons on the prairie, the way the kitchen cooks, the parts of Kansas City worth your afternoon, and the slow work of running a house like this one.',
  heroImage: '/img/gallery-library.webp',
  heroImageAlt: 'The library and reading room at Praivelle House, lined with books and morning light',
  heroStats: [
    { value: 4, label: 'Articles in the Journal so far' },
    { value: 3, label: 'Regular series we return to' },
    { value: 18, suffix: ' yrs', label: 'Of running this house, written down' },
    { value: 62, suffix: '%', label: 'Of guests who come back within a year' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'what-the-journal-is-for',
      eyebrow: 'Why we write',
      h2: 'What the Journal Is For',
      body: [
        'Most hotel blogs exist to fill a content calendar and sell a room. This one exists because we have spent eighteen years learning a particular patch of Kansas City and a particular way of doing things, and it seemed a waste not to write some of it down.',
        'We write in the first person and we name the people who do the work, because the house is not an anonymous brand. When the chef writes about the hearth, it is Julien Baptiste, who has stood at it since 2011.',
        'The Journal is not a sales channel dressed up as advice, and we do not publish a piece because it happens to mention a package.',
        'There is no schedule we are slaves to. We publish when we have something worth saying, which turns out to be most months and sometimes twice.'
      ]
    },
    {
      type: 'blog-grid',
      id: 'all-articles',
      eyebrow: 'Read the Journal',
      h2: 'Every Article We Have Published',
      intro:
        'Everything we have written, newest first. Use the topic filter to find the two or three pieces that match what you are planning.'
    },
    {
      type: 'cards',
      id: 'regular-series',
      eyebrow: 'What we return to',
      h2: 'The Series We Keep Coming Back To',
      intro:
        'Three subjects come up again and again at this address, so they are the ones the Journal returns to most.',
      columns: 3,
      items: [
        {
          icon: 'map-pin',
          title: 'Kansas City, Properly',
          text: 'Where we send guests when they ask what to do.'
        },
        {
          icon: 'sunrise',
          title: 'The Prairie Year',
          text: 'What is happening on the twelve acres month by month, from the first pasque flowers to the last of the autumn seed heads, and the birds that come with each.'
        },
        {
          icon: 'chef-hat',
          title: 'From the Hearth',
          text: 'How the kitchen cooks, what is coming out of the wood-fired oven, and why Julien sources within ninety miles of the back door whenever he can.'
        },
        {
          icon: 'spa',
          title: 'At the Spa',
          text: 'How our therapists think about rest, recovery and doing less, written by the people who give the treatments rather than a marketing desk.'
        },
        {
          icon: 'rings',
          title: 'Weddings and Events',
          text: 'What actually makes a prairie wedding work, from the light at six in the evening to the practicalities nobody mentions in the brochures.'
        },
        {
          icon: 'building',
          title: 'House Notes',
          text: 'The small mechanics of running an independent hotel, including the decisions we made restoring the farmhouse and the ones we would make again.'
        }
      ]
    },
    {
      type: 'split',
      id: 'who-writes',
      eyebrow: 'Who writes this',
      h2: 'Written by the People Who Run the House',
      image: '/img/gallery-library.webp',
      imageAlt: 'A writing desk and books in the library at Praivelle House',
      body: [
        'Every piece in the Journal is written by someone who works here. Nobody on the team writes under a made-up name, and we do not hand the writing to an outside agency that has never stood in the lobby.',
        'That means the advice is specific in a way that general travel writing rarely is. When we tell you the best time to walk the prairie trail, it is because we have walked it at every hour of the day.',
        'We also edit one another, which keeps us honest. A piece about the kitchen gets read by the front desk, who have heard every guest reaction to every dish.',
        'If you spot a mistake, tell us. We correct errors openly rather than quietly deleting them, because a Journal that pretends to be infallible is not worth reading. The contact page reaches us, and the front desk will pass a note to whoever wrote the piece.'
      ],
      list: [
        'Every article is written by a named member of the team',
        'No outsourced content and no anonymous bylines',
        'Pieces are edited by colleagues from other departments',
        'Corrections are made openly and acknowledged'
      ]
    },
    {
      type: 'stats',
      id: 'numbers',
      eyebrow: 'The Journal in numbers',
      h2: 'A Small Publication With a Long Memory',
      intro: 'The Journal is modest in size and unhurried in pace, which suits the house.',
      items: [
        { value: 4, label: 'Articles published so far' },
        { value: 3, label: 'Regular series we return to' },
        { value: 18, suffix: ' yrs', label: 'Of running this house behind the writing' },
        { value: 3520, suffix: '+', label: 'Guest reviews that inform what we notice' }
      ]
    },
    {
      type: 'prose',
      id: 'how-we-write',
      eyebrow: 'How we write',
      h2: 'How We Choose What to Write',
      body: [
        'A piece starts with something a guest asked, or something one of us noticed and could not stop thinking about. A couple asked what to do on a rainy Tuesday and we realised we had never written it down.',
        'We write for someone who is curious rather than someone who is being sold to. That means we avoid the words that every hotel uses and that no longer mean anything: the ones about secret retreats and private paradises and escaping the everyday.',
        'We do not use scare tactics, we do not manufacture urgency, and we do not tell you that you must book now or miss out. If a piece is about an offer, we will say so plainly. Most of them are not.',
        'We keep the tone warm and plain. No breathless adjectives, no exclamation marks, no pretending that a hotel is a life-changing event. A stay here is a good night\u2019s sleep, a fine dinner, a treatment that loosens something in your shoulders, and a morning on the prairie.'
      ]
    },
    {
      type: 'prose',
      id: 'using-the-journal',
      eyebrow: 'Using it well',
      h2: 'How to Get the Most From the Journal',
      body: [
        'If you are planning a stay, start with the Kansas City pieces and the seasonal ones.',
        'If you are already booked and counting down, the practical pieces are the ones to read: what to pack for a prairie evening, when the light is best for photographs, and where to walk before breakfast.',
        'If you are simply curious about the house, read whichever piece catches your eye. You do not need to be staying with us to enjoy the Journal, and you certainly do not need to book to ask us a question.',
        'One last thing: the Journal is a record as much as a publication. In ten years we will be able to look back and see what the prairie looked like in a particular spring, what the kitchen was cooking, and what we were thinking about.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About the Journal',
      intro: 'The things readers ask us most about the writing itself.',
      items: [
        {
          q: 'Who writes the articles in the Journal?',
          a: 'Our own team does, from Geneviève to the kitchen and the spa. Every piece carries a real name, and no article is written by an outside agency or under a made-up byline.'
        },
        {
          q: 'How often do you publish something new?',
          a: 'Most months, and sometimes twice. We publish when we have something worth saying rather than to a fixed schedule, and we would rather run one careful piece than five thin ones.'
        },
        {
          q: 'Is the Journal trying to sell me a room?',
          a: 'No. Some pieces mention what we offer because it is relevant, but the writing is not a sales channel.'
        },
        {
          q: 'Can I trust the advice about Kansas City?',
          a: 'We live and work here, and we write about the places we actually go. Where we recommend something, it is because we use it ourselves. If we ever get a detail wrong, we correct it openly.'
        },
        {
          q: 'Do you accept guest posts or sponsored articles?',
          a: 'No. We do not publish paid content and we do not accept free stays in exchange for coverage. The Journal is ours, which is the only way to keep it honest.'
        },
        {
          q: 'Can I suggest a topic or ask a question?',
          a: 'Please do. Many of our best pieces began with a guest question. Use the contact page or ask at the front desk, and we will pass it to whoever can answer it best.'
        },
        {
          q: 'Will you write about things that are not flattering to the house?',
          a: 'When it is honest and useful, yes. We have written about the limits of a 1940s building and about what the prairie is like in a wet month. A Journal that only flatters is not worth your time.'
        }
      ]
    },
    {
      type: 'cta',
      id: 'cta',
      h2: 'A Question the Journal Has Not Answered',
      text: 'Call the front desk or send us a note, and a real person will get back to you, usually the same day. We are happy to help you plan, whether or not you have booked.',
      primary: { label: 'Contact the house', path: '/contact' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'Who writes the articles in the Journal?',
      a: 'Our own team does, from Geneviève to the kitchen and the spa. Every piece carries a real name, and no article is written by an outside agency or under a made-up byline.'
    },
    {
      q: 'How often do you publish something new?',
      a: 'Most months, and sometimes twice. We publish when we have something worth saying rather than to a fixed schedule, and we would rather run one careful piece than five thin ones.'
    },
    {
      q: 'Is the Journal trying to sell me a room?',
      a: 'No. Some pieces mention what we offer because it is relevant, but the writing is not a sales channel.'
    },
    {
      q: 'Can I trust the advice about Kansas City?',
      a: 'We live and work here, and we write about the places we actually go. Where we recommend something, it is because we use it ourselves. If we ever get a detail wrong, we correct it openly.'
    },
    {
      q: 'Do you accept guest posts or sponsored articles?',
      a: 'No. We do not publish paid content and we do not accept free stays in exchange for coverage. The Journal is ours, which is the only way to keep it honest.'
    },
    {
      q: 'Can I suggest a topic or ask a question?',
      a: 'Please do. Many of our best pieces began with a guest question. Use the contact page or ask at the front desk, and we will pass it to whoever can answer it best.'
    },
    {
      q: 'Will you write about things that are not flattering to the house?',
      a: 'When it is honest and useful, yes. We have written about the limits of a 1940s building and about what the prairie is like in a wet month. A Journal that only flatters is not worth your time.'
    }
  ],
  cta: {
    h2: 'A Question the Journal Has Not Answered',
    text: 'Call the front desk or send us a note, and a real person will get back to you, usually the same day. We are happy to help you plan, whether or not you have booked.',
    primary: { label: 'Contact the house', path: '/contact' }
  }
};
