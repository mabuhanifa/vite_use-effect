import { useEffect, useState } from "react";

export default function useFetch(options) {
  const { url } = options;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    console.log("useEffect rendering the app");
  }, [url]);

  return { data };
}
