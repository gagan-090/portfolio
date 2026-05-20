import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const FeaturedBlogCard = ({ slug, title, excerpt, cover_image_url, reading_time_minutes, published_at, category }) => {
  const formattedDate = published_at
    ? format(new Date(published_at), 'MMM d, yyyy')
    : '';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center border border-outline-variant p-6 md:p-10 mb-16 bg-surface-container-lowest"
    >
      {/* Content Side */}
      <div className="order-2 md:order-1 flex flex-col justify-center h-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-label-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-[#0A0A0A] px-2 py-0.5">
            Featured
          </span>
          {category?.name && (
            <span className="font-label-mono text-[10px] uppercase tracking-[0.15em] text-primary border border-primary/30 px-2 py-0.5">
              {category.name}
            </span>
          )}
        </div>

        <Link to={`/blog/${slug}`} className="block mb-6">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight">
            {title}
          </h2>
        </Link>

        {excerpt && (
          <p className="text-on-surface-variant text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-xl">
            {excerpt}
          </p>
        )}

        <div className="flex items-center justify-between border-t border-outline-variant pt-6 mt-auto">
          <div className="flex items-center gap-5 text-on-surface-variant text-[13px]">
            {formattedDate && (
              <span className="flex items-center gap-1.5 font-label-mono">
                <Calendar size={13} />
                {formattedDate}
              </span>
            )}
            {reading_time_minutes && (
              <span className="flex items-center gap-1.5 font-label-mono hidden sm:flex">
                <Clock size={13} />
                {reading_time_minutes} min read
              </span>
            )}
          </div>
          
          <Link
            to={`/blog/${slug}`}
            className="flex items-center gap-2 font-label-mono text-[12px] uppercase tracking-widest text-on-surface font-bold hover:text-primary transition-colors"
          >
            Read Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image Side */}
      <div className="order-1 md:order-2 aspect-[4/3] md:aspect-square overflow-hidden bg-surface-container w-full h-full border border-outline-variant">
        {cover_image_url ? (
          <img
            loading="lazy"
            src={cover_image_url}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-surface-container to-outline-variant" />
        )}
      </div>
    </motion.article>
  );
};

export default FeaturedBlogCard;
