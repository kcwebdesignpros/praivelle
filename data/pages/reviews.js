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
        'There are two ways to run reviews at a hotel. The first is to chase them, filter them and bury the ones that hurt. The second is to read every one, answer every one, and let the whole thing stand. We have always done the second, and it has cost us the occasional point of rating and taught us more than any consultant ever has.',
        'The rules are simple and they have not changed since we opened. We do not offer a free drink, a discount or an entry into a draw in exchange for a review, because a bought review is not a review. We do not ask guests to leave one while they are standing at the desk with the card machine in front of them. We do not delete anything, on any platform, even when we disagree with it. And we do not write reviews about ourselves, which sounds like an obvious thing to say until you learn how common it is.',
        'Our rating is 4.9 out of 5 across more than 3,500 reviews, split between Google, where we hold roughly 2,400, and Tripadvisor, where we hold about 1,100. We are proud of that number, but we are more proud that it has been earned slowly and without a single review we had to buy. A hotel that opens in a farmhouse and gets reviewed by word of mouth has to be good on the night, not good at marketing. There is no other way to build a number like that, and we would not want there to be.',
        'The reviews we learn the most from are rarely the five-star ones. A guest who writes three warm paragraphs about the food and then mentions, almost in passing, that the corridor light outside room four kept them awake has given us something no mystery shopper could. We read for the small complaint inside the long compliment, because that is almost always where the real information is. The five-star reviews tell us we are doing the big things right. The others tell us where to spend next Tuesday.',
        'Every review gets a reply, and a person writes it rather than a template. If a guest names a member of the team, we pass the review to that person the same day, because the reason people write them is often to say thank you to someone specific. If a guest raises a problem, Geneviève reads it herself, and if it is something we can fix before the next guest arrives, it is fixed before the next guest arrives. We keep a running list of things reviews have changed, and it is longer than most people would guess.',
        'We know that a review is a public document and that a reply is public too. We try to answer the way we would answer a guest standing in front of us: honestly, without defensiveness, and without the corporate throat-clearing that turns a simple apology into a paragraph about how much we value feedback. If we got something wrong, we say so. If we think a guest has misunderstood something, we explain it once, politely, and move on. The reply is not written for the reviewer. It is written for the next person reading, who is trying to work out whether this is a place that tells the truth.'
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
        'In 2019 a guest gave us three stars and wrote a review that took us apart in about four hundred words. He had enjoyed his stay, mostly. The food was excellent, the room was beautiful, the staff were kind. But he said the house felt as though it was resting on its reputation, and that the small things had started to slip: a scuffed skirting board in the corridor, a slow drain in the bathroom, a breakfast that arrived at the table a few minutes later than it should have. He ended by saying he would come back, but not for a while.',
        'It was the fairest review we have ever received, and it landed harder than a one-star one would have, because it was right. We had grown quickly between 2017 and 2019, added the final suites and the cellar bar, and somewhere in the middle of all that we had taken our eye off the maintenance list that Geneviève walks every morning. We printed the review out and pinned it to the staff-room wall, where it stayed for two years.',
        'What followed was unglamorous and effective. We started a proper rolling maintenance schedule, one room a month, so that every room in the house gets a full going-over twice a year. We rebuilt the breakfast service so that a cooked dish leaves the pass within nine minutes of the order. We fixed the drain, and then we checked every other drain in the building, and found two more that were heading the same way. None of it was exciting. All of it came from one guest who took the trouble to write honestly.',
        'He came back in 2021, which we only know because he mentioned it in a later review. That one had five stars, and the line we remember is that the house felt like it had been looked after again. If you are reading this before your first stay, that is the version of Praivelle you are booking: the one that got taken down a peg by a guest, listened, and did the work.'
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
          text: 'The single most common line in our reviews is some version of: somebody knew who we were by the second day. Guests notice when the front desk remembers their coffee order, their dog, or the reason they came. It is the one thing we cannot fake and the one thing we work hardest at, because it is a matter of hiring and time rather than a system.'
        },
        {
          icon: 'chef-hat',
          title: 'That the food was better than expected',
          text: 'Almost every long review mentions a meal. Guests arrive expecting hotel food and get a wood-fired dining room that sources within ninety miles, and they say so at length. The nightly market plate and the tasting menu come up most, but so does something as simple as the bread, which we make ourselves and which guests ask about constantly.'
        },
        {
          icon: 'moon',
          title: 'That they slept better than they have in months',
          text: 'Guests write about the quiet more than any amenity. We are on twelve acres with nothing between the house and the horizon, the walls are thick because the building is old, and the curtains actually hold back the light. People who live in cities tell us they slept through the night for the first time in weeks, and that is the compliment we are proudest of.'
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
        'Not every stay is perfect, and a page of nothing but five-star reviews would tell you less about us than one honest account of a bad night. So here is what actually happens when something goes wrong at Praivelle, because it is the thing prospective guests most want to know and the thing hotels least want to explain.',
        'The first rule is that we want to hear about it while you are still here. A slow drain, a noisy extractor, a dish that is not right, a room that is too warm — almost everything is fixable within the hour if we know about it. Reception is staffed twenty-four hours precisely so that there is always someone to tell. The guests who leave without saying anything and write it up a week later are the ones we can no longer help, and we would much rather have the awkward conversation at half past nine than read about it online a fortnight later.',
        'If we cannot fix something, we do not charge for it. That is not a policy written in a manual; it is a rule Geneviève set on the first day and has applied ever since. A guest who could not use their shower because the pressure failed does not pay for that night, and nobody has to argue for it at checkout. We would rather absorb the cost than have someone leave feeling they had to fight for fairness.',
        'When a problem reaches us after a guest has gone home, we take it seriously and we take it personally. Geneviève reads every review that mentions a fault, and she writes the reply herself. If a member of the team was at the centre of it, they are part of the conversation rather than the subject of it, because blame without a fix is just theatre. And if the same complaint appears twice, it goes on the maintenance list and gets solved for good, which is how most of our improvements have actually come about.',
        'We are not asking for your patience as a favour. We are telling you that a house of this size, run by people rather than a head office, has a shorter distance between a problem and a person who can solve it than any chain you have stayed in. That is one of the real advantages of being small, and we would rather you knew it before you arrived than discovered it after something went wrong.'
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
          a: 'No. No free drinks, no discounts, no prize draws and no asking guests to leave a review while they are standing at the desk. A review that was bought is not worth reading, and we would rather have a smaller number we can trust.'
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
          a: 'Tell us while you are here, at any hour. Reception is staffed twenty-four hours and almost everything is fixable within the hour. If we cannot fix it, we do not charge you for it, and nobody has to argue for that at checkout.'
        },
        {
          q: 'Where can I leave a review?',
          a: 'We are on Google and Tripadvisor, and you are welcome to use either. If you would rather tell us privately, the front desk will pass anything on, and you can always email the team at stay@praivellehouse.com.'
        },
        {
          q: 'Has a review ever changed how you run the house?',
          a: 'More than once. A three-star review in 2019 led to a rolling maintenance schedule, a rebuilt breakfast service and a house-wide check of every drain in the building. Most of what we have improved has come from a guest taking the trouble to write honestly.'
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
