import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TableOfContents = ({ headings = [] }) => {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    if (!headings.length) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.current.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  const TOCList = () => (
    <ul className="space-y-1">
      {headings.map(({ id, text, level }) => (
        <li key={id} style={{ paddingLeft: `${(level - 2) * 12}px` }}>
          <a
            href={`#${id}`}
            onClick={() => setIsOpen(false)}
            className={`block text-[13px] leading-relaxed py-1 pl-3 border-l-2 transition-all duration-200 hover:text-on-surface ${
              activeId === id
                ? 'border-primary text-on-surface font-medium'
                : 'border-transparent text-on-surface-variant'
            }`}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav className="hidden lg:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-4">
          On this page
        </p>
        <TOCList />
      </nav>

      {/* Mobile: collapsible */}
      <nav className="lg:hidden border border-outline-variant mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant"
        >
          <span>On this page</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="px-4 pb-4">
            <TOCList />
          </div>
        )}
      </nav>
    </>
  );
};

export default TableOfContents;
