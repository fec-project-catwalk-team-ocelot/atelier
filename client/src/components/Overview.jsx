import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LeftColumnProductImageView from './overview_components/LeftColumnProductImageView.jsx';
import RightColumnOverview from './overview_components/RightColumnOverview.jsx';
import ProductDetailView from './overview_components/ProductDetailView.jsx';

function Overview({ productId }) {
  const [productInfo, setProductInfo] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [selectedStyle, setSelectedStyle] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
      .then((results) => {
        setProductInfo(results.data);
      });
    axios.get(`/api/products/${productId}/styles`)
      .then((results) => {
        setProductStyles(results.data);
      });
  }, [productId]);

  useEffect(() => {
    const styleList = productStyles.results;
    if (styleList) {
      styleList.forEach((style) => {
        if (style['default?']) {
          setSelectedStyle(style);
        }
      });
    }
  }, [productStyles]);

  return (
    <div>
      <div className="container-fluid mb-5 px-0">
        <div className="row">
          {/* Product image carousel */}
          <LeftColumnProductImageView selectedStyle={selectedStyle} />
          {/* Product Information side */}
          <RightColumnOverview
            productStyles={productStyles}
            productInfo={productInfo}
            selectedStyle={selectedStyle}
          />
        </div>
      </div>
      <div className="container mb-5">
        {/* Product info row */}
        <ProductDetailView
          productInfo={productInfo}
        />
      </div>
    </div>
  );
}

export default Overview;
