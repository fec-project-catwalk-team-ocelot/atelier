import React, { useState } from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({ answers }) => {
  const [moreAnswers, showMoreAnswers] = useState(false);
  answers.sort((a, b) => b.helpfulness - a.helpfulness);

  // const filteredAnswers = [];
  // for (let i = 0; i < answers.length; i++) {
  //   if (Object.keys(answers[i].answers).length !== 0) {
  //     filteredQuestions.push(questions[i]);
  //   }
  // }

  const handleMoreAnswers = () => {
    showMoreAnswers((more) => !more);
  };

  if (moreAnswers) {
    return (
      <>
        <ul className="answer-list">
          {answers.map((answer) => (
            <div key={answer.answer_id}>
              <Answer answer={answer} key={answer.answer_id} />
            </div>
          ))}
        </ul>
        <button
          className="more-answers-button btn btn-outline-dark"
          onClick={handleMoreAnswers}
      >
        HIDE ANSWERS
      </button>
      </>
    );
  }
  return (
    <div>
      <ul className="answer-list">
        {answers.filter((answer, index) => (
          index < 2
        )).map((answer) => (
          <div key={answer.answer_id}>
            <Answer answer={answer} key={answer.answer_id} />
          </div>
        ))}
      </ul>
      <button
        className="more-answers-button btn btn-outline-dark"
        onClick={handleMoreAnswers}
      >
        LOAD MORE ANSWERS
      </button>
    </div>
  );
};

export default AnswersList;
