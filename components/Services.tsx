export default function Services() {
  const services = [
    {
      title: "Business Consulting",
      description: "Strategic guidance and expert advice to help your business thrive in the Korean market.",
      icon: "💼",
    },
    {
      title: "Legal Services",
      description: "Comprehensive legal support for businesses and individuals navigating Korean regulations.",
      icon: "⚖️",
    },
    {
      title: "Translation Services",
      description: "Professional translation services in multiple languages with cultural adaptation.",
      icon: "🌐",
    },
    {
      title: "Immigration Support",
      description: "Expert assistance with visa applications, residency permits, and immigration procedures.",
      icon: "✈️",
    },
    {
      title: "Tax Advisory",
      description: "Tax planning and compliance services tailored to Korean tax regulations.",
      icon: "📊",
    },
    {
      title: "Market Research",
      description: "In-depth market analysis and research to support your business decisions.",
      icon: "🔍",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of professional services to meet your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
