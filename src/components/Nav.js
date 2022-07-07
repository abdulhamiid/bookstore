/* eslint-disable */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul className="navbar">
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
