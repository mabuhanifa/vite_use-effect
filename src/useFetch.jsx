import { useState } from "react";

export default function useFetch(options) {
  const [data, setData] = useState(null);
  return {data};
}
