'use strict';
/**
 * Team page. Renders the full team from data/team.js via the team-grid block,
 * then adds the story of how we hire, how the house is run, and questions
 * guests and candidates ask.
 */

module.exports = {
  slug: 'team',
  path: '/team',
  name: 'Meet the Team',
  metaTitle: 'Meet the Team | Praivelle House, Kansas City',
  metaDescription:
    'Meet the people who run Praivelle House — Geneviève Marchand, Julien Baptiste, Amara Osei and Clara Whitfield — and the team of sixty-two behind them in Kansas City.',
  metaKeywords:
    'praivelle house team, boutique hotel staff kansas city, hotel general manager kansas city, executive chef kansas city, spa director kansas city, wedding planner kansas city',
  eyebrow: 'The people',
  h1: 'The People Who Actually Run the House',
  heroIntro:
    'Four department heads, sixty-two people in total, and a rule that has not changed since 2008: we hire for temperament and train for skill, in that order.',
  heroImage: '/img/team-genevieve-marchand.webp',
  heroImageAlt: 'Geneviève Marchand, General Manager and co-founder of Praivelle House',
  heroStats: [
    { value: 62, label: 'People on the payroll' },
    { value: 4, label: 'Department heads, all long-tenured' },
    { value: 5, suffix: ' yrs', label: 'Average length of service' },
    { value: 2, label: 'Who started as summer staff and now run departments' }
  ],
  schemaType: 'CollectionPage',
  dateModified: '2026-09-16',
  blocks: [
    {
      type: 'team-grid',
      id: 'team',
      eyebrow: 'Who you will meet',
      h2: 'The Department Heads',
      intro: 'Four people who have run their part of the house for years, and who still work the floor. Geneviève is in the lobby most mornings, Julien is at the hearth most nights, Amara still takes two clients a day, and Clara is on site for every wedding she books.'
    },
    {
      type: 'prose',
      id: 'how-we-hire',
      eyebrow: 'How we hire',
      h2: 'Temperament First, Skill Second',
      body: [
        'Every hire at Praivelle House starts the same way. Before anyone talks about a résumé, we ask a simple question: tell us about a time you looked after someone. It does not have to be a guest and it does not have to be a hotel. It can be a sick parent, a difficult customer, a younger sibling, a stranger at a bus stop. What we are listening for is not the story itself but the way it is told — whether the person leans in, whether they remember small details, whether they were paying attention to the human in front of them or only to the task.',
        'You can teach almost anyone to work a front desk, mix a drink or make a bed to a standard. What you cannot teach, or at least what we have never learned how to teach, is the instinct to notice. The instinct to see that a guest has come down for breakfast looking grey and to bring them tea without being asked. The instinct to remember that a couple mentioned a dog back home. That instinct is what we hire, and everything else we can build around it.',
        'It is a slower way to staff a hotel, and it costs us. A chain can fill a vacancy in a fortnight with a person who has done the exact role in three other properties. We will sometimes run a department one person short for a season rather than hire someone who is technically qualified and temperamentally wrong, because one wrong hire at a twelve-suite house is visible to every guest within a week. The house is too small to hide a mismatch.',
        'The first two weeks of any job here are spent shadowing, not working a station. A new member of the front desk follows an experienced one through arrivals, departures, complaints and quiet afternoons before they ever check anyone in alone. A new cook in the kitchen spends their first month learning the hearth under Julien personally, and it is months before they are trusted to work the fire by themselves. We would rather be slow and keep the culture than fast and lose it.'
      ]
    },
    {
      type: 'split',
      id: 'culture',
      eyebrow: 'The culture',
      h2: 'A Small House Means Everyone Sees Everything',
      image: '/img/gallery-library.webp',
      imageAlt: 'Staff and guests in the library at Praivelle House',
      body: [
        'There is a particular kind of person who thrives in a twelve-suite house and a particular kind who does not. The one who thrives is someone who likes knowing what is going on across the whole building. On any given evening the person on the front desk might help carry a tray, the sommelier might walk a wedding guest to their room, and the general manager might be the one who finds the lost earring. Nobody here has the luxury of saying that is not my department, and after a while nobody wants it.',
        'That has an upside and a cost. The upside is that the work is varied and the days go quickly and you learn the whole of a hotel rather than one slice of it. People who have worked here have gone on to run their own places, and we are glad about that. The cost is that a small team cannot absorb a bad day quietly. If someone is having a hard week, it shows, so we try to run the place in a way that means people are not having hard weeks very often.',
        'We pay above the local hospitality average, we post the rota a month in advance, and we do not schedule anyone for a clopen — a close followed by an open — ever. We close the whole dining room for two days in January and again in July so that the kitchen and the front of house get a genuine break at the same time. Staff eat the same food that goes out to guests, at a table, sitting down, not standing in a corridor. These are small things and they are the difference between a team that stays and a team that churns.',
        'More than half the people here have been here five years or longer. Two started as summer staff and now run departments. When we say the house has a family feeling, we do not mean it is loose or unprofessional. We mean that people look out for each other, and that shows up in the way they look out for you.'
      ],
      list: [
        'Above-average pay for Kansas City hospitality roles',
        'Rota posted a month in advance, with no close-then-open shifts',
        'Two full shutdowns a year, in January and July, for the whole team',
        'Staff eat the same food as guests, at a table, sitting down'
      ]
    },
    {
      type: 'stats',
      id: 'team-numbers',
      eyebrow: 'By the numbers',
      h2: 'The Team, Measured',
      intro: 'A few numbers that tell you more about the house than any award.',
      items: [
        { value: 62, label: 'People on the payroll across four departments' },
        { value: 5, suffix: ' yrs', label: 'Average length of service' },
        { value: 9, label: 'Cooks in the kitchen brigade, all trained on the hearth' },
        { value: 11, label: 'Licensed therapists and spa staff' }
      ]
    },
    {
      type: 'prose',
      id: 'a-day',
      eyebrow: 'A day in the house',
      h2: 'What the Team Actually Does All Day',
      body: [
        'A house like this runs on a rhythm that most guests never see. It starts at half past five, when the overnight porter finishes the last of the night shift and the first baker comes in to start the bread. By six the kitchen is warm and the lobby has been walked and the flowers have been checked. By half past six Geneviève is in with a coffee, reading the arrivals list and the maintenance list, and the day has quietly begun.',
        'Breakfast service runs from seven. Housekeeping starts stripping rooms at nine and works against a board that tells them who is arriving, who is staying and who has asked for a late check-out. The front desk handles the steady trickle of departures until eleven, then turns to the arrivals, the requests and the small crises that fill any hotel afternoon — a lost charger, a dinner reservation that needs moving, a guest who wants to know whether the trail out back is muddy.',
        'By four the cellar bar is opening and the kitchen is lighting the hearth. The evening is the busiest and the best part of the day. Sommelier pours, the dining room fills, the spa runs its last treatments until eight, and the bar stays open until midnight. Through all of it the front desk is staffed and awake, because a hotel that is only awake when it is convenient is not really a hotel.',
        'Overnight, the house is looked after by a small night team who check the boilers, walk the grounds, restock the bar and set up breakfast. Guests who cannot sleep often find themselves talking to the night porter, who has heard every story worth hearing and tells none of them. It is the least visible shift and, in its way, the one that holds the whole thing together.'
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About the Team',
      intro: 'What guests and candidates most often want to know.',
      items: [
        {
          q: 'Will I actually meet the people described on this page?',
          a: 'Usually, yes. Geneviève is in the lobby most mornings, Julien runs the pass most nights, Amara takes two clients a day and Clara is on site for every event she books. It is a twelve-suite house, so the people who run it are in it.'
        },
        {
          q: 'How big is the team?',
          a: 'Sixty-two people across four departments — front of house, kitchen and dining, spa and wellness, and events. It is a small enough team that most people know most people, which is exactly how we like it.'
        },
        {
          q: 'How long do people stay?',
          a: 'The average length of service is five years, which is a long time in hospitality. More than half the team has been here five years or longer, and two people who started as summer staff now run departments.'
        },
        {
          q: 'Are you hiring, and how do I apply?',
          a: 'We post openings on our careers page and keep a standing list of good people for when roles come up. Send a short note and a résumé to stay@praivellehouse.com, and tell us about a time you looked after someone. That last part matters more than the format.'
        },
        {
          q: 'Do you offer training and progression?',
          a: 'Yes, and it is deliberate rather than incidental. Cooks train on the hearth with Julien personally. Front desk staff are cross-trained on reservations and events. We have sent people on sommelier courses and paid for spa therapy qualifications.'
        },
        {
          q: 'What is it like to work here day to day?',
          a: 'Varied, and close to the guests. In a house this size everyone sees everything, which means nobody gets to say that is not my job. It suits people who like the whole picture and find a big corporate property impersonal.'
        },
        {
          q: 'Do you use a corporate script for service?',
          a: 'No. We do not script our people and we do not measure them on how many times they used your name. We hire for temperament and let people use their judgement, which is why the service feels human rather than rehearsed.'
        }
      ]
    },
    {
      type: 'cta',
      h2: 'Come and Meet Them',
      text: 'The best way to judge a team is to spend an evening with them. Book a night, eat in the dining room and see whether the people match the words on this page.',
      primary: { label: 'Check availability', path: '/contact#book' },
      secondary: { label: 'See open roles', path: '/careers' }
    }
  ],
  faqs: [
    {
      q: 'Will I actually meet the people described on this page?',
      a: 'Usually, yes. Geneviève is in the lobby most mornings, Julien runs the pass most nights, Amara takes two clients a day and Clara is on site for every event she books.'
    },
    {
      q: 'How big is the team?',
      a: 'Sixty-two people across four departments — front of house, kitchen and dining, spa and wellness, and events.'
    },
    {
      q: 'How long do people stay?',
      a: 'The average length of service is five years. More than half the team has been here five years or longer, and two people who started as summer staff now run departments.'
    },
    {
      q: 'Are you hiring, and how do I apply?',
      a: 'We post openings on our careers page and keep a standing list of good people for when roles come up. Send a short note and a résumé to stay@praivellehouse.com.'
    },
    {
      q: 'Do you offer training and progression?',
      a: 'Yes. Cooks train on the hearth with Julien personally, front desk staff are cross-trained on reservations and events, and we have funded sommelier and spa therapy qualifications.'
    },
    {
      q: 'What is it like to work here day to day?',
      a: 'Varied, and close to the guests. In a house this size everyone sees everything, which suits people who like the whole picture rather than one slice of it.'
    },
    {
      q: 'Do you use a corporate script for service?',
      a: 'No. We do not script our people and we do not measure them on how many times they used your name. We hire for temperament and let people use their judgement.'
    }
  ],
  cta: {
    h2: 'Come and Meet Them',
    text: 'The best way to judge a team is to spend an evening with them. Book a night, eat in the dining room and see whether the people match the words on this page.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
