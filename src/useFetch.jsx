import { useEffect, useState } from "react";

export default function useFetch(options) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (options.url) {
      fetch(options.url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [options]);

  return { data };
}
