import React, { useState } from 'react';
import Book from './Book';

const booksObj = [];

function BookList(props) {

    const [books, setBooks] = useState([]);

    fetch('https://kob-e.github.io/react-book-store/books-data/books.json').then((data) => {
        data.json().then(booksData => {
            const filteredBooks = booksData.slice(0, props.num);
            setBooks(filteredBooks);
        })
    })

    return (
        <div className="container">
            {books.map(singleBook => {
                return <Book {...singleBook} id={singleBook.key} />
            })
        }

        </div>
    )
}



export default BookList;