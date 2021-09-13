import React from 'react';

const QuestionsForm = ({ handleSearch }) => (

  <div>
    <form>
      <input
        className="search-bar"
        type="text"
        placeholder="Have a Question? Search for Answers ..."
        onChange={(e) => { handleSearch(e); }}
      />
    </form>
  </div>
);

export default QuestionsForm;
