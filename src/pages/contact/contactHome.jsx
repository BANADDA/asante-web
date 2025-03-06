/*
 * Contact page with Google Maps static image solution
 * Using a static image avoids CORS issues that can occur with map libraries or iframes
 * Note: If there are analytics scripts (like nepcha-analytics.js) causing CORS errors,
 * they should be disabled or configured properly in your HTML template
 */

import { Facebook, Loader2, Mail, MapPin, MessageCircle, Phone, Send, Twitter, User } from 'lucide-react';
import { useState } from 'react';
import GoogleMapEmbed from '../../components/GoogleMapEmbed';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Form submitted successfully!');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Map Section */}
      <div className="w-full" data-aos="fade-up">
        <GoogleMapEmbed />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-3xl font-medium text-gray-800 mb-2">Nice to meet you.</h1>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Asante Waste Management is your eco-friendly partner for sustainable waste solutions. With services spanning residential, commercial, and industrial waste management, we're committed to responsible practices that protect our environment for future generations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="md:w-1/3" data-aos="fade-right" data-aos-duration="800">
            <div className="space-y-8">
              <div>
                <h2 className="uppercase text-sm font-semibold text-gray-600 mb-2 flex items-center">
                  <MapPin size={16} className="mr-2" /> ADDRESS
                </h2>
                <p className="text-gray-500 text-sm">
                  East Africa Investment Building - 2nd Floor Suite A<br />
                  Luzira Industrial Park, Block 243 Plot 2490<br />
                  P.O. Box 100810, Kampala - Uganda
                </p>
              </div>
              
              <div>
                <h2 className="uppercase text-sm font-semibold text-gray-600 mb-2 flex items-center">
                  <Phone size={16} className="mr-2" /> PHONE
                </h2>
                <p className="text-gray-500 text-sm">
                  <a href="tel:+256414691868" className="hover:text-blue-500 transition-colors">
                    +256 414 691 868
                  </a>
                </p>
              </div>
              
              <div>
                <h2 className="uppercase text-sm font-semibold text-gray-600 mb-2 flex items-center">
                  <Mail size={16} className="mr-2" /> EMAIL
                </h2>
                <p className="text-gray-500 text-sm">
                  <a href="mailto:info@asantewm.com" className="hover:text-blue-500 transition-colors">
                    info@asantewm.com
                  </a>
                </p>
              </div>
              
              <div>
                <h2 className="uppercase text-sm font-semibold text-gray-600 mb-2 flex items-center">
                  <MessageCircle size={16} className="mr-2" /> SOCIAL
                </h2>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-600 hover:opacity-80 transition-opacity">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-blue-400 hover:opacity-80 transition-opacity">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-red-500 hover:opacity-80 transition-opacity">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="md:w-2/3" data-aos="fade-left" data-aos-duration="800">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 pl-10 border border-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 pl-10 border border-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 text-gray-400" size={18} />
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-3 pl-10 border border-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 transition-colors uppercase text-sm flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Email
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Your contact details will be held in the strictest of confidentiality. <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;