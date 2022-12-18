import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import useStopwatch from "./hooks/useStopwatch";

function App() {
  const [url, setUrl] = useState(null);
  // const myOption = useMemo(() => ({ url }), [url]);
  // myOption is a object with url property
  // const { data } = useFetch(myOption);
  const { data } = useFetch({ url, onSuccess: () => console.log("success") });
  const count = useStopwatch(5);
  return (
    <div className="main">
      {/* <MyComponent /> */}
      {/* <MyComponentClass /> */}
      {count > 0 ? count : "0"} {}
      {count <= 0 && "Times Up"}
      <div>
        {JSON.stringify(data)}

        <button onClick={() => setUrl("/src/data/data.json")}>Data</button>
        <button onClick={() => setUrl("/src/data/new.json")}>New Data</button>
      </div>
    </div>
  );
}

export default App;
