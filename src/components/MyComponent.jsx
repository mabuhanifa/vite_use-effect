import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  document.title = `Clicked ${count} times`;

  const tick = () => {
    console.log(`clock ticking!`);
  };
  useEffect(() => {
    setInterval(setDate(new Date()), 1000);
  }, [count]);

  return (
    <div style={{ margin: "50px" }}>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button style={{ padding: "10px" }} onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default MyComponent;
