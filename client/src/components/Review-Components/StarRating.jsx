import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

function StarRating({ productId }) {
  const [average, setAverage] = useState(0);

  const getReviews = (id) => {
    axios.get(`/api/reviews?product_id=${id}`)
      .then(({ data }) => {
        const averageReview = data.results.map((item) => item.rating)
          .reduce((prev, curr) => prev + curr);
        setAverage(averageReview / data.results.length);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    getReviews(productId);
  }, []);

  return (
    <StarRatings rating={average} starRatedColor="rgb(253,204,13)" numberOfStars={5} starDimension="30px" />
  );
}

export default StarRating;
