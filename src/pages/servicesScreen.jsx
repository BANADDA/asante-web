import CoreValues from './about/CoreValues';
import HeroSection from './about/HeroSection';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section - Keeping your existing hero */}
      <div className="relative h-[200px] bg-green-900 overflow-hidden">
  <div className="absolute inset-0 bg-[url('/img/waste-4.jpg')] bg-cover bg-center opacity-30"></div>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
    <h1 className="text-4xl font-bold text-white mb-6">
      About Us
    </h1>
    <p className="text-xl text-gray-100 max-w-4xl font-medium leading-snug">
      Witness the excellence and dedication we bring to waste management, transforming communities across Uganda through sustainable solutions.
    </p>
  </div>
</div>


      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
      <HeroSection/>
      {/* <RecyclingSection/> */}
      <CoreValues/>
      </div>
    </div>
  );
};

export default AboutUs;