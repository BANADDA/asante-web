import { ChevronRight, MapPin, X } from 'lucide-react';
import { useState } from 'react';

// Data for cities served
const cityData = [
  {
    id: 'kampala',
    name: 'Kampala',
    image: '/img/kampala.jpeg',
    customers: '5,600+',
    description: 'Comprehensive waste management services across Uganda\'s capital city'
  },
  {
    id: 'jinja',
    name: 'Jinja',
    image: '/img/Jinja.jpg',
    customers: '2,800+',
    description: 'Serving the industrial hub and source of the Nile with sustainable waste solutions'
  },
  {
    id: 'soroti',
    name: 'Soroti',
    image: '/img/soroti.jpg',
    customers: '1,450+',
    description: 'Customized waste collection and recycling programs for Eastern Uganda'
  },
  {
    id: 'entebbe',
    name: 'Entebbe',
    image: '/img/entebbe.jpg',
    customers: '2,100+',
    description: 'Specialized waste services for the airport city and surrounding communities'
  },
  {
    id: 'mbale',
    name: 'Mbale',
    image: '/img/mbale.jpeg',
    customers: '1,750+',
    description: 'Efficient waste management at the foothills of Mount Elgon'
  },
  {
    id: 'arua',
    name: 'Arua',
    image: '/img/arua.jpg',
    customers: '1,200+',
    description: 'Comprehensive waste solutions for the West Nile region'
  },
  {
    id: 'kitgum',
    name: 'Kitgum',
    image: '/img/kitgum.jpg',
    customers: '950+',
    description: 'Tailored waste management services for Northern Uganda'
  },
  {
    id: 'mbarara',
    name: 'Mbarara',
    image: '/img/mbarara.jpg',
    customers: '2,300+',
    description: 'Supporting Western Uganda with innovative waste recovery programs'
  }
];

const CityCard = ({ city }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white">
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={city.image} 
          alt={`${city.name}, Uganda`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-4 relative -mt-16">
        <div className="bg-white p-4 rounded-lg shadow-md relative">
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">{city.name}</h3>
          </div>
          <p className="text-blue-600 font-semibold text-sm">{city.customers} Customers</p>
        </div>
      </div>
    </div>
  );
};

const CitiesWeServe = () => {
  const [showAllCities, setShowAllCities] = useState(false);
  const visibleCities = showAllCities ? cityData : cityData.slice(0, 5);
  
  const toggleAllCities = () => {
    setShowAllCities(!showAllCities);
  };
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Some of the cities we serve</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing waste management solutions across major cities and communities in Uganda and beyond
          </p>
        </div>
        
        {/* City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {visibleCities.map((city) => (
            <div key={city.id} data-aos="fade-up">
              <CityCard city={city} />
            </div>
          ))}
        </div>
        
        {/* See All Button */}
        <div className="text-center">
          <button
            onClick={toggleAllCities}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors"
          >
            {showAllCities ? 'Show Less' : 'See All Locations'} 
            {!showAllCities && <ChevronRight className="ml-1 w-4 h-4" />}
          </button>
        </div>
        
        {/* Full Modal View for All Cities */}
        {showAllCities && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={toggleAllCities}>
            <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800">All Locations We Serve</h3>
                <button onClick={toggleAllCities} className="p-2 rounded-full hover:bg-gray-100">
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cityData.map((city) => (
                    <div key={city.id}>
                      <CityCard city={city} />
                      <p className="mt-3 text-sm text-gray-600">{city.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CitiesWeServe; 