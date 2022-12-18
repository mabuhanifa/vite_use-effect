import { useLayoutEffect } from "react";

import { useEffect, useRef, useState } from "react";

const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

export default function useFetch(options) {
  const { url, onSuccess } = options;

  const [data, setData] = useState(null);

  const savedOnSuccess = useRef(onSuccess);
  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          savedOnSuccess.current && savedOnSuccess.current();
          setData(data);
        });
    }
    console.log("useEffect rendering the app");
  }, [url, onSuccess]);

  return { data };
}
