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
    description: 'Comprehensive waste collection services for homes and residential areas.',
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
      'Daily/weekly collection schedules',
      'Bulk waste removal',
      'Compliance documentation'
    ]
  },
  'Retail And Institutional': {
    icon: Store,
    title: 'Retail & Institutional Services',
    description: 'Specialized waste management for retail stores, schools, and institutions.',
    features: [
      'High-volume waste handling',
      'Recycling programs',
      'Loading dock collection'
    ]
  },
  'Commercial Liquid': {
    icon: Droplets,
    title: 'Commercial Liquid Waste',
    description: 'Safe disposal of commercial liquid waste and hazardous materials.',
    features: [
      'EPA-compliant disposal',
      'Scheduled collection',
      'Emergency response'
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
  if (!visible) return null;
  
  const details = serviceDetails[service];
  
  return (
    <div className="absolute left-full top-0 ml-2 w-80 bg-white rounded-lg shadow-xl p-4 z-50">
      <div className="flex items-start gap-3 mb-3">
        {details.icon && <details.icon className="w-5 h-5 text-green-600 shrink-0 mt-1" />}
        <div>
          <h3 className="font-semibold text-lg">{details.title}</h3>
          <p className="text-sm text-gray-600">{details.description}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {details.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
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
    <h1 className="text-4xl font-bold text-white mb-6">
      Our Services
    </h1>
    <p className="text-xl text-gray-100 max-w-5xl font-medium leading-snug">
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
          <div className="w-full md:w-72 shrink-0">
            {/* Services Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Our Services</h2>
              <div className="flex flex-col gap-2">
                {Object.keys(serviceDetails).map((service) => (
                  <ServiceButton key={service} service={service} />
                ))}
              </div>
            </div>

            {/* Trusted Section */}
            <div className="bg-green-900 p-6 rounded-lg text-white mb-8">
              <h3 className="text-xl font-bold mb-3">Trusted And Reliable Waste Collection!</h3>
              <p className="mb-4">We offer customers regular collection of trash on a scheduled or call basis, with a safe level of service.</p>
              <div className="mb-4">
                <p className="mb-2">+256 778 841383</p>
                <p>Kampala, Uganda</p>
              </div>
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