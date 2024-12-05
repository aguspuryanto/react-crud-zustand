import React from 'react';
import ReactDOM from 'react-dom/client';
import { BookProvider } from './store/BookContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookProvider>
    <App />
  </BookProvider>
);
