import React, { useState } from 'react';
import Answer from './Answer.jsx';


const AnswersList = ({ answers }) => (
  <div>
    {answers.map((answer) => (
      <Answer answer={answer} key={answer.answer_id}/>
    ))}
  </div>
);

export default AnswersList;