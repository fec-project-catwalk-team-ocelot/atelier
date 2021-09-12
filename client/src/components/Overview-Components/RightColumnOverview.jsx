import React from 'react';
import StyleSelectorView from './StyleSelectorView.jsx';
import ProductDetailView from './ProductDetailView.jsx';
import AddToCartView from './AddtoCartView.jsx';

function RightColumnOverview(props) {
  const { productStyles, productInfo, selectedStyle } = props;

  return (
    <div className="col-lg-4 pe-5">
      <ProductDetailView productInfo={productInfo} selectedStyle={selectedStyle} />
      <StyleSelectorView productStyles={productStyles} selectedStyle={selectedStyle} />
      <AddToCartView />
      {/* TODO: not on mockup, but in business doc: product overview and share on social media */}
    </div>
  );
}

export default RightColumnOverview;
