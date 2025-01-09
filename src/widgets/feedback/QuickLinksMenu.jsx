import { X } from 'lucide-react';

const QuickLinksMenu = ({ isOpen, onClose, onAction, darkMode }) => {
  const options = [
    { id: 'pickup', text: 'Schedule a pickup' },
    { id: 'service', text: 'Contact customer service' },
    { id: 'demo', text: 'Watch a demo' }
  ];

  const handleOptionClick = (optionId) => {
    onAction(optionId);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      <div className={`
        fixed right-0 top-1/2 -translate-y-1/2 z-50
        w-72 
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
        rounded-l-lg shadow-xl
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-4 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <button
              onClick={onClose}
              className={`
                p-1 rounded-full
                transition-colors duration-200
                ${darkMode
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'}
              `}
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-2">
            {options.map(option => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`
                  block w-full px-4 py-2 rounded-lg
                  text-sm font-medium text-left
                  transition-colors duration-200
                  flex items-center
                  ${darkMode
                    ? 'hover:bg-gray-700/50 text-gray-200 hover:text-white'
                    : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'}
                `}
              >
                <span className="text-blue-500 mr-2">›</span>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickLinksMenu;