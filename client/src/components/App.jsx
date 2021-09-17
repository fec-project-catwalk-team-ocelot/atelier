import React, { useState } from 'react';

import Navbar from './Navbar.jsx';
import Overview from './Overview.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import Reviews from './Reviews.jsx';

function App() {
  const [productId, setProductId] = useState(42368);
  return (
    <>
      <Navbar />
      <Overview productId={productId} />
      <RelatedItems productId={productId} setProductId={setProductId} />
      <QuestionsAndAnswers productId={productId} />
      <Reviews productId={productId} />
    </>
  );
}

export default App;
