import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Book from './Book';
import Form from './Form';

function Books() {
  const books = useSelector((state) => state.allBooks);

  return (
    <main>
      <section>
        {books.map((bk) => (
          <Book title={bk.book.title} author={bk.book.author} key={bk.id} id={bk.id} />
        ))}
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
}

export default Books;
