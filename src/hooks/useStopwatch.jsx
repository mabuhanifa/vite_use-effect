import { useEffect, useState } from "react";

export default function useStopwatch() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return count;
}
