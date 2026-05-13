import { Link } from 'react-router-dom';
import { HeartPulse, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-6 shrink-0 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 text-[10px] text-gray-400">
          <span className="text-gray-600 dark:text-gray-300 font-bold uppercase">Vitality</span>
          <p>&copy; {new Date().getFullYear()} Vitality Health. All rights reserved.</p>
        </div>
        
        <div className="text-[9px] text-gray-400 max-w-sm text-center md:text-right leading-tight order-last md:order-none">
          Disclaimer: This website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment.
        </div>
        
        <div className="flex space-x-4">
          {/* Mock Social Icons */}
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
