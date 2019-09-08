import React, { useState } from 'react';
import Book from './Book';

const booksObj = [];

function BookList() {

    const [myList, setMyList] = useState([]);

    fetch('https://kob-e.github.io/react-book-store/books-data/books.json').then((data) => {
        data.json().then(booksData => {
            setMyList(booksData);
        })
    })
    return (
        <div className="container">
            {myList.map(singleBook => {
                return <Book {...singleBook} />
            })
        }

        </div>
    )
}



export default BookList;