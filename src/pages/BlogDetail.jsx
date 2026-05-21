import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Clock, Calendar, Eye, Heart } from 'lucide-react';
import authorAvatar from '../assets/author.png';
import { blogService } from '../services/blogService';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema, BlogPostingSchema } from '../components/seo/StructuredData';
import ReadingProgressBar from '../components/blog/ReadingProgressBar';
import TableOfContents from '../components/blog/TableOfContents';
import MDXRenderer, { extractHeadings } from '../components/blog/MDXRenderer';
import ShareButtons from '../components/blog/ShareButtons';
import BlogCard from '../components/blog/BlogCard';

// Helper to get or create a persistent device ID
const getDeviceId = () => {
  let deviceId = localStorage.getItem('device_id');
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem('device_id', deviceId);
  }
  return deviceId;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await blogService.getBlogBySlug(slug);
        if (fetchError || !data) {
          throw new Error('Article not found');
        }
        
        setBlog(data);
        setHeadings(extractHeadings(data.content));

        const deviceId = getDeviceId();
        
        // Check if user has liked this post
        const isLiked = await blogService.hasLiked(data.id, deviceId);
        setHasLiked(isLiked);

        // Record Unique View
        const viewedKey = `viewed_${data.id}_${deviceId}`;
        if (!localStorage.getItem(viewedKey)) {
          const viewRecorded = await blogService.recordView(data.id, deviceId);
          if (viewRecorded) {
            localStorage.setItem(viewedKey, 'true');
            // Optimistically update view count in UI
            setBlog(prev => ({ ...prev, view_count: (prev.view_count || 0) + 1 }));
          }
        }

        // Fetch related posts
        if (data.category?.slug) {
          const relatedRes = await blogService.getRelatedBlogs(data.category.slug, slug, 3);
          if (relatedRes.data) {
            setRelatedBlogs(relatedRes.data);
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
    window.scrollTo(0, 0);
  }, [slug]);

  const handleLike = async () => {
    if (!blog) return;
    const deviceId = getDeviceId();
    
    // Optimistic UI update
    const newLikedState = !hasLiked;
    setHasLiked(newLikedState);
    setBlog(prev => ({ 
      ...prev, 
      like_count: (prev.like_count || 0) + (newLikedState ? 1 : -1) 
    }));

    const result = await blogService.toggleLike(blog.id, deviceId);
    if (result.error) {
      // Revert on error
      setHasLiked(!newLikedState);
      setBlog(prev => ({ 
        ...prev, 
        like_count: (prev.like_count || 0) + (!newLikedState ? 1 : -1) 
      }));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20 px-gutter flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !blog) {
    return <Navigate to="/404" replace />;
  }

  const formattedDate = blog.published_at ? format(new Date(blog.published_at), 'MMM d, yyyy') : '';
  const currentUrl = `https://gaganshukla.in/blog/${slug}`;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-gutter selection:bg-primary/20">
      <ReadingProgressBar />
      
      <SEOHead
        title={`${blog.title} | Gagan Shukla`}
        description={blog.excerpt}
        canonical={currentUrl}
        keywords={blog.category?.name ? `${blog.category.name} tutorials, ${blog.category.name} development` : ''}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' },
        { name: 'Blog', url: 'https://gaganshukla.in/blog' },
        { name: blog.title, url: currentUrl }
      ]} />
      {/* Ensure BlogPostingSchema is properly configured in StructuredData.jsx */}
      <BlogPostingSchema post={{
        title: blog.title,
        description: blog.excerpt,
        image: blog.cover_image_url || 'https://gaganshukla.in/og-image.png',
        datePublished: blog.published_at || new Date().toISOString(),
        dateModified: blog.updated_at || new Date().toISOString(),
        authorName: blog.author?.full_name || 'Gagan Shukla'
      }} />

      <article className="max-w-[1200px] mx-auto">
        <Link to="/blog" className="group inline-flex items-center gap-2 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" /> Back to Journal
        </Link>

        {/* Hero Section */}
        <header className="max-w-[800px] mb-12">
          {blog.category?.name && (
            <span className="inline-block font-label-mono text-[11px] uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-2 py-0.5 mb-6">
              {blog.category.name}
            </span>
          )}
          
          <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-[1.1] tracking-tight mb-8">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-label-mono text-[12px]">
            <div className="flex items-center gap-3">
              <img 
                src={authorAvatar} 
                alt={blog.author?.full_name || 'Gagan Shukla'} 
                className="w-10 h-10 rounded-full bg-surface-container object-cover"
              />
              <span className="font-bold text-on-surface">{blog.author?.full_name || 'Gagan Shukla'}</span>
            </div>
            
            {formattedDate && (
              <span className="flex items-center gap-1.5 border-l border-outline-variant pl-6">
                <Calendar size={14} /> {formattedDate}
              </span>
            )}
            
            {blog.reading_time_minutes && (
              <span className="flex items-center gap-1.5 border-l border-outline-variant pl-6">
                <Clock size={14} /> {blog.reading_time_minutes} min read
              </span>
            )}
            {blog.view_count !== undefined && (
              <span className="flex items-center gap-1.5 border-l border-outline-variant pl-6">
                <Eye size={14} /> {(blog.view_count || 0).toLocaleString()} {blog.view_count === 1 ? 'view' : 'views'}
              </span>
            )}
            {blog.like_count !== undefined && (
              <span className="flex items-center gap-1.5 border-l border-outline-variant pl-6">
                <Heart size={14} className={hasLiked ? 'fill-red-500 text-red-500' : ''} /> 
                {(blog.like_count || 0).toLocaleString()} {blog.like_count === 1 ? 'like' : 'likes'}
              </span>
            )}
          </div>
        </header>

        {/* Cover Image */}
        {blog.cover_image_url && (
          <div className="w-full aspect-[21/9] md:aspect-[2.5/1] bg-surface-container border border-outline-variant mb-16 overflow-hidden">
            <img src={blog.cover_image_url} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16 lg:gap-24 relative">
          
          {/* Main Content */}
          <div className="min-w-0">
            <MDXRenderer content={blog.content} />

            {/* Bottom Actions */}
            <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-6">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-label-mono text-[12px] uppercase tracking-widest transition-all duration-200 ${
                  hasLiked 
                    ? 'bg-red-50 text-red-500 border border-red-200 hover:bg-red-100' 
                    : 'bg-surface-container text-on-surface-variant border border-outline-variant hover:bg-surface-container-high'
                }`}
              >
                <Heart size={16} className={hasLiked ? 'fill-current' : ''} />
                {hasLiked ? 'Liked' : 'Like this post'}
              </button>
              <ShareButtons url={currentUrl} title={blog.title} />
            </div>

            {/* Author Bio Box */}
            <div className="mt-16 p-8 border border-outline-variant bg-surface-container-lowest flex flex-col md:flex-row gap-6 items-start md:items-center">
              <img 
                src={authorAvatar} 
                alt={blog.author?.full_name || 'Gagan Shukla'} 
                className="w-20 h-20 rounded-none object-cover border border-outline-variant"
              />
              <div>
                <h4 className="font-headline-md text-xl font-bold text-on-surface mb-2">
                  Written by {blog.author?.full_name || 'Gagan Shukla'}
                </h4>
                <p className="text-on-surface-variant text-[15px] leading-relaxed mb-4">
                  {blog.author?.bio || 'Full Stack Mobile App Developer specializing in Flutter, React Native, and cross-platform application development.'}
                </p>
                <div className="flex gap-4">
                  {(blog.author?.twitter_handle || 'gaganshukla') && (
                    <a href={`https://twitter.com/${blog.author?.twitter_handle || 'gaganshukla'}`} target="_blank" rel="noopener noreferrer" className="font-label-mono text-[11px] text-primary hover:underline uppercase tracking-widest">Twitter</a>
                  )}
                  <a href="https://github.com/gagan-090" target="_blank" rel="noopener noreferrer" className="font-label-mono text-[11px] text-primary hover:underline uppercase tracking-widest">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block relative">
            <TableOfContents headings={headings} />
          </aside>
        </div>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <div className="mt-32 border-t border-outline-variant pt-16">
            <h3 className="font-headline-lg text-3xl font-bold text-on-surface tracking-tight mb-10">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map(post => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogDetail;
