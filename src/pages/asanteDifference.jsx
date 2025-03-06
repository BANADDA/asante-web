import WasteServices from '@/widgets/about-cards';
import DownloadSection from '@/widgets/DownloadButton';
import ValuedClients from '@/widgets/ValuedClients';
import VideoSection from '@/widgets/VideoSection';
import { ArrowRight, Building2, Container, Droplets, Factory, Sparkles, Store } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const serviceDetails = {
  'Residential Waste': {
    icon: Building2,
    title: 'Residential Waste Management',
    description: 'We provide well-organized and responsive refuse collection services to all types of residents.',
    features: [
      'Weekly scheduled pickups',
      'Recycling services',
      'Green waste collection'
    ]
  },
  'Commercial Waste': {
    icon: Factory,
    title: 'Commercial Waste Solutions',
    description: 'Tailored waste management solutions for businesses and commercial properties.',
    features: [
      'Customized waste collection operations',
      'Meeting and exceeding clients\' expectations',
      'Compliance documentation'
    ]
  },
  'Retail And Institutional': {
    icon: Store,
    title: 'Construction & Demolition Waste Solution',
    description: 'From design to construction, we help contractors and builders achieve their green-building and sustainability goals.',
    features: [
      'Full-service waste disposal solutions',
      'Roll-off container rental services',
      'Construction waste recycling'
    ]
  },
  'Commercial Liquid': {
    icon: Droplets,
    title: 'Cesspool & Drain Cleaning',
    description: 'Rapid, responsive services for sewage spills and drain blockages using the latest technology.',
    features: [
      'Specialist jetting equipment',
      'Vacuum tankers',
      '24/7 emergency response'
    ]
  },
  'Dumpster Rental': {
    icon: Container,
    title: 'Dumpster Rental Services',
    description: 'Flexible dumpster rental solutions for various project needs.',
    features: [
      'Multiple size options',
      'Flexible rental periods',
      'Same-day delivery'
    ]
  },
  'Industrial Cleaning': {
    icon: Sparkles,
    title: 'Industrial Cleaning Services',
    description: 'Professional cleaning services for industrial facilities and equipment.',
    features: [
      'High-pressure cleaning',
      'Equipment sanitization',
      'Facility maintenance'
    ]
  }
};

const ServiceDetailsModal = ({ service, visible }) => {
  const details = serviceDetails[service];
  
  if (!details || !visible) return null;
  
  const { icon: Icon, title, description, features } = details;
  
  return (
    <div 
      className="w-full md:w-3/4 lg:w-4/5 p-6 bg-white rounded-lg shadow"
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <Icon className="w-8 h-8 text-green-700" />
          </div>
        </div>
        
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-3">Service Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 50)}
                >
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200" data-aos="fade-up" data-aos-delay="500">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition-colors duration-200"
            >
              <span>Request This Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceButton = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);
  const Icon = serviceDetails[service].icon;
  
  return (
    <div className="relative">
      <button 
        className="w-full flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded transition-colors duration-200"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <span className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          {service}
        </span>
        <ArrowRight className="w-4 h-4" />
      </button>
      <ServiceDetailsModal service={service} visible={showDetails} />
    </div>
  );
};

const ServicesLayout = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-[200px] bg-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/waste-4.jpg')] bg-cover bg-center opacity-30"></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-6" data-aos="fade-up">
            Our Services
          </h1>
          <p className="text-xl text-gray-100 max-w-5xl font-medium leading-snug" data-aos="fade-up" data-aos-delay="200">
            We offer a full range of waste management services to
            both public & private clients across categories such as
            Hazardous Waste, Domestic Waste, Medical Waste and
            Pharmaceutical, Cesspool, E-Waste as well as Oil and Gas
            Waste
          </p>
        </div>
      </div>


      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-72 shrink-0" data-aos="fade-right" data-aos-duration="800">
            {/* Services Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Our Services</h2>
              <div className="flex flex-col gap-2">
                {Object.keys(serviceDetails).map((service, index) => (
                  <div key={service} data-aos="fade-up" data-aos-delay={100 + (index * 50)}>
                    <ServiceButton service={service} />
                  </div>
                ))}
              </div>
            </div>

            {/* Trusted Section */}
            <div className="bg-green-900 p-6 rounded-lg text-white mb-8" data-aos="fade-up" data-aos-delay="300">
              <span className="block mb-4">Trusted And Reliable Waste Collection!</span>
              <a href="tel:+256414691868" className="hover:text-green-200 transition-colors">
                +256 414 691 868
              </a>
              <div className="text-sm mt-1">Kampala, Uganda</div>
              <Link 
                to="/contact" 
                className="flex items-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white px-4 py-2 rounded transition-colors duration-200"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Download Section */}
            <div>
              <DownloadSection/>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-gray-600 mb-2">
                We serve hundreds of partners across Uganda, including residential homes, businesses, industries, and institutions. Our comprehensive waste management solutions are tailored to your specific needs, ensuring efficient and environmentally responsible waste disposal.
              </p>

              {/* Video Section */}
              <VideoSection/>
            </div>

            {/* Key Benefits Section */}
            <WasteServices/>
          </div>
        </div>
          <ValuedClients/>
      </div>
    </div>
  );
};

export default ServicesLayout;