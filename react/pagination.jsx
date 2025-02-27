import { useEffect, useState } from "react";
import "./styles.css";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt="product-image" />
      <p className="title">{title}</p>
    </div>
  );
};

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState(10);
  const [loading, setLoading] = useState(false);
  function handlePrev() {
    if (skip == 10) {
      setSkip(10);
      setCurrentPage(1);
    } else {
      setSkip(skip - 10);
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    setCurrentPage(currentPage + 1);
    setSkip(skip + 10);
  }

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://dummyjson.com/products?limit=${10}&skip=${skip}`
    );
    const dataJSON = await data.json();
    setLoading(false);
    setProducts(dataJSON.products);

    console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  return (
    <div className="App">
      <h1>Pagination</h1>
      {console.log(products)}
      {!products.length ? (
        <p>No Data Available</p>
      ) : loading ? (
        <h4>Loading...</h4>
      ) : (
        <div className="cardarea">
          {products.map((item, i) => (
            <Card key={item.id} image={item.thumbnail} title={item.title} />
          ))}
        </div>
      )}

      <div className="pagination">
        <span className="butt" onClick={() => handlePrev()}>
          Prev
        </span>
        {currentPage != 1 && <span>{currentPage - 1}</span>}
        <p className="curr">{currentPage}</p>

        <p>{currentPage + 1}</p>
        <span className="butt" onClick={() => handleNext()}>
          Next
        </span>
      </div>
    </div>
  );
}
