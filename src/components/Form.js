import React from 'react';

function Form() {
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book itle" />
        <input type="text" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </>

  );
}

export default Form;
