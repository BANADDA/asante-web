import {
    AlertCircle,
    AlertTriangle,
    CheckCircle2,
    FileText,
    HelpCircle,
    Mail,
    MessageSquare,
    Phone,
    Send,
    Trash2 // Added Trash2
    ,


    User,
    X
} from 'lucide-react';
import { useEffect, useState } from 'react';
  
  const FeedbackModal = ({ isOpen, onClose, darkMode }) => {
    const [inquiryType, setInquiryType] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionData, setSubmissionData] = useState(null);
    const [isShowing, setIsShowing] = useState(false);
  
    useEffect(() => {
      if (isOpen) {
        setIsShowing(true);
        document.body.offsetHeight;
      } else {
        setIsShowing(false);
      }
    }, [isOpen]);
  
    const resetForm = () => {
      setInquiryType(null);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setErrors({});
      setIsSubmitted(false);
      setSubmissionData(null);
    };
  
    const handleClose = () => {
      setIsShowing(false);
      setTimeout(() => {
        resetForm();
        onClose();
      }, 300);
    };
  
    if (!isOpen) return null;
  
    const validateForm = () => {
      const newErrors = {};
  
      if (!inquiryType) {
        newErrors.inquiryType = 'Please select an inquiry type';
      }
  
      if (!name.trim()) {
        newErrors.name = 'Please enter your name';
      }
  
      if (!email.trim()) {
        newErrors.email = 'Please enter your email';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          newErrors.email = 'Please enter a valid email address';
        }
      }
  
      if (!message.trim()) {
        newErrors.message = 'Please enter your message';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = () => {
      if (!validateForm()) return;
  
      const summaryData = {
        type: inquiryType,
        name,
        email,
        phone: phone || 'Not provided',
        message,
        timestamp: new Date().toLocaleString()
      };
  
      setSubmissionData(summaryData);
      setIsSubmitted(true);
    };
  
    const inquiryTypes = [
      {
        value: 'general',
        icon: HelpCircle,
        label: 'General Inquiry',
        description: 'Questions about our services or company'
      },
      {
        value: 'service',
        icon: Trash2, // Now properly imported
        label: 'Service Request',
        description: 'Schedule a pickup or request service'
      },
      {
        value: 'complaint',
        icon: AlertTriangle,
        label: 'File a Complaint',
        description: 'Report an issue or concern'
      },
      {
        value: 'quote',
        icon: FileText,
        label: 'Get a Quote',
        description: 'Request pricing information'
      }
    ];
  
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div 
          className={`
            absolute inset-0 bg-black/30 backdrop-blur-sm
            transition-opacity duration-300 ease-out
            ${isShowing ? 'opacity-100' : 'opacity-0'}
          `} 
          onClick={handleClose} 
        />
        
        <div 
          className={`
            absolute top-0 right-0 bottom-0
            w-full sm:w-[480px]
            ${darkMode ? 'bg-gray-800 text-white/90' : 'bg-white text-gray-800'}
            shadow-xl
            transition-all duration-300 ease-in-out transform
            ${isShowing ? 'translate-x-0' : 'translate-x-full'}
            flex flex-col
          `}
        >
          <div className="relative flex-1 overflow-y-auto p-6">
            <button
              onClick={handleClose}
              className={`
                absolute right-4 top-4
                p-1 rounded-full
                transition-colors duration-200
                ${darkMode ? 'hover:bg-white/10 text-white/70' : 'hover:bg-black/5 text-gray-400'}
              `}
            >
              <X size={16} />
            </button>
  
            <div className="h-full">
              {isSubmitted ? (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className={`rounded-full p-3 ${darkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                      <CheckCircle2 size={24} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                    </div>
                  </div>
  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">Request Submitted!</h3>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
  
                  <div className={`rounded-lg p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                    <h4 className="font-medium mb-3">Inquiry Details</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Type</span>
                        <p className="font-medium">
                          {inquiryTypes.find(t => t.value === submissionData.type)?.label}
                        </p>
                      </div>
                      <div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Name</span>
                        <p className="font-medium">{submissionData.name}</p>
                      </div>
                      <div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Email</span>
                        <p className="font-medium break-all">{submissionData.email}</p>
                      </div>
                      {submissionData.phone !== 'Not provided' && (
                        <div>
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Phone</span>
                          <p className="font-medium">{submissionData.phone}</p>
                        </div>
                      )}
                      <div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Message</span>
                        <p className="font-medium whitespace-pre-wrap">{submissionData.message}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-600/20">
                      Submitted on {submissionData.timestamp}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold">Contact Customer Support</h2>
                    <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      How can we assist you today?
                    </p>
                  </div>
  
                  <div>
                    <p className="mb-3 text-sm font-medium">Select inquiry type *</p>
                    <div className="grid grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => {
                            setInquiryType(type.value);
                            setErrors({ ...errors, inquiryType: null });
                          }}
                          className={`
                            flex flex-col items-center gap-2 p-4 rounded-lg text-center
                            transition-all duration-200 border
                            ${
                              inquiryType === type.value 
                                ? `${darkMode ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} text-blue-500` 
                                : `${darkMode ? 'hover:bg-gray-700/50 border-gray-700' : 'hover:bg-gray-50 border-gray-200'}`
                            }
                          `}
                        >
                          <type.icon 
                            size={20} 
                            className={inquiryType === type.value ? 'text-blue-500' : 'opacity-70'} 
                          />
                          <div>
                            <div className={`text-sm font-medium ${inquiryType === type.value ? 'opacity-100' : 'opacity-70'}`}>
                              {type.label}
                            </div>
                            <div className="text-xs opacity-60 mt-1">{type.description}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                    {errors.inquiryType && (
                      <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.inquiryType}
                      </p>
                    )}
                  </div>
  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                      <div className="relative">
                        <User 
                          size={14} 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className={`
                            w-full pl-9 pr-3 py-2 rounded-lg
                            transition-colors duration-200
                            ${
                              darkMode 
                                ? 'bg-gray-700/50 focus:bg-gray-700 border-gray-600' 
                                : 'bg-gray-50 focus:bg-white border-gray-200'
                            }
                            border focus:outline-none focus:ring-2 focus:ring-blue-500/50
                            text-sm
                            ${errors.name ? 'border-red-400' : ''}
                          `}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>
  
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <div className="relative">
                        <Mail 
                          size={14} 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className={`
                            w-full pl-9 pr-3 py-2 rounded-lg
                            transition-colors duration-200
                            ${
                              darkMode 
                                ? 'bg-gray-700/50 focus:bg-gray-700 border-gray-600' 
                                : 'bg-gray-50 focus:bg-white border-gray-200'
                            }
                            border focus:outline-none focus:ring-2 focus:ring-blue-500/50
                            text-sm
                            ${errors.email ? 'border-red-400' : ''}
                          `}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
  
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone (Optional)</label>
                      <div className="relative">
                        <Phone 
                          size={14} 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (234) 567-8900"
                          className={`
                            w-full pl-9 pr-3 py-2 rounded-lg
                            transition-colors duration-200
                            ${
                              darkMode 
                                ? 'bg-gray-700/50 focus:bg-gray-700 border-gray-600' 
                                : 'bg-gray-50 focus:bg-white border-gray-200'
                            }
                            border focus:outline-none focus:ring-2 focus:ring-blue-500/50
                            text-sm
                          `}
                        />
                      </div>
                    </div>
  
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message *</label>
                      <div className="relative">
                        <MessageSquare 
                          size={14} 
                          className={`absolute left-3 top-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        />
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="How can we help you today?"
                          className={`
                            w-full pl-9 pr-3 py-2 rounded-lg resize-none h-32
                            transition-colors duration-200
                            ${
                              darkMode 
                                ? 'bg-gray-700/50 focus:bg-gray-700 border-gray-600' 
                                : 'bg-gray-50 focus:bg-white border-gray-200'
                            }
                            border focus:outline-none focus:ring-2 focus:ring-blue-500/50
                            text-sm
                            ${errors.message ? 'border-red-400' : ''}
                          `}
                        />
                        {errors.message && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
  
                  {/* Submit Button */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={isSubmitted ? handleClose : handleSubmit}
                      className={`
                        w-full py-2.5 rounded-lg font-medium
                        transition-all duration-200
                        flex items-center justify-center gap-2
                        ${
                          isSubmitted
                            ? darkMode
                              ? 'bg-gray-700 hover:bg-gray-600'
                              : 'bg-gray-100 hover:bg-gray-200'
                            : 'bg-blue-500 hover:bg-blue-400 text-white'
                        }
                        text-sm
                        ${Object.keys(errors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                      disabled={Object.keys(errors).length > 0}
                    >
                      {isSubmitted ? (
                        <>
                          <span>Close</span>
                          <X size={14} />
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send 
                            size={14} 
                            className="transition-transform group-hover:translate-x-0.5" 
                          />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeedbackModal;
  