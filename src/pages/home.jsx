import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useState } from "react";
import InquiryFormSection from "./requestPickupSection";
import ServicesSection from "./servicesSection";
import WasteManagementSection from "./wasteManagementSection";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const slides = [
    {
      image: "/img/waste-1.jpg",
      title: "Reliable Waste And Recycling Services",
      subtitle: "We Provide Commercial Waste Disposal For A Range Of Industries",
      description: "We have already made huge strides in our sustainability journey by investing in plastic recycling and energy from waste infrastructure low carbon collections, leading to reduction in nation carbon emissions since 2013."
    },
    {
      image: "/img/waste-2.jpg",
      title: "Sustainable Waste Management",
      subtitle: "Innovative Solutions for a Cleaner Future",
      description: "Our advanced recycling facilities and eco-friendly practices ensure responsible waste management while minimizing environmental impact."
    },
    {
      image: "/img/waste-3.webp",
      title: "Professional Waste Collection",
      subtitle: "Reliable Service for Businesses",
      description: "With our modern fleet and experienced team, we provide efficient waste collection services tailored to your business needs."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Close modal when pressing escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setIsVideoOpen(false);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Create a secure YouTube embed URL
  const getYouTubeEmbedURL = () => {
    const videoId = 'OtWxxJRsLT4';
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-[75vh] sm:h-[75vh] content-center items-center justify-center">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="absolute inset-0 bg-black/50" />
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
              {slides[currentSlide].subtitle}
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-[#88B614] hover:bg-[#7BA412] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                REQUEST SERVICE TODAY!
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium flex items-center justify-center sm:justify-start gap-2 backdrop-blur-sm text-sm sm:text-base"
              >
                How it works
                <Play className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Hidden on small screens */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-sm hidden sm:block"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-md backdrop-blur-sm hidden sm:block"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${currentSlide === index
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-lg w-full max-w-4xl mx-4">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                How Our Waste Management Service Works
              </h3>
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Video Container */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={getYouTubeEmbedURL()}
                title="Waste Management Service Video"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <WasteManagementSection/>
      <ServicesSection/>
      <InquiryFormSection/>
    </>
  );
}

export default Home;