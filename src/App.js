/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './App.css';
import './Navigation.scss';
import { Link, Route } from 'react-router-dom';
import products from './products';
import { ProductList } from './ProductList/ProductList';
import { Bag } from './Bag/Bag';

function App() {
  const [goodsInBag, addGoodsToBag] = useState([]);

  // useEffect(() => {

  // }, [goodsInBag]);
  // const [page, setPage] = useState('/home');

  const addGoods = (good) => {
    if (!goodsInBag.some((product) => product.id === good.id)) {
      const product = { ...good, quantity: 1 };
      addGoodsToBag((prevGoodsinBag) => [...prevGoodsinBag, product]);
    } else {
      const addedProduct = goodsInBag.find((product) => product.id === good.id);
      addedProduct.quantity += 1;
    }
  };

  const removeProduct = (product) => {
    addGoodsToBag((prev) => prev.filter((good) => good.id !== product.id));
  };

  return (
    <div className="App">
      <Link className="nav-link" to="/home">Products</Link>
      <Link className="nav-link nav-link-bag" to="/bag">Bag</Link>
      <Route path="/home">
        <ProductList products={products} addGoods={addGoods} />
      </Route>
      <Route path="/bag">
        <Bag
          goodsInBag={goodsInBag}
          removeProduct={removeProduct}
        />
      </Route>
    </div>
  );
}

export default App;
