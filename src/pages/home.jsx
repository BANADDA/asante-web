import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";
import AsanteSolutions from '../components/AsanteSolutions';
import CitiesWeServe from '../components/CitiesWeServe';
import SustainableWasteManagement from '../components/ClinicalWasteExpertise';
import SectorsWeServe from '../components/SectorsWeServe';
import ServicesSection from './servicesSection';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSlide, setModalSlide] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

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

  // Hero slider images (using first 5 images)
  const heroSlides = [
    "/asante/1.jpg",
    "/asante/2.jpg",
    "/asante/3.jpg",
    "/asante/4.jpg",
    "/asante/5.jpg"
  ];

  // Hero slider auto-advance
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(heroTimer);
  }, []);

  // Hero slider navigation
  const nextHeroSlide = () => {
    setHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Main slider auto-advance
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

  // Modal slider handlers
  const openModal = (index) => {
    setModalSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalSlide = () => {
    setModalSlide((prev) => (prev + 1) % thumbnailSlides.length);
  };

  const prevModalSlide = () => {
    setModalSlide((prev) => (prev - 1 + thumbnailSlides.length) % thumbnailSlides.length);
  };

  // Auto-advance for modal slider when modal is open
  useEffect(() => {
    if (!isModalOpen) return;
    const modalTimer = setInterval(() => {
      nextModalSlide();
    }, 3000);
    return () => clearInterval(modalTimer);
  }, [isModalOpen, modalSlide]);

  return (
    <>
      {/* Hero Slider Section - Replacing Static Banner */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Hero Slides */}
        <div className="h-full w-full relative">
          {heroSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === heroSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Asante Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay with filter */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Text overlay - Updated position and increased title size */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10 text-center translate-y-[-5%]">
                <h1 className="text-6xl font-bold mb-8" data-aos="fade-down" data-aos-delay="300">Asante Waste Management</h1>
                
                {/* Core Values in Row */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-10 max-w-5xl mx-auto">
                  
                  {/* Core Value 1 */}
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-black/40 transition-all duration-300 w-full md:w-1/3" data-aos="fade-up" data-aos-delay="400">
                    <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Health & Safety</h3>
                    <p className="text-sm text-gray-200">Our constant up-grades and training policies protect our people and communities</p>
                  </div>
                  
                  {/* Core Value 2 */}
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-black/40 transition-all duration-300 w-full md:w-1/3" data-aos="fade-up" data-aos-delay="500">
                    <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Quality & Reliability</h3>
                    <p className="text-sm text-gray-200">We provide high level quality and consistency in our services at all levels</p>
                  </div>
                  
                  {/* Core Value 3 */}
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-black/40 transition-all duration-300 w-full md:w-1/3" data-aos="fade-up" data-aos-delay="600">
                    <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Transparency & Integrity</h3>
                    <p className="text-sm text-gray-200">We are honest and empowered to take responsibility for our actions in all dealings</p>
                  </div>
                </div>
                
                <a 
                  href="/contact" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-12 rounded-lg transition-colors duration-300 min-w-[200px] text-center"
                  data-aos="fade-up" 
                  data-aos-delay="700"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Slider Navigation Arrows */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg z-10 transition-colors duration-300"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg z-10 transition-colors duration-300"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === heroSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Add Sectors We Serve section right after the hero slider */}
      <SectorsWeServe />
      
      {/* Add space here */}
      <div className="h-8"></div>
      
      {/* Sustainable Waste Management Section */}
      <SustainableWasteManagement />
      
      {/* Add space here */}
      <div className="h-16"></div>
      
      {/* Our Solutions Section */}
      <AsanteSolutions />
      
      {/* Cities We Serve Section */}
      <CitiesWeServe />

      {/* Thumbnail Slider Section */}
      

      {/* Other Sections */}
      {/* <WasteManagementSection /> */}
      <ServicesSection />
      {/* <InquiryFormSection /> */}
    </>
  );
}

export default Home;
