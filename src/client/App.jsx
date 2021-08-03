import React from "react";

const App = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <main className="container">
      <div>
        <h1>Products</h1>
        <ul className="list-group-flush">
          {products.map((p) => {
            return (
              <li key={p.ProductID} className="list-group-item">
                {p.Name}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default App;
