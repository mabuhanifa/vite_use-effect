import { useMemo, useState } from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const [url, setUrl] = useState(null);

  const myOption = useMemo(() => ({ url }), [url]);

  const { data } = useFetch(myOption);
  // myOption is a object with url property
  return (
    <div className="main">
      {/* <MyComponent /> */}
      {/* <MyComponentClass /> */}
      <div>
        {JSON.stringify(data)}

        <button onClick={() => setUrl("/src/data/data.json")}>Data</button>
        <button onClick={() => setUrl("/src/data/new.json")}>New Data</button>
      </div>
    </div>
  );
}

export default App;
