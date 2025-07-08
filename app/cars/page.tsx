import { getCars } from '@/lib/cosmic';
import CarCard from '@/components/CarCard';
import { Car } from '@/types';

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <div className="bg-vintage-black min-h-screen">
      <div className="section-padding">
        <div className="container-vintage">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Our Collection
            </h1>
            <p className="text-xl text-vintage-cream max-w-3xl mx-auto">
              Discover our carefully curated collection of vintage automobiles. Each car tells a story of craftsmanship, history, and timeless design.
            </p>
          </div>

          {cars.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-vintage-gold mb-4">
                Collection Coming Soon
              </h2>
              <p className="text-vintage-cream">
                We're currently adding new vehicles to our inventory. Check back soon for our latest acquisitions.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car: Car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}