import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      title: '',
      author: '',
    });
  };

  const handleTitle = (e) => {
    setBook({
      ...book,
      title: e.target.value,
    });
  };

  const handleAuthor = (e) => {
    setBook({
      ...book,
      author: e.target.value,
    });
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" value={book.title} onChange={handleTitle} />
        <input type="text" placeholder="Author" value={book.author} onChange={handleAuthor} />
        <button type="submit">Add Book</button>
      </form>
    </>

  );
}

export default Form;
