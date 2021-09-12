import React from 'react';
import StyleSelectorView from './StyleSelectorView.jsx';

function RightColumnOverview(props) {
  const { productStyles, productInfo, selectedStyle } = props;

  return (
    <div className="col-lg-4 pe-5">
      {/* Review snippent */}
      {/* TODO: import star rating and implement */}
      {/* TODO: if no reviews, should be hidden */}
      <div className="reviewSnippet my-3">
        <span>*****   </span>
        <span><a href="#" className="text-dark">Read all reviews</a></span>
      </div>
      {/*  Category */}
      <div className="text-uppercase">
        {productInfo.category}
      </div>
      {/* Product Name */}
      <div className="fs-1 fw-bold mb-3">
        {productInfo.name}
      </div>
      {/* Product Price */}
      {/* TODO: if sku is discounted, show sale price in red with original price strikethrough */}
      <div className="mb-3">
        ${selectedStyle.original_price}
      </div>
      <StyleSelectorView productStyles={productStyles} selectedStyle={selectedStyle} />
      {/* Select Size and Quantity */}
      <div className="row" id="sizeQtySelectors">
        <div className="col-8">
          {/* TODO: Dynamically render dropdown */}
          {/* TODO: only sizes in stock should render */}
          {/* TODO: if no sizes, 'OUT OF STOCK' and inactive */}
          <div className="input-group mb-3">
            <select className="form-select w-100 p-3 border border-dark">
              <option selected>SELECT SIZE</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col-4">
          {/* TODO: Dynamically render dropdown */}
          {/* TODO: 1 - max, max = 15 || max stock count for style */}
          {/* TODO: no size selected, render '-' and  disable */}
          {/* TODO: size selected, default to 1 */}
          <div className="input-group mb-3">
            <select className="form-select w-100 p-3 border border-dark">
              <option value="-" selected>-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
      {/* Add to Cart and Favorite */}
      <div className="row">
        {/* TODO:  If the default ‘Select Size’ is currently selected:
          Clicking this button should open the size dropdown, and a message
          should appear above the dropdown stating “Please select size”. */}
        {/* TODO:  If there is no stock: This button should be hidden */}
        {/* TODO:  If both a valid size and valid quantity are selected:
          Clicking this button will add the product to the user’s cart.*/}
        <div className="col-10">
          <button type="button" className="btn btn-outline-dark w-100 p-3">Add to Cart</button>
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-outline-dark w-100 p-3">*</button>
        </div>
      </div>
      {/* TODO: not on mockup, but in business doc: product overview and share on social media */}
    </div>
  );
}

export default RightColumnOverview;
