import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterForm({ location = "inline" }: { location?: "inline" | "hero" }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  if (subscribed) {
    return (
      <div className="bg-[#F9FAF9] dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
        <h3 className="font-serif font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">You're in!</h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">Check your inbox for your Free 7-Day Wellness Plan.</p>
      </div>
    );
  }

  return (
    <div className={`${location === 'inline' ? 'bg-[#F9FAF9] dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700' : ''}`}>
      {location === 'inline' && (
        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2 font-serif text-gray-800 dark:text-gray-100">Free Wellness Plan</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">Join 50,000+ readers getting our free 7-Day Sleep & Nutrition Blueprint.</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-xs border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-[#1B5E20] text-white py-2 rounded-lg text-xs font-bold transition-colors"
        >
          Download Now
        </button>
      </form>
    </div>
  );
}
