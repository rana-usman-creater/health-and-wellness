import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with the VitalityHub team for editorial inquiries, partnerships, or support."
      />
      
      <div className="bg-gray-50 dark:bg-gray-800 py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a question, feedback, or a partnership inquiry? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">General Inquiries</h3>
                <a href="mailto:hello@vitalityhub.example.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition">hello@vitalityhub.example.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Editorial Team</h3>
                <a href="mailto:editor@vitalityhub.example.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition">editor@vitalityhub.example.com</a>
                <p className="text-sm text-gray-500 mt-1 pb-4">For pitch submissions or corrections.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200 dark:border-yellow-800/30">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-500 mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-600">
              Please note that we cannot provide personal medical or health advice via email. Please consult your physician for medical concerns.
            </p>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h2>
                <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out. We aim to respond to all inquiries within 48 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary hover:underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name *</label>
                    <input type="text" id="firstName" required className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                  <input type="email" id="email" required className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <select id="subject" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                    <option>General Inquiry</option>
                    <option>Editorial / Pitch</option>
                    <option>Partnership / Advertising</option>
                    <option>Website Issue</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                  <textarea id="message" required rows={6} className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-y"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-primary hover:bg-[#1B5E20] text-white font-medium px-6 py-3 test-lg rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
