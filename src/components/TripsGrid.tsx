import { trips } from '@/lib/trips';
import TripCard from './TripCard';

export default function TripsGrid() {
  return (
    <section id="trips" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Onze reizen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek onze exclusieve Fitcations in samenwerking met Primal. 
            Unieke locaties, professionele begeleiding en een onvergetelijke ervaring.
          </p>
        </div>

        {/* Trips Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}
