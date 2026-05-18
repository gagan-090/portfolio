import { useState, useEffect } from 'react';

export const useCountUp = (endVal, duration = 1500, trigger = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    // parse value out if there is a '+' or '%' in the string
    const stringVal = String(endVal);
    const parsedEnd = parseInt(stringVal.replace(/[^0-9]/g, ''), 10);
    
    if (isNaN(parsedEnd) || parsedEnd === 0) {
      setCount(endVal);
      return;
    }

    let start = 0;
    const stepTime = Math.max(Math.floor(duration / parsedEnd), 15);
    
    const timer = setInterval(() => {
      start += 1;
      if (start >= parsedEnd) {
        clearInterval(timer);
        setCount(endVal); // set back full original string with symbol
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [endVal, duration, trigger]);

  return count;
};
export default useCountUp;
