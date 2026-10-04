'use strict';
/**
 * Contact and Reservations page. Every way to reach the house, a department
 * phone directory, the booking process, directions and arrival notes. The page
 * renders views/partials/form-contact.ejs after the blocks, so the final prose
 * block leads into that form. Rendered by views/page.ejs.
 */

module.exports = {
  slug: 'contact',
  path: '/contact',
  name: 'Contact & Reservations',
  metaTitle: 'Contact & Reservations | Praivelle House, Kansas City',
  metaDescription:
    'Call, email or send the form to reach Praivelle House in Kansas City. Reservations (816) 555-0147, concierge (816) 555-0148, events (816) 555-0149.',
  metaKeywords:
    'contact praivelle house, kansas city hotel reservations, boutique hotel phone number, kansas city hotel directions, book boutique hotel kansas city, hotel parking kansas city',
  eyebrow: 'Contact & reservations',
  h1: 'Talk to the Front Desk',
  heroIntro:
    'Reception is staffed twenty-four hours a day, so there is no hour at which you cannot reach a person. Call, email or send the form below, and we will answer the way we would if you were standing in front of us.',
  heroImage: '/img/split-cellar.webp',
  heroImageAlt: 'The wine cellar beneath Praivelle House, bottles racked along a brick wall',
  heroStats: [
    { value: 24, suffix: ' hrs', label: 'Reception, always staffed' },
    { value: 1, suffix: ' hr', label: 'Typical call-back time in the day' },
    { value: 10, suffix: ' min', label: 'From the Country Club Plaza' },
    { value: 24, suffix: ' min', label: 'From Kansas City International' }
  ],
  schemaType: 'ContactPage',
  dateModified: '2026-09-23',
  blocks: [
    {
      type: 'cards',
      id: 'reach-us',
      eyebrow: 'How to reach us',
      h2: 'Four Numbers, Four People Who Can Help',
      intro:
        'Depending on what you need, one line will get you to the right person faster than another. None of them is a call centre, and all of them are answered by someone who works in the house.',
      columns: 4,
      items: [
        {
          icon: 'calendar-check',
          title: 'Reservations · (816)' + ' 555-0147',
          text: 'The line for booking a room, changing dates, checking availability or asking about a package.'
        },
        {
          icon: 'bell',
          title: 'Concierge · (816)' + ' 555-0148',
          text: 'For anything once you are here or on your way: dinner tables in town, a car to the airport, a spa treatment, a trail to walk, a place to eat that is not on any list.'
        },
        {
          icon: 'rings',
          title: 'Weddings & Events · (816)' + ' 555-0149',
          text: 'Clara Whitfield and her team handle weddings, private dining, corporate retreats and full-property buyouts. Call for dates and availability, or email events@praivellehouse.'
        },
        {
          icon: 'mail',
          title: 'General enquiries',
          text: 'For everything else, stay@praivellehouse. com reaches the front desk directly.'
        }
      ]
    },
    {
      type: 'table',
      id: 'departments',
      eyebrow: 'Who to call',
      h2: 'Departments and Phone Numbers',
      intro:
        'The full directory, with the hours each department is staffed. Reception answers at every hour, so if you are unsure who to ask for, start there.',
      head: ['Department', 'Phone', 'Email', 'Hours'],
      rows: [
        ['Reception & Reservations', '(816) 555-0147', 'reservations@praivellehouse.com', '24 hours'],
        ['Concierge', '(816) 555-0148', 'stay@praivellehouse.com', '24 hours'],
        ['Weddings & Events', '(816) 555-0149', 'events@praivellehouse.com', '8:00 AM – 8:00 PM'],
        ['The Spa', '(816) 555-0148', 'stay@praivellehouse.com', '9:00 AM – 8:00 PM'],
        ['The Dining Room', '(816) 555-0147', 'stay@praivellehouse.com', '7:00 AM – 10:00 PM'],
        ['The Cellar Bar', '(816) 555-0147', 'stay@praivellehouse.com', '4:00 PM – Midnight'],
        ['General enquiries', '(816) 555-0147', 'stay@praivellehouse.com', '24 hours']
      ],
      note:
        'Reception is staffed around the clock, every day of the year, including public holidays. If a line is busy, leave a message and we will call you back, usually within the hour.'
    },
    {
      type: 'prose',
      id: 'how-we-answer',
      eyebrow: 'How we answer',
      h2: 'A Person, Not a Prompt',
      body: [
        'Call any of our numbers and you will reach a person who works in the house, not a phone tree and not a call centre in another time zone.',
        'During the day we aim to return any call within the hour, and email within one business day.',
        'It also means you get a straight answer rather than a polished one. If the room you want is booked, we will tell you which room is closest to it and why.',
        'We keep a file on returning guests, and we use it in the ways that make a stay feel expected rather than processed: the room you preferred last time, the pillow you asked for, the fact that you do not drink.'
      ]
    },
    {
      type: 'steps',
      id: 'book',
      eyebrow: 'How to book',
      h2: 'From Enquiry to Confirmation',
      intro:
        'Booking with us takes a few minutes and usually one conversation. Here is exactly what happens, whether you call, email or send the form below.',
      items: [
        {
          title: 'Tell us your dates and who is coming',
          text: 'Call (816) 555-0147, email reservations@praivellehouse. com, or send the form below with your preferred dates.'
        },
        {
          title: 'We check the house and come back with real options',
          text: 'With only twelve rooms, we can tell you exactly what is free rather than pointing you at a generic calendar.'
        },
        {
          title: 'We hold the room and confirm the details',
          text: 'Once you have chosen, we hold the room and send a single confirmation covering the room, the rate, breakfast, any package inclusions and the check-in time.'
        },
        {
          title: 'Tell us what you would like arranged',
          text: 'This is the part most guests enjoy. A spa treatment, a table at the hearth, a bottle of something cold in the room on arrival, a car from the airport, a walk mapped through the prairie.'
        },
        {
          title: 'Change your mind if you need to',
          text: 'Most bookings can be moved or cancelled free of charge up to seventy-two hours before arrival. If plans shift inside that window, call us and we will do what we can, particularly for midweek dates.'
        }
      ]
    },
    {
      type: 'split',
      id: 'directions',
      eyebrow: 'Getting here',
      h2: 'Finding the House and Parking When You Do',
      image: '/img/gallery-terrace.webp',
      imageAlt: 'The terrace and grounds at Praivelle House in Kansas City at golden hour',
      body: [
        'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, on twelve acres of prairie about ten minutes south of the Country Club Plaza.',
        'From the Plaza, take Ward Parkway south and follow the signs toward Prairie Ridge Road; the turn is a few minutes past the golf course and is easy to miss if you are watching the satnav rather than the road, so look for the stone wall on your right.',
        'Parking is complimentary and there are two ways to use it. Pull up to the porte-coch\u00e8re on Prairie Ridge Road and the valet will take the car from you, which is free and the easiest option, particularly if you have luggage.',
        'The whole route, from the car to the lobby to the ground-floor rooms, is step-free, and we are happy to talk you through it before you arrive if you have particular access needs.'
      ],
      list: [
        '1200 Prairie Ridge Road, Kansas City, MO 64112',
        'About ten minutes from the Country Club Plaza',
        'Twenty-four minutes from Kansas City International (MCI)',
        'Complimentary valet from the porte-cochère, self-parking in the gated courtyard',
        'EV charging points and step-free access throughout'
      ],
      cta: { label: 'Open in maps', path: 'https://www.google.com/maps/search/?api=1&query=1200+Prairie+Ridge+Road+Kansas+City+MO+64112' }
    },
    {
      type: 'cards',
      id: 'good-to-know',
      eyebrow: 'Before you arrive',
      h2: 'A Few Things Worth Knowing',
      intro:
        'Small details that make the first ten minutes easier, whether you are arriving for a night or for a week.',
      columns: 3,
      items: [
        {
          icon: 'clock',
          title: 'Check-in from 3:00 PM',
          text: 'Check-out is by 11:00 AM. Reception is staffed around the clock, so early arrivals can leave luggage and late arrivals are never a problem.'
        },
        {
          icon: 'key',
          title: 'Tell us your arrival time',
          text: 'If you know roughly when you will arrive, say so when you book.'
        },
        {
          icon: 'car',
          title: 'Valet is complimentary',
          text: 'Pull up to the porte-coch\u00e8re and leave the car with us, or park yourself in the gated courtyard.'
        },
        {
          icon: 'wifi',
          title: 'Wi-Fi and local calls are included',
          text: 'Fibre Wi-Fi runs throughout the house and the grounds, and it is complimentary. Local calls from the room are free as well.'
        },
        {
          icon: 'utensils',
          title: 'Dinner is worth booking ahead',
          text: 'The dining room is small and fills quickly on Friday and Saturday.'
        },
        {
          icon: 'accessibility',
          title: 'Access needs, handled in advance',
          text: 'If you need a step-free room, a roll-in shower or a particular route through the house, tell us when you book and we will confirm the details in writing before you travel.'
        }
      ]
    },
    {
      type: 'faq',
      id: 'faq',
      eyebrow: 'Good to know',
      h2: 'Questions About Getting in Touch',
      intro: 'What guests ask before they call, email or send the form.',
      items: [
        {
          q: 'How quickly will you reply?',
          a: 'Calls are usually returned within the hour during the day, and email within one business day. If you send the form overnight, a member of the front desk reads it first thing the next morning and replies to you personally.'
        },
        {
          q: 'Can I book a room over the phone?',
          a: 'Yes, and many guests prefer it. Call (816) 555-0147 at any hour and the front desk will check availability, talk you through the rooms and confirm the booking on the call. Booking direct is always the best rate we offer.'
        },
        {
          q: 'Do you have a best-rate guarantee?',
          a: 'Yes. Book direct and if you find a lower publicly available rate for the same room, dates and inclusions within twenty-four hours, we will match it and take a further ten per cent off.'
        },
        {
          q: 'What is the best way to reach the concierge?',
          a: 'Call (816) 555-0148 or email stay@praivellehouse.com. The concierge handles restaurant tables in town, cars to the airport, spa treatments, itineraries and anything else you would like arranged, before or during your stay.'
        },
        {
          q: 'Can I arrange a spa treatment or a dinner reservation before I arrive?',
          a: 'Absolutely, and we recommend it. Say what you would like when you book, or send the form below, and we will offer you times that fit around your stay so nothing clashes.'
        },
        {
          q: 'How do I reach the weddings and events team?',
          a: 'Call (816) 555-0149 or email events@praivellehouse.com. Clara Whitfield and her team handle weddings, private dining, corporate retreats and full-property buyouts, and the earlier you call for a peak-season date the better.'
        },
        {
          q: 'Where exactly are you, and is parking really free?',
          a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, about ten minutes from the Country Club Plaza and twenty-four minutes from MCI. Parking is free: valet from the porte-cochère or self-parking in the gated courtyard, with EV charging points.'
        }
      ]
    },
    {
      type: 'prose',
      id: 'send-the-form',
      eyebrow: 'Send it in writing',
      h2: 'If You Would Rather Write Than Talk',
      body: [
        'Not everyone wants to pick up the phone, and there is no reason you should have to. The form just below reaches the same front desk that answers the calls, and it is checked around the clock.',
        'Tell us what you are hoping for: the dates, the number of guests, whether you have stayed before, whether you are celebrating something, whether you need a step-free room, whether the dog is coming.',
        'If your enquiry is about a wedding, an event or a full-property buyout, the form will reach the events team as well as the front desk, and Clara or one of her colleagues will come back to you with dates and options.'
      ]
    },
    {
      type: 'cta',
      h2: 'We Are Here Whenever You Are Ready',
      text: 'Call, email or send the form and we will come back to you with a straight answer. Reception is staffed twenty-four hours, so there is no wrong time to reach us.',
      primary: { label: 'Send the form', path: '/contact#book' },
      secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
    }
  ],
  faqs: [
    {
      q: 'How quickly will you reply?',
      a: 'Calls are usually returned within the hour during the day, and email within one business day. If you send the form overnight, the front desk reads it first thing the next morning and replies personally.'
    },
    {
      q: 'Can I book a room over the phone?',
      a: 'Yes. Call (816) 555-0147 at any hour and the front desk will check availability, talk you through the rooms and confirm the booking on the call. Booking direct is always the best rate we offer.'
    },
    {
      q: 'Do you have a best-rate guarantee?',
      a: 'Yes. Book direct and if you find a lower publicly available rate for the same room, dates and inclusions within twenty-four hours, we will match it and take a further ten per cent off.'
    },
    {
      q: 'What is the best way to reach the concierge?',
      a: 'Call (816) 555-0148 or email stay@praivellehouse.com. The concierge handles restaurant tables, cars to the airport, spa treatments, itineraries and anything else you would like arranged.'
    },
    {
      q: 'Can I arrange a spa treatment or a dinner reservation before I arrive?',
      a: 'Yes, and we recommend it. Say what you would like when you book, or send the form below, and we will offer you times that fit around your stay so nothing clashes.'
    },
    {
      q: 'How do I reach the weddings and events team?',
      a: 'Call (816) 555-0149 or email events@praivellehouse.com. Clara Whitfield and her team handle weddings, private dining, corporate retreats and full-property buyouts.'
    },
    {
      q: 'Where exactly are you, and is parking really free?',
      a: 'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, about ten minutes from the Country Club Plaza and twenty-four minutes from MCI. Parking is free: valet or self-parking, with EV charging points.'
    }
  ],
  cta: {
    h2: 'We Are Here Whenever You Are Ready',
    text: 'Call, email or send the form and we will come back to you with a straight answer. Reception is staffed twenty-four hours, so there is no wrong time to reach us.',
    primary: { label: 'Send the form', path: '/contact#book' }
  }
};
