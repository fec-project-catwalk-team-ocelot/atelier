import React, { useState } from 'react';
import axios from 'axios';

const Answer = ({ answer }) => (
  <div>
   <span>
     {`A: ${answer.body}`}
   </span>
  </div>
);

export default Answer;