import { useState } from "react";
import "./styles.css";

export default function App() {
  const [arr, setArr] = useState([]);
  function abc() {
    setArr([...arr, 0]);
  }

  function deleteItem(i) {
    const filtered = arr.filter((_, ind) => ind !== i);
    setArr(filtered);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => abc()}>Add</button>
      <div className="block">
        {arr.map((item, i) => (
          <div className="mapped">
            <input type="text" key={i} placeholder={`input box number ${i}`} />
            <p onClick={() => deleteItem(i)}>Delete</p>
          </div>
        ))}
      </div>
    </div>
  );
}
