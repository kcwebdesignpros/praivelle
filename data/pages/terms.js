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
        'A reservation is made when you book through our website, by telephone, by email, or through an agent acting for you. A booking becomes binding when we confirm it and send you a confirmation number. That confirmation sets out the dates, the suite, the number of guests and the rate, and it is the record of what we have agreed. Please read it and tell us at once if anything is wrong.',
        'The person named on the reservation is responsible for the booking, for paying for it and for the conduct of everyone staying under it. By confirming a booking you are accepting these terms on behalf of all the guests in your party. You must be at least eighteen years old to make a reservation, and we may ask for proof of age or identity at check-in.',
        'We keep a small number of suites available at each rate, and rates and availability change with demand. A quote is valid only for the period stated in it, and a rate is guaranteed only once your booking is confirmed. If we have to move you to a different suite for any reason, we will offer you one of equal or better standard, or a full refund if you would prefer to cancel.'
      ]
    },
    {
      type: 'prose',
      id: 'deposits',
      eyebrow: 'Section 2',
      h2: '2. Deposits and Prepayment',
      body: [
        'Some rates require a deposit or full prepayment, and the confirmation will say so plainly. Where a deposit is required, it is taken at the time of booking and applied to your final bill. Where a rate is prepaid, it is charged in full when you book and is subject to the cancellation terms attached to that specific rate.',
        'Standard flexible rates do not require a deposit, but we do take a card to hold the reservation. That card may be pre-authorised for the first night, which reserves the amount without taking it. If a card is declined or a pre-authorisation fails, we will contact you, and the booking may be released if we cannot reach you within twenty-four hours.',
        'A deposit or prepayment does not remove your liability for the rest of the stay, for incidentals, or for any damage or loss caused during your visit. Any balance remaining after your deposit is due at check-out, and the confirmation explains what has been charged and when.'
      ]
    },
    {
      type: 'prose',
      id: 'rates-taxes',
      eyebrow: 'Section 3',
      h2: '3. Rates, Taxes and the Lodging Tax',
      body: [
        'All rates are quoted in US dollars and are per suite, per night, unless the confirmation says otherwise. Published rates do not include tax, service charges or the cost of any extras you add during your stay. We tell you the full price before you confirm, so you always know what you are agreeing to.',
        'A combined lodging tax of 8.85 percent applies to your room rate. This is made up of Missouri state and local lodging taxes together with the Jackson County lodging tax, and it is charged on top of the room rate as the law requires. We collect it on behalf of the taxing authorities and pass it on in full; it is not income to the house.',
        'Dining, spa treatments, bar purchases and other extras are subject to the sales tax that applies to them, which differs from the lodging tax. If a tax rate changes between your booking and your stay, the new rate applies from the date it takes effect. Any figure we quote for tax is our best estimate and will be corrected to the actual rate on your final bill.'
      ]
    },
    {
      type: 'prose',
      id: 'checkin-checkout',
      eyebrow: 'Section 4',
      h2: '4. Check-In and Check-Out',
      body: [
        'Check-in opens at 3:00 PM and our reception is staffed twenty-four hours a day, so you can arrive late without worrying that someone will have gone home. If you reach the house before your suite is ready, we are glad to hold your luggage and welcome you in the lounge or the bar while we finish preparing it.',
        'Check-out is at 11:00 AM. A later check-out is often possible and can be arranged with the front desk, subject to the next arrival, and may carry a small charge. If you need a guaranteed late departure, tell us in advance and we will confirm whether we can hold the suite for you.',
        'At check-in we ask for a payment card and a matching photo identification, and we record the details required by Missouri lodging law. We may pre-authorise a card for incidentals, which releases automatically after check-out once any charges have been settled. If you are arriving on behalf of someone else, or paying for a guest who is not present, contact us in advance so we can arrange it properly.'
      ]
    },
    {
      type: 'prose',
      id: 'cancellation',
      eyebrow: 'Section 5',
      h2: '5. Cancellation Windows',
      body: [
        'You may cancel or change a flexible booking free of charge up to seventy-two hours before your scheduled arrival. Cancel within that window and there is nothing to pay, and any deposit is returned in full. This is the standard that applies to our ordinary rates, and we think it is a fair one.',
        'If you cancel within seventy-two hours of arrival, we charge one night, because by then it is unlikely we will fill the suite. The same one-night charge applies if you do not arrive and do not tell us, which is what the industry calls a no-show. Where a booking was prepaid on a restricted rate, the specific cancellation terms in your confirmation apply instead of these.',
        'To cancel or change a booking, call the front desk, reply to your confirmation email or use the contact details in section 21. The time of your call or message is the time we record. For group bookings, weddings and exclusive-use events, separate cancellation terms are set out in the event contract, which overrides this section for those bookings.'
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
        'If you decide to leave before the end of a reserved stay, we ask for the nights you no longer need, unless we can resell them. We know that plans change and that circumstances are not always within your control, so we will always try to re-let the suite and reduce your bill if we can. Tell the front desk as early as you can so we have the best chance of doing that.',
        'For stays of a week or longer, and for group and event bookings, the terms in your confirmation or contract may set out a different early-departure position, including a minimum number of nights. Where that is the case, it will be stated clearly before you book, and it overrides this section for that reservation.',
        'If you shorten a stay and we are able to resell the nights, we refund them. If we cannot, the reserved nights remain payable. We will always show you what we tried to do and what the result was, rather than simply charging the full amount and saying nothing.'
      ]
    },
    {
      type: 'prose',
      id: 'payment-incidentals',
      eyebrow: 'Section 7',
      h2: '7. Payment and Incidentals',
      body: [
        'We accept major credit and debit cards, and cash for settling a final balance at the desk. We do not accept personal cheques. Payment for the stay is due at check-out unless a prepaid rate applies or we have agreed credit terms in writing in advance, which we do for some corporate accounts.',
        'We pre-authorise a card at check-in to cover incidentals such as dining, the bar, the spa and in-room charges. The amount depends on the length of your stay, and it is released after check-out once your final bill is settled. A pre-authorisation is not a charge; it simply reserves the amount, though your bank may take a few days to remove the hold.',
        'Your final bill itemises everything charged to the suite, and we are happy to go through it with you line by line. If you believe something is wrong, tell us before you leave or contact us afterwards, and we will investigate promptly. Unpaid balances may be passed to a collection agency after we have made reasonable attempts to resolve them with you directly.'
      ]
    },
    {
      type: 'prose',
      id: 'damage-smoking',
      eyebrow: 'Section 8',
      h2: '8. Damage and Smoking Policy',
      body: [
        'We ask you to treat the house as you would your own, and in return we do not charge for ordinary wear and tear. Where something is broken, stained or lost through carelessness, we may charge the reasonable cost of repair or replacement, and we will always show you what we are charging for and why before we do it.',
        'Praivelle House is entirely non-smoking, including all suites, the spa, the dining room, the cellar bar and the balconies. Smoking, vaping and the use of e-cigarettes are permitted only in the designated outdoor area beyond the terrace, where ashtrays are provided. Smoking in a suite triggers a specialist deep clean, and a charge of two hundred and fifty dollars is applied to cover it.',
        'The same applies to candles, incense and any open flame, which are not permitted indoors for the safety of an old timber-framed building. If you would like a fire, the dining room hearth and the outdoor fire pit are lit for you. We may also charge for lost keys, missing linen or damage to fixtures, always at cost and always explained.'
      ]
    },
    {
      type: 'prose',
      id: 'occupancy',
      eyebrow: 'Section 9',
      h2: '9. Occupancy Limits',
      body: [
        'Each suite has a stated maximum occupancy, and the figure is set for comfort and for safety rather than to be difficult. Most of our rooms sleep two, some sleep three with a rollaway, and the larger suites can take four. The maximum is shown when you book, and it cannot be exceeded without our agreement.',
        'We are a small house with a fixed number of rooms, and unregistered guests affect fire safety, parking and the quiet that other guests have paid for. If you would like visitors during your stay, that is very welcome, but please let the front desk know. Overnight guests must be registered, and we may charge for an additional person where the suite allows it.',
        'We reserve the right to decline a booking or to ask guests to leave where occupancy limits are ignored or where a party grows beyond what was agreed. In that situation the terms of section 6 on early departure apply. We would much rather have an honest conversation at booking than an awkward one at midnight.'
      ]
    },
    {
      type: 'prose',
      id: 'children-cots',
      eyebrow: 'Section 10',
      h2: '10. Children and Cots',
      body: [
        'Children are welcome at Praivelle House, and we are glad to host families. Children stay free when they share a suite with adults using existing bedding, and a cot for an infant is provided at no charge, subject to availability. Please tell us the ages of any children when you book so we can prepare the room properly.',
        'We can supply cots, high chairs and bed guards, and our kitchen will happily prepare simple, plain food for younger guests. Some areas are adults-only for the comfort of other guests: the cellar bar after nine in the evening, and the spa and pool during certain hours, which are posted at the spa reception and can be confirmed when you book.',
        'A parent or guardian is responsible for children in their party at all times, including around the pool, the prairie trails and the fire pit. For their safety, children must be supervised in these areas, and we ask that they do not disturb other guests in the corridors or the dining room. Where a young guest has a spa treatment, an adult must give consent.'
      ]
    },
    {
      type: 'prose',
      id: 'pets',
      eyebrow: 'Section 11',
      h2: '11. Pets',
      body: [
        'We are a pet-friendly house, and well-behaved dogs are welcome in a number of our ground-floor suites. There is a charge of seventy-five dollars per stay, which covers the additional cleaning and helps keep the rooms that allow pets as fresh as the ones that do not. A maximum of two pets may stay with you, and we ask you to tell us when you book so we can assign the right suite.',
        'Pets must be kept on a lead in all shared areas of the house and on the grounds, and they may not be left alone in a suite at any time. They are welcome on the terrace and in the outdoor areas, but not in the dining room, the spa, the pool area or the cellar bar, where food is served and other guests may have allergies. The prairie trails are a wonderful place for a walk, and we will happily point you to the best route.',
        'We ask owners to clean up after their pets and to keep them from disturbing other guests, particularly at night. Any damage caused by a pet, or any additional cleaning beyond the standard charge, may be billed at cost. If a pet is a nuisance to other guests, we may ask you to make other arrangements, and assistance dogs are of course always welcome and are never charged.'
      ]
    },
    {
      type: 'prose',
      id: 'parking-valet',
      eyebrow: 'Section 12',
      h2: '12. Parking and Valet',
      body: [
        'Parking at Praivelle House is complimentary for guests. You may leave your car with our valet at the porte-cochère on Prairie Ridge Road, or park yourself in the gated courtyard behind the house. Valet operates from seven in the morning until midnight, and keys can be left with the front desk outside those hours for collection when the valet returns.',
        'We have a small number of charging points for electric vehicles in the courtyard, available on a first-come basis, and we can arrange charging for you if you tell us when you book. There are also accessible spaces close to the step-free entrance, which we keep free for guests who need them.',
        'Cars are left at the owner’s risk, and we ask you not to leave valuables in view. The car park is covered by our CCTV, and we take its security seriously, but we cannot accept liability for items left in a vehicle. If you need help with luggage, loading or a car seat, the valet and front desk team are glad to assist.'
      ]
    },
    {
      type: 'prose',
      id: 'pool-spa-rules',
      eyebrow: 'Section 13',
      h2: '13. The Pool and Spa Rules',
      body: [
        'The heated indoor pool, the sauna and the spa treatment rooms are for the use of resident guests and spa clients. The pool is open from seven in the morning until ten at night, and the spa runs from nine until eight. We ask guests to shower before entering the pool and the sauna, and to wear appropriate swimwear at all times.',
        'For safety, children must be supervised in and around the pool by an adult at all times, and there is no lifeguard on duty. Diving, running on the wet deck and glass containers are not permitted in the pool area. Food and drink should stay on the terrace rather than by the water, and anyone who has been drinking should not use the pool or the sauna.',
        'Spa treatments are by appointment and are subject to a separate cancellation window, which is explained when you book. Please arrive fifteen minutes early so you can change and settle. If you have a medical condition, are pregnant or have recently had surgery, tell your therapist before your treatment, and we will adapt what we do to suit you. Guests who ignore these rules may be asked to leave the pool or spa area.'
      ]
    },
    {
      type: 'prose',
      id: 'alcohol',
      eyebrow: 'Section 14',
      h2: '14. Alcohol',
      body: [
        'Alcohol is served in the dining room and the cellar bar, and through in-room dining, under our Missouri Division of Alcohol and Tobacco Control licence. We are required by law to ask for proof of age where a guest appears to be under twenty-one, and we will do so. We cannot serve anyone who is already intoxicated, and we cannot serve anyone under twenty-one at all.',
        'You are welcome to enjoy your own wine in your suite, and the front desk can provide glasses, an opener and ice. Bringing your own alcohol into the dining room or the cellar bar is not permitted, because those are licensed premises. Our bar list is carefully chosen and fairly priced, and our team will happily help you find something you will enjoy.',
        'We ask guests to drink responsibly and to respect the quiet of the house, particularly late at night. If a member of our team believes someone is at risk or is disturbing other guests, we may decline further service and, if necessary, ask a guest to leave. This is rare, but it protects everyone, and it is part of holding a licence responsibly.'
      ]
    },
    {
      type: 'prose',
      id: 'noise',
      eyebrow: 'Section 15',
      h2: '15. Noise and Quiet Hours',
      body: [
        'The house is small and the walls, though thick, are old, so sound carries more than in a modern building. We ask all guests to keep noise to a reasonable level throughout the day and to observe quiet hours between eleven at night and seven in the morning, when we ask that televisions, music and conversation are kept low.',
        'Weddings and private events are a special case. Where a function is taking place, we agree an amplified-music curfew with the hosts, usually at midnight, and the cellar bar closes at that time. Event guests are asked to move indoors as the evening ends, out of respect for residents in the suites above and beside the function rooms.',
        'If noise from another guest is disturbing you, call the front desk at any hour. Reception is staffed around the clock, and we will address it discreetly and without making a fuss. Equally, if we contact you about noise, please take it in the spirit it is meant, which is simply to let everyone sleep.'
      ]
    },
    {
      type: 'prose',
      id: 'lost-property',
      eyebrow: 'Section 16',
      h2: '16. Lost Property',
      body: [
        'If you leave something behind, tell us as soon as you notice and we will look for it. We log all found items and store them securely for thirty days. Where an item is clearly valuable or personal, we will contact you if we can identify the owner from the reservation.',
        'We can return items by post or courier at your cost, using the carrier you prefer where possible. Fragile or valuable items will be packed carefully and sent with tracking. We are not able to send cash, and we do not accept liability for items that are lost in transit once they have left the house in the hands of a carrier.',
        'After thirty days, unclaimed items are disposed of or donated to a local charity, with the exception of identity documents and payment cards, which we destroy securely. Perishable items and food are disposed of sooner for hygiene reasons. If you believe you left something with us and it has been more than thirty days, contact us anyway and we will check the log.'
      ]
    },
    {
      type: 'prose',
      id: 'liability',
      eyebrow: 'Section 17',
      h2: '17. Liability',
      body: [
        'We take the safety and comfort of our guests seriously, and we maintain insurance appropriate to a hotel of our size. Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for anything else that cannot lawfully be limited. Where the law gives you a right, these terms do not take it away.',
        'Subject to that, we are not liable for indirect or consequential losses, for loss of profit or opportunity, or for the loss or damage of valuables that were not deposited with us for safekeeping. A safe is provided in every suite for passports, jewellery and other valuables, and we strongly recommend that guests use it. We are not responsible for vehicles or their contents left in the car park.',
        'You are responsible for any loss or damage you or your party cause to the house, its contents or its grounds, and you agree to reimburse us for the reasonable cost of repair or replacement. We will always provide evidence of the cost and will not charge for ordinary wear and tear. Please report any accidental damage as soon as it happens, because an honest report is always easier to resolve than a discovery at check-out.'
      ]
    },
    {
      type: 'prose',
      id: 'force-majeure',
      eyebrow: 'Section 18',
      h2: '18. Force Majeure',
      body: [
        'Occasionally something happens that is beyond anyone’s reasonable control: severe weather, a power failure, a flood, a fire, a public health emergency, a strike, a government order or another event that makes it impossible or unsafe to honour a booking. Where that happens, we are not in breach of these terms for failing to provide the stay, and we will work with you to find the fairest outcome.',
        'In those circumstances we will offer you a full refund of any money paid, or the option to move your booking to another date, and we will do so promptly and without argument. We will also help where we can with rebooking elsewhere in the city if we are unable to host you at all. What we cannot do is compensate for losses beyond the value of the stay itself, such as travel costs booked separately.',
        'If you are unable to travel because of an event beyond your control, tell us as soon as you can. We cannot guarantee a refund in every such case, but we will look at each situation on its merits and do what we reasonably can, particularly where a booking can be moved to a later date.'
      ]
    },
    {
      type: 'prose',
      id: 'complaints',
      eyebrow: 'Section 19',
      h2: '19. Complaints',
      body: [
        'If something is not right during your stay, please tell us while you are here. A problem raised at the time can almost always be fixed, and our team would far rather know than have you leave disappointed. Speak to any member of staff, call the front desk from your room, or ask to see the duty manager.',
        'If you would prefer to raise something after you have left, write to us at Praivelle House, 1200 Prairie Ridge Road, Kansas City, MO 64112, or email stay@praivellehouse.com. Tell us what happened, when, and what would put it right, and include your booking reference if you have it. We will acknowledge your complaint within five working days and give you a full response within twenty-eight days.',
        'We will investigate honestly, including speaking to the team members involved, and we will tell you what we found even where it is not what you hoped to hear. If we got something wrong, we will say so and make it right. If we cannot agree an outcome, we will explain your options, which may include a consumer complaint to the Missouri Attorney General’s Office.'
      ]
    },
    {
      type: 'prose',
      id: 'governing-law',
      eyebrow: 'Section 20',
      h2: '20. Governing Law',
      body: [
        'These terms are governed by the laws of the State of Missouri, and the courts of Jackson County, Missouri, have jurisdiction over any dispute arising from them. We ask that you contact us first, because almost every concern is resolved faster over the phone or by email than through any formal process.',
        'If any part of these terms is found to be unenforceable, the rest remains in force. These terms, together with your booking confirmation, the event contract where one applies, and our privacy and accessibility policies, form the whole agreement between us. Nothing said by a member of staff can vary these terms unless it is confirmed in writing.',
        'We may update these terms from time to time, and the version that applies to your stay is the one published when you booked. These terms were last updated on 18 September 2026. We do not change the terms of a confirmed booking retroactively without telling you.'
      ]
    },
    {
      type: 'prose',
      id: 'contact',
      eyebrow: 'Section 21',
      h2: '21. How to Contact Us',
      body: [
        'For anything to do with a booking or these terms, contact the house at Praivelle House, 1200 Prairie Ridge Road, Kansas City, MO 64112. Call the front desk on (816) 555-0147, email stay@praivellehouse.com, or call reservations on (816) 555-0147. For events, the events team can be reached on (816) 555-0149 or at events@praivellehouse.com.',
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
