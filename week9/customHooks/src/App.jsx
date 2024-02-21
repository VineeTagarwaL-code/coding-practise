import { useState } from "react";
import "./App.css";

import useOnline from "./components/useOnline";
import useInterval from "./components/useInterval";
function App() {
  const [count, setCount] = useState(0);
  const isOnline = useOnline();
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <>
      {isOnline ? "YOU ARE ONLINE " : "You are offline"}
      timer is at {count}
    </>
  );
}

export default App;
