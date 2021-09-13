import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import QuestionsForm from './Q&A-Components/QuestionsForm.jsx';
import QuestionsList from './Q&A-Components/QuestionsList.jsx';

// eslint-disable-next-line react/prop-types
function QuestionsAndAnswers({ productId }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState(questions);
  const [moreQuestions, showMoreQuestions] = useState(false);

  const fetchQuestions = () => {
    axios.get(`/api/qa/questions?product_id=${productId}`)
      .then((res) => {
        // console.log(res.data.results);
        setQuestions(res.data.results);
        setCurrentQuestions(res.data.results);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <span>QUESTIONS & ANSWERS</span>
      {/* <QuestionsForm /> */}
      <QuestionsList
        questions={currentQuestions}
      />
      <button type="button">More Answered Questions</button>
      <button type="button">ADD A QUESTION +</button>
    </div>
  );
}

export default QuestionsAndAnswers;
