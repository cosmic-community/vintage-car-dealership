import Link from 'next/link';
import CarAnimation from './CarAnimation';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vintage-black via-vintage-charcoal to-vintage-dark"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          
          {/* Left Side - Car Animation */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md h-64 lg:h-80 flex items-center justify-center">
              <CarAnimation />
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
              <span className="text-vintage-cream">Vintage</span>
              <span className="text-gradient"> Cars</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-vintage-cream mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover rare vintage automobiles and experience the artistry of classic car restoration. 
              Where timeless craftsmanship meets modern expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/cars" className="btn-vintage">
                View Collection
              </Link>
              <Link href="/team" className="btn-vintage-outline">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-vintage-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-vintage-rust opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}