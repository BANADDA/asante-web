import { ArrowRight, Download, FileText } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section - Keeping your existing hero */}
      <div className="relative h-[250px] bg-[#0d2b09] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/waste-4.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl font-medium leading-relaxed">
            Witness the excellence and dedication we bring to waste management, transforming communities across Uganda through sustainable solutions.
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
                <button className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded">
                  <span>Residential Waste</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded">
                  <span>Commercial Waste</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded">
                  <span>Retail And Institutional</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded">
                  <span>Commercial Liquid</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded">
                  <span>Dumpster Rental</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded">
                  <span>Industrial Cleaning</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Trusted Section */}
            <div className="bg-green-900 p-6 rounded-lg text-white mb-8">
              <h3 className="text-xl font-bold mb-3">Trusted And Reliable Waste Collection!</h3>
              <p className="mb-4">We offer customers regular collection of trash on a scheduled or call basis, with a safe level of service.</p>
              <div className="mb-4">
                <p className="mb-2">(002) 01061245741</p>
                <p>Brooklyn, New York, USA</p>
              </div>
              <button className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Download Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Download Brochure</h3>
              <div className="flex flex-col gap-2">
                <button className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Our Report 2024
                  </span>
                  <Download className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between bg-green-700 hover:bg-green-800 text-white p-4 rounded">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Company Brochure
                  </span>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600 mb-6">
                We serve hundreds of partners across Uganda, including residential homes, businesses, industries, and institutions. Our comprehensive waste management solutions are tailored to your specific needs, ensuring efficient and environmentally responsible waste disposal.
              </p>
              
              {/* Video Section */}
              <div className="relative mb-8">
                <img src="/img/bg.jpg" alt="Waste Management" className="w-full rounded-md" />
                
              </div>
            </div>

            {/* Key Benefits Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
              <p className="text-gray-600 mb-8">
                We've been helping cities, businesses, and communities take advantage of sustainable waste management benefits. Our solutions deliver value to customers while protecting the environment.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 border rounded hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Food Recycling And Anaerobic Digestion
                  </h3>
                </div>
                
                <div className="p-4 border rounded hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Mechanical And Biological Treatment
                  </h3>
                </div>
                
                <div className="p-4 border rounded hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                    Metal And Plastic Recycling Facilities
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    Recycling Facilities essential in providing quality raw materials to the production industry, as they designed to separate recyclables into their individual material streams and prepare them for sale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;