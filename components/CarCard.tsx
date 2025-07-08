import Link from 'next/link';
import { Car } from '@/types';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const mainImage = car.metadata.gallery?.[0];
  const price = car.metadata.price ? `$${car.metadata.price.toLocaleString()}` : 'Price on Request';

  return (
    <div className="card-vintage group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        {mainImage ? (
          <img
            src={`${mainImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={car.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            width={400}
            height={300}
          />
        ) : (
          <div className="w-full h-64 bg-vintage-dark flex items-center justify-center">
            <span className="text-vintage-gold text-lg">No Image Available</span>
          </div>
        )}
        
        {/* Status Badge */}
        {car.metadata.status && (
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              car.metadata.status.key === 'available' 
                ? 'bg-green-900 text-green-300' 
                : car.metadata.status.key === 'sold'
                ? 'bg-red-900 text-red-300'
                : 'bg-vintage-rust text-vintage-cream'
            }`}>
              {car.metadata.status.value}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-vintage-gold mb-2">
          {car.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <p className="text-vintage-cream">
            <span className="font-semibold">Year:</span> {car.metadata.year}
          </p>
          <p className="text-vintage-cream">
            <span className="font-semibold">Make:</span> {car.metadata.make}
          </p>
          {car.metadata.mileage && (
            <p className="text-vintage-cream">
              <span className="font-semibold">Mileage:</span> {car.metadata.mileage.toLocaleString()} miles
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-vintage-gold">
            {price}
          </span>
          <Link 
            href={`/cars/${car.slug}`}
            className="btn-vintage-outline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}