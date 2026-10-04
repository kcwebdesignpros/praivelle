'use strict';
/**
 * Praivelle House — single source of truth.
 *
 * NAP, hours, navigation, socials, trust data and aggregate lists live here.
 * Nothing about the business should be hard-coded in the templates.
 *
 * NOTE: the NAP below is intentionally a demo. Replace it with the real address
 * and telephone numbers before the site goes live.
 */

const SITE_URL = (process.env.SITE_URL || 'https://www.praivellehouse.com').replace(/\/+$/, '');

const team = require('./team');
const testimonials = require('./testimonials');
const services = require('./services');

const SITE = {
  /* ------------------------------------------------------------ identity */
  name: 'Praivelle House',
  legalName: 'Praivelle House Hospitality LLC',
  shortName: 'Praivelle',
  tagline: 'A Prairie House, Reimagined',
  description:
    'Praivelle House is an independent twelve-suite boutique hotel on the Kansas City prairie, with a private spa, a wood-fired dining room and a cellar bar. Quietly luxurious, genuinely personal, and ten minutes from everything the city does well.',
  url: SITE_URL,
  logo: '/img/logo.webp',
  logoLight: '/img/logo-light.webp',
  logoMark: '/img/logo-mark.webp',
  logoWidth: 760,
  logoHeight: 200,
  ogImage: '/img/og-image.jpg',
  founded: 2008,
  priceRange: '$$$',
  starRating: 5,
  language: 'en-US',
  locale: 'en_US',
  roomCount: 12,

  /* ----------------------------------------------------------------- NAP */
  phone: '(816) 555-0147',
  phoneHref: '+18165550147',
  reservationsPhone: '(816) 555-0147',
  reservationsPhoneHref: '+18165550147',
  conciergePhone: '(816) 555-0148',
  conciergePhoneHref: '+18165550148',
  eventsPhone: '(816) 555-0149',
  eventsPhoneHref: '+18165550149',
  fax: '(816) 555-0150',
  email: 'stay@praivellehouse.com',
  reservationsEmail: 'reservations@praivellehouse.com',
  eventsEmail: 'events@praivellehouse.com',
  address: {
    street: '1200 Prairie Ridge Road',
    city: 'Kansas City',
    region: 'MO',
    regionLong: 'Missouri',
    postal: '64112',
    country: 'US'
  },
  addressOneLine: '1200 Prairie Ridge Road, Kansas City, MO 64112',
  geo: { lat: 39.0425, lng: -94.5908 },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=1200+Prairie+Ridge+Road+Kansas+City+MO+64112',
  directionsNote:
    'Complimentary valet from the porte-cochère on Prairie Ridge Road, with self-parking in the gated courtyard behind the house.',
  airportNote: 'Kansas City International (MCI) is 24 minutes north by car.',

  /* --------------------------------------------------------------- hours */
  hours: [
    { day: 'Reception', time: 'Open 24 hours' },
    { day: 'Check-in', time: 'From 3:00 PM' },
    { day: 'Check-out', time: 'Until 11:00 AM', note: 'Late on request' },
    { day: 'The Dining Room', time: '7:00 AM – 10:00 PM' },
    { day: 'The Spa', time: '9:00 AM – 8:00 PM' },
    { day: 'The Cellar Bar', time: '4:00 PM – Midnight' }
  ],
  hoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }
  ],
  hoursSummary: 'Reception 24 hours · Dining 7a–10p · Spa 9a–8p',
  checkIn: '3:00 PM',
  checkOut: '11:00 AM',

  /* ------------------------------------------------------- service areas */
  serviceAreas: [
    'Kansas City',
    'Overland Park',
    'Leawood',
    'Prairie Village',
    'Mission Hills',
    'Fairway',
    'Roeland Park',
    'Westwood',
    'North Kansas City',
    'Gladstone',
    'Liberty',
    'Parkville',
    'Riverside',
    'Independence',
    'Blue Springs',
    "Lee's Summit",
    'Olathe',
    'Lenexa',
    'Shawnee',
    'Merriam'
  ],
  primaryCounty: 'Jackson County',
  secondaryCounty: 'Johnson County',
  regionLabel: 'the Kansas City metro',

  /* --------------------------------------------------------------- socials */
  socials: [
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/praivellehouse' },
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/praivellehouse' },
    { name: 'Pinterest', icon: 'pinterest', url: 'https://www.pinterest.com/praivellehouse' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/praivellehouse' },
    { name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@praivellehouse' }
  ],
  reviewProfiles: [
    { name: 'Google', icon: 'google', rating: '4.9', count: 2418, url: 'https://www.google.com/maps' },
    { name: 'Tripadvisor', icon: 'tripadvisor', rating: '4.9', count: 1102, url: 'https://www.tripadvisor.com' }
  ],

  /* --------------------------------------------------------- credentials */
  licenseLine: 'Missouri Lodging Licence #MO-LDG-2008-33471 · Food Service Permit #KC-2011-88204',
  licenses: [
    'Missouri Lodging Establishment Licence #MO-LDG-2008-33471',
    'Kansas City Health Department Food Service Permit #KC-2011-88204',
    'Missouri Division of Alcohol and Tobacco Control Licence #MO-LQ-2009-11982'
  ],
  memberships: [
    'American Hotel & Lodging Association',
    'Kansas City Convention & Visitors Association',
    'Select Registry Distinguished Inns of North America',
    'Missouri Restaurant Association',
    'Wine & Spirit Education Trust — Approved Programme Provider'
  ],
  knowsAbout: [
    'Boutique hospitality',
    'Luxury suites and residences',
    'Spa and wellness therapy',
    'Farm-to-table fine dining',
    'Destination weddings',
    'Corporate retreats and board meetings',
    'Sommelier-led wine experiences',
    'Concierge and itinerary design',
    'Sustainable hospitality',
    'Accessible travel'
  ],

  /* --------------------------------------------------------- signature offer */
  signatureOffer: {
    title: 'The Prairie Escape',
    price: '$279',
    strike: '$389',
    unit: 'per night, two guests',
    includes: [
      'A night in a Garden King room',
      'Breakfast for two at The Dining Room',
      'A 50-minute treatment each at The Spa',
      'A welcome bottle of sparkling wine',
      'Late 2:00 PM check-out on departure day'
    ],
    fine: 'Available Sunday to Thursday, subject to availability. Rates exclude tax and are quoted in US dollars.'
  },

  /* ------------------------------------------------------------ trust data */
  stats: [
    { value: 12, label: 'Suites and rooms, all different' },
    { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating from 3,500+ guest reviews' },
    { value: 18, suffix: ' yrs', label: 'Independent and family-run since 2008' },
    { value: 62, suffix: '%', label: 'Of guests who book a return stay within a year' }
  ],
  trustBadges: [
    { icon: 'award', title: 'Independently Owned', text: 'No chain, no corporate script — the family who bought the land still runs the house.' },
    { icon: 'chef-hat', title: 'Award-Winning Kitchen', text: 'A wood-fired dining room led by a chef who sources within 90 miles.' },
    { icon: 'sparkles', title: 'Private Spa & Pool', text: 'A candlelit spa, a heated indoor pool and a treatment menu built for two.' },
    { icon: 'map-pin', title: 'Ten Minutes From Everything', text: 'Plaza shopping, downtown, the airport corridor and the prairie trailhead.' }
  ],

  /* -------------------------------------------------------------- amenities */
  amenities: [
    'Complimentary valet parking',
    'Fibre Wi-Fi throughout',
    'Heated indoor pool',
    'Private spa and sauna',
    '24-hour fitness studio',
    'Wood-fired dining room',
    'Cellar bar and wine library',
    'In-room dining, 24 hours',
    'Pet-friendly rooms',
    'EV charging',
    'Electric bicycles',
    'Airport transfers on request'
  ],
  inclusions: [
    'Breakfast for two',
    'Valet parking',
    'Fibre Wi-Fi',
    'Spa and pool access',
    'Evening turndown',
    'Local calls'
  ],

  /* ------------------------------------------------------------------ nav */
  nav: [
    { label: 'Home', path: '/' },
    {
      label: 'The House',
      path: '/about',
      mega: 'about',
      children: [
        { label: 'Our Story', path: '/about', desc: 'A prairie farmhouse, eighteen years in the making', icon: 'building' },
        { label: 'Meet the Team', path: '/team', desc: 'The people who actually run the house', icon: 'users' },
        { label: 'Gallery', path: '/gallery', desc: 'Suites, spa, dining room and gardens', icon: 'image' },
        { label: 'Guest Reviews', path: '/reviews', desc: '4.9 stars from more than 3,500 guests', icon: 'star' },
        { label: 'Careers', path: '/careers', desc: 'Build a career in independent hospitality', icon: 'graduation' }
      ]
    },
    { label: 'Stay & Services', path: '/services', mega: 'services' },
    {
      label: 'Plan Your Stay',
      path: '/offers',
      mega: 'plan',
      children: [
        { label: 'Offers & Packages', path: '/offers', desc: 'Curated escapes and seasonal rates', icon: 'gift' },
        { label: 'Frequently Asked Questions', path: '/faq', desc: 'Check-in, parking, pets, dining and more', icon: 'headphones' },
        { label: 'Getting Here', path: '/contact#directions', desc: 'Directions, parking and airport transfers', icon: 'map-pin' },
        { label: 'Reservations', path: '/contact#book', desc: 'Talk to the front desk, day or night', icon: 'calendar-check' }
      ]
    },
    { label: 'Journal', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ],

  /* --------------------------------------------------------------- footer */
  footerColumns: [
    {
      title: 'The House',
      links: [
        { label: 'Our Story', path: '/about' },
        { label: 'Meet the Team', path: '/team' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Guest Reviews', path: '/reviews' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Plan Your Stay',
      links: [
        { label: 'Offers & Packages', path: '/offers' },
        { label: 'Frequently Asked Questions', path: '/faq' },
        { label: 'Getting Here', path: '/contact#directions' },
        { label: 'Reservations', path: '/contact#book' },
        { label: 'Accessibility', path: '/accessibility' }
      ]
    }
  ],
  legalLinks: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Stay', path: '/terms' },
    { label: 'Accessibility Statement', path: '/accessibility' },
    { label: 'Sitemap', path: '/sitemap' }
  ],
  credit: {
    prefix: 'Web and Marketing By ',
    label: 'KC Web Design Pros',
    url: 'https://kansascitywebdesignpros.com/'
  },

  /* ------------------------------------------------------------- aggregate */
  team,
  reviews: testimonials.slice(0, 8),
  testimonialList: testimonials,
  services,
  serviceNames: services.map((s) => s.name),
  rating: { value: '4.9', count: 3520 }
};

module.exports = SITE;
