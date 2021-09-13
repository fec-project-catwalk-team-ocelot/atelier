import React, { useState } from 'react';
import Question from './Question.jsx';

// eslint-disable-next-line react/prop-types
const QuestionsList = ({ questions, moreQuestions, search, searchTerm }) => {
  questions.sort((a, b) => b.helpfulness - a.helpfulness);

  const filteredQuestions = [];
  for (let i = 0; i < questions.length; i++) {
    if (Object.keys(questions[i].answers).length !== 0) {
      filteredQuestions.push(questions[i]);
    }
  }

  let sortedQuestions = filteredQuestions;
  if (search) {
    sortedQuestions = filteredQuestions.filter((question) => (
      question.question_body.toLowerCase().includes(searchTerm.toLowerCase()) ? question : null
    ));
    console.log(searchTerm);
    console.log(sortedQuestions);
  }

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
  if (search) {
    return (
      <div>
        <ul>
          {sortedQuestions.map((question) => (
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
          <div key={question.question_id}>
            <Question
              key={question.question_id}
              question={question}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
