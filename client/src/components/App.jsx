import React, { useState, useEffect } from 'react';
// import bootstrap from 'bootstrap';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import Overview from './Overview.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import Reviews from './Reviews.jsx';

function App() {
  const [productId, setProductId] = useState(42366);
  const [clickEventRecorder, setClickEventRecorder] = useState([]);

  useEffect(() => {
    // axios post request
    console.log(clickEventRecorder);
  }, [clickEventRecorder]);

  return (
    <div>
      <Navbar />
      {/* pass setstate down to each component */}
      <Overview productId={productId} setClickEventRecorder={setClickEventRecorder} />
      <RelatedItems
        productId={productId}
        setProductId={setProductId}
        setClickEventRecorder={setClickEventRecorder}
      />
      <QuestionsAndAnswers productId={productId} setClickEventRecorder={setClickEventRecorder} />
      <Reviews productId={productId} setClickEventRecorder={setClickEventRecorder} />
    </div>
  );
}

export default App;
