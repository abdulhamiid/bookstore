import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../redux/books/books';

function Book({
  title, author, percentageCompleted, currentChapter, id,
}) {
  const books = useSelector((state) => state.allBooks);
  console.log(books);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
    console.log(id);
  };
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemove}>Remove</button>
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
  percentageCompleted: 64,
  currentChapter: 0,
  id: '',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  percentageCompleted: PropTypes.number,
  currentChapter: PropTypes.number,
  id: PropTypes.string,
};
export default Book;
