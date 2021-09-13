import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SearchQuestion from './Q&A-Components/SearchQuestion.jsx';
import QuestionsList from './Q&A-Components/QuestionsList.jsx';

// eslint-disable-next-line react/prop-types
function QuestionsAndAnswers({ productId }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState(questions);
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleMoreQuestions = () => {
    showMoreQuestions((more) => !more);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm.length > 1) {
      setSearch(true);
      // showMoreQuestions(true);
    } else {
      setSearch(false);
      // showMoreQuestions(false);
    }
  };

  return (
    <div>
      <span className="q-a-title">QUESTIONS & ANSWERS</span>
      <SearchQuestion
        handleSearch={handleSearch}
      />
      <QuestionsList
        search={search}
        searchTerm={searchTerm}
        questions={currentQuestions}
        moreQuestions={moreQuestions}
      />
      <button
        type="button"
        className="btn btn-secondary more-answers-button"
        onClick={handleMoreQuestions}
      >
        {moreQuestions ? 'HIDE QUESTIONS' : 'MORE ANSWERED QUESTIONS'}
      </button>

      <button type="button" className="btn btn-secondary add-a-question-button">ADD A QUESTION +</button>
    </div>
  );
}

export default QuestionsAndAnswers;
