import {
    Building,
    Building2,
    Construction,
    Container,
    Droplets,
    Factory,
    PenTool,
    Recycle,
    ScrollText,
    ShieldCheck,
    Trash2,
    Trees
} from 'lucide-react';

const ArrowIcon = () => (
  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm absolute bottom-6 right-6">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-600">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, whiteBackground }) => (
  <div className={`${whiteBackground ? 'bg-white' : 'bg-green-50/80'} p-6 rounded-lg relative min-h-[220px] shadow-sm hover:shadow-md transition-shadow duration-200`}>
    <div className="mb-4">
      <Icon className="w-6 h-6 text-green-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    <ArrowIcon />
  </div>
);

const AllServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Refuse Collection Services",
      description: "We provide well-organized and responsive refuse collection services to all types of residents, commercial & industrial clients. By working with our Local Authority partners, we have established customized household waste collection operations, which meet and exceed our clients' expectations.",
      whiteBackground: true
    },
    {
      icon: Construction,
      title: "Construction & Demolition Waste",
      description: "From design to construction, we help contractors and builders achieve their green-building and sustainability goals. Our construction waste disposal offers full-service waste disposal solutions, specializing in roll-off container rental services.",
      whiteBackground: false
    },
    {
      icon: Recycle,
      title: "WEEE Recycling & Collection",
      description: "Our Waste Electrical and Electronic Equipment (WEEE) collection service is a simple, effective and proven way to achieve high recycling rates for your old IT equipment. We can tailor our WEEE solutions including packaging & recycling to ensure compliance.",
      whiteBackground: true
    },
    {
      icon: Factory,
      title: "Sorting & Recycling of Waste",
      description: "We sort and make recycling worthwhile to your business and the shared world by making sure we capture and divert as much material as possible from the landfill. We are investing in powerful processing technologies and material recovery facilities.",
      whiteBackground: false
    },
    {
      icon: Building,
      title: "Events Recycling & Management",
      description: "Public events often create a huge amount of waste. We offer a complete solution for all your event waste and recycling requirements. Encouraging recycling activity at events preserves natural resources and improves audience perception.",
      whiteBackground: true
    },
    {
      icon: ShieldCheck,
      title: "Confidential Waste Shredding",
      description: "With the rise in identity and document theft, information presents a serious security risk. From bank statements to private records and contracts, we provide a safe and secure product recycling or destruction service.",
      whiteBackground: false
    },
    {
      icon: ScrollText,
      title: "Waste Management Consultation",
      description: "Our environmental consultancy provides practical, knowledgeable service to organizations. Our waste management consultants develop tailored plans that demonstrate realistic, succinct measures to achieve permissions, consents, contracts or certification.",
      whiteBackground: true
    },
    {
      icon: Droplets,
      title: "Cesspool & Drain Cleaning",
      description: "Sewage spills are unpleasant and can cause vast disruption. Our nationwide 24/7 rapid, responsive services use the latest technology to clean drains, interceptors and separators using specialist jetting equipment and vacuum tankers.",
      whiteBackground: false
    },
    {
      icon: Trees,
      title: "Composting Facility",
      description: "We are investing in composting facilities to recycle green waste from our Local Authority contracts into high quality peat-free compost. Our MRFs process materials collected from residents and businesses, including glass, metal, cardboard & paper.",
      whiteBackground: true
    },
    {
      icon: Container,
      title: "Treatment & Disposal",
      description: "Responsible waste management continues after materials leave your premises. Our network of recovery, treatment and disposal facilities offer a high quality solution to deal with your waste cost-effectively.",
      whiteBackground: false
    },
    {
      icon: PenTool,
      title: "Hazardous Waste Facilities",
      description: "Some wastes require specialist destruction and disposal. Potentially harmful substances can be cleaned and purified, reducing the need for virgin solvents. Our solvent recovery plants offer unique services for handling and recycling solvents.",
      whiteBackground: true
    },
    {
      icon: Trash2,
      title: "Landfill Management",
      description: "We have access to active & non-active landfill sites countrywide for dumping organic waste. All Landfills are highly engineered, managed & monitored to stringent Environmental Agency standards with proper aftercare programs.",
      whiteBackground: false
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-[250px] bg-[#0d2b09] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/waste-4.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Complete Waste Management Solutions
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl font-medium leading-relaxed">
            Comprehensive waste management and recycling services tailored to meet all your environmental needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 leading-relaxed">
            From residential waste collection to specialized industrial solutions, we offer a complete range of waste management services designed to meet your specific needs while promoting environmental sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default AllServices;