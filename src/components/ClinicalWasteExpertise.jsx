import { Link } from 'react-router-dom';

const SustainableWasteManagement = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-blue-800 leading-tight">
              Sustainable Waste Solutions Since 2013
            </h2>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              We are committed to sustainability by rethinking waste through recycling,
              energy recovery, and low-carbon collections. Since our founding, we have
              significantly reduced environmental impact across Uganda.
            </p>
            
            {/* Add coverage subsection */}
            <div className="bg-white/70 p-3 rounded border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-700 text-lg">99% Waste Collection Coverage Across Uganda</h3>
              <p className="text-gray-700 text-sm mt-1">
                Our growing network of branches and state-of-the-art facilities ensures efficient and sustainable waste collection services, supporting communities and businesses nationwide.
              </p>
            </div>
            
            <div>
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 text-sm transition-colors rounded-md"
              >
                Talk to us
              </Link>
            </div>
          </div>
          
          {/* Right side video */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/video/waste-management.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableWasteManagement; 