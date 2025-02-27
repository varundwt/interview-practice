import { useEffect, useState } from "react";
import "./styles.css";

const CardType = ({ cardImage, cardTitle }) => {
  return (
    <div className="card">
      <img src={cardImage} alt="card-iamge" />
      <p>{cardTitle}</p>
    </div>
  );
};

export default function App() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return !products.length ? (
    <h1>No Products Found.</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="box">
        {products.map((item, i) => (
          <CardType
            key={item.id}
            cardImage={item.thumbnail}
            cardTitle={item.title}
          />
        ))}
        {console.log(products)}
      </div>
    </div>
  );
}
