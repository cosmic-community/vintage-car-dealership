import Link from 'next/link';
import { getCars } from '@/lib/cosmic';
import CarCard from './CarCard';
import { Car } from '@/types';

export default async function FeaturedCars() {
  const cars = await getCars();
  const featuredCars = cars.slice(0, 3); // Show first 3 cars

  return (
    <section className="section-padding bg-vintage-charcoal">
      <div className="container-vintage">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-vintage-cream max-w-3xl mx-auto">
            Explore our handpicked selection of exceptional vintage automobiles, each with its own unique story and character.
          </p>
        </div>

        {featuredCars.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-vintage-gold mb-4">
              New Arrivals Coming Soon
            </h3>
            <p className="text-vintage-cream mb-8">
              We're currently acquiring new vehicles for our collection. Check back soon for exciting additions.
            </p>
            <Link href="/cars" className="btn-vintage">
              View Full Inventory
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredCars.map((car: Car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <div className="text-center">
              <Link href="/cars" className="btn-vintage">
                View All Cars
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}