import React from 'react';

function AddtoCartView() {
  return (
    <div>
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
        {/* TODO:  If both a valid size and valid quantity are selected: */}
        {/* Clicking this button will add the product to the user’s cart. */}
        <div className="col-10">
          <button type="button" className="btn btn-outline-dark w-100 p-3">Add to Cart</button>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-dark w-100 p-3">*</button>
        </div>
      </div>
    </div>
  );
}

export default AddtoCartView;
