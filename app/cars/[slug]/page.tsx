// app/cars/[slug]/page.tsx
import { getCar } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import CarGallery from '@/components/CarGallery';
import CarSpecs from '@/components/CarSpecs';
import { Car } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CarPage({ params }: PageProps) {
  const { slug } = await params;
  const car = await getCar(slug);

  if (!car) {
    notFound();
  }

  const mainImage = car.metadata.gallery?.[0];
  const price = car.metadata.price ? `$${car.metadata.price.toLocaleString()}` : 'Price on Request';

  return (
    <div className="bg-vintage-black min-h-screen">
      <div className="section-padding">
        <div className="container-vintage">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <CarGallery images={car.metadata.gallery || []} title={car.title} />
            </div>

            {/* Car Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                  {car.title}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-vintage-gold">
                    {price}
                  </span>
                  {car.metadata.status && (
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      car.metadata.status.key === 'available' 
                        ? 'bg-green-900 text-green-300' 
                        : car.metadata.status.key === 'sold'
                        ? 'bg-red-900 text-red-300'
                        : 'bg-vintage-rust text-vintage-cream'
                    }`}>
                      {car.metadata.status.value}
                    </span>
                  )}
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-vintage-gold font-semibold mb-1">Year</h3>
                  <p className="text-vintage-cream">{car.metadata.year}</p>
                </div>
                <div>
                  <h3 className="text-vintage-gold font-semibold mb-1">Make</h3>
                  <p className="text-vintage-cream">{car.metadata.make}</p>
                </div>
                <div>
                  <h3 className="text-vintage-gold font-semibold mb-1">Model</h3>
                  <p className="text-vintage-cream">{car.metadata.model}</p>
                </div>
                {car.metadata.mileage && (
                  <div>
                    <h3 className="text-vintage-gold font-semibold mb-1">Mileage</h3>
                    <p className="text-vintage-cream">{car.metadata.mileage.toLocaleString()} miles</p>
                  </div>
                )}
              </div>

              {/* Description */}
              {car.metadata.description && (
                <div>
                  <h3 className="text-xl font-semibold text-vintage-gold mb-4">Description</h3>
                  <div 
                    className="text-vintage-cream prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: car.metadata.description }}
                  />
                </div>
              )}

              {/* Specifications */}
              {car.metadata.specifications && (
                <CarSpecs specs={car.metadata.specifications} />
              )}

              {/* Contact Button */}
              <div className="pt-6">
                <button className="btn-vintage w-full md:w-auto">
                  Contact Us About This Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}