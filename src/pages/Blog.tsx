import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { articles } from '../data/articles';
import { ArrowRight, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import AdSlot from '../components/AdSlot';

const CATEGORIES = ["All", "Nutrition", "Fitness", "Mental Health", "Sleep", "Supplements"];

export default function Blog() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || "All";
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || "All");
  }, [location.search]);

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <SEO 
        title={activeCategory === 'All' ? 'Health & Wellness Blog' : `${activeCategory} Articles`}
        description="Browse our collection of science-backed articles on nutrition, fitness, mental health, and sleep optimization."
      />
      
      <div className="bg-[#F9FAF9] dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 pb-12 pt-24 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-gray-900 dark:text-white font-serif font-bold mb-3 tracking-tight">The Wellness Library</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Evidence-based strategies to optimize your body and mind. No fads, just science.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar / Filters */}
        <aside className="lg:w-1/4 max-w-xs shrink-0 flex flex-col gap-6">
          <div className="sticky top-28 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Filter by Category
              </h4>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1 bg-white dark:bg-gray-800 border rounded-full text-[11px] uppercase transition-colors ${
                      activeCategory === category 
                        ? 'border-primary text-primary font-bold' 
                        : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Sidebar Ad */}
            <div className="hidden lg:block">
              <AdSlot width={300} height={250} />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.slug}`} className="flex flex-col gap-3 group cursor-pointer transition-colors duration-300">
                <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative mb-2">
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
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-serif text-gray-600 dark:text-gray-400">No articles found in this category yet.</h3>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
