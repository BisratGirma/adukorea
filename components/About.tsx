export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Excellence in Korea
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are dedicated to providing top-tier professional services and consulting
              solutions tailored to meet your needs in Korea. Our team of experts brings
              years of experience and local knowledge to every project.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With a commitment to excellence and customer satisfaction, we strive to
              deliver results that exceed expectations and help our clients achieve
              their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-700">Happy Clients</div>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-700">Team Members</div>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-700">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
