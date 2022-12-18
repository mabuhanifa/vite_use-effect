import { useEffect, useState } from "react";

export default function useFetch(options) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(options.url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [options.url]);
  return { data };
}
