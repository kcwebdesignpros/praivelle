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
          title: 'Reservations · (816) 555-0147',
          text: 'The line for booking a room, changing dates, checking availability or asking about a package. Staffed twenty-four hours, and always the best rate you will find. Email reservations@praivellehouse.com if you would rather write.'
        },
        {
          icon: 'bell',
          title: 'Concierge · (816) 555-0148',
          text: 'For anything once you are here or on your way: dinner tables in town, a car to the airport, a spa treatment, a trail to walk, a place to eat that is not on any list. The concierge knows the city and will tell you honestly.'
        },
        {
          icon: 'rings',
          title: 'Weddings & Events · (816) 555-0149',
          text: 'Clara Whitfield and her team handle weddings, private dining, corporate retreats and full-property buyouts. Call for dates and availability, or email events@praivellehouse.com with an idea and a rough number of guests.'
        },
        {
          icon: 'mail',
          title: 'General enquiries',
          text: 'For everything else, stay@praivellehouse.com reaches the front desk directly. Press, partnerships, lost property, gift vouchers and questions that do not fit anywhere else all land in the same inbox and are answered within a day.'
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
        'Call any of our numbers and you will reach a person who works in the house, not a phone tree and not a call centre in another time zone. That is a deliberate choice and an expensive one, but it is the difference between a hotel that answers the phone and one that manages it. When you call at eleven at night to ask whether you can still get something to eat, the person who answers will know the answer and, if the kitchen is closed, will know what to do about it.',
        'During the day we aim to return any call within the hour, and email within one business day. If you send the form on this page in the middle of the night, a member of the front desk will read it first thing the next morning and reply to you personally. Nobody is asked to hit a response-time target by a dashboard; we simply do not like leaving people waiting, so we do not.',
        'It also means you get a straight answer rather than a polished one. If the room you want is booked, we will tell you which room is closest to it and why. If a package does not suit what you are trying to do, we will say so and suggest something better. If you ask whether the restaurant in town is worth the drive, the concierge will tell you honestly, even when the honest answer is no.',
        'We keep a file on returning guests, and we use it in the ways that make a stay feel expected rather than processed: the room you preferred last time, the pillow you asked for, the fact that you do not drink. It is not surveillance and it is never shared. It is just the ordinary courtesy of remembering, which is harder to do at scale and one of the reasons we are glad to be small.'
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
          text: 'Call (816) 555-0147, email reservations@praivellehouse.com, or send the form below with your preferred dates. If your dates are flexible, say so, because a midweek night is often a different price from a Saturday and we will tell you which is which.'
        },
        {
          title: 'We check the house and come back with real options',
          text: 'With only twelve rooms, we can tell you exactly what is free rather than pointing you at a generic calendar. If the room you wanted is taken, we will suggest the closest alternative and explain the difference, including which side of the house it is on and how the light falls.'
        },
        {
          title: 'We hold the room and confirm the details',
          text: 'Once you have chosen, we hold the room and send a single confirmation covering the room, the rate, breakfast, any package inclusions and the check-in time. Everything is in one place, in plain English rather than a wall of small print.'
        },
        {
          title: 'Tell us what you would like arranged',
          text: 'This is the part most guests enjoy. A spa treatment, a table at the hearth, a bottle of something cold in the room on arrival, a car from the airport, a walk mapped through the prairie. Say it once and we will have it ready, and there is no charge for asking.'
        },
        {
          title: 'Change your mind if you need to',
          text: 'Most bookings can be moved or cancelled free of charge up to seventy-two hours before arrival. If plans shift inside that window, call us and we will do what we can, particularly for midweek dates. We would always rather move a booking than lose it.'
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
        'We are at 1200 Prairie Ridge Road, Kansas City, MO 64112, on twelve acres of prairie about ten minutes south of the Country Club Plaza. The drive in is deliberately understated: a low stone wall, a gravel approach under three old oaks, and the house at the end of it, which is a restored 1940s farmhouse rather than anything that announces itself as a hotel.',
        'From the Plaza, take Ward Parkway south and follow the signs toward Prairie Ridge Road; the turn is a few minutes past the golf course and is easy to miss if you are watching the satnav rather than the road, so look for the stone wall on your right. From downtown, take I-35 south and follow the same approach. Kansas City International is 24 minutes north by car, and the drive is straightforward at almost any hour except the height of the morning rush.',
        'Parking is complimentary and there are two ways to use it. Pull up to the porte-cochère on Prairie Ridge Road and the valet will take the car from you, which is free and the easiest option, particularly if you have luggage. If you would rather park yourself, the gated courtyard behind the house has spaces for every room, along with EV charging points for guests who need them. The walk from the courtyard to the front door is level and step-free.',
        'The whole route, from the car to the lobby to the ground-floor rooms, is step-free, and we are happy to talk you through it before you arrive if you have particular access needs. If you are arriving late, reception is staffed twenty-four hours, so there is no window you can miss and no key code to hunt for in the dark. Someone will be at the desk with the lights on.'
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
          text: 'Check-out is by 11:00 AM. Reception is staffed around the clock, so early arrivals can leave luggage and late arrivals are never a problem. Late check-out is often possible and is included in some packages.'
        },
        {
          icon: 'key',
          title: 'Tell us your arrival time',
          text: 'If you know roughly when you will arrive, say so when you book. It lets us have the room ready and the fire lit, and if you are running late, a quick call means we can keep dinner warm for you.'
        },
        {
          icon: 'car',
          title: 'Valet is complimentary',
          text: 'Pull up to the porte-cochère and leave the car with us, or park yourself in the gated courtyard. Both are free, and both leave you a level, step-free walk to the front door.'
        },
        {
          icon: 'wifi',
          title: 'Wi-Fi and local calls are included',
          text: 'Fibre Wi-Fi runs throughout the house and the grounds, and it is complimentary. Local calls from the room are free as well. There is nothing to log into and nothing to pay at checkout.'
        },
        {
          icon: 'utensils',
          title: 'Dinner is worth booking ahead',
          text: 'The dining room is small and fills quickly on Friday and Saturday. Tell us when you book and we will hold a table at the hearth or by the window, whichever you prefer.'
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
          a: 'Yes. Book direct and if you find a lower publicly available rate for the same room, dates and inclusions within twenty-four hours, we will match it and take a further ten per cent off. We do not pay commission to booking sites, so direct is where the value is.'
        },
        {
          q: 'What is the best way to reach the concierge?',
          a: 'Call (816) 555-0148 or email stay@praivellehouse.com. The concierge handles restaurant tables in town, cars to the airport, spa treatments, itineraries and anything else you would like arranged, before or during your stay.'
        },
        {
          q: 'Can I arrange a spa treatment or a dinner reservation before I arrive?',
          a: 'Absolutely, and we recommend it. Say what you would like when you book, or send the form below, and we will offer you times that fit around your stay so nothing clashes. The spa and the dining room both fill up, particularly at weekends.'
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
        'Not everyone wants to pick up the phone, and there is no reason you should have to. The form just below reaches the same front desk that answers the calls, and it is checked around the clock. Send it at any hour, day or night, and a person will read it and reply to you personally rather than an automated system acknowledging receipt.',
        'Tell us what you are hoping for: the dates, the number of guests, whether you have stayed before, whether you are celebrating something, whether you need a step-free room, whether the dog is coming. The more you tell us, the more we can do before you arrive, and none of it is a commitment. You can send the form, get an answer, and decide afterwards.',
        'If your enquiry is about a wedding, an event or a full-property buyout, the form will reach the events team as well as the front desk, and Clara or one of her colleagues will come back to you with dates and options. For anything genuinely urgent, a phone call is still the fastest way to reach us, because the front desk is staffed at every hour and will always pick up before too long.'
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
