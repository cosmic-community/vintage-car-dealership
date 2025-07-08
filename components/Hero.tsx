import Link from 'next/link';
import CarAnimation from './CarAnimation';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vintage-black via-vintage-charcoal to-vintage-dark"></div>
      
      {/* Animated Car */}
      <CarAnimation />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
          <span className="text-vintage-cream">Vintage</span>
          <span className="text-gradient"> Cars</span>
        </h1>
        <p className="text-xl md:text-2xl text-vintage-cream mb-8 max-w-3xl mx-auto">
          Discover rare vintage automobiles and experience the artistry of classic car restoration. 
          Where timeless craftsmanship meets modern expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/cars" className="btn-vintage">
            View Collection
          </Link>
          <Link href="/team" className="btn-vintage-outline">
            Meet Our Team
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-vintage-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-vintage-rust opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}