import { X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sector data with detailed information for Asante Waste Management
const sectorData = [
  {
    id: 'residential',
    name: 'Residential',
    wasteTypes: ['Household waste', 'Garden waste', 'Recyclables', 'Electronic waste', 'Bulky items'],
    description: 'We provide reliable door-to-door waste collection services for residential areas across Uganda, ensuring your neighborhood stays clean while promoting sustainable waste disposal practices.',
    examples: ['Apartment complexes', 'Residential estates', 'Suburban communities', 'Gated communities', 'Individual homes'],
  },
  {
    id: 'commercial',
    name: 'Commercial',
    wasteTypes: ['Office waste', 'Retail waste', 'Food waste', 'Packaging materials', 'Confidential documents'],
    description: 'Our commercial waste management solutions help businesses maintain clean premises while complying with environmental regulations. We offer scheduled collection services tailored to your business needs.',
    examples: ['Office buildings', 'Shopping centers', 'Restaurants', 'Hotels', 'Banks', 'Retail stores'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    wasteTypes: ['Biomedical waste', 'Sharps', 'Pharmaceutical waste', 'Infectious materials', 'Non-hazardous medical waste'],
    description: 'We specialize in safe disposal of healthcare waste, providing compliant solutions for medical facilities of all sizes with proper segregation, collection, and disposal of hazardous materials.',
    examples: ['Hospitals', 'Clinics', 'Dental practices', 'Laboratories', 'Pharmaceutical companies', 'Veterinary clinics'],
  },
  {
    id: 'industrial',
    name: 'Industrial',
    wasteTypes: ['Manufacturing waste', 'Construction debris', 'Chemical waste', 'Metal scraps', 'Packaging waste'],
    description: 'Our industrial waste management services handle large volumes of waste from manufacturing and processing facilities, with specialized disposal methods for various industrial materials.',
    examples: ['Factories', 'Construction sites', 'Warehouses', 'Processing plants', 'Manufacturing facilities'],
  }
];

// Asante's actual statistics
const statsData = [
  {
    value: '10+',
    label: 'Years Serving Uganda'
  },
  {
    value: '20K+',
    label: 'Satisfied Customers'
  },
  {
    value: '500+',
    label: 'Tonnes Recycled Monthly'
  }
];

const SectorsWeServe = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  
  const openSectorDetails = (sectorId) => {
    const sector = sectorData.find(s => s.id === sectorId);
    setSelectedSector(sector);
  };
  
  const closeSectorDetails = () => {
    setSelectedSector(null);
  };
  
  return (
    <section className="relative">
      {/* Main sector section with blue background */}
      <div className="bg-blue-900 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Waste Management Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectorData.map((sector) => (
              <button
                key={sector.id}
                onClick={() => openSectorDetails(sector.id)}
                className="bg-white py-2 px-4 text-center text-gray-800 text-sm font-medium hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                {sector.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Statistics section with light gray background */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center px-6 py-4 ${
                  index !== 0 ? 'md:border-l md:border-blue-300' : ''
                } flex-1 flex flex-col justify-center`}
              >
                <div className="text-4xl font-bold text-blue-900 mb-1" data-aos="fade-up">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm" data-aos="fade-up" data-aos-delay="100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sector Details Modal */}
      {selectedSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-white rounded-md shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-blue-900 p-3 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">{selectedSector.name} Waste Management</h3>
              <button 
                onClick={closeSectorDetails}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-5">
              <p className="text-gray-700 text-sm mb-4">{selectedSector.description}</p>
              
              {/* Waste Types */}
              <div className="mb-4">
                <h4 className="text-base font-semibold text-gray-800 mb-2">Types of Waste We Handle</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                  {selectedSector.wasteTypes.map((type, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Examples */}
              <div className="mb-4">
                <h4 className="text-base font-semibold text-gray-800 mb-2">We Serve</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedSector.examples.map((example, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 text-xs"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Contact Button */}
              <div className="text-center mt-5">
                <Link 
                  to="/contact" 
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 text-sm transition-colors"
                >
                  Request {selectedSector.name} Waste Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectorsWeServe; 