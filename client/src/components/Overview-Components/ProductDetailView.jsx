import React from 'react';

function ProductDetailView({ productInfo, selectedStyle }) {
  return (
    <div>
      {/* Review snippent */}
      {/* TODO: import star rating and implement */}
      {/* TODO: if no reviews, should be hidden */}
      <div className="reviewSnippet my-3">
        <span>*****   </span>
        <span><a className="text-dark">Read all reviews</a></span>
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
    </div>
  );
}
export default ProductDetailView;
