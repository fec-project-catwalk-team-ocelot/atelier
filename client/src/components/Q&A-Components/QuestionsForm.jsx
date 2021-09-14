import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = (showQuestionsForm, handleQuestionForm, productId) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handerSubmitQuestion = (e) => {
    e.preventDefault();
    axios.post('/api/qa/questions', {
      body,
      name,
      email,
      product_id: productId,
    })
      .then(() => {
        setBody('');
        setName('');
        setEmail('');
      })
      .catch((err) => {
        Promise.reject(err);
      });
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ask Your Question</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                <input type="text" className="form-control" id="recipient-name" />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" id="message-text" />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" onClick={handerSubmitQuestion} className="btn btn-primary">Submit Question</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
