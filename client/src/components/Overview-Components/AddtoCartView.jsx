/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import { BsStar } from 'react-icons/bs';

function AddtoCartView({ selectedStyle }) {
  const { skus } = selectedStyle;
  let renderSizes;
  let renderDefaultSizeOption;
  let renderQty;
  let renderDefaultQtyOption;
  // let renderSelectSizeMessage;

  // STATE DECLARATION
  const [validSkus, setValidSkus] = useState([]);
  const [selectedSize, setSelectedSize] = useState('DEFAULT');
  const [quantity, setQuantity] = useState(0);
  // const [isSizeSelected, setIsSizeSelected] = useState(false);

  // LIFECYCLE METHODS
  useEffect(() => {
    if (skus) {
      const validSkuList = [];
      _.each(skus, (sku, key) => {
        if (sku.quantity > 0) {
          validSkuList.push({ id: key, quantity: sku.quantity, size: sku.size });
        }
      });
      setValidSkus(validSkuList);
    }
  }, [selectedStyle]);

  useEffect(() => {
    if (skus) {
      _.each(skus, (sku) => {
        if (sku.size === selectedSize) {
          setQuantity(sku.quantity);
        }
      });
    }
  }, [selectedSize]);

  // CONDITIONAL RENDERS
  if (validSkus !== []) {
    renderDefaultSizeOption = <option value="DEFAULT">SELECT SIZE</option>;
    renderSizes = _.map(validSkus, (sku) => (
      <option key={sku.id} value={sku.size}>{sku.size}</option>
    ));
  } else {
    renderDefaultSizeOption = <option value="DEFAULT" disabled>OUT OF STOCK</option>;
  }

  if (quantity !== 0) {
    const max = quantity > 15 ? 15 : quantity;
    const qtyList = _.range(1, max + 1);
    renderQty = _.map(qtyList, (qty) => (
      qty === 1
        ? <option key={qty} selected="selected" value={qty}>{qty}</option>
        : <option key={qty} value={qty}>{qty}</option>
    ));
    renderDefaultQtyOption = <option value="-" disabled>-</option>;
  } else {
    renderDefaultQtyOption = <option value="DEFAULT" disabled>-</option>;
  }

  // CLICK EVENT HANDLERS
  function handleSizeSelect(e) {
    setSelectedSize(e.target.value);
  }

  function handleAddCart() {
    if (selectedSize === 'DEFAULT') {
      console.log('no size selected');
    }
  }

  return (
    <div>
      {/* Select Size and Quantity */}
      <div className="row" id="sizeQtySelectors">
        <div className="col-8">
          <div className="input-group mb-3">
            <select onChange={handleSizeSelect} className="form-select w-100 p-3 border border-dark" defaultValue="DEFAULT">
              {renderDefaultSizeOption}
              {renderSizes}
            </select>
          </div>
        </div>
        <div className="col-4">
          <div className="input-group mb-3">
            <select className="form-select w-100 p-3 border border-dark" defaultValue="DEFAULT">
              {renderDefaultQtyOption}
              {renderQty}
            </select>
          </div>
        </div>
      </div>
      {/* Add to Cart and Favorite */}
      <div className="row">
        {/* TODO:  If the default ‘Select Size’ is currently selected:
        Clicking this button should open the size dropdown, and a message
        should appear above the dropdown stating “Please select size”. */}
        {/* TODO:  If both a valid size and valid quantity are selected: */}
        {/* Clicking this button will add the product to the user’s cart. */}
        <div className={`col-10 ${validSkus === [] ? 'd-none' : ''}`}>
          <button onClick={handleAddCart} type="button" className="btn btn-outline-dark w-100 p-3">Add to Cart</button>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-dark w-100 p-3"><BsStar /></button>
        </div>
      </div>
    </div>
  );
}

export default AddtoCartView;
