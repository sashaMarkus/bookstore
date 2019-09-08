import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Book(props){
    const link = 'https://kob-e.github.io/react-book-store/books-data/'+props.imageLink;
    console.log(props);
    return (
        <div className="card float-left border-primary">
            <h2>{props.title}</h2>
            <img src={link} />
            <h4>book price: {'100'}</h4>
            <button>Buy Book</button>
        </div>
    )
}








export default Book;