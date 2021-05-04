/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import products from './products';
import { ProductList } from './ProductList/ProductList';
import { Bag } from './Bag/Bag';

function App() {
  const [goodsInBag, addGoodsToBag] = useState([]);
  // const [page, setPage] = useState('/home');

  const addGoods = (good) => {
    if (!goodsInBag.some((product) => product.id === good.id)) {
      const product = { ...good, quantity: 1 };
      addGoodsToBag((prevGoodsinBag) => [...prevGoodsinBag, product]);
    } else {
      // goodsInBag.find((product) => product.id === good.id).quantity += 1;
      // setIsQuantityApdated(true);
    }
  };

  return (
    <div className="App">
      <Link to="/home">Products</Link>
      <Link to="/bag">Bag</Link>
      <Route path="/home">
        <ProductList products={products} addGoods={addGoods} />
      </Route>
      <Route path="/bag">
        <Bag goodsInBag={goodsInBag} />
      </Route>
    </div>
  );
}

export default App;
