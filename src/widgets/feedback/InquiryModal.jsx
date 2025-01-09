import {
    Building2,
    CheckCircle2,
    Mail,
    Phone,
    Send,
    User,
    X
} from 'lucide-react';
import { useEffect, useState } from 'react';

const InquiryModal = ({ isOpen, onClose, darkMode }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    businessType: '',
    subject: '',
    message: '',
    fullName: '',
    companyName: '',
    email: '',
    phone: ''
  });
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
    setFormData({
      serviceType: '',
      businessType: '',
      subject: '',
      message: '',
      fullName: '',
      companyName: '',
      email: '',
      phone: ''
    });
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

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setSubmissionData({
      ...formData,
      timestamp: new Date().toLocaleString()
    });
    setIsSubmitted(true);
  };

  const serviceTypes = [
    "Waste Collection",
    "Recycling Services",
    "Commercial Waste",
    "Hazardous Waste",
    "Construction Waste"
  ];

  const businessTypes = [
    "Residential",
    "Commercial",
    "Industrial",
    "Healthcare",
    "Educational",
    "Retail"
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
                  <h3 className="text-xl font-semibold">Inquiry Submitted!</h3>
                  <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    We'll get back to you as soon as possible. For immediate assistance, call us at +42 011 61145741
                  </p>
                </div>

                <div className={`rounded-lg p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <h4 className="font-medium mb-3">Inquiry Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Service Type</span>
                        <p className="font-medium">{submissionData.serviceType}</p>
                      </div>
                      <div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Business Type</span>
                        <p className="font-medium">{submissionData.businessType}</p>
                      </div>
                    </div>
                    <div>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Subject</span>
                      <p className="font-medium">{submissionData.subject}</p>
                    </div>
                    <div>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Message</span>
                      <p className="font-medium whitespace-pre-wrap">{submissionData.message}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Full Name</span>
                        <p className="font-medium">{submissionData.fullName}</p>
                      </div>
                      {submissionData.companyName && (
                        <div>
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Company</span>
                          <p className="font-medium">{submissionData.companyName}</p>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Contact</span>
                      <p className="font-medium">{submissionData.email}</p>
                      <p className="font-medium">{submissionData.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Send an Inquiry</h2>
                  <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Please complete the form below, and we'll be in touch. Or you can call us{' '}
                    <a href="tel:+256778841383" className="text-green-600 hover:text-green-700">
                    +256 778 841383
                    </a>
                    {' '}for immediate assistance!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Service Type</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                        className={`
                          w-full px-3 py-2 rounded-lg
                          ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
                          border focus:ring-2 focus:ring-blue-500/50
                          ${errors.serviceType ? 'border-red-400' : 'border-gray-200'}
                        `}
                      >
                        <option value="">Select service type</option>
                        {serviceTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Business Type</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                        className={`
                          w-full px-3 py-2 rounded-lg
                          ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
                          border focus:ring-2 focus:ring-blue-500/50
                          ${errors.businessType ? 'border-red-400' : 'border-gray-200'}
                        `}
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="What's your inquiry about?"
                      className={`
                        w-full px-3 py-2 rounded-lg
                        ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
                        border focus:ring-2 focus:ring-blue-500/50
                        ${errors.subject ? 'border-red-400' : 'border-gray-200'}
                      `}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please describe your requirements..."
                      rows={4}
                      className={`
                        w-full px-3 py-2 rounded-lg resize-none
                        ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
                        border focus:ring-2 focus:ring-blue-500/50
                        ${errors.message ? 'border-red-400' : 'border-gray-200'}
                      `}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                      <div className="relative">
                        <User 
                          size={14} 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Your full name"
                          className={`
                            w-full pl-9 pr-3 py-2 rounded-lg
                            ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
                            border focus:ring-2 focus:ring-blue-500/50
                            ${errors.fullName ? 'border-red-400' : 'border-gray-200'}
                          `}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Company Name</label>
                      <div className="relative">
                        <Building2 
                          size={14} 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        />
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                          placeholder="Your company name"
                          className={`
                            w-full pl-9 pr-3 py-2 rounded-lg
                            ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
                            border border-gray-200 focus:ring-2 focus:ring-blue-500/50
                          `}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                      <div className="relative">
                        <Mail 
                          size={14} 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className={`
                            w-full pl-9 pr-3 py-2 rounded-lg
                            ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
                            border focus:ring-2 focus:ring-blue-500/50
                            ${errors.email ? 'border-red-400' : 'border-gray-200'}
                          `}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                      <div className="relative">
                        <Phone 
                          size={14} 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Your phone number"
                          className={`
                            w-full pl-9 pr-3 py-2 rounded-lg
                            ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}
                            border focus:ring-2 focus:ring-blue-500/50
                            ${errors.phone ? 'border-red-400' : 'border-gray-200'}
                          `}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    className={`
                      w-full py-2.5 rounded-lg font-medium
                      transition-all duration-200
                      flex items-center justify-center gap-2
                      bg-green-900 hover:bg-green-800 text-white
                      ${Object.keys(errors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                    disabled={Object.keys(errors).length > 0}
                  >
                    <span>Send Inquiry</span>
                    <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
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

export default InquiryModal;