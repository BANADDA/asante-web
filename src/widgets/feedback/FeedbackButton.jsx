import { useState } from 'react';
import FeedbackModal from './feedBackModel';
import InquiryModal from './InquiryModal';
import QuickLinksMenu from './QuickLinksMenu';

const FeedbackButton = ({ darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [modalType, setModalType] = useState('feedback'); // 'feedback' or 'inquiry'
  const [key, setKey] = useState(0);

  const handleOpenModal = (actionType) => {
    setIsQuickLinksOpen(false);
    setIsModalOpen(true);
    setKey(prevKey => prevKey + 1);
    
    // Set modal type based on action
    if (actionType === 'pickup') {
      setModalType('inquiry');
    } else if (actionType === 'service') {
      setModalType('feedback');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType('feedback'); // Reset to default
  };

  return (
    <>
      {!isQuickLinksOpen && !isModalOpen && (
        <div
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40"
        >
          <div
            className="flex flex-col gap-4 bg-black/40 backdrop-blur-sm p-3 rounded-l-lg shadow-lg border-l border-t border-b border-white/20"
          >
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 hover:scale-110 transition-transform duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 hover:scale-110 transition-transform duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-transform duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 hover:scale-110 transition-transform duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      )}

      <QuickLinksMenu
        isOpen={isQuickLinksOpen}
        onClose={() => setIsQuickLinksOpen(false)}
        onAction={handleOpenModal}
        darkMode={darkMode}
      />

      {modalType === 'feedback' ? (
        <FeedbackModal
          key={`feedback-${key}`}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          darkMode={darkMode}
        />
      ) : (
        <InquiryModal
          key={`inquiry-${key}`}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          darkMode={darkMode}
        />
      )}
    </>
  );
};

export default FeedbackButton;