import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

export const bookData = {
  item_id: uuidv4(),
  title: '',
  author: '',
  category: 'Action',
};
function Form() {
  const dispatch = useDispatch();
  const [book, setBook] = useState(bookData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title.trim() && book.author.trim()) {
      dispatch(addBook(book));
      setBook({
        item_id: '',
        title: '',
        author: '',
        category: 'Action',
      });
    }
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

  const handleSelect = (e) => {
    console.log(e.target.value);
    setBook({
      ...book,
      category: e.target.value,
    });
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" value={book.title} onChange={handleTitle} />
        <input type="text" placeholder="Author" value={book.author} onChange={handleAuthor} />
        <select value={book.category} onChange={handleSelect}>
          <option value="Action">Action</option>
          <option value="Science Fction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>

  );
}

export default Form;
