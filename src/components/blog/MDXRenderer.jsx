import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';

// Generate a slug from heading text for anchor links
const slugify = (text) =>
  String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Extract headings from markdown string for TOC
export const extractHeadings = (content = '') => {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/[*_`]/g, '').trim();
    headings.push({ id: slugify(text), text, level });
  }
  return headings;
};

const MDXRenderer = ({ content = '' }) => {
  return (
    <div className="prose-blog">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings with anchor IDs
          h1: ({ children }) => {
            const id = slugify(String(children));
            return <h1 id={id} className="font-headline-md text-3xl font-bold text-on-surface mt-10 mb-4 leading-tight scroll-mt-28">{children}</h1>;
          },
          h2: ({ children }) => {
            const id = slugify(String(children));
            return <h2 id={id} className="font-headline-md text-2xl font-bold text-on-surface mt-10 mb-4 leading-tight scroll-mt-28">{children}</h2>;
          },
          h3: ({ children }) => {
            const id = slugify(String(children));
            return <h3 id={id} className="font-headline-md text-xl font-bold text-on-surface mt-8 mb-3 scroll-mt-28">{children}</h3>;
          },
          h4: ({ children }) => {
            const id = slugify(String(children));
            return <h4 id={id} className="text-base font-bold text-on-surface mt-6 mb-2 scroll-mt-28">{children}</h4>;
          },
          // Paragraphs
          p: ({ children }) => (
            <p className="text-on-surface-variant leading-relaxed text-[17px] mb-5">{children}</p>
          ),
          // Code
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const lang = match ? match[1] : '';
            const code = String(children).replace(/\n$/, '');
            if (!inline && (lang || code.includes('\n'))) {
              return <CodeBlock code={code} language={lang || 'text'} />;
            }
            return (
              <code className="font-mono text-[14px] bg-surface-container px-1.5 py-0.5 rounded text-primary border border-outline-variant" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
          // Links
          a: ({ href, children }) => {
            const isExternal = href?.startsWith('http');
            return (
              <a
                href={href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-primary underline underline-offset-2 hover:text-on-surface transition-colors"
              >
                {children}
              </a>
            );
          },
          // Images
          img: ({ src, alt }) => (
            <img loading="lazy" src={src} alt={alt || ''} className="w-full my-6 border border-outline-variant" />
          ),
          // Blockquote
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-5 py-1 my-6 bg-surface-container-lowest italic text-on-surface-variant">
              {children}
            </blockquote>
          ),
          // Lists
          ul: ({ children }) => <ul className="list-disc list-outside pl-6 mb-5 space-y-2 text-on-surface-variant text-[17px]">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-outside pl-6 mb-5 space-y-2 text-on-surface-variant text-[17px]">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          // Table
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-[15px]">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-outline-variant px-4 py-2 text-left font-bold text-on-surface bg-surface-container">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-outline-variant px-4 py-2 text-on-surface-variant">{children}</td>
          ),
          // HR
          hr: () => <hr className="border-outline-variant my-10" />,
          // Strong / Em
          strong: ({ children }) => <strong className="font-bold text-on-surface">{children}</strong>,
          em: ({ children }) => <em className="italic text-on-surface-variant">{children}</em>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MDXRenderer;
