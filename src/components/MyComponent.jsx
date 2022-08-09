import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("starting timer");
    const interval = setInterval(tick, 1000);
    // do the cleanup - stop the timer
    return () => {
      console.log("component unmounted");
      clearInterval(interval);
    };
  }, []);
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
