import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title, author, percentageCompleted, currentChapter,
}) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
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
        <button type="button">UPDATE PROGRESS</button>
      </div>
      <hr />
    </>
  );
}

Book.defaultProps = {
  title: '',
  author: '',
  percentageCompleted: 0,
  currentChapter: 0,
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  percentageCompleted: PropTypes.number,
  currentChapter: PropTypes.number,
};
export default Book;
