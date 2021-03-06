/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import './Bag.scss';

import { BagProduct } from '../BagProduct/BagProduct';

export const Bag = ({
  goodsInBag,
  removeProduct,
  reduceQuantity,
  increaseQuantity,
  clearBag,
}) => (
  <>
    {
      goodsInBag.length < 1
        ? (<h3>Bag is empty</h3>)
        : (
          <div className="bag">
            <BagProduct
              goodsInBag={goodsInBag}
              removeProduct={removeProduct}
              reduceQuantity={reduceQuantity}
              increaseQuantity={increaseQuantity}
              clearBag={clearBag}
            />
            <div>
              {'Order All: '}
              { goodsInBag.reduce((acum, good) => (good.price * good.quantity) + acum, 0) }
              {' $.'}
            </div>
            <button
              className="bag__button"
              type="button"
              onClick={clearBag}
            >
              Clear Bag
            </button>
          </div>
        )
    }
  </>
);

Bag.propTypes = {
  goodsInBag: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  removeProduct: PropTypes.func.isRequired,
  reduceQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  clearBag: PropTypes.func.isRequired,
};
