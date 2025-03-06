import { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Check if user has already set cookie preferences
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Wait a moment before showing the banner for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle user choices
  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
    // Here you would initialize all cookies, including analytics, etc.
    console.log('All cookies accepted');
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setShowConsent(false);
    // Here you would only initialize essential cookies
    console.log('Only essential cookies accepted');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
    // Here you would ensure no non-essential cookies are set
    console.log('All cookies rejected');
  };

  // If banner shouldn't be shown, don't render anything
  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        <div className="p-5">
          <h3 className="text-center text-lg font-bold text-gray-800 mb-2">Cookie Notice</h3>
          
          <p className="text-center text-sm text-gray-600 mb-4">
            We use cookies to enhance your browsing experience,
            serve personalized ads or content, and analyze our traffic.
            By clicking "Accept all", you consent to our use of cookies.
            Visit our Cookie Policy for more info.
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="py-2.5 px-4 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              Customize
            </button>
            <button
              onClick={handleReject}
              className="py-2.5 px-4 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded transition-colors"
            >
              Reject all
            </button>
            <button
              onClick={handleAcceptAll}
              className="py-2.5 px-4 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded transition-colors"
            >
              Accept all
            </button>
          </div>
        </div>

        {/* Expanded cookie options */}
        {expanded && (
          <div className="p-5 bg-gray-50 border-t border-gray-200">
            <h4 className="font-medium text-gray-800 mb-3">Cookie Preferences</h4>
            
            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Essential Cookies</p>
                  <p className="text-xs text-gray-500">Required for the website to function</p>
                </div>
                <div className="bg-gray-200 rounded-full px-3 py-1">
                  <span className="text-xs text-gray-600">Always on</span>
                </div>
              </div>
              
              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Analytics Cookies</p>
                  <p className="text-xs text-gray-500">Help us improve our website</p>
                </div>
                <button 
                  onClick={handleAcceptAll}
                  className="text-xs px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                >
                  Accept
                </button>
              </div>
              
              {/* Marketing Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Marketing Cookies</p>
                  <p className="text-xs text-gray-500">Personalized content and ads</p>
                </div>
                <button 
                  onClick={handleAcceptAll}
                  className="text-xs px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button 
                onClick={handleAcceptEssential}
                className="text-xs px-4 py-1.5 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;