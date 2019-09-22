import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import BookList from './BookList';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';

function App() {
  const [num, setNum] = useState(100);

  const changeNumEvent = (num) => {
    setNum(num);
  }
  return (
    <div>
      <h1>Book Store</h1>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/Books' component={Books} />
      <Route path='/About' component={About} />
      <Route path='/book/:id' component={Bookview} />
    </div>
  );
}

function Home() {
  return <h2>Home</h2>
}

function Books() {
  return <h2>
    <Cart />
    <Form />
    <BookList />
  </h2>
}

function About() {
  return <h2>About</h2>
}

function Bookview({ match }) {
  const [book, setBook] = useState('');
  if(book.length === 0){
    fetch(`http://localhost:3004/books/${match.params.id}`)
      .then(response => response.json()
        .then(res => {
          setBook(res)
        }));
  }


  console.log(match.params);
  return (
    <div>
      <h3>Book Title: {book.title}</h3>
    </div>

  )

}



export default App;
