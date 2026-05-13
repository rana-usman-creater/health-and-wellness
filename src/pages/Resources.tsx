import SEO from '../components/SEO';
import { ExternalLink, Star } from 'lucide-react';
import AdSlot from '../components/AdSlot';

const resources = [
  {
    name: "Oura Ring",
    category: "Sleep Tracking",
    description: "The most accurate sleep and recovery tracker on the market. Monitors HRV, temperature, and deep sleep stages.",
    url: "#",
    badge: "Top Pick"
  },
  {
    name: "Zero Fasting App",
    category: "Nutrition App",
    description: "A beautifully designed timer and tracker for intermittent fasting with built-in educational content.",
    url: "#"
  },
  {
    name: "Athletic Greens (AG1)",
    category: "Supplement",
    description: "A comprehensive daily nutrition powder covering vitamins, minerals, superfoods, and probiotics.",
    url: "#",
    badge: "Editor's Choice"
  },
  {
    name: "Headspace",
    category: "Mental Health App",
    description: "Guided meditation and mindfulness to lower stress and improve daytime focus.",
    url: "#"
  },
  {
    name: "Blue Light Blocking Glasses",
    category: "Sleep Gear",
    description: "Essential for protecting your circadian rhythm when looking at screens after sunset.",
    url: "#"
  },
  {
    name: "Whoop Strap 4.0",
    category: "Fitness Tracking",
    description: "Advanced fitness tracker focusing on strain, recovery, and sleep. Great for athletes.",
    url: "#"
  },
  {
    name: "Magnesium Glycinate",
    category: "Supplement",
    description: "A highly bioavailable form of magnesium that promotes relaxation and deeper sleep.",
    url: "#"
  },
  {
    name: "Five Minute Journal",
    category: "Mental Health",
    description: "A simple, structured physical journal to build a daily gratitude habit.",
    url: "#"
  }
];

export default function Resources() {
  return (
    <>
      <SEO 
        title="Recommended Wellness Tools & Resources" 
        description="Our curated list of the best apps, gear, and supplements to optimize your holistic health journey."
      />
      
      <div className="bg-gray-50 dark:bg-gray-800 py-16 border-b border-gray-200 dark:border-gray-700 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Tools for a Better You</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We meticulously test and review wellness products. Here are the tools, apps, and gear we actually use and recommend.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AdSlot width={728} height={90} className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-full hover:shadow-lg transition-shadow relative">
               {resource.badge && (
                 <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                   <Star size={12} fill="currentColor" /> {resource.badge}
                 </div>
               )}
               <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">{resource.category}</div>
               <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white mb-3">{resource.name}</h3>
               <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{resource.description}</p>
               
               <a href={resource.url} className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 py-2.5 rounded-lg font-medium transition-colors">
                 View Product <ExternalLink size={16} className="text-gray-400" />
               </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Affiliate Disclosure:</strong> Some of the links on this page are affiliate links. This means that if you click on the link and purchase the item, we may receive a small commission at no extra cost to you. We only recommend products we genuinely believe in.
          </p>
        </div>
      </div>
    </>
  );
}
