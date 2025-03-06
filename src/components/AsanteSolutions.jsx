import { ArrowRight, Database, Filter, Recycle, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Solution data with images, descriptions and detailed information - ordered by process flow
const solutionData = [
  {
    id: 'collection',
    step: '01',
    name: 'Waste Collection',
    image: '/img/dispose.jpeg',
    description: 'The foundation of effective waste management begins at the source.',
    detailedDescription: 'We provide labeled bins for recyclables, organics, and hazardous waste to maintain pure waste streams. Our dedicated collection vehicles and education programs ensure efficient collection and ongoing compliance.',
    icon: <Truck className="w-6 h-6" />,
    link: '/services/collection'
  },
  {
    id: 'sorting',
    step: '02',
    name: 'Sorting & Processing',
    image: '/img/Waste-Segegration-Image-2.jpeg',
    description: 'Advanced sorting at our Material Recovery Facility ensures maximum recovery.',
    detailedDescription: 'Using both manual sorting and automated systems like magnets and optical sorters, we separate materials by type and remove contaminants. Pre-processing through shredding, baling, and compacting improves efficiency throughout the recycling chain.',
    icon: <Filter className="w-6 h-6" />,
    link: '/services/sorting'
  },
  {
    id: 'recycling',
    step: '03',
    name: 'Recycling & Recovery',
    image: '/img/recycling.jpg',
    description: 'Transforming waste into valuable resources through innovative techniques.',
    detailedDescription: 'We convert plastics into pellets, melt and repurpose metals, and process organic waste into nutrient-rich fertilizer or biogas. Our resource recovery maximizes the value extracted from waste materials while minimizing environmental impact.',
    icon: <Recycle className="w-6 h-6" />,
    link: '/services/recycling'
  },
  {
    id: 'disposal',
    step: '04',
    name: 'Residual Disposal',
    image: '/img/landfill_and_smoke_(blog_image).jpg',
    description: 'Environmentally responsible management of non-recyclable materials.',
    detailedDescription: 'For materials that cannot be recycled or recovered, we utilize sanitary landfills with advanced protection systems including liners, leachate collection, and gas capture. By minimizing landfill volume, we create a more sustainable waste management cycle.',
    icon: <Database className="w-6 h-6" />,
    link: '/services/disposal'
  }
];

const SolutionCard = ({ solution }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl h-[300px]">
      {/* Image */}
      <div className="h-32 overflow-hidden">
        <img 
          src={solution.image} 
          alt={solution.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="p-2 rounded-full bg-blue-100 text-blue-700 mr-3">
            {solution.icon}
          </div>
          <h3 className="text-lg font-bold text-gray-800">{solution.name}</h3>
        </div>
        <div className="absolute top-2 right-2 bg-blue-900 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
          {solution.step}
        </div>
        <p className="text-gray-600 text-sm">{solution.description}</p>
      </div>
      
      {/* Hover overlay with more details */}
      <div className="absolute inset-0 bg-blue-900/90 flex flex-col justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
        <h3 className="text-lg font-bold mb-2">{solution.name}</h3>
        <p className="text-sm mb-3 overflow-y-auto max-h-[60%]">{solution.detailedDescription}</p>
        <Link 
          to={solution.link} 
          className="mt-auto flex items-center py-2 px-4 bg-white text-blue-900 text-sm font-medium rounded hover:bg-blue-100 transition-colors w-fit"
        >
          Learn More <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const AsanteSolutions = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Integrated System</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">The Asante Waste Management Solution</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach prioritizes resource recovery and sustainability
            at every stage of the waste lifecycle, from collection to final disposal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionData.map((solution, index) => (
            <div key={solution.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <SolutionCard solution={solution} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsanteSolutions; 