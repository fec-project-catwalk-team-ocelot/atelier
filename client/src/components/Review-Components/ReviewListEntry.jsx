import React, { useState, useEffect, useContext } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { GiCheckMark } from 'react-icons/gi';
import { ProductContext } from '../ProductContext.jsx';

const ReviewListEntry = (props) => {
  const [formatDate, setDate] = useState('January 1, 2019');
  const {
    productId, count, getReviews, review, selected,
  } = props;
  const { setRecordInteraction } = useContext(ProductContext);

  const dateFormat = (date) => new Promise((resolve) => {
    resolve(date);
  })
    .then((result) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const splitDate = result.substring(0, 10);
      const newDate = new Date(splitDate);
      const correctDateFormat = newDate.toLocaleDateString('en-US', options);
      setDate(correctDateFormat);
    });

  const helpfulRequest = (e) => {
    axios.put(`/api/reviews/${review.review_id}/helpful`)
      .then(() => {
        getReviews(productId, count, selected);
      });
    setRecordInteraction({
      element: `${e.target}`,
      widget: 'Review and Rating',
      time: new Date(),
    });
  };

  const reportRequest = (e) => {
    axios.put(`/api/reviews/${review.review_id}/report`)
      .then(() => {
        getReviews(productId, count, selected);
      });
    setRecordInteraction({
      element: `${e.target}`,
      widget: 'Review and Rating',
      time: new Date(),
    });
  };

  useEffect(() => {
    dateFormat(review.date);
  }, []);

  return (
    <div className="review-container">
      <div className="d-flex justify-content-between">
        <StarRatings starSpacing="2px" rating={review.rating} starRatedColor="rgb(0,0,0)" numberOfStars={5} starDimension="15px" />
        <p className="username"><small>{`${review.reviewer_name}, ${formatDate}`}</small></p>
      </div>
      <div>
        {review.summary.length > 60
          ? (
            <div>
              <p><strong>{`${review.summary.substring(0, 60)}...`}</strong></p>
              <p><small>{review.summary.substring(60)}</small></p>
            </div>
          ) : <p><strong>{review.summary}</strong></p>}
      </div>
      <div>
        <p><small>{review.body}</small></p>
      </div>
      <div>
        {review.recommend
          ? (
            <div>
              <p>
                <GiCheckMark />
                <small className="recommend"> I recommend this product</small>
              </p>
            </div>
          ) : <div /> }
      </div>
      <div>
        {(review.response)
          ? (
            <div>
              <p>Resonse: </p>
              <p>{review.response}</p>
            </div>
          ) : <div /> }
      </div>
      <div>
        <p className="helpful-review">
          <small>
            Helpful?
            {' '}
            <u onClick={helpfulRequest} className="helpful-review-yes">Yes</u>
            {' '}
            (
            {review.helpfulness}
            ) |
            {' '}
            <u onClick={reportRequest} className="helpful-review-yes">Report</u>
          </small>
        </p>
      </div>
    </div>
  );
};

export default ReviewListEntry;
