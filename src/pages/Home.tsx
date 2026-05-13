import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';
import AdSlot from '../components/AdSlot';
import SEO from '../components/SEO';

export default function Home() {
  const featuredArticles = articles.slice(0, 3);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "VitalityHub",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png"
  };

  return (
    <>
      <SEO 
        title="Evidence-Based Health & Wellness" 
        description="Discover science-backed strategies for better sleep, mental health, and nutrition. Your trusted guide to a healthier, more vibrant life."
        schema={orgSchema}
      />
      
      {/* Hero Section */}
      <section className="relative bg-[#F9FAF9] dark:bg-gray-900 py-16 lg:py-24 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded w-fit">Evidence-Based</span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
              Science-Backed Wellbeing for a <span className="text-primary italic">Vibrant Life</span>
            </h1>
            
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              We translate complex medical research into actionable, daily habits. Elevate your sleep, nutrition, and mental health today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link to="/blog" className="bg-primary hover:bg-[#1B5E20] text-white px-6 py-3 rounded-lg font-bold text-sm text-center transition flex items-center justify-center gap-2">
                Explore Articles <ArrowRight size={16} />
              </Link>
              <Link to="/resources" className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-lg font-bold text-sm text-center transition text-center">
                Free Tools
              </Link>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Medically Reviewed</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Evidence-Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot - 728x90 Header Banner */}
      <div className="py-4 border-b border-gray-100 dark:border-gray-800">
        <AdSlot width={728} height={90} className="hidden md:flex" />
        <AdSlot width={320} height={50} className="md:hidden" />
      </div>

      {/* Featured Articles */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">Editor's Picks</h2>
              <p className="text-gray-600 dark:text-gray-400">Our most impactful guides right now.</p>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center gap-2 text-primary font-medium hover:underline">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.slug}`} className="flex flex-col gap-3 group cursor-pointer transition-colors duration-300">
                <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-primary tracking-wider mb-2">
                    <span>{article.category}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-2 flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest gap-2">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 sm:hidden">
            <Link to="/blog" className="block w-full text-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-3 rounded font-medium">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterForm location="inline" />
        </div>
      </section>
    </>
  );
}
