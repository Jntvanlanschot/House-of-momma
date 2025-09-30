export interface Trip {
  id: string;
  title: string;
  slug: string;
  teaser: string;
  image: string;
  badge: string;
  included: string[];
  program: string[];
  price: string;
  location: string;
}

export const trips: Trip[] = [
  {
    id: 'primal-kitesafari',
    title: 'Primal Kitesafari – Egyptian Desert',
    slug: 'primal-kitesafari-egyptian-desert',
    teaser: 'Een week lang kitesurfen tussen ongerepte zandbanken en kristalhelder water.',
    image: '/trip-kitesafari.jpg',
    badge: 'Primal Collaboration',
    location: 'Egyptian Desert',
    included: [
      'Kite-coaching (alle niveaus)',
      'Boot & crew',
      '3 maaltijden/dag',
      'Veilig downwind support',
      'Groepsworkouts & mobility',
      'Fotografie'
    ],
    program: [
      'Dagelijks kite-sessions',
      'Techniekblokken',
      'Sunset recovery',
      'Desert-overnight ervaring'
    ],
    price: 'vanaf € 2.450 p.p., excl. vlucht'
  },
  {
    id: 'fitcation-zanzibar',
    title: 'Fitcation – Zanzibar',
    slug: 'fitcation-zanzibar',
    teaser: 'Train, herstel en ontspan op \'s werelds mooiste specerijeneiland.',
    image: '/trip-zanzibar.jpg',
    badge: 'House of Momma',
    location: 'Zanzibar',
    included: [
      'Boutique accommodatie',
      'Dagelijkse strength & conditioning',
      'Mobility/yoga',
      'Ontbijt + lichte lunch',
      'Eilandexcursie',
      'Beach workouts'
    ],
    program: [
      'Ochtendtraining',
      'Vrije middag (duiken/kite/relax)',
      'Avondmobility',
      'Weekend excursie'
    ],
    price: 'vanaf € 1.850 p.p., excl. vlucht'
  }
];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find(trip => trip.slug === slug);
}
