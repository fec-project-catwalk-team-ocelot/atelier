import React from 'react';
import StarRating from './Review-Components/StarRating.jsx';

function Reviews({ productId }) {
  return (
    <div>
      <StarRating productId={productId} />
    </div>
  );
}

export default Reviews;
