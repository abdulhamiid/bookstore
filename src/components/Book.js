/* eslint-disable */
import React from 'react';

function Book({
  category, title, author, percentageCompleted, currentChapter,
}) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button type="buttuon">Comments</button>
          <button type="buttuon">Remove</button>
          <button type="buttuon">Edit</button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <p>
          {percentageCompleted}
          %
        </p>
        <small>Completed</small>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <h4>
          Chapter
          {' '}
          {currentChapter}
        </h4>
        <button>UPDATE PROGRESS</button>
      </div>
      <hr />
    </div>
  );
}

export default Book;
