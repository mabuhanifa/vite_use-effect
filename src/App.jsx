import { useState } from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({
    url: url,
  });

  // "/src/data/data.json"
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
