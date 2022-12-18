import { useEffect, useState } from "react";

export default function useFetch(options) {
  const { url } = options;

  const [data, setData] = useState(null);
  const fetcher = async () => {
    if (url) {
      const res = await fetch(url);
      const newData = await res.json();
      setData(newData);
    }
  };

  useEffect(() => {
    // if (url) {
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setData(data));
    // }
    fetcher();
    console.log("useEffect rendering the app");
  }, [url]);

  return { data };
}
