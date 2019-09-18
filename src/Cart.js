import React, {useState} from 'react';
import {container, ACTIONS} from './Store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Cart() {
    const [books, setBooks] = useState([]);
    container.subscribe(() => {
        setBooks(Object.assign([], container.getState().books));
    })

    const removeFromCart = (b) => container.dispatch(ACTIONS.REMOVE,{
        bookId: b
    });

    return (
        <>
            <h2>My Cart</h2>
            <fieldset className="sideCard float-right">
                <legend className="text-center">My cart</legend>
                <h3 className="text-center">items in cart</h3>
                <ul>
                    {books.map(b => <li>{b} - <button onClick={() => removeFromCart(b)}>remove item</button></li>)}
                </ul>
            </fieldset>
        </>
    );
}

export default Cart;