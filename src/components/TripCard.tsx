import Link from 'next/link';
import Image from 'next/image';
import { Trip } from '@/lib/trips';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {trip.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-light text-secondary mb-4 group-hover:text-primary transition-colors duration-300 tracking-wide">
          {trip.title}
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed font-light text-base">
          {trip.teaser}
        </p>

        <Link
          href={`/trips/${trip.slug}`}
          className="inline-flex items-center text-primary font-light hover:text-primary/80 transition-all duration-300 group/link tracking-wider"
        >
          Bekijk trip
          <svg
            className="w-4 h-4 ml-3 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
