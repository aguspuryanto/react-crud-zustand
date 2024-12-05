import React, { createContext, useContext, useReducer } from 'react';

const BookContext = createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'UPDATE_BOOK':
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
