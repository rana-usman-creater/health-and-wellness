import SEO from '../components/SEO';
import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import AdSlot from '../components/AdSlot';

export default function About() {
  return (
    <>
      <SEO 
        title="About VitalityHub" 
        description="Learn about our mission to provide evidence-based health and wellness content you can trust."
      />
      
      <div className="bg-gray-50 dark:bg-gray-800 py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We exist to cut through the noise of the wellness industry. VitalityHub provides peer-reviewed, science-backed strategies to help you optimize your health, one habit at a time.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-green dark:prose-invert max-w-none mb-16">
          <h2 className="font-serif">The Problem with Online Health Advice</h2>
          <p>
            The internet is flooded with health fads, miracle pills, and contradictory advice. One day coffee is a superfood; the next, it's toxic. We grew frustrated with the lack of nuance and evidence in mainstream wellness media.
          </p>
          <p>
            That's why we built VitalityHub. We believe that true health optimization comes from understanding your biology and applying sustainable, scientifically proven behaviors.
          </p>
        </div>

        {/* Credibility Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-primary mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Medically Reviewed</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Content is regularly reviewed by practicing medical professionals.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Award size={32} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Evidence First</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">All claims are backed by citations from peer-reviewed medical journals.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 mb-4">
              <HeartHandshake size={32} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Fad Diets</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">We push for sustainability over quick, unhealthy fixes.</p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Medical Review Board</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex gap-4 items-start">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
               <span className="font-serif font-bold text-primary text-xl">SJ</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Dr. Sarah Jenkins</h3>
              <p className="text-sm text-primary mb-2">MD, Sleep Specialist</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Board-certified neurologist specializing in sleep architecture and circadian biology.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex gap-4 items-start">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
               <span className="font-serif font-bold text-primary text-xl">MS</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Mark Sterling</h3>
              <p className="text-sm text-primary mb-2">Registered Dietitian</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Clinical nutritionist focusing on metabolic health and longevity protocols.</p>
            </div>
          </div>
        </div>
        
        <AdSlot width={728} height={90} className="hidden md:flex" />

      </div>
    </>
  );
}
