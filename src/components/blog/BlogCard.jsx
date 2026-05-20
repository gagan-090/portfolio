import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, Eye } from 'lucide-react';
import { format } from 'date-fns';

const BlogCard = ({ slug, title, excerpt, cover_image_url, reading_time_minutes, published_at, category, view_count }) => {
  const formattedDate = published_at
    ? format(new Date(published_at), 'MMM d, yyyy')
    : '';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-outline-variant pb-8 last:border-b-0"
    >
      <Link to={`/blog/${slug}`} className="block">
        {/* Cover Image */}
        {cover_image_url && (
          <div className="overflow-hidden mb-5 aspect-[16/9] bg-surface-container">
            <img
              loading="lazy"
              src={cover_image_url}
              alt={title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
            />
          </div>
        )}

        {/* Category badge */}
        {category?.name && (
          <span className="inline-block font-label-mono text-[10px] uppercase tracking-[0.15em] text-primary border border-primary/30 bg-primary/5 px-2 py-0.5 mb-3">
            {category.name}
          </span>
        )}

        {/* Title */}
        <h2 className="font-headline-md text-xl font-bold text-on-surface group-hover:text-primary transition-colors duration-200 leading-snug mb-3">
          {title}
        </h2>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-on-surface-variant text-[15px] leading-relaxed line-clamp-2 mb-4">
            {excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-4 text-on-surface-variant text-[13px]">
          {formattedDate && (
            <span className="flex items-center gap-1.5 font-label-mono">
              <Calendar size={12} />
              {formattedDate}
            </span>
          )}
          {reading_time_minutes && (
            <span className="flex items-center gap-1.5 font-label-mono">
              <Clock size={12} />
              {reading_time_minutes} min read
            </span>
          )}
          {view_count !== undefined && (
            <span className="flex items-center gap-1.5 font-label-mono">
              <Eye size={12} />
              {view_count.toLocaleString()} {view_count === 1 ? 'view' : 'views'}
            </span>
          )}
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
