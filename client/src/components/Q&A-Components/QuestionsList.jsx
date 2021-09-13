import React, { useState } from 'react';
import Question from './Question.jsx';

// eslint-disable-next-line react/prop-types
const QuestionsList = ({ questions, moreQuestions }) => {
  questions.sort((a, b) => b.helpfulness - a.helpfulness);

  const filteredQuestions = [];
  for (let i = 0; i < questions.length; i++) {
    if (Object.keys(questions[i].answers).length !== 0) {
      filteredQuestions.push(questions[i]);
    }
  }

  // if (search) {

  // }

  if (moreQuestions) {
    return (
      <div>
        <ul>
          {filteredQuestions.map((question) => (
            <Question
              key={question.question_id}
              question={question}
            />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {filteredQuestions.filter((question, index) => (
          index < 2
        )).map((question) => (
          <Question
            key={question.question_id}
            question={question}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
