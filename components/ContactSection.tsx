export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-vintage-black">
      <div className="container-vintage">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-vintage-cream max-w-3xl mx-auto">
            Ready to start your vintage car journey? Contact us today to discuss your restoration project, 
            find your dream classic, or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-vintage p-8">
              <h3 className="text-2xl font-bold text-vintage-gold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-vintage-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-vintage-gold">Address</h4>
                    <p className="text-vintage-cream">
                      123 Classic Car Lane<br />
                      Vintage City, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-vintage-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-vintage-gold">Phone</h4>
                    <p className="text-vintage-cream">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-vintage-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-vintage-gold">Email</h4>
                    <p className="text-vintage-cream">info@vintagecars.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-vintage-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-vintage-gold">Hours</h4>
                    <p className="text-vintage-cream">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-vintage p-8">
              <h3 className="text-2xl font-bold text-vintage-gold mb-4">Our Services</h3>
              <ul className="space-y-3 text-vintage-cream">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vintage-gold rounded-full mr-3"></span>
                  Complete Frame-Off Restoration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vintage-gold rounded-full mr-3"></span>
                  Partial Restoration & Repairs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vintage-gold rounded-full mr-3"></span>
                  Certified Appraisal Services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vintage-gold rounded-full mr-3"></span>
                  Classic Car Sales & Acquisition
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vintage-gold rounded-full mr-3"></span>
                  Maintenance & Service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vintage-gold rounded-full mr-3"></span>
                  Parts Sourcing & Installation
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-vintage p-8">
            <h3 className="text-2xl font-bold text-vintage-gold mb-6">Send Us A Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-vintage-gold font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-vintage-dark border border-vintage-gold rounded-md text-vintage-cream focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-vintage-gold font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-vintage-dark border border-vintage-gold rounded-md text-vintage-cream focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-vintage-gold font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-vintage-dark border border-vintage-gold rounded-md text-vintage-cream focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label className="block text-vintage-gold font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-vintage-dark border border-vintage-gold rounded-md text-vintage-cream focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-vintage w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}