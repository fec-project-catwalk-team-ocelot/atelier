import RangeSlider from 'react-bootstrap-range-slider';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characteristics = ({ productId }) => {
  const [size, setSize] = useState(0);
  const [comfort, setComfort] = useState(0);

  const getMetaData = (id) => {
    axios.get(`/api/reviews/meta?product_id=${id}`)
      .then(({ data }) => {
        if (data.characteristics.Comfort.value === null) {
          setComfort(0);
        } else {
          setComfort(data.characteristics.Comfort.value);
        }
        if (data.characteristics.Fit.value === null && data.characteristics.Size.value === null) {
          setSize(0);
        } else {
          setSize(data.characteristics.Fit.value || data.characteristics.Size.value);
        }
      });
  };

  useEffect(() => {
    getMetaData(productId);
  }, []);

  return (
    <div>
      <p className="size-label">Size</p>
      <RangeSlider className="characteristics" tooltip="off" value={size} min={0} max={10} size="lg" width="50%" />
      <div className="characteristics-label">
        <span>Too Small</span>
        <span>Perfect</span>
        <span>Too Large</span>
      </div>
      <p className="comfort-label">Comfort</p>
      <RangeSlider className="characteristics" tooltip="off" value={comfort} min={0} max={10} size="lg" width="50%" />
      <div className="characteristics-label">
        <span>Poor</span>
        <span>Perfect</span>
      </div>
    </div>

  );
};

export default Characteristics;
