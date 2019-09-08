import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import Book from './Book';

function App() {
  return (
    <div>
      <h1>Book Store</h1>
      <BookList />
      <Book />
    </div>
  );
}

export default App;
