import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import LeftColumnProductImageView from './Overview-Components/LeftColumnProductImageView.jsx';
import RightColumnOverview from './Overview-Components/RightColumnOverview.jsx';
import ProductFeatureView from './Overview-Components/ProductFeatureView.jsx';

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
          {/* LEFT COLUMN Product image carousel */}
          <LeftColumnProductImageView selectedStyle={selectedStyle} />
          {/* RIGHT COLUMN Product Information side */}
          <RightColumnOverview
            productStyles={productStyles}
            productInfo={productInfo}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        </div>
      </div>
      <div className="container mb-5">
        {/* BOTTOM ROW Product info row */}
        <ProductFeatureView productInfo={productInfo} />
      </div>
    </div>
  );
}

Overview.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Overview;
