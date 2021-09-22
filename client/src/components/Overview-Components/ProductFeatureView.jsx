import React from 'react';
import {
  FacebookShareButton, FacebookIcon,
  PinterestShareButton, PinterestIcon,
  TwitterShareButton, TwitterIcon,
} from 'react-share';

function ProductFeatureView({ productInfo, selectedStyle }) {
  let renderFeatures;
  let displayUrl = 'No-Image-Placeholder.svg';

  if (productInfo.features) {
    renderFeatures = productInfo.features.map((feature, idx) => (
      <FeaturesList key={idx} feature={feature} />
    ));
  } else {
    renderFeatures = '';
  }

  if (selectedStyle.photos) {
    if (selectedStyle.photos[0].url) {
      displayUrl = selectedStyle.photos[0].url;
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-8 border-end border-3 border-secondary">
          <div className="fs-2 fw-bold">
            {productInfo.slogan}
          </div>
          <div className="">
            {productInfo.description}
          </div>
        </div>
        <div id="featureList" className="col-lg-4">
          <ul>
            {renderFeatures}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <FacebookShareButton url={displayUrl}>
            <FacebookIcon size={36} />
          </FacebookShareButton>
          <PinterestShareButton url={displayUrl} media={displayUrl}>
            <PinterestIcon size={36} />
          </PinterestShareButton>
          <TwitterShareButton url={displayUrl}>
            <TwitterIcon size={36} />
          </TwitterShareButton>
        </div>
      </div>
    </>
  );
}

function FeaturesList({ feature }) {
  return (
    <li className="d-flex align-items-center position-relative">
      {feature.feature}
      &nbsp;
      {feature.value}
    </li>
  );
}

export default ProductFeatureView;
