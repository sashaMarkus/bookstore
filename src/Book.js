import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {container, ACTIONS} from './Store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Book(props) {
    const link = 'https://kob-e.github.io/react-book-store/books-data/' + props.imageLink;
    const addToCart = () => {
        container.dispatch(ACTIONS.ADD, {
            bookId: props.title
        })
    }

    return (
        <div className="cardDiv card float-left border-primary">
            <h2>{props.title}</h2>
            <img src={link} />
            <h4>book price: {'100'}</h4>
            <button onClick={addToCart}>Buy Book</button>
            <Link to={`/book/${props.id}`}>details</Link>
        </div>
    )
}

export default Book;