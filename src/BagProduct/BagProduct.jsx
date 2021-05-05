/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import './BagProduct.scss';

export const BagProduct = ({ goodsInBag, removeProduct, reduceQuantity }) => (
  <>
    { goodsInBag.map((good) => (
      <div className="bag-product" key={good.id}>
        <div className="bag-product__name">
          {good.name}
        </div>
        <div className="bag-product__quantity">
          {`Quantity: ${good.quantity}`}
        </div>
        <div className="bag-product__price">
          {`Price: ${good.price} $`}
        </div>
        <div className="bag-product__total-price">
          {`Total: ${good.price * good.quantity} $`}
        </div>
        <div className="bag-product__control">
          <button
            type="button"
            className="bag-product__change-quantity"
            onClick={() => reduceQuantity(good)}
          >
            -
          </button>
          <img
            alt={good.name}
            src={good.img}
            className="bag-product__img"
          />
          <button
            type="button"
            className="bag-product__change-quantity"
          >
            +
          </button>
        </div>
        <button type="button" onClick={() => removeProduct(good)}>
          X
        </button>
      </div>
    ))}
  </>
);

BagProduct.propTypes = {
  goodsInBag: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  removeProduct: PropTypes.func.isRequired,
  reduceQuantity: PropTypes.func.isRequired,
};
