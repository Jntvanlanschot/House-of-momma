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
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-200">
          {trip.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {trip.teaser}
        </p>

        <Link
          href={`/trips/${trip.slug}`}
          className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200 group/link"
        >
          Bekijk trip
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
