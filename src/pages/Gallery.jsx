import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentLayout, setCurrentLayout] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('right'); // 'right', 'left', 'up', or 'down'

  // All images from the img directory
  const images = [
    { src: '/img/waste-1.jpg', alt: 'Waste Management 1', category: 'waste' },
    { src: '/img/waste-2.jpg', alt: 'Waste Management 2', category: 'waste' },
    { src: '/img/waste-3.webp', alt: 'Waste Management 3', category: 'waste' },
    { src: '/img/waste-4.jpg', alt: 'Waste Management 4', category: 'waste' },
    { src: '/img/refuse-collection.jpg', alt: 'Refuse Collection', category: 'services' },
    { src: '/img/construction-waste.jpg', alt: 'Construction Waste', category: 'services' },
    { src: '/img/weee-recycling.jpg', alt: 'WEEE Recycling', category: 'recycling' },
    { src: '/img/secure-shredding.jpg', alt: 'Secure Shredding', category: 'services' },
    { src: '/img/drain-cleaning.jpg', alt: 'Drain Cleaning', category: 'services' },
    { src: '/img/recycling.jpg', alt: 'Recycling', category: 'recycling' },
    { src: '/img/landfill_and_smoke_(blog_image).jpg', alt: 'Landfill', category: 'waste' },
    { src: '/img/dispose.jpeg', alt: 'Waste Disposal', category: 'waste' },
    { src: '/img/kampala.jpeg', alt: 'Kampala', category: 'locations' },
    { src: '/img/Jinja.jpg', alt: 'Jinja', category: 'locations' },
    { src: '/img/entebbe.jpg', alt: 'Entebbe', category: 'locations' },
    { src: '/img/soroti.jpg', alt: 'Soroti', category: 'locations' },
    { src: '/img/mbale.jpeg', alt: 'Mbale', category: 'locations' }
  ];

  // Different grid layouts that will rotate every 8 seconds
  const layouts = [
    'grid-cols-3 md:grid-cols-4 lg:grid-cols-5', // More columns, smaller images
    'grid-cols-2 md:grid-cols-3 lg:grid-cols-4', // Standard grid
    'grid-cols-4 md:grid-cols-5 lg:grid-cols-6', // Many small images
  ];

  // Rotate through layouts and change animation direction every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLayout((prevLayout) => (prevLayout + 1) % layouts.length);
      
      // Cycle through different transition directions
      setTransitionDirection(prev => {
        const directions = ['right', 'left', 'up', 'down'];
        const currentIndex = directions.indexOf(prev);
        return directions[(currentIndex + 1) % directions.length];
      });
    }, 8000);
    
    return () => clearInterval(interval);
  }, [layouts.length]);

  // Handle opening the image viewer
  const openImageViewer = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Handle closing the image viewer
  const closeImageViewer = () => {
    setSelectedImage(null);
    setIsFullscreen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to next or previous image
  const navigate = useCallback((direction) => {
    setSelectedImage((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeImageViewer();
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'f') setIsFullscreen(!isFullscreen);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigate, isFullscreen]);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Determine if an image should be wide or tall
  const getImageSize = (index) => {
    // Every 4th image is wide, every 7th is tall
    if (index % 7 === 0) return 'col-span-2 row-span-1'; // Wide
    if (index % 4 === 0) return 'col-span-1 row-span-2'; // Tall
    return ''; // Standard
  };

  // Calculate initial animation properties based on direction and row/column position
  const getInitialAnimation = (index) => {
    // For a grid with 3 columns (mobile default), determine row and column
    const gridColumns = 3; // This is simplified; actual columns depend on screen size
    const row = Math.floor(index / gridColumns);
    const column = index % gridColumns;
    
    // Stagger delay based on row or column depending on direction
    let delay = 0;
    
    // Horizontal transitions go row by row
    if (transitionDirection === 'left' || transitionDirection === 'right') {
      delay = row * 0.1; // Delay increases by row
    } 
    // Vertical transitions go column by column
    else {
      delay = column * 0.1; // Delay increases by column
    }
    
    // Direction-specific offsets
    const offset = 100; // How far off-screen items start
    const initialProps = {
      opacity: 0,
      transition: { duration: 1.2, delay, ease: "easeOut" }
    };
    
    // Add directional offset
    switch(transitionDirection) {
      case 'right':
        initialProps.x = -offset;
        break;
      case 'left':
        initialProps.x = offset;
        break;
      case 'up':
        initialProps.y = offset;
        break;
      case 'down':
        initialProps.y = -offset;
        break;
      default:
        initialProps.x = -offset;
    }
    
    return initialProps;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[200px] bg-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/waste-4.jpg')] bg-cover bg-center opacity-30"></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">
            Our Gallery
          </h1>
          <p className="text-base text-gray-100 max-w-4xl font-medium leading-snug" data-aos="fade-up" data-aos-delay="200">
            Visual journey through our environmental initiatives and waste management solutions across Uganda.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Gallery Grid with transitions */}
        <div className={`grid ${layouts[currentLayout]} gap-2 auto-rows-auto overflow-hidden`}>
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div 
                key={`${image.src}-${currentLayout}-${transitionDirection}`}
                className={`relative overflow-hidden cursor-pointer group ${getImageSize(index)}`}
                initial={getInitialAnimation(index)}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  transition: { duration: 1.2, delay: 
                    // Row or column based staggered entry
                    transitionDirection === 'left' || transitionDirection === 'right' 
                      ? Math.floor(index / 3) * 0.1 // By row for horizontal
                      : (index % 3) * 0.1 // By column for vertical
                  }
                }}
                exit={{ 
                  opacity: 0,
                  x: transitionDirection === 'left' ? -100 : transitionDirection === 'right' ? 100 : 0,
                  y: transitionDirection === 'up' ? -100 : transitionDirection === 'down' ? 100 : 0,
                  transition: { duration: 0.8 }
                }}
                whileHover={{ 
                  scale: 1.03, 
                  transition: { duration: 0.4 }
                }}
                onClick={() => openImageViewer(index)}
              >
                <div className="relative w-full h-32 bg-gray-200 rounded shadow-sm overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex items-end">
                    <div className="p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <h3 className="text-sm font-semibold truncate">{image.alt}</h3>
                      <span className="text-xs capitalize bg-green-600 px-1.5 py-0.5 rounded-sm inline-block mt-1">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Full-Screen Image Viewer */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black bg-opacity-90'} flex items-center justify-center`}
            onClick={closeImageViewer}
          >
            <motion.div 
              className="relative max-w-7xl mx-auto px-4 py-8 w-full h-full flex flex-col justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.5 } }}
            >
              {/* Navigation and controls */}
              <div className="absolute top-4 right-4 z-10 flex items-center space-x-4">
                <button 
                  onClick={toggleFullscreen}
                  className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
                >
                  <Maximize2 size={20} />
                </button>
                <button 
                  onClick={closeImageViewer}
                  className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex items-center justify-between w-full h-full">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('prev');
                  }}
                  className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 focus:outline-none"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="flex-1 flex items-center justify-center h-full mx-4">
                  <motion.img 
                    key={selectedImage}
                    src={images[selectedImage].src} 
                    alt={images[selectedImage].alt}
                    className="max-h-full max-w-full object-contain rounded-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
                  />
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('next');
                  }}
                  className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 focus:outline-none"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Caption */}
              <motion.div 
                className="absolute bottom-8 left-0 right-0 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
              >
                <h2 className="text-white text-xl font-bold">{images[selectedImage].alt}</h2>
                <p className="text-gray-300 mt-1 text-sm capitalize">Category: {images[selectedImage].category}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 