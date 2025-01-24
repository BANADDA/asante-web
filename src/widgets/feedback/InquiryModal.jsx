import { Calendar, CheckCircle, MapPin, Phone, Send, Trash2, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const InquiryModal = ({ isOpen, onClose, darkMode = false }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', date: '', time: '',
    wasteType: '', quantity: '', details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsShowing(false);
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          isShowing ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      <div className={`absolute top-0 right-0 h-full w-80 transform transition-transform duration-300 ease-out ${
        isShowing ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className={`h-full rounded-l-2xl shadow-2xl ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        }`}>
          <div className="relative h-full overflow-y-auto p-4">
            <button
              onClick={onClose}
              className={`absolute right-3 top-3 rounded-full p-1.5 ${
                darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'
              }`}
            >
              <X size={14} />
            </button>

            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CheckCircle className="mb-3 text-green-500" size={32} />
                <h3 className="text-lg font-medium">Request Sent!</h3>
                <p className="mt-1 text-xs text-gray-500">We'll contact you shortly</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 pt-6">
                <h2 className="text-lg font-medium">Special Pickup</h2>
                
                <div className="relative">
                  <User className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-gray-200 py-1.5 pl-8 pr-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded-md border border-gray-200 py-1.5 pl-8 pr-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                  <input
                    type="text"
                    placeholder="Pickup address"
                    className="w-full rounded-md border border-gray-200 py-1.5 pl-8 pr-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
                    required
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                  <input
                    type="date"
                    className="w-full rounded-md border border-gray-200 py-1.5 pl-8 pr-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
                    required
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                  <select
                    className="w-full rounded-md border border-gray-200 py-1.5 pl-8 pr-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
                    required
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning (8-12)</option>
                    <option value="Afternoon">Afternoon (12-4)</option>
                    <option value="Evening">Evening (4-8)</option>
                  </select>
                </div>

                <div className="relative">
                  <Trash2 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                  <select
                    className="w-full rounded-md border border-gray-200 py-1.5 pl-8 pr-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
                    required
                    value={formData.wasteType}
                    onChange={e => setFormData({...formData, wasteType: e.target.value})}
                  >
                    <option value="">Waste type</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Batteries">Batteries</option>
                    <option value="Chemicals">Chemicals</option>
                    <option value="Medical">Medical</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <textarea
                  placeholder="Additional details..."
                  rows="2"
                  className="w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                />

                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-green-600 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                >
                  Schedule Pickup
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;