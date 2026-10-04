'use strict';
/**
 * Terms of Stay. Booking, rates, cancellation, payment, house rules and the
 * practical terms that apply to a stay at Praivelle House.
 */

module.exports = {
  slug: 'terms',
  path: '/terms',
  name: 'Terms of Stay',
  metaTitle: 'Terms of Stay | Praivelle House',
  metaDescription:
    'The terms that apply to a booking at Praivelle House, covering deposits, rates, taxes, check-in, cancellation, pets, parking, house rules and governing law.',
  metaKeywords:
    'praivelle house terms of stay, hotel booking terms kansas city, hotel cancellation policy missouri, hotel pet policy kansas city, lodging tax jackson county, hotel house rules',
  eyebrow: 'Legal',
  h1: 'Terms of Stay',
  heroIntro:
    'These terms apply to every reservation at Praivelle House. They are written to be read before you book, so there are no surprises at check-in and nothing hidden in the small print.',
  heroImage: '/img/gallery-terrace.webp',
  heroImageAlt: 'A guest terrace at Praivelle House in Kansas City at dusk',
  heroStats: [
    { value: 72, suffix: ' hrs', label: 'Free cancellation window before arrival' },
    { value: 8.85, decimals: 2, suffix: '%', label: 'Combined Missouri and Jackson County lodging tax' },
    { value: 3, suffix: ' PM', label: 'Check-in from' },
    { value: 11, suffix: ' AM', label: 'Check-out by' }
  ],
  schemaType: 'WebPage',
  dateModified: '2026-09-18',
  blocks: [
    {
      type: 'prose',
      id: 'booking',
      eyebrow: 'Section 1',
      h2: '1. Booking and Confirmation',
      body: [
        'A reservation is made when you book through our website, by telephone, by email, or through an agent acting for you. A booking becomes binding when we confirm it and send you a confirmation number.',
        'The person named on the reservation is responsible for the booking, for paying for it and for the conduct of everyone staying under it. By confirming a booking you are accepting these terms on behalf of all the guests in your party.',
        'We keep a small number of suites available at each rate, and rates and availability change with demand. A quote is valid only for the period stated in it, and a rate is guaranteed only once your booking is confirmed.'
      ]
    },
    {
      type: 'prose',
      id: 'deposits',
      eyebrow: 'Section 2',
      h2: '2. Deposits and Prepayment',
      body: [
        'Some rates require a deposit or full prepayment, and the confirmation will say so plainly. Where a deposit is required, it is taken at the time of booking and applied to your final bill.',
        'Standard flexible rates do not require a deposit, but we do take a card to hold the reservation. That card may be pre-authorised for the first night, which reserves the amount without taking it.',
        'A deposit or prepayment does not remove your liability for the rest of the stay, for incidentals, or for any damage or loss caused during your visit. Any balance remaining after your deposit is due at check-out, and the confirmation explains what has been charged and when.'
      ]
    },
    {
      type: 'prose',
      id: 'rates-taxes',
      eyebrow: 'Section 3',
      h2: '3. Rates, Taxes and the Lodging Tax',
      body: [
        'All rates are quoted in US dollars and are per suite, per night, unless the confirmation says otherwise. Published rates do not include tax, service charges or the cost of any extras you add during your stay.',
        'A combined lodging tax of 8. 85 percent applies to your room rate. This is made up of Missouri state and local lodging taxes together with the Jackson County lodging tax, and it is charged on top of the room rate as the law requires.',
        'Dining, spa treatments, bar purchases and other extras are subject to the sales tax that applies to them, which differs from the lodging tax. If a tax rate changes between your booking and your stay, the new rate applies from the date it takes effect.'
      ]
    },
    {
      type: 'prose',
      id: 'checkin-checkout',
      eyebrow: 'Section 4',
      h2: '4. Check-In and Check-Out',
      body: [
        'Check-in opens at 3:00 PM and our reception is staffed twenty-four hours a day, so you can arrive late without worrying that someone will have gone home.',
        'Check-out is at 11:00 AM. A later check-out is often possible and can be arranged with the front desk, subject to the next arrival, and may carry a small charge.',
        'At check-in we ask for a payment card and a matching photo identification, and we record the details required by Missouri lodging law. We may pre-authorise a card for incidentals, which releases automatically after check-out once any charges have been settled.'
      ]
    },
    {
      type: 'prose',
      id: 'cancellation',
      eyebrow: 'Section 5',
      h2: '5. Cancellation Windows',
      body: [
        'You may cancel or change a flexible booking free of charge up to seventy-two hours before your scheduled arrival. Cancel within that window and there is nothing to pay, and any deposit is returned in full.',
        'If you cancel within seventy-two hours of arrival, we charge one night, because by then it is unlikely we will fill the suite. The same one-night charge applies if you do not arrive and do not tell us, which is what the industry calls a no-show.',
        'To cancel or change a booking, call the front desk, reply to your confirmation email or use the contact details in section 21. The time of your call or message is the time we record.'
      ]
    },
    {
      type: 'table',
      id: 'cancellation-table',
      eyebrow: 'At a glance',
      h2: 'Cancellation at a Glance',
      intro: 'What applies in each situation for a standard flexible rate.',
      head: ['Situation', 'Notice given', 'What you pay'],
      rows: [
        ['Cancel or change', 'More than 72 hours before arrival', 'Nothing, and any deposit is refunded'],
        ['Cancel or change', 'Within 72 hours of arrival', 'One night of the booking'],
        ['No-show', 'No notice given', 'One night of the booking'],
        ['Early departure', 'Decided during the stay', 'The nights reserved unless we agree otherwise'],
        ['Restricted or prepaid rate', 'As stated in the confirmation', 'The terms attached to that rate'],
        ['Wedding or group booking', 'As stated in the event contract', 'The terms in the event contract']
      ],
      note: 'If illness or an emergency stops you travelling, tell us. We handle these cases with some sympathy.'
    },
    {
      type: 'prose',
      id: 'early-departure',
      eyebrow: 'Section 6',
      h2: '6. Early Departure',
      body: [
        'If you decide to leave before the end of a reserved stay, we ask for the nights you no longer need, unless we can resell them.',
        'For stays of a week or longer, and for group and event bookings, the terms in your confirmation or contract may set out a different early-departure position, including a minimum number of nights.',
        'If you shorten a stay and we are able to resell the nights, we refund them. If we cannot, the reserved nights remain payable.'
      ]
    },
    {
      type: 'prose',
      id: 'payment-incidentals',
      eyebrow: 'Section 7',
      h2: '7. Payment and Incidentals',
      body: [
        'We accept major credit and debit cards, and cash for settling a final balance at the desk. We do not accept personal cheques.',
        'We pre-authorise a card at check-in to cover incidentals such as dining, the bar, the spa and in-room charges. The amount depends on the length of your stay, and it is released after check-out once your final bill is settled.',
        'Your final bill itemises everything charged to the suite, and we are happy to go through it with you line by line. If you believe something is wrong, tell us before you leave or contact us afterwards, and we will investigate promptly.'
      ]
    },
    {
      type: 'prose',
      id: 'damage-smoking',
      eyebrow: 'Section 8',
      h2: '8. Damage and Smoking Policy',
      body: [
        'We ask you to treat the house as you would your own, and in return we do not charge for ordinary wear and tear.',
        'Praivelle House is entirely non-smoking, including all suites, the spa, the dining room, the cellar bar and the balconies. Smoking, vaping and the use of e-cigarettes are permitted only in the designated outdoor area beyond the terrace, where ashtrays are provided.',
        'The same applies to candles, incense and any open flame, which are not permitted indoors for the safety of an old timber-framed building. If you would like a fire, the dining room hearth and the outdoor fire pit are lit for you.'
      ]
    },
    {
      type: 'prose',
      id: 'occupancy',
      eyebrow: 'Section 9',
      h2: '9. Occupancy Limits',
      body: [
        'Each suite has a stated maximum occupancy, and the figure is set for comfort and for safety rather than to be difficult. Most of our rooms sleep two, some sleep three with a rollaway, and the larger suites can take four.',
        'We are a small house with a fixed number of rooms, and unregistered guests affect fire safety, parking and the quiet that other guests have paid for. If you would like visitors during your stay, that is very welcome, but please let the front desk know.',
        'We reserve the right to decline a booking or to ask guests to leave where occupancy limits are ignored or where a party grows beyond what was agreed. In that situation the terms of section 6 on early departure apply.'
      ]
    },
    {
      type: 'prose',
      id: 'children-cots',
      eyebrow: 'Section 10',
      h2: '10. Children and Cots',
      body: [
        'Children are welcome at Praivelle House, and we are glad to host families. Children stay free when they share a suite with adults using existing bedding, and a cot for an infant is provided at no charge, subject to availability.',
        'We can supply cots, high chairs and bed guards, and our kitchen will happily prepare simple, plain food for younger guests.',
        'A parent or guardian is responsible for children in their party at all times, including around the pool, the prairie trails and the fire pit.'
      ]
    },
    {
      type: 'prose',
      id: 'pets',
      eyebrow: 'Section 11',
      h2: '11. Pets',
      body: [
        'We are a pet-friendly house, and well-behaved dogs are welcome in a number of our ground-floor suites. There is a charge of seventy-five dollars per stay, which covers the additional cleaning and helps keep the rooms that allow pets as fresh as the ones that do not.',
        'Pets must be kept on a lead in all shared areas of the house and on the grounds, and they may not be left alone in a suite at any time.',
        'We ask owners to clean up after their pets and to keep them from disturbing other guests, particularly at night. Any damage caused by a pet, or any additional cleaning beyond the standard charge, may be billed at cost.'
      ]
    },
    {
      type: 'prose',
      id: 'parking-valet',
      eyebrow: 'Section 12',
      h2: '12. Parking and Valet',
      body: [
        'Parking at Praivelle House is complimentary for guests. You may leave your car with our valet at the porte-coch\u00e8re on Prairie Ridge Road, or park yourself in the gated courtyard behind the house.',
        'We have a small number of charging points for electric vehicles in the courtyard, available on a first-come basis, and we can arrange charging for you if you tell us when you book.',
        'Cars are left at the owner\u2019s risk, and we ask you not to leave valuables in view. The car park is covered by our CCTV, and we take its security seriously, but we cannot accept liability for items left in a vehicle.'
      ]
    },
    {
      type: 'prose',
      id: 'pool-spa-rules',
      eyebrow: 'Section 13',
      h2: '13. The Pool and Spa Rules',
      body: [
        'The heated indoor pool, the sauna and the spa treatment rooms are for the use of resident guests and spa clients. The pool is open from seven in the morning until ten at night, and the spa runs from nine until eight.',
        'For safety, children must be supervised in and around the pool by an adult at all times, and there is no lifeguard on duty. Diving, running on the wet deck and glass containers are not permitted in the pool area.',
        'Spa treatments are by appointment and are subject to a separate cancellation window, which is explained when you book. Please arrive fifteen minutes early so you can change and settle.'
      ]
    },
    {
      type: 'prose',
      id: 'alcohol',
      eyebrow: 'Section 14',
      h2: '14. Alcohol',
      body: [
        'Alcohol is served in the dining room and the cellar bar, and through in-room dining, under our Missouri Division of Alcohol and Tobacco Control licence.',
        'You are welcome to enjoy your own wine in your suite, and the front desk can provide glasses, an opener and ice. Bringing your own alcohol into the dining room or the cellar bar is not permitted, because those are licensed premises.',
        'We ask guests to drink responsibly and to respect the quiet of the house, particularly late at night. If a member of our team believes someone is at risk or is disturbing other guests, we may decline further service and, if necessary, ask a guest to leave.'
      ]
    },
    {
      type: 'prose',
      id: 'noise',
      eyebrow: 'Section 15',
      h2: '15. Noise and Quiet Hours',
      body: [
        'The house is small and the walls, though thick, are old, so sound carries more than in a modern building.',
        'Weddings and private events are a special case. Where a function is taking place, we agree an amplified-music curfew with the hosts, usually at midnight, and the cellar bar closes at that time.',
        'If noise from another guest is disturbing you, call the front desk at any hour. Reception is staffed around the clock, and we will address it discreetly and without making a fuss.'
      ]
    },
    {
      type: 'prose',
      id: 'lost-property',
      eyebrow: 'Section 16',
      h2: '16. Lost Property',
      body: [
        'If you leave something behind, tell us as soon as you notice and we will look for it. We log all found items and store them securely for thirty days.',
        'We can return items by post or courier at your cost, using the carrier you prefer where possible. Fragile or valuable items will be packed carefully and sent with tracking.',
        'After thirty days, unclaimed items are disposed of or donated to a local charity, with the exception of identity documents and payment cards, which we destroy securely. Perishable items and food are disposed of sooner for hygiene reasons.'
      ]
    },
    {
      type: 'prose',
      id: 'liability',
      eyebrow: 'Section 17',
      h2: '17. Liability',
      body: [
        'We take the safety and comfort of our guests seriously, and we maintain insurance appropriate to a hotel of our size. Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for anything else that cannot lawfully be limited.',
        'Subject to that, we are not liable for indirect or consequential losses, for loss of profit or opportunity, or for the loss or damage of valuables that were not deposited with us for safekeeping.',
        'You are responsible for any loss or damage you or your party cause to the house, its contents or its grounds, and you agree to reimburse us for the reasonable cost of repair or replacement.'
      ]
    },
    {
      type: 'prose',
      id: 'force-majeure',
      eyebrow: 'Section 18',
      h2: '18. Force Majeure',
      body: [
        'Occasionally something happens that is beyond anyone\u2019s reasonable control: severe weather, a power failure, a flood, a fire, a public health emergency, a strike, a government order or another event that makes it impossible or unsafe to honour a booking.',
        'In those circumstances we will offer you a full refund of any money paid, or the option to move your booking to another date, and we will do so promptly and without argument.',
        'If you are unable to travel because of an event beyond your control, tell us as soon as you can.'
      ]
    },
    {
      type: 'prose',
      id: 'complaints',
      eyebrow: 'Section 19',
      h2: '19. Complaints',
      body: [
        'If something is not right during your stay, please tell us while you are here. A problem raised at the time can almost always be fixed, and our team would far rather know than have you leave disappointed.',
        'If you would prefer to raise something after you have left, write to us at Praivelle House, 1200 Prairie Ridge Road, Kansas City, MO 64112, or email stay@praivellehouse. com.',
        'We will investigate honestly, including speaking to the team members involved, and we will tell you what we found even where it is not what you hoped to hear. If we got something wrong, we will say so and make it right.'
      ]
    },
    {
      type: 'prose',
      id: 'governing-law',
      eyebrow: 'Section 20',
      h2: '20. Governing Law',
      body: [
        'These terms are governed by the laws of the State of Missouri, and the courts of Jackson County, Missouri, have jurisdiction over any dispute arising from them.',
        'If any part of these terms is found to be unenforceable, the rest remains in force. These terms, together with your booking confirmation, the event contract where one applies, and our privacy and accessibility policies, form the whole agreement between us.',
        'We may update these terms from time to time, and the version that applies to your stay is the one published when you booked. These terms were last updated on 18 September 2026. We do not change the terms of a confirmed booking retroactively without telling you.'
      ]
    },
    {
      type: 'prose',
      id: 'contact',
      eyebrow: 'Section 21',
      h2: '21. How to Contact Us',
      body: [
        'For anything to do with a booking or these terms, contact the house at Praivelle House, 1200 Prairie Ridge Road, Kansas City, MO 64112. Call the front desk on (816) 555-0147, email stay@praivellehouse. com, or call reservations on (816) 555-0147.',
        'Reception is staffed twenty-four hours a day, so there is always someone to take your call, including in the middle of the night. If you need to speak to a manager, ask at the desk or email us and we will arrange a time to talk.',
        'If you are unsure which of our policies applies to your situation, tell us what you need and we will point you to the right place. We would rather answer a question early than resolve a misunderstanding later.'
      ]
    }
  ],
  faqs: [
    {
      q: 'When is my booking confirmed?',
      a: 'A booking becomes binding when we confirm it and send you a confirmation number setting out the dates, the suite, the number of guests and the rate. Please check it and tell us at once if anything is wrong.'
    },
    {
      q: 'What is your cancellation policy?',
      a: 'You can cancel or change a flexible booking free of charge up to 72 hours before arrival. Cancel within 72 hours, or do not arrive, and one night is charged. Restricted and prepaid rates follow the terms in your confirmation.'
    },
    {
      q: 'What taxes are added to the room rate?',
      a: 'A combined lodging tax of 8.85 percent applies to the room rate, made up of Missouri state and local lodging taxes together with the Jackson County lodging tax. Dining, spa and bar purchases carry the sales tax that applies to them.'
    },
    {
      q: 'Can I bring a pet?',
      a: 'Yes, up to two well-behaved dogs may stay in our pet-friendly ground-floor suites for seventy-five dollars per stay. Pets must be kept on a lead in shared areas and may not be left alone in a suite. Assistance dogs are always welcome and are never charged.'
    },
    {
      q: 'What happens if I need to leave early?',
      a: 'Tell the front desk as early as you can. We will try to re-let the nights you no longer need and reduce your bill if we can. If we cannot resell them, the reserved nights remain payable.'
    }
  ],
  cta: {
    h2: 'A Question Before You Book',
    text: 'If anything in these terms needs explaining, call the front desk or send us a note. Our reception is staffed around the clock, and a real person will answer.',
    primary: { label: 'Contact the house', path: '/contact' },
    secondary: { label: 'Call (816) 555-0147', path: 'tel:+18165550147' }
  }
};
