import { SupportAgent } from '@mui/icons-material';
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={() => setIsQuickLinksOpen(true)}
            className={`
              flex items-center gap-3 
              h-11
              px-4
              ${darkMode
                ? 'bg-gradient-to-r from-blue-600/90 to-blue-500/90 hover:from-blue-500 hover:to-blue-400 text-white/95'
                : 'bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-500 hover:to-blue-600 text-white'
              }
              transition-all duration-500 ease-in-out
              shadow-lg shadow-blue-500/20
              hover:shadow-blue-500/30
              hover:translate-x-0.5
              backdrop-blur-sm
              group
              relative
              overflow-hidden
            `}
          >
            {/* Subtle animated background effect */}
            <div className={`
              absolute inset-0 
              bg-gradient-to-r from-transparent via-white/5 to-transparent
              translate-x-[-200%] group-hover:translate-x-[200%]
              transition-transform duration-1000
            `}/>

            {/* Icon with subtle rotation on hover */}
            <SupportAgent 
              className="relative transition-transform duration-300 group-hover:scale-110"
              style={{ fontSize: '18px' }}
            />

            {/* Text with slide and fade effect */}
            <span className={`
              text-sm font-medium
              overflow-hidden transition-all duration-500
              ${isHovered ? 'w-20 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-2'}
              whitespace-nowrap
              tracking-wide
              relative
            `}>
              Support
            </span>
          </button>
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