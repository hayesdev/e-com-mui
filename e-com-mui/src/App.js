import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";

// import Products from "./components/Products/Products";
// import Navbar from './components/Navbar/Navbar';

import { Products, Navbar } from "./components";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    // This skips creating a cart variable and immediately uses API response (promise)
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
