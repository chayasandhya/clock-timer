import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("0:0");
  const [startLable, setStartLable] = useState("Start");
  const [timer, setTimer] = useState(null);

  const lableAction = (la) => {
    if (la == "Start") {
      let hour = 0;
      let min = 0;
      setStartLable("Pause");
      setTimer(
        setInterval(() => {
          min++;
          if (min == 60) {
            min = 0;
            hour++;
          }
          setCount(`${hour}:${min}`);
        }, 100)
      );
    } else if (la == "Stop") {
      clearInterval(timer);
      setTimer(null);
      setCount(`0:0`);
    } else if (la == "Pause") {
      setStartLable("Resume");
      clearInterval(timer);
      setTimer(null);
      setCount(count);
    } else if (la == "Resume") {
      let c = count.split(":");
      let hour = c[0];
      let min = c[1];
      setStartLable("Pause");
      setTimer(
        setInterval(() => {
          min++;
          if (min == 60) {
            min = 0;
            hour++;
          }
          setCount(`${hour}:${min}`);
        }, 100)
      );
    }
  };

  const startCount = () => {
    lableAction(startLable);
  };
  const stopCount = () => {
    lableAction("Stop");
    setStartLable("Start");
  };

  return (
    <div className="App">
      <div className="btn-container">
        <button onClick={startCount}>{startLable}</button>
        <button onClick={stopCount}>Stop</button>
      </div>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
