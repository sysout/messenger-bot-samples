/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import {CellBody, CellFooter, CellHeader, FormCell, Radio, Button} from 'react-weui';

import SelectedIndicator from './selected-indicator.jsx';

/**
 * Component for each gift category
 * Conditionally renders an indicator is the categoyr is selected
 */

const GiftCategory = ({title, subtitle, price, quantity, image, selected, setGiftCategory}) => {
  const imagePath = `/media/${image}`;

  return (
    <FormCell
      className='gift-category'
      onClick={() => setGiftCategory()}
    >
      <CellHeader>
      </CellHeader>

      <CellBody className='gift-title checkbox-text'>{title}</CellBody>
      <CellBody className='gift-subtitle checkbox-text'>${price}</CellBody>
      {/* <CellBody className='gift-subtitle checkbox-text'>{quantity}</CellBody> */}

      <button class='plus-button'>+</button>
      <input id='quantity-input'></input>
      <button class='minus-button'>-</button>

      <CellFooter className='gift-image'>
        <img src={imagePath} />
      </CellFooter>
    </FormCell>
  );
};

GiftCategory.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  quantity: React.PropTypes.number.isRequired,
  image: React.PropTypes.string.isRequired, // name of file in `../public/media`
  selected: React.PropTypes.bool.isRequired,
  setGiftCategory: React.PropTypes.func.isRequired,
};

export default GiftCategory;
