import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [searched, setSearched] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const dataJSON = await data.json();
    setApiData(dataJSON?.products);
    console.log(apiData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = apiData.filter((item) =>
    item.title.toLowerCase().includes(searched.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
