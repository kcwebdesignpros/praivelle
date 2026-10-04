'use strict';
/**
 * JSON-LD structured-data builders.
 * Every builder returns a plain object; the head partial serialises it into
 * <script type="application/ld+json"> tags.
 */

const WEEK = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

function abs(site, p) {
  if (!p) return site.url;
  if (/^https?:\/\//i.test(p)) return p;
  return site.url.replace(/\/$/, '') + (p.startsWith('/') ? p : '/' + p);
}

/* ------------------------------------------------------------------ core */

function localBusiness(site) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Hotel', 'LodgingBusiness', 'LocalBusiness'],
    '@id': abs(site, '/#organization'),
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    slogan: site.tagline,
    logo: {
      '@type': 'ImageObject',
      url: abs(site, site.logo),
      width: site.logoWidth,
      height: site.logoHeight
    },
    image: [abs(site, '/img/og-image.jpg'), abs(site, '/img/hero.webp'), abs(site, '/img/about-lobby.webp')],
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.founded),
    priceRange: site.priceRange,
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card, American Express, Gift Voucher',
    numberOfRooms: site.roomCount,
    starRating: { '@type': 'Rating', ratingValue: site.starRating, bestRating: 5 },
    checkinTime: site.checkIn,
    checkoutTime: site.checkOut,
    petsAllowed: true,
    smokingAllowed: false,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng
    },
    hasMap: site.mapUrl,
    areaServed: site.serviceAreas.map((a) => ({ '@type': 'City', name: a })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
      geoRadius: 60000
    },
    openingHoursSpecification: site.hoursSpec.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes
    })),
    sameAs: site.socials.map((s) => s.url),
    knowsAbout: site.knowsAbout,
    amenityFeature: site.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
      value: true
    })),
    makesOffer: site.services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        url: abs(site, '/services/' + s.slug)
      }
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1
    },
    review: site.reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 }
    })),
    employee: site.team.map((t) => ({
      '@type': 'Person',
      name: t.name,
      jobTitle: t.role,
      image: abs(site, t.image),
      alumniOf: t.education
    }))
  };
}

function website(site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs(site, '/#website'),
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: 'en-US',
    publisher: { '@id': abs(site, '/#organization') },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: abs(site, '/search?q={search_term_string}') },
      'query-input': 'required name=search_term_string'
    }
  };
}

function breadcrumbs(items, site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(site, it.path)
    }))
  };
}

function webPage(page, site) {
  return {
    '@context': 'https://schema.org',
    '@type': page.schemaType || 'WebPage',
    '@id': abs(site, page.path) + '#webpage',
    url: abs(site, page.path),
    name: page.metaTitle,
    description: page.metaDescription,
    isPartOf: { '@id': abs(site, '/#website') },
    about: { '@id': abs(site, '/#organization') },
    primaryImageOfPage: page.heroImage ? abs(site, page.heroImage) : undefined,
    inLanguage: 'en-US',
    datePublished: page.datePublished,
    dateModified: page.dateModified
  };
}

function service(service, site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': abs(site, '/services/' + service.slug) + '#service',
    name: service.name,
    alternateName: service.shortName,
    serviceType: service.name,
    description: service.metaDescription,
    url: abs(site, '/services/' + service.slug),
    image: abs(site, service.image),
    provider: { '@id': abs(site, '/#organization') },
    areaServed: site.serviceAreas.map((a) => ({ '@type': 'City', name: a })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: abs(site, '/services/' + service.slug),
      servicePhone: site.phone,
      availableLanguage: 'English'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: service.priceValue,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: service.priceValue,
        description: service.priceFrom
      },
      availability: 'https://schema.org/InStock',
      url: abs(site, '/services/' + service.slug)
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name + ' at ' + site.name,
      itemListElement: (service.highlights || []).map((h) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: h }
      }))
    }
  };
}

function faqPage(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

function blogPosting(post, site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': abs(site, '/blog/' + post.slug) + '#article',
    headline: post.title,
    description: post.metaDescription,
    url: abs(site, '/blog/' + post.slug),
    image: { '@type': 'ImageObject', url: abs(site, post.image), width: 1536, height: 1024 },
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { '@type': 'Person', name: post.author, url: abs(site, '/team') },
    publisher: { '@id': abs(site, '/#organization') },
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(site, '/blog/' + post.slug) },
    articleSection: post.category,
    keywords: post.keywords,
    wordCount: post.wordCount,
    inLanguage: 'en-US'
  };
}

function itemList(items, site, name) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: abs(site, it.path)
    }))
  };
}

function howTo(name, steps, site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
      url: abs(site, '/services') + '#step-' + (i + 1)
    }))
  };
}

function personList(team, site) {
  return team.map((t) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': abs(site, '/team#' + t.slug),
    name: t.name,
    honorificSuffix: t.credentials || undefined,
    jobTitle: t.role,
    image: abs(site, t.image),
    description: t.bio && t.bio[0],
    knowsAbout: t.specialties,
    worksFor: { '@id': abs(site, '/#organization') },
    alumniOf: { '@type': 'EducationalOrganization', name: t.education },
    url: abs(site, '/team#' + t.slug)
  }));
}

/** Alias kept so nothing breaks if a route still asks for the old name. */
function medicalWebPage(page, site) {
  return webPage(page, site);
}

module.exports = {
  WEEK,
  abs,
  localBusiness,
  website,
  breadcrumbs,
  webPage,
  medicalWebPage,
  service,
  faqPage,
  blogPosting,
  itemList,
  howTo,
  personList
};
