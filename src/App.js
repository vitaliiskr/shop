/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './App.css';
import './Navigation.scss';
import { Link, Route } from 'react-router-dom';
import products from './products';
import { ProductList } from './ProductList/ProductList';
import { Bag } from './Bag/Bag';

function App() {
  const [goodsInBag, setGoodsInBag] = useState([]);

  // useEffect(() => {

  // }, [goodsInBag]);
  // const [page, setPage] = useState('/home');

  const addGoods = (good) => {
    if (!goodsInBag.some((product) => product.id === good.id)) {
      const product = { ...good, quantity: 1 };
      setGoodsInBag((prevGoodsinBag) => [...prevGoodsinBag, product]);
    } else {
      const addedProduct = goodsInBag.find((product) => product.id === good.id);
      addedProduct.quantity += 1;
    }
  };

  const removeProduct = (product) => {
    setGoodsInBag((prevGoodsInBag) => prevGoodsInBag.filter((good) => good.id !== product.id));
  };

  const reduceQuantity = (product) => {
    if (product.quantity > 1) {
      const selectedProduct = goodsInBag.find((good) => product.id === good.id);
      selectedProduct.quantity -= 1;
      setGoodsInBag((prevGoodsInBag) => [...prevGoodsInBag]);
    } else {
      setGoodsInBag((prevGoodsInBag) => prevGoodsInBag.filter((good) => good.id !== product.id));
    }
  };

  const increaseQuantity = (product) => {
    const selectedProduct = goodsInBag.find((good) => product.id === good.id);
    selectedProduct.quantity += 1;
    setGoodsInBag((prevGoodsInBag) => [...prevGoodsInBag]);
  };

  const clear = () => {
    setGoodsInBag([]);
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
          reduceQuantity={reduceQuantity}
          goodsInBag={goodsInBag}
          removeProduct={removeProduct}
          increaseQuantity={increaseQuantity}
          clearBag={clear}
        />
      </Route>
    </div>
  );
}

export default App;
