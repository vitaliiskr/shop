/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

export const Bag = ({ goodsInBag }) => (
  <>
    {
      goodsInBag.length < 1
        ? (<div>Bag is empty</div>)
        : goodsInBag.map((good) => (
          <div>
            {good.name}
            {' quantity: '}
            {good.quantity}
          </div>
        ))
    }
  </>
);

Bag.propTypes = {
  goodsInBag: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
