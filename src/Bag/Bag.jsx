/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import './Bag.scss';

export const Bag = ({ goodsInBag, removeProduct }) => (
  <>
    {
      goodsInBag.length < 1
        ? (<div>Bag is empty</div>)
        : (
          <div className="bag">
            { goodsInBag.map((good) => (
              <div className="bag__product ">
                <div className="bag__product-name">
                  {good.name}
                </div>
                <div className="bag__product-quantity">
                  {`quantity: ${good.quantity}`}
                </div>
                <div className="bag__product-price">
                  {`Price: ${good.price} $`}
                </div>
                <div className="bag__product-total-price">
                  {`Total: ${good.price * good.quantity} $`}
                </div>
                <button type="button" onClick={() => removeProduct(good)}>
                  Delete
                </button>
              </div>
            ))}
            <button type="button">Clear Bag</button>
          </div>
        )
    }
  </>
);

Bag.propTypes = {
  goodsInBag: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
};
