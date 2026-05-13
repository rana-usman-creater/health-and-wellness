import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, HeartPulse } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { articles } from '../data/articles';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  const searchResults = searchQuery
    ? articles.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-sm' : 'bg-white dark:bg-gray-900'
      } border-b border-gray-100 dark:border-gray-800`}
    >
      <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center group-hover:bg-[#1B5E20] transition">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-primary">
                 <HeartPulse size={12} fill="currentColor" className="text-primary" />
              </div>
            </div>
            <span className="text-xl font-bold text-primary tracking-tight font-serif uppercase">
              VITALITY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link to="/" className={`${location.pathname === '/' ? 'text-primary border-b-2 border-primary h-16 inline-flex items-center' : 'hover:text-primary h-16 inline-flex items-center box-border'}`}>Home</Link>
            <Link to="/blog" className={`${location.pathname === '/blog' ? 'text-primary border-b-2 border-primary h-16 inline-flex items-center box-border' : 'hover:text-primary h-16 inline-flex items-center'}`}>Nutrition</Link>
            <Link to="/blog?category=Fitness" className={`${location.search.includes('Fitness') ? 'text-primary border-b-2 border-primary h-16 inline-flex items-center box-border' : 'hover:text-primary h-16 inline-flex items-center'}`}>Fitness</Link>
            <Link to="/blog?category=Mental Health" className={`${location.search.includes('Mental Health') ? 'text-primary border-b-2 border-primary h-16 inline-flex items-center box-border' : 'hover:text-primary h-16 inline-flex items-center'}`}>Mental Health</Link>
            <Link to="/resources" className={`${location.pathname === '/resources' ? 'text-primary border-b-2 border-primary h-16 inline-flex items-center box-border' : 'hover:text-primary h-16 inline-flex items-center'}`}>Resources</Link>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Search wellness..." 
              className="bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs w-48 focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
            />
            
            {/* Search Dropdown */}
            {searchOpen && searchQuery && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                <div className="max-h-64 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map(article => (
                      <Link 
                        key={article.id} 
                        to={`/article/${article.slug}`}
                        className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">{article.title}</div>
                        <div className="text-xs text-primary mt-1">{article.category}</div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-sm text-gray-500 text-center">No articles found.</div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <button 
            className="sm:hidden w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
            onClick={() => {
               setSearchOpen(!searchOpen);
               if (!searchOpen) setTimeout(() => document.getElementById('mobile-search-input')?.focus(), 50);
            }}
            aria-label="Search"
          >
            <Search size={16} />
          </button>
          
          <ThemeToggle />
          
          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div className="bg-primary h-1 w-full shrink-0">
         <div className="bg-[#4CAF50] h-full w-2/3"></div>
      </div>

      {/* Mobile Search Bar Expansion */}
      {searchOpen && (
        <div className="sm:hidden px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
           <input 
              id="mobile-search-input"
              type="text" 
              placeholder="Search wellness..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="max-h-64 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map(article => (
                      <Link 
                        key={article.id} 
                        to={`/article/${article.slug}`}
                        className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">{article.title}</div>
                        <div className="text-xs text-primary mt-1">{article.category}</div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-sm text-gray-500 text-center">No articles found.</div>
                  )}
                </div>
              </div>
            )}
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">Home</Link>
            <Link to="/blog" className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">Articles</Link>
            <Link to="/resources" className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">Resources</Link>
            <Link to="/about" className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">About</Link>
            <Link to="/contact" className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
