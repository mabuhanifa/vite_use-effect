import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data } = useFetch({
    url: "/src/data.json",
  });
  console.log("app rendering");

  return (
    <div className="main">
      {/* <MyComponent /> */}
      {/* <MyComponentClass /> */}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
