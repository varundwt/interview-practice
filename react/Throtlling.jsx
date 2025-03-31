import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const isT = useRef(false);

  function throttle() {
    if (!isT.current) {
      setCount((prev) => prev + 1);
      isT.current = true;
      setTimeout(() => {
        isT.current = false;
      }, 3000);
    }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count}</h2>
      <h2 onClick={throttle}>Start editing to see some magic happen!</h2>
    </div>
  );
}
