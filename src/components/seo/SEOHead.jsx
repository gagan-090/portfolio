import { useEffect } from 'react';

/**
 * SEOHead — Dynamic document head management for SPA SEO
 * Updates title, meta description, canonical, OG, and Twitter tags per page.
 * Designed for Vite + React SPA without server-side rendering.
 */
const SEOHead = ({
  title = 'Gagan Shukla — Flutter & React Native Developer | Full Stack App Developer',
  description = 'Gagan Shukla is a Full Stack Mobile App Developer specializing in Flutter, React Native, and cross-platform development. View portfolio, case studies, and hire for app development services.',
  canonical = 'https://gaganshukla.in',
  ogImage = 'https://gaganshukla.in/og-image.png',
  ogType = 'website',
  keywords = 'Gagan Shukla, Flutter Developer, React Native Developer, Full Stack Developer, App Developer, Software Engineer, Mobile App Developer, MERN Stack Developer, Cross Platform Developer, Developer Portfolio',
  noindex = false,
}) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set or create a link tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Standard Meta
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', 'Gagan Shukla');
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Canonical
    setLink('canonical', canonical);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', 'Gagan Shukla — Developer Portfolio');
    setMeta('property', 'og:locale', 'en_IN');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:creator', '@gaganshukla');

    // Cleanup: restore defaults when component unmounts
    return () => {
      document.title = 'Gagan Shukla — Flutter & React Native Developer | Full Stack App Developer';
    };
  }, [title, description, canonical, ogImage, ogType, keywords, noindex]);

  return null;
};

export default SEOHead;
