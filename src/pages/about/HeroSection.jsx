import { Smile } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-5 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Asante Waste Management: Your Eco-Friendly Partner for a Cleaner, Greener Future!
            </h1>
            <p className="text-gray-600 text-base mb-6">
              At Asante Waste Management, we specialize in sustainable waste solutions, from collection and recycling to renewable energy generation. Together, let’s create a cleaner environment for tomorrow.
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
          <div className="md:w-1/2 relative">
            <div className="relative">
              <img 
                src="/img/waste.jpg"  // Replace with Asante-specific image URL
                alt="Eco-Friendly Solutions"
                className="rounded-lg w-full max-w-md mx-auto shadow-md"
              />
              
              {/* Stats Badges */}
              <div className="absolute top-8 -left-4 bg-white rounded-lg shadow-md p-3 flex items-center gap-2 hover:bg-blue-50 transition-colors duration-300">
                <Smile className="text-green-500 w-6 h-6" />
                <div>
                  <div className="font-semibold text-sm">Happy Communities</div>
                  <div className="text-base font-bold">500+ Projects</div>
                </div>
              </div>

              <div className="absolute -bottom-2 right-4 bg-white rounded-lg shadow-md p-3 hover:bg-blue-50 transition-colors duration-300">
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
