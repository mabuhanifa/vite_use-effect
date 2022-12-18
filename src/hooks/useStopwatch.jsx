import { useEffect, useState } from "react";

export default function useStopwatch(time) {
  const [count, setCount] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count>=0) {
        setCount(count - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return count;
}
