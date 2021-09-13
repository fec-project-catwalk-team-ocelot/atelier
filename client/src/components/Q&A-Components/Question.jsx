import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';

const Question = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState(answers);

  const fetchAnswers = () => {
    axios.get(`/api/qa/questions/${question.question_id}/answers`)
      .then((res) => {
        if (res.data.results.length) {
          console.log(res.data.results);
          setAnswers(res.data.results);
          setCurrentAnswers(res.data.results);
        }
      });
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  return (
    <div>
      <span>
        {`Q: ${question.question_body}`}
      </span>
      <AnswersList answers={currentAnswers} />
    </div>
  );
};

export default Question;
