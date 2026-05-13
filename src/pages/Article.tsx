import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Facebook, Twitter, Link as LinkIcon, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import AdSlot from '../components/AdSlot';
import NewsletterForm from '../components/NewsletterForm';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-serif text-gray-900 dark:text-white mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline">Return to Blog</Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [article.imageUrl],
    "datePublished": new Date(article.date).toISOString(),
    "author": [{
        "@type": "Person",
        "name": article.author,
      }]
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      <SEO 
        title={article.title} 
        description={article.excerpt}
        image={article.imageUrl}
        type="article"
        schema={articleSchema}
      />
      
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Article Header */}
      <div className="bg-[#F9FAF9] dark:bg-gray-900 pt-24 pb-20 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <Link to={`/blog?category=${article.category}`} className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded mb-6 w-fit hover:bg-[#1B5E20] transition-colors">
            {article.category}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight mb-6 max-w-3xl">
            {article.title}
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
             <span>{article.readTime}</span>
             <span>•</span>
             <span>By {article.author}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16 relative z-10">
        <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Ad Slot */}
      <AdSlot width={728} height={90} className="hidden md:flex mb-12" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-col lg:flex-row gap-12">
        {/* Social Share Sidebar */}
        <aside className="lg:w-24 shrink-0 hidden lg:block">
          <div className="sticky top-32 flex flex-col items-center gap-4 text-gray-400">
            <span className="text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">Share</span>
            <button className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:text-[#1877F2] hover:border-[#1877F2] transition shadow-sm" aria-label="Share on Facebook">
              <Facebook size={20} />
            </button>
            <button className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition shadow-sm" aria-label="Share on Twitter">
              <Twitter size={20} />
            </button>
            <button onClick={copyToClipboard} className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:text-green-600 hover:border-green-600 transition shadow-sm" aria-label="Copy Link">
              <LinkIcon size={20} />
            </button>
          </div>
        </aside>

        {/* Article Body */}
        <article className="lg:max-w-3xl w-full mx-auto">
          <div 
            className="prose prose-lg prose-green dark:prose-invert max-w-none 
              prose-headings:font-serif prose-h2:text-3xl prose-h3:text-2xl 
              prose-a:text-primary hover:prose-a:text-[#1B5E20]
              prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 bg-[#F9FAF9] dark:bg-gray-800/50 rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-100 dark:border-gray-800">
             <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shrink-0 overflow-hidden text-white shadow-sm border-2 border-white dark:border-gray-700">
               <span className="text-xl font-serif font-bold">
                 {article.author.split(' ').map(n => n[0]).join('').replace('D', '')}
               </span>
             </div>
             <div>
               <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-2">{article.author}</h3>
               <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                 A medical professional and researcher dedicated to translating complex studies into actionable, everyday wellness habits.
               </p>
             </div>
          </div>
        </article>

        {/* Right Sidebar Area */}
        <aside className="lg:w-1/4 max-w-xs shrink-0 hidden lg:block">
          <div className="sticky top-32 flex flex-col gap-8">
            <AdSlot width={300} height={250} />
            
            <NewsletterForm location="inline" />
            
            <AdSlot width={300} height={600} />
          </div>
        </aside>
      </div>

      {/* Mobile Share Buttons */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-4 flex justify-center gap-6 z-30">
        <button className="text-gray-500 hover:text-[#1877F2]">
          <Facebook size={24} />
        </button>
        <button className="text-gray-500 hover:text-[#1DA1F2]">
          <Twitter size={24} />
        </button>
        <button onClick={copyToClipboard} className="text-gray-500 hover:text-green-600">
          <LinkIcon size={24} />
        </button>
      </div>
    </>
  );
}
