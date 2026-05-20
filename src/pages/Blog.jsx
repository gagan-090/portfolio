import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { blogService } from '../services/blogService';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema } from '../components/seo/StructuredData';
import FeaturedBlogCard from '../components/blog/FeaturedBlogCard';
import BlogCard from '../components/blog/BlogCard';

// Debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(searchQuery, 400);

  // Fetch initial data
  useEffect(() => {
    const fetchInitial = async () => {
      setLoading(true);
      try {
        const [catsRes, featRes] = await Promise.all([
          blogService.getCategories(),
          blogService.getFeaturedBlogs(1)
        ]);
        if (catsRes.data) setCategories(catsRes.data);
        if (featRes.data) setFeaturedBlogs(featRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchInitial();
  }, []);

  // Fetch blogs based on filters
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await blogService.getBlogs({
          category: activeCategory,
          search: debouncedSearch,
          limit: 12
        });
        if (res.error) throw new Error(res.error);
        setBlogs(res.data || []);
      } catch (err) {
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [activeCategory, debouncedSearch]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-gutter select-none">
      <SEOHead
        title="Engineering Journal | Gagan Shukla"
        description="Technical articles, architectural decisions, and case studies on modern software engineering by Gagan Shukla."
        canonical="https://gaganshukla.in/blog"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' },
        { name: 'Blog', url: 'https://gaganshukla.in/blog' }
      ]} />
      
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tighter mb-4">
            Engineering<br />
            <span className="text-primary italic">Journal</span>.
          </h1>
          <p className="text-on-surface-variant text-body-lg max-w-2xl leading-relaxed">
            Thoughts on software architecture, performance optimization, and building products that scale.
          </p>
        </motion.div>

        {/* Featured Post (Only show if no search/filter applied and we have one) */}
        {featuredBlogs.length > 0 && activeCategory === 'all' && !debouncedSearch && (
          <FeaturedBlogCard {...featuredBlogs[0]} />
        )}

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-outline-variant pb-6 sticky top-20 bg-white/90 backdrop-blur-md z-40">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`whitespace-nowrap px-4 py-2 font-label-mono text-[11px] uppercase tracking-widest transition-colors ${
                activeCategory === 'all'
                  ? 'bg-on-surface text-white'
                  : 'bg-surface-container border border-outline-variant text-on-surface hover:border-on-surface'
              }`}
            >
              All Articles
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`whitespace-nowrap px-4 py-2 font-label-mono text-[11px] uppercase tracking-widest transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-on-surface text-white'
                    : 'bg-surface-container border border-outline-variant text-on-surface hover:border-on-surface'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 group">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-surface-container border border-outline-variant text-[14px] focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/50 font-label-mono"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="min-h-[400px]">
          {error ? (
            <div className="text-center py-20 text-on-surface-variant">
              <p className="font-label-mono">{error}</p>
            </div>
          ) : loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[16/9] bg-surface-container mb-4" />
                  <div className="h-4 bg-surface-container w-16 mb-4" />
                  <div className="h-8 bg-surface-container w-full mb-2" />
                  <div className="h-8 bg-surface-container w-2/3 mb-4" />
                  <div className="h-4 bg-surface-container w-full mb-2" />
                  <div className="h-4 bg-surface-container w-4/5" />
                </div>
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border border-outline-variant border-dashed"
            >
              <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">No articles found</h3>
              <p className="text-on-surface-variant font-label-mono text-[12px] uppercase tracking-widest">
                Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
