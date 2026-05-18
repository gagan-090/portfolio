import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollHeight = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(4)) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollHeight);
    return () => window.removeEventListener('scroll', updateScrollHeight);
  }, []);

  return completion;
};
export default useScrollProgress;
