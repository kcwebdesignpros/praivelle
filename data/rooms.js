'use strict';
/**
 * The twelve rooms and suites, condensed to the six that are bookable as
 * distinct room types. Rendered by the `rooms` block as image listing cards.
 *
 * `meta` renders as the two-column icon row on each card; keep it to four
 * items so the grid stays even.
 */

module.exports = [
  {
    slug: 'garden-king',
    name: 'Garden King',
    path: '/services/rooms-suites',
    image: '/img/room-garden-king.webp',
    imageAlt: 'The Garden King room at Praivelle House with a king bed and garden-facing windows',
    badge: 'Most booked',
    where: 'East wing · Ground floor',
    price: '$279',
    meta: [
      { icon: 'users', label: 'Sleeps 2' },
      { icon: 'bed', label: 'King bed' },
      { icon: 'scan', label: '410 sq ft' },
      { icon: 'sunrise', label: 'Garden view' }
    ]
  },
  {
    slug: 'prairie-suite',
    name: 'Prairie Suite',
    path: '/services/rooms-suites',
    image: '/img/room-prairie-suite.webp',
    imageAlt: 'The Prairie Suite at Praivelle House with a king bed and a separate sitting area',
    badge: 'Signature',
    where: 'South wing · First floor',
    price: '$429',
    meta: [
      { icon: 'users', label: 'Sleeps 2' },
      { icon: 'bed', label: 'King bed' },
      { icon: 'scan', label: '670 sq ft' },
      { icon: 'flower', label: 'Prairie view' }
    ]
  },
  {
    slug: 'orchard-suite',
    name: 'Orchard Suite',
    path: '/services/rooms-suites',
    image: '/img/room-orchard-suite.webp',
    imageAlt: 'The Orchard Suite at Praivelle House with French doors open onto a balcony',
    badge: 'Pet friendly',
    where: 'West wing · First floor',
    price: '$389',
    meta: [
      { icon: 'users', label: 'Sleeps 3' },
      { icon: 'bed', label: 'King + daybed' },
      { icon: 'scan', label: '625 sq ft' },
      { icon: 'leaf', label: 'Orchard view' }
    ]
  },
  {
    slug: 'spa-suite',
    name: 'Spa Suite',
    path: '/services/rooms-suites',
    image: '/img/room-spa-suite.webp',
    imageAlt: 'The Spa Suite at Praivelle House with a freestanding stone soaking tub',
    badge: 'Spa included',
    where: 'West wing · Ground floor',
    price: '$459',
    meta: [
      { icon: 'users', label: 'Sleeps 2' },
      { icon: 'spa', label: 'Soaking tub' },
      { icon: 'scan', label: '590 sq ft' },
      { icon: 'flower', label: 'Courtyard view' }
    ]
  },
  {
    slug: 'the-loft',
    name: 'The Loft',
    path: '/services/rooms-suites',
    image: '/img/room-the-loft.webp',
    imageAlt: 'The Loft at Praivelle House with exposed oak beams and a vaulted ceiling',
    badge: 'Family',
    where: 'Second floor · Rooftop',
    price: '$519',
    meta: [
      { icon: 'users', label: 'Sleeps 4' },
      { icon: 'bed', label: 'King + 2 singles' },
      { icon: 'scan', label: '800 sq ft' },
      { icon: 'sunrise', label: 'Skylight' }
    ]
  },
  {
    slug: 'library-room',
    name: 'Library Room',
    path: '/services/rooms-suites',
    image: '/img/room-library-room.webp',
    imageAlt: 'The Library Room at Praivelle House lined with floor to ceiling bookshelves',
    badge: 'Quietest',
    where: 'East wing · First floor',
    price: '$249',
    meta: [
      { icon: 'users', label: 'Sleeps 2' },
      { icon: 'bed', label: 'Queen bed' },
      { icon: 'scan', label: '365 sq ft' },
      { icon: 'file-text', label: '1,200 books' }
    ]
  }
];
