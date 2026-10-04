'use strict';
/**
 * Careers page. What it is like to work at the house, the roles we are hiring
 * for, pay, benefits, training and how to apply — rendered by views/page.ejs.
 */

module.exports = {
  slug: 'careers',
  path: '/careers',
  name: 'Careers',
  metaTitle: 'Careers at Praivelle House | Hospitality Jobs in Kansas City',
  metaDescription:
    'Hospitality jobs in Kansas City at Praivelle House, an independent twelve-suite boutique hotel. Fair pay, published rotas, real training and a team that stays.',
  metaKeywords:
    'hospitality jobs kansas city, hotel jobs kansas city mo, boutique hotel careers, spa therapist jobs kansas city, chef jobs kansas city, housekeeping jobs kansas city, front desk hotel jobs, hotel apprenticeship missouri',
  eyebrow: 'Work with us',
  h1: 'A House Is Just People',
  heroIntro:
    'Twelve suites, a spa, a wood-fired dining room and a cellar bar take more than fifty people to run well. This page is an honest account of what it is like to be one of them.',
  heroImage: '/img/about-lobby.webp',
  heroImageAlt: 'The lobby of Praivelle House, a restored 1940s farmhouse hotel in Kansas City',
  heroStats: [
    { value: 54, label: 'People on the team, full and part time' },
    { value: 7, suffix: ' yrs', label: 'Average tenure of our department heads' },
    { value: 82, suffix: '%', label: 'Of our managers promoted from within' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Guest rating that keeps the house busy' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-20',
  blocks: [
    {
      type: 'prose',
      id: 'what-it-is-like',
      eyebrow: 'The job, honestly',
      h2: 'What It Is Like to Work Here',
      body: [
        'Praivelle House is twelve suites, a spa, a wood-fired dining room and a cellar bar on twelve acres of prairie, and it takes more than fifty people to run it properly.',
        'The work is hospitality, so some of it is hard. Weekends are our busiest nights. A wedding can run until midnight and a suite can need turning at seven the next morning. We will never pretend otherwise.',
        'People stay here a long time. Our executive chef has been with the house since 2011, our spa director since 2014, and more than half of our supervisors were promoted from inside the building. We are not a stepping stone that churns through staff every season.',
        'If you are the sort of person who wants to be told exactly what to do and then left alone, this will not suit you.'
      ]
    },
    {
      type: 'split',
      id: 'temperament',
      eyebrow: 'How we hire',
      h2: 'We Hire for Temperament, Then Teach the Rest',
      image: '/img/about-lobby.webp',
      imageAlt: 'A team member arranging fresh flowers on the front desk at Praivelle House',
      body: [
        'Skills can be taught. We have taught people to pour wine properly, to fold a sheet to hotel standard, and to read a table well enough to know when to approach and when to wait.',
        'So the interview is less about your CV than you might expect. We will ask what you did when a guest was unhappy, how you handle a colleague who is having a bad day, and what you notice first when you walk into a room.',
        'Experience helps, and for the kitchen and the spa it is essential. But for front of house, housekeeping and events we will happily train the right person from scratch. Several of our best housekeepers had never worked in a hotel before they came here.',
        'We also hire slowly. A vacancy stays open until we find the right person rather than the first available one, because a poor hire costs the whole team far more than an empty rota line.'
      ],
      list: [
        'Warmth and curiosity matter more than a perfect CV',
        'Full training provided for most front-of-house roles',
        'We hire slowly so the team stays strong',
        'Interviews that ask what you did, not what you would do'
      ]
    },
    {
      type: 'cards',
      id: 'open-roles',
      eyebrow: 'Open roles',
      h2: 'The Roles We Are Hiring For',
      intro:
        'These are the positions we recruit for most often. If the role you want is not listed, write to us anyway. Good people are worth making room for.',
      columns: 3,
      items: [
        {
          icon: 'bell',
          title: 'Front of House',
          text: 'Reception, arrivals, departures and everything in between.'
        },
        {
          icon: 'bed',
          title: 'Housekeeping',
          text: 'Twelve suites, the spa, the dining room and the public rooms, kept to a standard guests feel without being told.'
        },
        {
          icon: 'spa',
          title: 'Spa Therapist',
          text: 'Massage, facials and body treatments in a five-room spa. You will need a recognised qualification and a current licence to practise in Missouri.'
        },
        {
          icon: 'chef-hat',
          title: 'Commis Chef',
          text: 'The first rung of our kitchen brigade.'
        },
        {
          icon: 'utensils',
          title: 'Chef de Partie',
          text: 'Own a section of the line.'
        },
        {
          icon: 'calendar-check',
          title: 'Events Coordinator',
          text: 'Weddings, board meetings and private dinners, from first enquiry to final invoice.'
        },
        {
          icon: 'building',
          title: 'Maintenance',
          text: 'A 1940s farmhouse needs a patient pair of hands. Plumbing, heating, small electrical work, the pool plant and the prairie fences.'
        }
      ]
    },
    {
      type: 'table',
      id: 'benefits',
      eyebrow: 'The package',
      h2: 'Pay and Benefits at a Glance',
      intro:
        'The standard terms for our team. Every offer letter states the exact package for the role, and we are happy to talk through any of it before you apply.',
      head: ['Benefit', 'What it means', 'Who it applies to'],
      rows: [
        ['Health insurance', 'Medical, dental and vision, with the house covering 75 percent of the employee premium', 'Everyone working 30 hours a week or more'],
        ['Paid time off', 'Twenty days rising to twenty-five with length of service, plus public holidays', 'Full-time team members'],
        ['Retirement', 'A 401(k) with a four percent match once you have been here a year', 'Everyone working 1,000 hours a year or more'],
        ['Staff meals', 'One hot meal on every shift, cooked by the same kitchen that feeds our guests', 'Everyone on shift'],
        ['Rota published ahead', 'Four weeks of rota published in advance, with shift swaps by request', 'All hourly team members'],
        ['Tips and service charge', 'A transparent monthly share of the service charge, paid in full with no house deduction', 'Front of house, spa and kitchen'],
        ['Spa and dining discount', 'Forty percent off treatments and meals for you and one guest', 'Everyone after three months'],
        ['Stay programme', 'Two complimentary nights a year for you, plus discounted rates for family', 'Everyone after six months'],
        ['Training and apprenticeships', 'Paid study, apprenticeships and professional qualifications', 'Everyone, by application'],
        ['Parental leave', 'Twelve weeks at full pay for the primary carer, four weeks for the secondary', 'Everyone after a year'],
        ['Referral bonus', 'A five hundred dollar bonus when someone you refer stays six months', 'Everyone'],
        ['Parking and transport', 'Free staff parking and a shared late-shift taxi account', 'Everyone']
      ],
      note:
        'Rates are reviewed every January and are never cut. If the cost of living moves, our pay moves with it.'
    },
    {
      type: 'prose',
      id: 'pay-tips-rota',
      eyebrow: 'The practical part',
      h2: 'Pay, Tips and the Rota',
      body: [
        'We pay above the Kansas City hospitality average for every role, and we publish the range in the job advert rather than asking you to guess.',
        'Tips and the service charge are shared transparently. Every dollar of service charge goes to the team, split by a published formula that weighs hours worked and the role you worked, and a monthly statement shows exactly how it was divided.',
        'The rota is the thing people ask about most, so here it is plainly. We publish four weeks at a time, at least a fortnight before the period begins.',
        'Overtime is paid at time and a half, and we do not run on the assumption that everyone will quietly work an extra hour for free. If a wedding runs late, you are paid for it.',
        'Everyone gets two consecutive days off each week wherever the department allows, and we protect them. The one exception is our peak weeks in May and October, when we ask for a little flexibility and give it back in lieu time within the month.'
      ]
    },
    {
      type: 'steps',
      id: 'application',
      eyebrow: 'Applying',
      h2: 'How the Application Works',
      intro:
        'Five steps from your first message to your first shift. Most people hear back within a week.',
      items: [
        {
          title: 'Send us your details',
          text: 'Apply through the form on our contact page or email the house directly. A CV is welcome, but a short paragraph about why this place appeals to you tells us more.'
        },
        {
          title: 'A short call',
          text: 'One of our managers will call you, usually within three working days, for a twenty-minute conversation. It is informal and it goes both ways, so ask us anything, including about pay, hours and the rota.'
        },
        {
          title: 'Come and see the house',
          text: 'We invite you in for an hour. You will walk the property, meet the team you would work with and, for kitchen roles, cook something simple with us. We cover your travel if it is a long way.'
        },
        {
          title: 'A paid working trial',
          text: 'For most roles we offer a paid trial shift, so you can see the job as it really is and we can see you in it.'
        },
        {
          title: 'An offer and a start date',
          text: 'If it is right, we make a written offer with the full package spelled out, then agree a start date that works around your notice.'
        }
      ]
    },
    {
      type: 'prose',
      id: 'training',
      eyebrow: 'Getting better at it',
      h2: 'Training, Apprenticeships and Where This Leads',
      body: [
        'Every new team member gets a structured first ninety days: a full induction, a buddy on their shifts, and a set of standards written down so nothing depends on guesswork. Nobody is dropped onto a busy Saturday and left to work it out alone.',
        'Beyond that, the house pays for training that makes you better at your craft. Our kitchen runs an apprenticeship with a local college that takes a commis chef to a recognised qualification while they work. The spa funds advanced therapy courses every year.',
        'We also teach the things that are specific to this house. Our wine programme is run with the Wine & Spirit Education Trust, and any team member can sit a Level 1 or Level 2 course on us.',
        'The point of all of it is that you should be able to build a career here rather than a season. More than half our supervisors and department heads started in an entry-level role at this address.'
      ]
    },
    {
      type: 'prose',
      id: 'at-interview',
      eyebrow: 'At interview',
      h2: 'What We Ask, and What We Do Not',
      body: [
        'We will not ask you to perform a personality for us or pretend that hospitality is your life’s calling. We ask three kinds of question: what you have done, how you treat people, and what you notice. The rest we can work out together.',
        'Expect a question about a time a guest or a customer was unhappy and what you actually did about it. Expect one about a colleague who was struggling and how you helped. Expect one about the last thing you noticed that someone else had missed.',
        'We will also tell you the parts of the job that are not glamorous, because we would rather you decide now than discover it in your second week. Weekends, early turns, late functions and the odd difficult guest are all part of it.',
        'You will meet at least two people, one of whom would work alongside you every day. If you have questions about pay, rota, uniform, meals or anything else, ask them at the interview. We would much rather answer them early than have them become a reason to leave.'
      ]
    },
    {
      type: 'quote',
      id: 'quote',
      text: 'The reason people stay here is simple. You are trusted to do your job, and when you do it well, someone notices. That is rarer in this industry than it should be.',
      author: 'Geneviève Marchand, CHA',
      role: 'Co-founder and General Manager'
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About Working Here',
      intro: 'The things candidates ask us most before they apply.',
      items: [
        {
          q: 'Where is Praivelle House, and how would I get there?',
          a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, about ten minutes from the Country Club Plaza and twenty-four minutes from Kansas City International.'
        },
        {
          q: 'Do I need hotel experience to apply?',
          a: 'For front of house, housekeeping and events, no. We train from scratch and several of our best people had never worked in a hotel before.'
        },
        {
          q: 'What are the hours and the rota like?',
          a: 'Reception is staffed twenty-four hours, the dining room runs from seven in the morning until ten at night, the spa from nine until eight, and the cellar bar from four until midnight.'
        },
        {
          q: 'How much does it pay, and are tips shared?',
          a: 'We pay above the Kansas City hospitality average and publish the range in every advert. Service charge is shared in full by a published formula, with a monthly statement showing exactly how it was divided and no house deduction.'
        },
        {
          q: 'What benefits do you offer?',
          a: 'Health, dental and vision with most of the premium covered, a matched 401(k), twenty to twenty-five days of paid time off, a hot meal on every shift, staff discounts on dining and spa, a stay programme, and paid training.'
        },
        {
          q: 'Is there a training programme or an apprenticeship?',
          a: 'Yes. Everyone gets a structured ninety-day induction with a buddy. Our kitchen runs a college apprenticeship, the spa funds advanced courses, and any team member can take a Wine & Spirit Education Trust course at our expense.'
        },
        {
          q: 'How do I apply, and how long does it take?',
          a: 'Send your details through our contact page or email the house, and a manager will call you within about three working days. From first call to offer is usually under two weeks, including a paid trial shift.'
        }
      ]
    },
    {
      type: 'cta',
      id: 'cta',
      h2: 'Come and See the House for Yourself',
      text: 'Send us a note about the role you want, or call the front desk and ask for the hiring manager. We answer every genuine application, even the ones we cannot say yes to yet.',
      primary: { label: 'Email your application', path: 'mailto:stay@praivellehouse.com' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'Where is Praivelle House, and how would I get there?',
      a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, about ten minutes from the Country Club Plaza and twenty-four minutes from Kansas City International.'
    },
    {
      q: 'Do I need hotel experience to apply?',
      a: 'For front of house, housekeeping and events, no. We train from scratch and several of our best people had never worked in a hotel before.'
    },
    {
      q: 'What are the hours and the rota like?',
      a: 'Reception is staffed twenty-four hours, the dining room runs from seven in the morning until ten at night, the spa from nine until eight, and the cellar bar from four until midnight.'
    },
    {
      q: 'How much does it pay, and are tips shared?',
      a: 'We pay above the Kansas City hospitality average and publish the range in every advert. Service charge is shared in full by a published formula, with a monthly statement showing exactly how it was divided and no house deduction.'
    },
    {
      q: 'What benefits do you offer?',
      a: 'Health, dental and vision with most of the premium covered, a matched 401(k), twenty to twenty-five days of paid time off, a hot meal on every shift, staff discounts on dining and spa, a stay programme, and paid training.'
    },
    {
      q: 'Is there a training programme or an apprenticeship?',
      a: 'Yes. Everyone gets a structured ninety-day induction with a buddy. Our kitchen runs a college apprenticeship, the spa funds advanced courses, and any team member can take a Wine & Spirit Education Trust course at our expense.'
    },
    {
      q: 'How do I apply, and how long does it take?',
      a: 'Send your details through our contact page or email the house, and a manager will call you within about three working days. From first call to offer is usually under two weeks, including a paid trial shift.'
    }
  ],
  cta: {
    h2: 'Come and See the House for Yourself',
    text: 'Send us a note about the role you want, or call the front desk and ask for the hiring manager. We answer every genuine application, even the ones we cannot say yes to yet.',
    primary: { label: 'Email your application', path: 'mailto:stay@praivellehouse.com' }
  }
};
