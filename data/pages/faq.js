'use strict';
/**
 * Frequently asked questions. Thirty-odd answers grouped by topic — booking,
 * arrival, rooms, dining, spa, weddings, accessibility, pets, children and
 * cancellation — rendered by views/page.ejs from blocks. The eight questions in
 * the top-level `faqs` array feed the FAQPage schema.
 */

module.exports = {
  slug: 'faq',
  path: '/faq',
  name: 'Frequently Asked Questions',
  metaTitle: 'Frequently Asked Questions | Praivelle House, Kansas City',
  metaDescription:
    'Answers to the questions guests ask most about Praivelle House in Kansas City — booking, check-in, parking, dining, the spa, weddings, pets and cancellations.',
  metaKeywords:
    'praivelle house faq, kansas city hotel questions, boutique hotel check-in, kansas city spa hotel, dog friendly hotel kansas city, wedding venue kansas city faq',
  eyebrow: 'Questions & answers',
  h1: 'Everything Guests Ask Before They Book',
  heroIntro:
    'Thirty questions and thirty plain answers, grouped so you can find what you need without reading the lot. If the thing you want to know is not here, the front desk is staffed around the clock and will tell you honestly.',
  heroImage: '/img/gallery-library.webp',
  heroImageAlt: 'A quiet library alcove at Praivelle House with an armchair and shelves of books',
  heroStats: [
    { value: 24, suffix: ' hrs', label: 'Reception, open around the clock' },
    { value: 12, label: 'Suites and rooms, no two alike' },
    { value: 3, suffix: ' PM', label: 'Check-in from' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'From 3,520 guest reviews' }
  ],
  schemaType: 'FAQPage',
  dateModified: '2026-09-22',
  blocks: [
    {
      type: 'prose',
      id: 'intro',
      eyebrow: 'Start here',
      h2: 'The Short Version, Before the Long One',
      body: [
        'We get asked a great many questions, and most of them come down to a handful of practical things: what time can I arrive, where do I park, is breakfast included, can I bring the dog, what happens if I need to cancel. Those answers are below, written the way we would give them on the phone rather than the way a hotel usually writes them down.',
        'Two things are true across almost every question on this page. The first is that reception is staffed twenty-four hours a day, so there is no hour at which you cannot reach a person. The second is that we would rather answer a question twice than have a guest guess and get it wrong, so if something is not covered here, call us on (816) 555-0147 or email stay@praivellehouse.com and we will give you a straight answer.',
        'We have grouped the questions by topic, because the honest truth is that nobody reads a page like this from top to bottom. Skip to the heading that matches what you need. Booking and rates are first, arrival and parking second, and the rest follows from there.'
      ]
    },
    {
      type: 'cards',
      id: 'quick-answers',
      eyebrow: 'The quick answers',
      h2: 'Six Facts That Cover Most of It',
      intro: 'If you only have a minute, these are the things guests most often want to know.',
      columns: 3,
      items: [
        {
          icon: 'clock',
          title: 'Reception is open 24 hours',
          text: 'Check-in is from 3:00 PM and check-out is by 11:00 AM, but someone is at the desk at every hour of the day and night, so a late arrival is never a problem and never costs extra.'
        },
        {
          icon: 'car',
          title: 'Parking is complimentary',
          text: 'Valet is free from the porte-cochère on Prairie Ridge Road, and there is self-parking in the gated courtyard behind the house, with EV charging points for guests who need them.'
        },
        {
          icon: 'utensils',
          title: 'Breakfast is included in most rates',
          text: 'The Prairie Escape, the Midweek Rate and most packages include breakfast for two in The Dining Room. If your rate does not, breakfast is available to order from 7:00 AM.'
        },
        {
          icon: 'spa',
          title: 'The spa is open to guests and visitors',
          text: 'The Spa runs from 9:00 AM to 8:00 PM daily and is open to non-residents as well as guests. Treatments are best booked in advance, especially at weekends.'
        },
        {
          icon: 'dog',
          title: 'Dogs are welcome',
          text: 'Well-behaved dogs stay in the garden-level rooms and on the terrace for a one-off fee of $50. Tell us the breed and size and we will have a bed and bowls waiting.'
        },
        {
          icon: 'percent',
          title: 'No resort fee, ever',
          text: 'The price you see is the price you pay, plus tax. There is no resort fee, no service charge and no mandatory gratuity added at checkout, which we think should be standard.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'booking-and-rates',
      eyebrow: 'Booking and rates',
      h2: 'Booking and Rates',
      intro: 'How to book, what it costs and what is included.',
      items: [
        {
          q: 'How do I book a room at Praivelle House?',
          a: 'You can book online at any hour, call the front desk on (816) 555-0147, or email reservations@praivellehouse.com. Booking direct is always the best value, because we do not pay commission to booking sites and can be more flexible about upgrades and late check-out as a result.'
        },
        {
          q: 'What is the best rate you offer?',
          a: 'Our published best rate is the Midweek Rate, from $249 a night Sunday to Thursday, breakfast for two included. The Prairie Escape is $279 a night against a regular rate of $389 and adds a treatment each at The Spa, sparkling wine on arrival and a 2:00 PM check-out.'
        },
        {
          q: 'Do you charge a resort fee or a service charge?',
          a: 'No. The price you are quoted is the price you pay, plus state and local tax. There is no resort fee, no service charge, no mandatory gratuity and no charge for valet parking, Wi-Fi or use of the pool and fitness studio.'
        },
        {
          q: 'Is breakfast included in the room rate?',
          a: 'It is included in the Prairie Escape, the Midweek Rate and most of our packages. If your rate does not include it, breakfast is served in The Dining Room from 7:00 AM and can be ordered a la carte or added to your room.'
        },
        {
          q: 'How far ahead should I book?',
          a: 'For a midweek night, a week or two is usually plenty. For weekends, holidays and October, we recommend booking a month or more ahead. With only twelve rooms, we sell out sooner than a larger hotel, particularly on the first weekend of December.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'arrival-and-parking',
      eyebrow: 'Arrival and parking',
      h2: 'Arrival, Parking and Check-In',
      intro: 'Getting here, where to leave the car and what happens when you arrive.',
      items: [
        {
          q: 'What are your check-in and check-out times?',
          a: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Reception is staffed twenty-four hours, so arriving late is no trouble at all. Late check-out is often available on request and is included in some packages.'
        },
        {
          q: 'Is there parking, and does it cost anything?',
          a: 'Parking is complimentary. Valet is free from the porte-cochère on Prairie Ridge Road, and there is self-parking in the gated courtyard behind the house. There are EV charging points in the courtyard for guests who need them.'
        },
        {
          q: 'How do I get to you from Kansas City International Airport?',
          a: 'Kansas City International (MCI) is 24 minutes north of us by car. Take I-29 south, then I-35 south and follow the signs toward the Country Club Plaza. We are about ten minutes from the Plaza and can arrange a car if you would rather not drive.'
        },
        {
          q: 'Can I arrive after midnight?',
          a: 'Yes. Reception is staffed around the clock, so there is always someone at the desk. If you know you will be arriving late, a quick call or email helps us have everything ready for you, but it is not required.'
        },
        {
          q: 'Do you offer airport transfers?',
          a: 'We can arrange a car to or from MCI on request, and we will add it to your reservation. Give the front desk your flight details at least twenty-four hours ahead and we will confirm the time and the driver with you before you travel.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'rooms-and-amenities',
      eyebrow: 'Rooms and amenities',
      h2: 'Rooms and Amenities',
      intro: 'The twelve rooms, and what comes with them.',
      items: [
        {
          q: 'How many rooms do you have, and are they all the same?',
          a: 'We have twelve, and no two are alike. The rooms were fitted into a restored 1940s farmhouse rather than a template, so each one is a different size and shape and catches the light differently. That is also why we can tell you exactly which room suits how you sleep.'
        },
        {
          q: 'What is the difference between a room and a suite?',
          a: 'Suites have a separate sitting area and are generally larger, with the biggest ones looking south over the orchard and the prairie. Our one garden room is smaller and opens directly onto the terrace. All twelve have a king or queen bed and a deep soaking tub or walk-in shower.'
        },
        {
          q: 'Is Wi-Fi free and fast enough to work on?',
          a: 'Yes. Fibre Wi-Fi runs throughout the house and the grounds, at speeds that comfortably handle video calls and large file transfers. It is complimentary in every room, in the public areas and on the terrace.'
        },
        {
          q: 'What amenities are there beyond the room?',
          a: 'A heated indoor pool, a private spa with a sauna and steam room, a 24-hour fitness studio, the wood-fired dining room, the cellar bar and wine library, in-room dining around the clock, electric bicycles and a mown path through the restored prairie.'
        },
        {
          q: 'Are the rooms air-conditioned and heated?',
          a: 'Every room has individually controlled heating and cooling, so you can set the temperature you actually want rather than the one a central system has decided on. The house is warmed and cooled by ground-source pumps, which keeps it quiet as well as comfortable.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'dining',
      eyebrow: 'Dining',
      h2: 'The Dining Room and the Cellar Bar',
      intro: 'Mealtimes, reservations and dietary requirements.',
      items: [
        {
          q: 'What are The Dining Room hours?',
          a: 'The Dining Room is open from 7:00 AM to 10:00 PM daily. Breakfast runs from 7:00, lunch from noon and dinner from 5:30. Almost everything is cooked over the wood-fired hearth, and the menu changes four or five times a year rather than weekly.'
        },
        {
          q: 'Do I need to reserve a table for dinner?',
          a: 'We recommend it, especially on Friday and Saturday evenings and in October and December. The dining room is small, and it fills quickly. Guests can reserve through the front desk at any hour, and non-residents are welcome to book directly.'
        },
        {
          q: 'Can you cater for dietary requirements and allergies?',
          a: 'Yes, and we would rather know in advance than on the night. Tell us when you book and the kitchen will plan around it, whether that is a vegetarian main, a gluten-free tasting menu or a longer list of restrictions. A chef who has sourced within ninety miles is rarely caught out.'
        },
        {
          q: 'What is the Cellar Bar?',
          a: 'The Cellar Bar occupies the old root cellar and is open from 4:00 PM to midnight. It holds around four hundred labels, weighted toward small Missouri and French growers, with a by-the-glass list that follows the kitchen and a short menu of small plates.'
        },
        {
          q: 'Is there a dress code in the dining room?',
          a: 'No. We ask only that you are comfortable. Most guests change out of travelling clothes, and some eat in the clothes they walked the prairie in. Neither raises an eyebrow, and there is no jacket requirement at any hour.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'the-spa',
      eyebrow: 'The spa',
      h2: 'The Spa and Wellness',
      intro: 'Treatments, booking and who can use them.',
      items: [
        {
          q: 'What are The Spa opening hours?',
          a: 'The Spa is open from 9:00 AM to 8:00 PM daily. It has five treatment rooms, a sauna, a steam room, a private couples suite and a heated indoor pool. The pool is available to guests outside spa hours, from early morning until late.'
        },
        {
          q: 'Do I need to book treatments in advance?',
          a: 'Yes, and the earlier the better. The signature ninety-minute Prairie Reset is the most requested treatment in the building, and weekends book out well ahead. Guests who book direct are offered time slots before arrival so nothing clashes with dinner.'
        },
        {
          q: 'Is the spa open to people who are not staying at the hotel?',
          a: 'It is. Non-residents are welcome to book treatments and to use the spa facilities on the day of their treatment. We recommend calling ahead on (816) 555-0148, since the treatment team is small and the rooms fill quickly.'
        },
        {
          q: 'Is there a minimum age for the spa?',
          a: 'The spa is for guests aged sixteen and over, except during designated family hours, when younger guests can use the pool with adult supervision. If you are travelling with children and want to swim together, ask the front desk which hours apply during your stay.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'weddings-and-events',
      eyebrow: 'Weddings and events',
      h2: 'Weddings, Meetings and Private Events',
      intro: 'Celebrations and gatherings, from an elopement to a full buyout.',
      items: [
        {
          q: 'Can we hold our wedding at Praivelle House?',
          a: 'Yes. We run more than forty weddings a year, from twelve-guest elopements in the orchard to receptions for around two hundred and forty on the south lawn. Clara Whitfield, our Director of Weddings and Events, handles all of it and can be reached on (816) 555-0149.'
        },
        {
          q: 'How far ahead should we book a wedding?',
          a: 'For a peak-season Saturday between May and October, twelve to eighteen months ahead is sensible. For a smaller midweek wedding or an elopement, three to six months is often enough. We never run two weddings on the same day, so dates are genuinely exclusive.'
        },
        {
          q: 'Do you host corporate meetings and retreats?',
          a: 'We do. The boardroom seats eighteen and is properly equipped for presentations and video calls, and we take full-property retreats in the quieter months. Breaks are catered from the same kitchen as the dining room, which tends to be the part guests remember.'
        },
        {
          q: 'Can we book the whole house for a private event?',
          a: 'Yes, and we take a small number of full-property buyouts each year for weddings, milestone birthdays and company retreats, usually between January and March. A buyout gives you all twelve rooms, the dining room, the spa and the grounds entirely to yourselves.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'accessibility',
      eyebrow: 'Accessibility',
      h2: 'Accessibility and Access',
      intro: 'How the house is set up for guests with access needs.',
      items: [
        {
          q: 'Is the property step-free?',
          a: 'Yes. There is step-free access throughout the house, from the parking courtyard and the porte-cochère to the lobby, the dining room, the spa, the pool and the ground-floor rooms. We are happy to walk you through the route before you arrive.'
        },
        {
          q: 'Do you have accessible rooms?',
          a: 'We have garden-level rooms with wider doorways, grab rails and a proper roll-in shower rather than a step-in one. Tell us what you need when you book and we will match you to the right room and confirm the details in writing.'
        },
        {
          q: 'Is there accessible parking?',
          a: 'Yes. There are accessible spaces in the gated courtyard, close to the step-free entrance, and valet staff can assist with luggage and mobility equipment from the porte-cochère. The whole route from the car to the lobby is level.'
        },
        {
          q: 'Are assistance dogs welcome?',
          a: 'Assistance dogs are always welcome and are not subject to the pet fee that applies to other dogs. If you let us know in advance, we will make sure the room and the route to the dining room suit you and your dog.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'pets-and-children',
      eyebrow: 'Pets and children',
      h2: 'Pets, Children and Families',
      intro: 'Who is welcome, and what we can arrange for them.',
      items: [
        {
          q: 'Do you allow dogs?',
          a: 'Well-behaved dogs are welcome in the garden-level rooms and on the terrace, for a one-off fee of $50 per stay. Tell us the breed and size when you book and we will have a bed and bowls in the room before you arrive. Dogs are not permitted in the dining room or the spa.'
        },
        {
          q: 'Are children welcome?',
          a: 'Children are very welcome, and we keep a small number of rooms set up for families. There is no charge for children under twelve sharing a room with two adults, and the kitchen will happily cook something simpler for a younger palate.'
        },
        {
          q: 'Can you arrange childcare?',
          a: 'We can arrange a vetted babysitter with notice, which many guests use so they can enjoy a long dinner or a treatment. Give the front desk at least forty-eight hours and we will confirm the arrangements and the cost before you arrive.'
        },
        {
          q: 'Can children use the pool and the spa?',
          a: 'Children are welcome in the pool during family hours, with adult supervision. The spa treatment rooms are for guests aged sixteen and over, except during designated family hours. The front desk will tell you which hours apply during your stay.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'cancellation',
      eyebrow: 'Cancellation and changes',
      h2: 'Changes, Cancellations and the Fine Print',
      intro: 'What happens if your plans move.',
      items: [
        {
          q: 'What is your cancellation policy?',
          a: 'Most bookings can be moved or cancelled free of charge up to seventy-two hours before arrival. Inside seventy-two hours, the first night is charged, which is what it costs us to hold a room we could otherwise have sold. The exact terms are on your confirmation in plain English.'
        },
        {
          q: 'Can I move my booking to different dates?',
          a: 'Yes, and we would always rather move a booking than lose it. Changes made more than seventy-two hours before arrival are free. Inside that window we will do what we can, particularly if the new date is midweek, and we will tell you honestly what is possible.'
        },
        {
          q: 'What if I need to cancel a spa treatment?',
          a: 'Treatments cancelled more than twenty-four hours ahead are refunded in full. Inside twenty-four hours the treatment is charged, because the therapist has set that hour aside for you and cannot easily fill it. If you are unwell, talk to us and we will find a fair solution.'
        },
        {
          q: 'What happens if I have to cancel for an emergency?',
          a: 'Call us and tell us what has happened. Our written terms are the baseline, not the ceiling, and we have waived charges more than once for a genuine emergency. We would rather have a conversation than apply a rule blindly to someone having a difficult week.'
        },
        {
          q: 'Do you recommend travel insurance?',
          a: 'We do, especially for weddings and events, where deposits and minimum spends are larger. It is inexpensive relative to what it protects, and it means a change of plans becomes a minor inconvenience rather than an expensive one.'
        }
      ]
    },
    {
      type: 'split',
      id: 'still-stuck',
      eyebrow: 'Still not answered',
      h2: 'If Your Question Is Not Here, Ask Us Directly',
      image: '/img/about-lobby.webp',
      imageAlt: 'The front desk and lobby at Praivelle House in Kansas City',
      body: [
        'This page covers the thirty questions we are asked most, but it cannot cover everything. Someone once called to ask whether we could store a grandfather clock during a stay, and the answer was yes, because we found a corner for it. Someone else asked whether the prairie path was firm enough for a walking frame, and the answer was that it is in summer and less so after rain, which is exactly the sort of thing a website cannot tell you.',
        'The front desk is staffed twenty-four hours a day, so there is no hour at which you cannot reach a person. Call (816) 555-0147 for reservations and general questions, (816) 555-0148 for the concierge and the spa, and (816) 555-0149 for weddings and events. If you would rather write than talk, stay@praivellehouse.com reaches the team directly and reservations@praivellehouse.com reaches the desk that handles bookings.',
        'We would rather answer a question twice than have a guest arrive unsure of something. Nothing is too small to ask, and the questions people are most hesitant about — whether a room is genuinely accessible, whether the dog will be welcome, whether a child will be looked after — are usually the ones worth asking. Call us and we will tell you straight.'
      ],
      list: [
        'Reception is staffed twenty-four hours, every day of the year',
        'Reservations and general questions: (816) 555-0147',
        'Concierge and spa: (816) 555-0148',
        'Weddings and events: (816) 555-0149'
      ],
      cta: { label: 'Contact the front desk', path: '/contact' }
    },
    {
      type: 'cta',
      h2: 'Ask Us Anything, Then Come and Stay',
      text: 'If this page has answered your question, the next step is a date. If it has not, call the front desk and we will answer it before you book a thing.',
      primary: { label: 'Check availability', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'How do I book a room at Praivelle House?',
      a: 'Book online at any hour, call the front desk on (816) 555-0147, or email reservations@praivellehouse.com. Booking direct is always the best value, because we do not pay commission to booking sites.'
    },
    {
      q: 'What are your check-in and check-out times?',
      a: 'Check-in is from 3:00 PM and check-out is by 11:00 AM. Reception is staffed twenty-four hours, so arriving late is no trouble at all.'
    },
    {
      q: 'Is there parking, and does it cost anything?',
      a: 'Parking is complimentary. Valet is free from the porte-cochère on Prairie Ridge Road, and there is self-parking in the gated courtyard behind the house, with EV charging points.'
    },
    {
      q: 'Do you charge a resort fee or a service charge?',
      a: 'No. The price you are quoted is the price you pay, plus tax. There is no resort fee, no service charge and no mandatory gratuity, and valet parking and Wi-Fi are included.'
    },
    {
      q: 'Do you allow dogs?',
      a: 'Well-behaved dogs are welcome in the garden-level rooms and on the terrace for a one-off fee of $50 per stay. Tell us the breed and size and we will have a bed and bowls waiting.'
    },
    {
      q: 'Can you cater for dietary requirements and allergies?',
      a: 'Yes, and we would rather know in advance. Tell us when you book and the kitchen will plan around it, whether that is a vegetarian main, a gluten-free tasting menu or a longer list of restrictions.'
    },
    {
      q: 'Can we hold our wedding at Praivelle House?',
      a: 'Yes. We run more than forty weddings a year, from twelve-guest elopements to receptions for around two hundred and forty. Clara Whitfield handles all of it on (816) 555-0149.'
    },
    {
      q: 'What is your cancellation policy?',
      a: 'Most bookings can be moved or cancelled free of charge up to seventy-two hours before arrival. Inside seventy-two hours, the first night is charged.'
    }
  ],
  cta: {
    h2: 'Ask Us Anything, Then Come and Stay',
    text: 'If this page has answered your question, the next step is a date. If it has not, call the front desk and we will answer it before you book a thing.',
    primary: { label: 'Check availability', path: '/contact#book' }
  }
};
