/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ onClick }) => (
  <button
    type="button"
    className="button product__button"
    onClick={onClick}
  >
    Add to Bag
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
