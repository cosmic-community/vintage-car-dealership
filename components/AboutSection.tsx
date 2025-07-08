export default function AboutSection() {
  return (
    <section className="section-padding bg-vintage-charcoal">
      <div className="container-vintage">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Passion for Vintage Excellence
            </h2>
            <div className="space-y-6 text-vintage-cream">
              <p className="text-lg">
                Since 1985, we've been dedicated to preserving automotive history through expert restoration 
                and careful curation of classic vehicles. Our passion for vintage automobiles drives everything we do.
              </p>
              <p className="text-lg">
                From complete frame-off restorations to finding the perfect classic car for your collection, 
                we combine traditional craftsmanship with modern expertise to deliver exceptional results.
              </p>
              <p className="text-lg">
                Whether you're a serious collector, weekend enthusiast, or someone discovering the world of 
                vintage cars for the first time, we're here to help you find and maintain automotive treasures.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-vintage p-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-vintage-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-vintage-gold mb-2">Expert Restoration</h3>
              <p className="text-vintage-cream">Complete frame-off restorations using authentic parts and techniques.</p>
            </div>

            <div className="card-vintage p-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-vintage-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-vintage-gold mb-2">Certified Appraisals</h3>
              <p className="text-vintage-cream">Professional valuations for insurance, estate, and sales purposes.</p>
            </div>

            <div className="card-vintage p-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-vintage-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-vintage-gold mb-2">Acquisition Services</h3>
              <p className="text-vintage-cream">Help finding and acquiring specific vintage vehicles for your collection.</p>
            </div>

            <div className="card-vintage p-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-vintage-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-vintage-gold mb-2">Maintenance & Service</h3>
              <p className="text-vintage-cream">Ongoing care and maintenance to keep your classics running perfectly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}