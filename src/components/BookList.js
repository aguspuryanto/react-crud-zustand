import React from 'react';
import { useBookStore } from '../store/zustandStore';

const BookList = () => {
  const { books, deleteBook } = useBookStore();

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
