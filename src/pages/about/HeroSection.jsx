import { Smile } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-5 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="800">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Asante Waste Management: Your Eco-Friendly Partner
            </h1>
            <p className="text-gray-600 text-base mb-6">
              Asante Waste Management Ltd is a 360 degree waste management company based in Kampala, Uganda. The company was established to provide a complete range of waste management services to residential, industrial, and commercial businesses across the country. We offer a full range of waste management services to both public & private clients across categories such as Hazardous Waste, Domestic Waste, Medical Waste and Pharmaceutical, Cesspool, E-Waste as well as Oil and Gas Waste.
            </p>
            <div className="relative">
              <button 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 relative" data-aos="fade-left" data-aos-duration="800">
            <div className="relative">
              <img 
                src="/img/waste.jpg"  // Replace with Asante-specific image URL
                alt="Eco-Friendly Solutions"
                className="rounded-lg w-full max-w-md mx-auto shadow-md"
              />
              
              {/* Stats Badges */}
              <div className="absolute top-8 -left-4 bg-white rounded-lg shadow-md p-3 flex items-center gap-2 hover:bg-blue-50 transition-colors duration-300" data-aos="fade-right" data-aos-delay="300">
                <Smile className="text-green-500 w-6 h-6" />
                <div>
                  <div className="font-semibold text-sm">Happy Communities</div>
                  <div className="text-base font-bold">500+ Projects</div>
                </div>
              </div>

              <div className="absolute -bottom-2 right-4 bg-white rounded-lg shadow-md p-3 hover:bg-blue-50 transition-colors duration-300" data-aos="fade-left" data-aos-delay="300">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="/img/mandela-group.png" alt="Team Member" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/img/four-points.png" alt="Team Member" className="w-8 h-8 rounded-full border-2 border-white" />
                    {/* <img src="/img/acacia.png" alt="Team Member" className="w-8 h-8 rounded-full border-2 border-white" /> */}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-sm">
                      <span>Trusted By</span>
                      <span className="bg-green-100 text-green-600 px-1 rounded">4.2k</span>
                    </div>
                    <div className="font-semibold text-sm">Satisfied Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
