/* eslint-disable */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <div className="navbar">
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </div>
    </nav>
  );
}

export default Nav;
