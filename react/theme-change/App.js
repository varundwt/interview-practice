import { useState } from "react";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={theme ? "App" : "Dark"}>
      <h1>Theme Change</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="button" onClick={() => setTheme(!theme)}>
        Change Theme
      </div>
    </div>
  );
}
