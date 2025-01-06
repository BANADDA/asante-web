import { ArrowRight, Calendar, Container, Factory, Recycle, Shield, Trash2 } from 'lucide-react';

const ArrowIcon = () => (
  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm absolute bottom-6 right-6">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-600">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, whiteBackground }) => (
  <div className={`${whiteBackground ? 'bg-white' : 'bg-green-50/80'} p-6 rounded-lg relative min-h-[220px]`}>
    <div className="mb-4">
      <Icon className="w-6 h-6 text-green-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    <ArrowIcon />
  </div>
);

const WasteServices = () => {
  const services = [
    {
      icon: Calendar,
      title: "Refuse Collection Services",
      description: "We provide well-organized and responsive refuse collection services to all types of residents, commercial & industrial clients, with customized household waste collection operations exceeding expectations.",
      whiteBackground: true
    },
    {
      icon: Factory,
      title: "Construction Waste Solution",
      description: "From design to construction, we help contractors and builders achieve their green-building goals. Our construction waste disposal offers full-service solutions, specializing in roll-off container rental services.",
      whiteBackground: false
    },
    {
      icon: Recycle,
      title: "WEEE Recycling Services",
      description: "Our Waste Electrical and Electronic Equipment collection service provides high recycling rates for your IT equipment, with complete WEEE recycling compliance solutions regardless of size or type.",
      whiteBackground: true
    },
    {
      icon: Container,
      title: "Events Waste Management",
      description: "Public events often create significant waste. We offer complete solutions for event waste and recycling requirements, promoting recycling activity to improve your audience's environmental perception.",
      whiteBackground: false
    },
    {
      icon: Shield,
      title: "Secure Destruction",
      description: "With the rise in identity and document theft, we provide secure destruction for bank statements, private records, and contracts, ensuring safe and secure product recycling or destruction.",
      whiteBackground: true
    },
    {
      icon: Trash2,
      title: "Waste Management Consultation",
      description: "Our environmental consultancy provides practical, knowledgeable services to organizations. Our consultants develop tailored waste management plans with high-quality documentation and procedures.",
      whiteBackground: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Waste Services</h2>
        <a
          href="/all-services"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
        >
          View All Services
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            whiteBackground={service.whiteBackground}
          />
        ))}
      </div>
    </div>
  );
};

export default WasteServices;