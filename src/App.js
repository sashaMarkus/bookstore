import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import BookList from './BookList';
import Cart from './Cart';

function App() {
  const [num, setNum] = useState(100);

  const changeNumEvent = (num) => {
    setNum(num);
  }
  return (
    <div>
      <h1>Book Store</h1>
      <Cart />
      <Form changeNum = {changeNumEvent} num={num}/>
      <BookList num={num}/>
    </div>
  );
}

export default App;
