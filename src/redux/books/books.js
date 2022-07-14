import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const allBooks = [
  {
    id: uuidv4(),
    book: {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
  },
  {
    id: uuidv4(),
    book: {
      title: 'Dune',
      author: 'Frank Herbert',
    },
  },
  {
    id: uuidv4(),
    book: {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  },
];

// Reducer
export default function bookReducer(state = allBooks, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          book: action.book,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}

// Action Creators
export function addBook(book) {
  return {
    type: ADD_BOOK,
    id: uuidv4(),
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}
