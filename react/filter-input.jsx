import { useState } from "react";
import "./styles.css";

export default function App() {
  const [entered, setEntered] = useState("");
  const items = ["Apple", "Banana", "Orange", "Pineapple", "Grapes"];

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(entered.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="enter"
        onChange={(e) => setEntered(e.target.value)}
      />
      {filtered.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
