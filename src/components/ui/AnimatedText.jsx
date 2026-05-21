import React from 'react';
import { motion } from 'framer-motion';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom?.stagger || 0.03,
      delayChildren: custom?.delay || 0,
    }
  })
};

const charVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 0.5, 
      ease: EASE_OUT_EXPO 
    }
  }
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: EASE_OUT_EXPO 
    }
  }
};

/**
 * AnimatedText — Splits text into individually animated spans.
 * 
 * @param {string} text - The text to animate
 * @param {"char"|"word"} splitBy - Split by characters or words
 * @param {string} className - CSS classes for the text
 * @param {string} tag - The HTML tag to use (default: "span")
 * @param {number} stagger - Stagger delay between items
 * @param {number} delay - Initial delay before animation starts
 * @param {boolean} once - Only animate once (default: true)
 */
const AnimatedText = ({ 
  text, 
  splitBy = "word", 
  className = "", 
  tag = "span",
  stagger,
  delay = 0,
  once = true 
}) => {
  const items = splitBy === "char" 
    ? text.split("") 
    : text.split(" ");

  const defaultStagger = splitBy === "char" ? 0.03 : 0.08;
  const variants = splitBy === "char" ? charVariants : wordVariants;
  const MotionTag = motion[tag] || motion.span;

  return (
    <MotionTag
      className={`inline-block ${className}`}
      style={{ perspective: splitBy === "char" ? "1000px" : undefined }}
      variants={containerVariants}
      custom={{ stagger: stagger || defaultStagger, delay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={variants}
          className="inline-block"
          style={{ 
            transformOrigin: "bottom",
            whiteSpace: splitBy === "char" ? "pre" : undefined 
          }}
        >
          {item}
          {splitBy === "word" && i < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default AnimatedText;
