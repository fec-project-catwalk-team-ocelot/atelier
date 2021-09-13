import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';

const Question = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState(answers);
  const [helpful, setHelpful] = useState(question.question_helpfulness);
  const [voted, setVoted] = useState(false);

  const fetchAnswers = () => {
    axios.get(`/api/qa/questions/${question.question_id}/answers`)
      .then((res) => {
        if (res.data.results.length) {
          // console.log(res.data.results);
          setAnswers(res.data.results);
          setCurrentAnswers(res.data.results);
        }
      });
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  const handleHelpClick = () => {
    if (!voted) {
      setVoted((vote) => !vote);
      setHelpful((helped) => helped + 1);
      axios.put(
        `/api/qa/questions/${question.question_id}/helpful`,
        {
          question_helpfulness: helpful,
        },
        // {
        //   headers: options.headers,
        // },
      )
        .then(() => {

        })
        .catch((err) => {
          Promise.reject(err);
        });
    }
  };

  return (
    <>
      <div className="q-entry">
        <span className="q-body">{`Q: ${question.question_body}`}</span>
        <div>
          <span
            className="helpful"
            onClick={handleHelpClick}
          >
            {voted ? `You and ${helpful} others thought this was helpful` : ` Helpful? Yes: ${helpful}`}
          </span>
          <span>{'  |  '}</span>
          <span>Add Answer</span>
        </div>
      </div>
      <AnswersList answers={currentAnswers} />
    </>
  );
};

export default Question;
