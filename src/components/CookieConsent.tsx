import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          We use cookies to improve your experience and analyze site traffic. By continuing to use this website, you agree to our <a href="/about" className="text-primary hover:underline">Privacy Policy</a>.
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={accept}
            className="bg-primary hover:bg-[#1B5E20] text-white px-6 py-2 rounded font-medium transition"
          >
            Accept
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
