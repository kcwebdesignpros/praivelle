'use strict';
/**
 * Guest Reviews page. The full review carousel, how we collect and answer
 * reviews, the things guests mention most and a candid look at what we do when
 * something goes wrong — rendered by views/page.ejs from blocks.
 */

module.exports = {
  slug: 'reviews',
  path: '/reviews',
  name: 'Guest Reviews',
  metaTitle: 'Guest Reviews | 4.9 Stars from 3,520 Guests | Praivelle House',
  metaDescription:
    'Read what guests say about Praivelle House in Kansas City — 4.9 stars from 3,520 reviews, and how we collect, answer and act on every one of them.',
  metaKeywords:
    'praivelle house reviews, boutique hotel kansas city reviews, kansas city hotel ratings, guest reviews prairie hotel, 4.9 star hotel kansas city',
  eyebrow: 'Guest reviews',
  h1: 'What Guests Say When They Get Home',
  heroIntro:
    'We read every review, answer every one, and keep the ones that sting as carefully as the ones that flatter. Here is what 3,520 guests have said about the house, and what we have done about it.',
  heroImage: '/img/about-lobby.webp',
  heroImageAlt: 'The lobby of Praivelle House, a boutique hotel in Kansas City, with original oak floors',
  heroStats: [
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average across every review platform' },
    { value: 3520, suffix: '+', label: 'Guest reviews since 2008' },
    { value: 62, suffix: '%', label: 'Of guests who rebook within a year' },
    { value: 18, suffix: ' yrs', label: 'Independent and family-run' }
  ],
  schemaType: 'CollectionPage',
  dateModified: '2026-09-21',
  blocks: [
    {
      type: 'testimonials',
      id: 'the-reviews',
      eyebrow: 'In their words',
      h2: 'Reviews From the Last Two Years',
      intro:
        'A selection of what guests have written on Google and Tripadvisor, unedited apart from the odd typo. We have not chosen only the five-star ones — these happen to be the most detailed, which is why they are here.',
      limit: 12
    },
    {
      type: 'prose',
      id: 'how-we-collect',
      eyebrow: 'How this works',
      h2: 'We Read All of Them, Including the Hard Ones',
      body: [
        'There are two ways to run reviews at a hotel. The first is to chase them, filter them and bury the ones that hurt. The second is to read every one, answer every one, and let the whole thing stand.',
        'The rules are simple and they have not changed since we opened. We do not offer a free drink, a discount or an entry into a draw in exchange for a review, because a bought review is not a review.',
        'Our rating is 4. 9 out of 5 across more than 3,500 reviews, split between Google, where we hold roughly 2,400, and Tripadvisor, where we hold about 1,100.',
        'The reviews we learn the most from are rarely the five-star ones. A guest who writes three warm paragraphs about the food and then mentions, almost in passing, that the corridor light outside room four kept them awake has given us something no mystery shopper could.',
        'Every review gets a reply, and a person writes it rather than a template. If a guest names a member of the team, we pass the review to that person the same day, because the reason people write them is often to say thank you to someone specific.',
        'We know that a review is a public document and that a reply is public too.'
      ]
    },
    {
      type: 'stats',
      id: 'by-the-numbers',
      eyebrow: 'By the numbers',
      h2: 'Eighteen Years of Guest Feedback',
      intro: 'The figures behind the rating, kept honestly and updated monthly.',
      items: [
        { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating across all platforms' },
        { value: 3520, suffix: '+', label: 'Reviews collected since 2008' },
        { value: 100, suffix: '%', label: 'Of reviews answered by a person' },
        { value: 62, suffix: '%', label: 'Of guests who book a return stay' }
      ]
    },
    {
      type: 'split',
      id: 'what-we-changed',
      eyebrow: 'What reviews changed',
      h2: 'The Three-Star Review We Still Talk About',
      image: '/img/gallery-library.webp',
      imageAlt: 'A quiet library alcove at Praivelle House with an armchair and shelves of books',
      body: [
        'In 2019 a guest gave us three stars and wrote a review that took us apart in about four hundred words. He had enjoyed his stay, mostly. The food was excellent, the room was beautiful, the staff were kind.',
        'It was the fairest review we have ever received, and it landed harder than a one-star one would have, because it was right.',
        'What followed was unglamorous and effective. We started a proper rolling maintenance schedule, one room a month, so that every room in the house gets a full going-over twice a year.',
        'He came back in 2021, which we only know because he mentioned it in a later review. That one had five stars, and the line we remember is that the house felt like it had been looked after again.'
      ],
      list: [
        'A rolling maintenance schedule so every room is fully checked twice a year',
        'Breakfast service rebuilt to get a cooked dish to the table in under nine minutes',
        'A standing rule that any problem named in a review is inspected house-wide, not just in one room',
        'The original three-star review kept on the staff-room wall for two years'
      ]
    },
    {
      type: 'cards',
      id: 'mentioned-most',
      eyebrow: 'What guests mention most',
      h2: 'The Three Things That Come Up Again and Again',
      intro:
        'We have read a few thousand reviews. These three themes appear in almost all of them, in almost the same words.',
      columns: 3,
      items: [
        {
          icon: 'hand-heart',
          title: 'That someone remembered their name',
          text: 'The single most common line in our reviews is some version of: somebody knew who we were by the second day.'
        },
        {
          icon: 'chef-hat',
          title: 'That the food was better than expected',
          text: 'Almost every long review mentions a meal.'
        },
        {
          icon: 'moon',
          title: 'That they slept better than they have in months',
          text: 'Guests write about the quiet more than any amenity.'
        }
      ]
    },
    {
      type: 'quote',
      id: 'quote',
      text: 'A review is just a letter from someone who has already gone home. We answer it the way we would answer a letter, and we keep the ones that tell us something we did not want to hear.',
      author: 'Geneviève Marchand',
      role: 'Co-founder and General Manager'
    },
    {
      type: 'prose',
      id: 'when-things-go-wrong',
      eyebrow: 'The other side',
      h2: 'What Happens When a Stay Goes Wrong',
      body: [
        'Not every stay is perfect, and a page of nothing but five-star reviews would tell you less about us than one honest account of a bad night.',
        'The first rule is that we want to hear about it while you are still here. A slow drain, a noisy extractor, a dish that is not right, a room that is too warm \u2014 almost everything is fixable within the hour if we know about it.',
        'If we cannot fix something, we do not charge for it. That is not a policy written in a manual; it is a rule Genevi\u00e8ve set on the first day and has applied ever since.',
        'When a problem reaches us after a guest has gone home, we take it seriously and we take it personally. Genevi\u00e8ve reads every review that mentions a fault, and she writes the reply herself.',
        'We are not asking for your patience as a favour.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About Our Reviews',
      intro: 'What guests ask us about the ratings on this page.',
      items: [
        {
          q: 'Are these reviews genuine?',
          a: 'Yes. Every review shown comes from Google or Tripadvisor and is published under the guest name on those platforms. We do not write reviews about ourselves, we do not edit the ones we show, and we have never paid for one.'
        },
        {
          q: 'Do you offer anything in exchange for a review?',
          a: 'No. No free drinks, no discounts, no prize draws and no asking guests to leave a review while they are standing at the desk.'
        },
        {
          q: 'Why do you show reviews that are not five stars?',
          a: 'Because a page of nothing but five stars tells you nothing. We show the detailed reviews, which are the most useful ones whether they are glowing or critical, and we keep the difficult ones visible on purpose.'
        },
        {
          q: 'Do you respond to every review?',
          a: 'Yes, and a person writes each reply rather than a template. Geneviève answers anything that mentions a fault, and if a guest names a member of the team we pass it to that person the same day.'
        },
        {
          q: 'What should I do if something is wrong during my stay?',
          a: 'Tell us while you are here, at any hour. Reception is staffed twenty-four hours and almost everything is fixable within the hour.'
        },
        {
          q: 'Where can I leave a review?',
          a: 'We are on Google and Tripadvisor, and you are welcome to use either. If you would rather tell us privately, the front desk will pass anything on, and you can always email the team at stay@praivellehouse.com.'
        },
        {
          q: 'Has a review ever changed how you run the house?',
          a: 'More than once. A three-star review in 2019 led to a rolling maintenance schedule, a rebuilt breakfast service and a house-wide check of every drain in the building.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Come and Write Your Own',
      text: 'Reviews are useful, but they are still second-hand. Book a night, sleep in a quiet room, eat at the hearth and decide for yourself what you would have written.',
      primary: { label: 'Check availability', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'Are these reviews genuine?',
      a: 'Yes. Every review shown comes from Google or Tripadvisor and is published under the guest name on those platforms. We do not write reviews about ourselves and we have never paid for one.'
    },
    {
      q: 'Do you offer anything in exchange for a review?',
      a: 'No. No free drinks, no discounts and no asking guests to leave a review at the desk. We would rather have a smaller number we can trust.'
    },
    {
      q: 'Why do you show reviews that are not five stars?',
      a: 'Because a page of nothing but five stars tells you nothing. We show the detailed reviews, whether they are glowing or critical, and keep the difficult ones visible on purpose.'
    },
    {
      q: 'Do you respond to every review?',
      a: 'Yes, and a person writes each reply rather than a template. Geneviève answers anything that mentions a fault.'
    },
    {
      q: 'What should I do if something is wrong during my stay?',
      a: 'Tell us while you are here, at any hour. Reception is staffed twenty-four hours, and if we cannot fix something we do not charge you for it.'
    },
    {
      q: 'Where can I leave a review?',
      a: 'We are on Google and Tripadvisor, and you are welcome to use either. You can also email the team privately at stay@praivellehouse.com.'
    },
    {
      q: 'Has a review ever changed how you run the house?',
      a: 'More than once. A three-star review in 2019 led to a rolling maintenance schedule, a rebuilt breakfast service and a house-wide check of every drain in the building.'
    }
  ],
  cta: {
    h2: 'Come and Write Your Own',
    text: 'Reviews are useful, but they are still second-hand. Book a night, sleep in a quiet room, eat at the hearth and decide for yourself what you would have written.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
