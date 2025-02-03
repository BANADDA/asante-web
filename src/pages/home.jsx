import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";
import InquiryFormSection from './requestPickupSection';
import ServicesSection from './servicesSection';
import WasteManagementSection from './wasteManagementSection';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const thumbnailSlides = [
    "/asante/1.jpg",
    "/asante/2.jpg",
    "/asante/3.jpg",
    "/asante/4.jpg",
    "/asante/5.jpg",
    "/asante/6.jpg",
    "/asante/7.jpg",
    "/asante/8.jpg",
    "/asante/9.jpg",
    "/asante/10.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % thumbnailSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % thumbnailSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + thumbnailSlides.length) % thumbnailSlides.length);
  };

  return (
    <>
      {/* Static Hero Section */}
      <div className="relative w-full h-auto">
        <img
          src="/asante/hero-banner.jpg"
          alt="Asante Waste Management"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Slider Section */}
      <div className="relative bg-gray-100 py-8">
        <div className="max-w-[93%] mx-auto">
          <div className="relative overflow-hidden">
            {/* Thumbnails Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / thumbnailSlides.length)}%)` }}
            >
              {thumbnailSlides.map((slide, index) => (
                <div
                  key={index}
                  className="w-1/5 flex-shrink-0 px-2"
                >
                  <div className="relative h-44">
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-r-lg shadow-md z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-l-lg shadow-md z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Rest of your sections */}
      <WasteManagementSection />
      <ServicesSection />
      <InquiryFormSection />
    </>
  );
}

export default Home;