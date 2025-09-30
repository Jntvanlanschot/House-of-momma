import { trips } from '@/lib/trips';
import TripCard from './TripCard';

export default function TripsGrid() {
  return (
    <section id="trips" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-secondary mb-8 tracking-tight">
            Onze reizen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
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
