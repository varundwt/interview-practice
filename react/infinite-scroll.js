import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Simulating API delay with async/await
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setItems((prev) => [
          ...prev,
          ...Array.from(
            { length: 10 },
            (_, i) => `Item ${prev.length + i + 1}`
          ),
        ]);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <div ref={observerRef} style={{ height: "20px" }} />
      <p>Loading more...</p>
    </div>
  );
}
