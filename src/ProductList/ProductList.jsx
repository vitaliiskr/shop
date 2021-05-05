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
          <li key={product.id}>
            <div className="product">
              <div className="product__name">{product.name}</div>
              <img src={product.img} alt="Product" className="product__img" />
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
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }.isRequired),
  ).isRequired,
};
