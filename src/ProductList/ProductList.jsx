/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.scss';
import { Button } from '../Button/Button';

export const ProductList = ({ products, addGoods }) => (
  <ul className="product-list">
    {
      products.map(
        (product) => (
          <li key={products.id}>
            <div className="product">
              <div className="product__name">{product.name}</div>
              <img src="https://m2k.com.ua/image/cache/catalog/m2kphoto/atmosphere/krossovki_nike_m2k_tekno_atmosphere_grey_bv0074_001_1-700x700-product_popup.jpg" alt="Produc" className="product__img" />
              <div className="product__description">{product.label}</div>
              <div className="product__price">
                {`Price: ${product.price} $`}
              </div>
              <Button onClick={() => addGoods(product)} />
            </div>
          </li>
        ),
      )
    }
  </ul>
);

ProductList.propTypes = {
  addGoods: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    {
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }.isRequired,
  ).isRequired,
};
