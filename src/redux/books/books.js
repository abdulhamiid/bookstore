// Actions

const ADD_BOOK   = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/ADD_BOOK'

let nextBook = 0
// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          book: action.book,
          completed: false
        }
      ]
    case REMOVE_BOOK:
      return state.filter(item => state[action.id-1].id != item.id )
    default:
      return state
  }
}

// Action Creators
export function addBook(book) {
  return { 
    type: ADD_BOOK,
    id: nextBook++,
    book
  };
}

export function removeBook(id) {
  return { 
    type: REMOVE_BOOK,
    id,
   };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getBooks () {
  return dispatch => get('/books').then(book => dispatch(updateBook(book)))
}