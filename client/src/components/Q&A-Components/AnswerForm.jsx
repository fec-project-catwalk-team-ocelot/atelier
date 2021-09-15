import React, { useState } from 'react';
import axios from 'axios';



const AnswerForm = ({ questionId, questionBody }) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const data = ({
    body,
    name,
    email,
    photo: [],
  });
  const headers = {
    'Content-Type': 'application/json',
  };
  const postNewAnswer = () => {
    axios.post('/api/qa/questions', data, {
      headers,
    })
      .then(() => {
        setBody('');
        setName('');
        setEmail('');
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response);
      });
  };

  const handerSubmitQuestion = (e) => {
    e.preventDefault();
    postNewAnswer();
  };


  return(
      <>
    Add a answer
    </>
  );

};

export default AnswerForm;