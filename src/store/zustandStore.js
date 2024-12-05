// import create from 'zustand';

// export const useBookStore = create((set) => ({
//   books: [],
//   addBook: (book) => set((state) => ({ books: [...state.books, book] })),
//   updateBook: (updatedBook) =>
//     set((state) => ({
//       books: state.books.map((book) =>
//         book.id === updatedBook.id ? updatedBook : book
//       ),
//     })),
//   deleteBook: (id) =>
//     set((state) => ({ books: state.books.filter((book) => book.id !== id) })),
// }));

import { create } from 'zustand';

export const useBookStore = create((set) => ({
  books: [],
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  updateBook: (updatedBook) =>
    set((state) => ({
      books: state.books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      ),
    })),
  deleteBook: (id) =>
    set((state) => ({ books: state.books.filter((book) => book.id !== id) })),
}));
