import React, { useState } from 'react';
import axios from 'axios';

const Answer = ({ answer }) => {
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [voted, setVoted] = useState(false);
  const [reported, setReported] = useState(false);



  return (
    <div className="a-entry">
    <span>
      {`A: ${answer.body}`}
    </span>
  </div>
  );
};

export default Answer;
