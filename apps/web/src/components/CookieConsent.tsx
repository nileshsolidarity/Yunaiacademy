import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">We use cookies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We use essential cookies for authentication and optional analytics cookies to improve your experience.{' '}
              <Link to="/cookie-policy" className="text-primary-600 hover:text-primary-700 underline">
                Learn more
              </Link>
            </p>
          </div>
          <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={accept}
            className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
