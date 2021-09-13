/* eslint-disable react/prop-types */
import React from 'react';
import StarRating from '../Review-Components/StarRating.jsx';

function ProductDetailView({ productInfo, selectedStyle, productId }) {
  let renderPrice;
  if (selectedStyle.sale_price) {
    renderPrice = (
      <div>
        <span className="text-danger me-3">{selectedStyle.sale_price}</span>
        <del>{selectedStyle.original_price}</del>
      </div>
    );
  } else {
    renderPrice = `$${selectedStyle.original_price}`;
  }

  return (
    <div>
      {/* Review snippent */}
      {/* TODO: if no reviews, should be hidden */}
      <div className="reviewSnippet my-3 d-flex">
        <span><StarRating productId={productId} /></span>
        <span className="ratingLink"><a className="text-dark">Read all reviews</a></span>
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
      <div className="mb-3">
        {renderPrice}
      </div>
    </div>
  );
}
export default ProductDetailView;