import React, { useState } from 'react';
import Question from './Question.jsx';

// eslint-disable-next-line react/prop-types
const QuestionsList = ({ questions }) => {
  const filteredQuestions = [];

  for (let i = 0; i < questions.length; i++) {
    if(Object.keys(questions[i].answers).length !== 0) {
      filteredQuestions.push(questions[i]);
    }
  }

  return (
    <div>
      {filteredQuestions.map((question) => (
        <Question
          key={question.question_id}
          question={question}
        />
      ))}
    </div>
  );
};

export default QuestionsList;
