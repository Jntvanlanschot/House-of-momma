import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getTripBySlug } from '@/lib/trips';
import type { Metadata } from 'next';

interface TripPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: TripPageProps): Promise<Metadata> {
  const trip = getTripBySlug(params.slug);
  
  if (!trip) {
    return {
      title: 'Trip niet gevonden - House of Momma',
    };
  }

  return {
    title: `${trip.title} - House of Momma`,
    description: trip.teaser,
    openGraph: {
      title: `${trip.title} - House of Momma`,
      description: trip.teaser,
      images: [trip.image],
    },
  };
}

export default function TripPage({ params }: TripPageProps) {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-4xl">
              <div className="mb-4">
                <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {trip.badge}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                {trip.title}
              </h1>
              <p className="text-xl text-white/90">
                {trip.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Teaser */}
            <div className="mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                {trip.teaser}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Wat is inbegrepen */}
                <div>
                  <h2 className="text-2xl font-bold text-secondary mb-6">
                    Wat is inbegrepen
                  </h2>
                  <ul className="space-y-3">
                    {trip.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Programma in het kort */}
                <div>
                  <h2 className="text-2xl font-bold text-secondary mb-6">
                    Programma in het kort
                  </h2>
                  <ul className="space-y-3">
                    {trip.program.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:sticky lg:top-8 lg:h-fit">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-6">
                    Prijsindicatie
                  </h3>
                  
                  <div className="mb-8">
                    <p className="text-3xl font-bold text-primary mb-2">
                      {trip.price}
                    </p>
                    <p className="text-gray-600 text-sm">
                      * Prijzen kunnen variëren afhankelijk van het seizoen en groepsgrootte
                    </p>
                  </div>

                  <Link
                    href={`/#contact?trip=${trip.slug}`}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 focus-ring text-center block"
                  >
                    Aanvragen
                  </Link>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    We nemen binnen 2 werkdagen contact op
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Trips */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/#trips"
              className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Terug naar alle reizen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
