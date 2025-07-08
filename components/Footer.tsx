import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-vintage-charcoal border-t border-vintage-dark">
      <div className="container-vintage section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-vintage-black font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold text-vintage-gold">Vintage Cars</span>
            </div>
            <p className="text-vintage-cream">
              Specializing in rare vintage automobiles and professional restoration services since 1985.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-vintage-gold font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-vintage-cream hover:text-vintage-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-vintage-cream hover:text-vintage-gold transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-vintage-cream hover:text-vintage-gold transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-vintage-gold font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-vintage-cream">Classic Car Sales</li>
              <li className="text-vintage-cream">Full Restoration</li>
              <li className="text-vintage-cream">Appraisal Services</li>
              <li className="text-vintage-cream">Parts & Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-vintage-gold font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-vintage-cream">
                123 Classic Car Lane<br />
                Vintage City, CA 90210
              </p>
              <p className="text-vintage-cream">
                Phone: (555) 123-4567<br />
                Email: info@vintagecars.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-vintage-dark mt-8 pt-8 text-center">
          <p className="text-vintage-cream">
            © 2024 Vintage Cars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}